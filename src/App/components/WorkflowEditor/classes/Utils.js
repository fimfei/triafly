import {GraphViewNodeNavigator, GraphViewNodeBody, GraphViewEdge} from '../';

class Utils {
    constructor({graphName, states, links, onClickToEdge, onClickToNode, setInfoPanelType, ...options}) {
        this.graphName = graphName;
        this.states = states;
        this.links = links;
        this.options = options;
        this.onClickToEdge = onClickToEdge;
        this.onClickToNode = onClickToNode;
        this.setInfoPanelType = setInfoPanelType;
        this.oldSelectedId = null;

        this.mainOnChangeComponentState = {
            onNodeSelect:          this.main_onNodeSelect.bind(this),
            onGraphElementsDelete: this.main_onGraphElementsDelete.bind(this),
            onNodeAdd:             this.main_onNodeAdd.bind(this),
            onNodeRename:          this.main_onNodeRename.bind(this),
            onLinkSelect:          this.main_onLinkSelect.bind(this),
            onLinkReverse:         this.main_onLinkReverse.bind(this),
            onLinkAdd:             this.main_onLinkAdd.bind(this),
            onLinkAndNodeAdd:      this.main_onLinkAndNodeAdd.bind(this),
            onDropNode:            this.main_onDropNode.bind(this),
        }

        this.infoOnChangeComponentState = {
            onNodeSelect:          this.info_onNodeSelect.bind(this),
            onLinkSelect:          this.info_onLinkSelect.bind(this),
        }

        this.listOnChangeComponentState = {
            onItemSelect:  this.list_onNodeSelect.bind(this),
        }

        this.mainGetComponentControlling = data => this.mainControlling = data;
        this.infoGetComponentControlling = data => this.infoControlling = data;
        this.listGetComponentControlling = data => this.listControlling = data;

        this.init();
        this.initOptions();
    }

    init() {
        this.infoLinks = JSON.parse(JSON.stringify(this.links));
        this.infoStates = JSON.parse(JSON.stringify(this.states));

        const parametersByAlias = {};

        for(let parameter of this.options.parameters) {
            parametersByAlias[parameter.alias] = parameter;
        }

        this.options.parametersByAlias = parametersByAlias;
    }

    refreshInfoData() {
        const data = this.mainControlling.getConnectorData();
        if(this.infoControlling) {
            this.infoControlling.setConnectorData(data);
            this.links = data.links;
            this.init();
        }
        return data;
    }

    initOptions() {
        const graphView = {
            components: {
                navigator: GraphViewNodeNavigator,
                body: GraphViewNodeBody,
                link: GraphViewEdge,
            },
            graphClasses: 'workflow-editor-graph-wrapper',
            nodeClasses: 'workflow-editor-graph-node-view',
            nodeTitle: 'Вершина графа "%label"',
            startNodeTitle: '' +
                'Это точка входа в граф\n' +
                'От неё может и должно исходить одно и только одно ребро к любой вершине графа\n',
        };

        this.mainGraphProps = {
            graphName: 'MAIN GRAPH',
            links: this.links,
            states: this.states,
            getComponentControlling: this.mainGetComponentControlling,
            onChangeComponentState: this.mainOnChangeComponentState,
            options: {
                graphView,
                isDroppable: true,
                showNodesBodyInStart: true,
                edgesOnTopInStart: false,
                maxDistanceBetweenArrows: 10,
//                hideEdgeDirection: true,
//                edgesFromNodeCenter: true,
//                onlyOneEdgeBetweenTwoNodes: true,
                showControls: {
                    main_power: true,
                    main_edgesOnTop: true,
                },
                buttonsPanel: [
                    {
                        text: 'Отмена',
                        title: 'Отменить все изменения',
                        type: 'regular',
                        callback: this.globalCancel.bind(this),
                    },
                    {
                        text: 'Сохранить',
                        title: 'Сохранить все изменения',
                        type: 'primary',
                        callback: this.globalSave.bind(this),
                    },
                ],
            }
        };

        this.infoGraphProps = {
            graphName: 'INFO GRAPH',
            links: this.infoLinks,
            states: this.infoStates,
            getComponentControlling: this.infoGetComponentControlling,
            onChangeComponentState: this.infoOnChangeComponentState,
            options: {
                graphView,
                edgeType: 'vector',
                isDroppable: false,
                showEdgesLabelsInStart: true,
                showNodesBodyInStart: false,
                showNodeEnvironment: '',
                nodesNotConnectable: true,
                nodesNotDraggable: true,
                linksForStates: this.links,
                showControls: {
                    main_darge: false,
                    main_add: false,
                    main_nodesBodyShow: false,
                    nodes: false,
                    edges: false
                },
            },
            connectorStartingValues: {
            }
        }
    }

    globalSave() {
        const {links} = this;
        this.options.onSave({
            links,
        });
    }

    globalCancel() {
        this.options.onCancel();
    }

    startWait() {
        const isBlocking = this.blocking;
        if(isBlocking) return true;

        this.blocking = true;
        setTimeout(() => {
            this.blocking = false;
        }, 100);
        return false;
    }

    onPanelResize() {
        this.mainControlling.fitView();
        const selectedNode = this.mainControlling.getSelectedNode();
        if(selectedNode) this.infoControlling.fitView();
    }

    main_onLinkSelect(props) {
        if(props.id === this.oldSelectedId) return;
        if(this.startWait()) return;
        this.listControlling.clickToItem('');
        this.onLinkSelect(props);
    }

    info_onLinkSelect(props) {
        this.mainControlling.clickToEdge(props.id);
    }

    onLinkSelect(props) {
        this.onClickToEdge(props);
        this.oldSelectedId = props.id;
    }

    main_onNodeSelect(id) {
        if(this.startWait()) return;
        if(id === this.oldSelectedId) return;
        this.listControlling.clickToItem(id);
        this.onNodeSelect(id);
    }

    info_onNodeSelect(id) {
        if(this.startWait()) return;
        if(id === this.oldSelectedId) return;
        this.mainControlling.clickToNode(id);
        this.listControlling.clickToItem(id);
        this.onNodeSelect(id);
    }

    list_onNodeSelect(id) {
        if(this.startWait()) return;
        if(id === this.oldSelectedId) return;
        if(id === null) {
            this.setInfoPanelType(null);
            this.oldSelectedId = null;
            this.mainControlling.setSelected(null, null);
            this.mainControlling.refreshGraph();
            return;
        }
        this.mainControlling.clickToNode(id);
        this.onNodeSelect(id);
    }

    onNodeSelect(id) {
        const data = this.refreshInfoData();
        const nodesSizes = this.mainControlling.getNodesSizes();
        this.infoGraphProps.links = this.infoLinks;
        this.infoGraphProps.options.showNodeEnvironment = id;
        this.infoGraphProps.options.nodesSizes = nodesSizes;
        this.infoGraphProps.connectorStartingValues.aloneNodes = data.aloneNodes;
        this.onClickToNode(id);
        this.oldSelectedId = id;
    }

    main_onGraphElementsDelete({deletedNodes, deletedLinks}) {
        this.listControlling.clickToItem('');
        if(deletedNodes?.length) {
            this.listControlling.deleteElements({
                labels: deletedNodes,
                notDeleteFromList: true,
                notDeleteFromSelected: true,
                notDeleteFromApproved: false,
            });
        }
        if(this.oldSelectedId === null) return;
        this.setInfoPanelType(null);
        this.oldSelectedId = null;
    }

    main_onNodeAdd(id) {
        this.listControlling.addNewElement({
            label: id,
            originalItem: undefined,
            approved: true,
        })
        this.listControlling.refreshList();
        this.main_onNodeSelect(id);
    }

    main_onNodeRename(props) {
        const {oldValue, newValue} = props;
        this.main_onNodeSelect(newValue);
        this.listControlling.renameElement({
            label: oldValue,
            toLabel: newValue,
        })
    }

    main_onLinkReverse(props) {
        const {from, to, newId: id} = props;
        this.main_onLinkSelect({from, to, id});
    }

    main_onLinkAdd(props) {
        this.main_onLinkSelect(props);
    }

    main_onLinkAndNodeAdd(props) {
        const {link, node} = props;

        this.main_onLinkSelect(link);

        this.listControlling.addNewElement({
            label: node,
            originalItem: undefined,
            approved: true,
        })
        this.listControlling.refreshList();
    }

    main_onDropNode(id) {
        this.listControlling.onDropElementToApproved(id);
        this.onNodeSelect(id);
    }

    getNodesStatesFromMainGraph() {
        return this.mainControlling.getNodesStates();
    }

    getEdgeId(link) {
        return this.mainControlling.getEdgeId(link);
    }

    changeNodeByEdge(link) {
        this.mainControlling.setNodesAndEdges();
        this.mainControlling.saveNodesPositions();
        this.mainControlling.refreshGraph();

        setTimeout(() => {
            const id = this.mainControlling.getEdgeId(link);
            this.mainControlling.clickToEdge(id);
        }, 150)
    }

    calcAvailableStates() {
        const {options: {parametersByAlias}} = this;

        const availableStatuses = this.mainControlling.getNodesById();

        const checkList = list => {
            if(!list) return;
            for(let item of list) {
                item.notAvailable = !availableStatuses[item.label];
            }
        }

        checkList(parametersByAlias.from.list);
        checkList(parametersByAlias.to.list);
    }
}

export default Utils;