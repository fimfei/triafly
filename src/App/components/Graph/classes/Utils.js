import React from 'react';
import {MarkerType} from 'reactflow';
import dagre from 'dagre';
import PowerGraph from "./PowerGraph";
import {callPrompt, callAlert} from "../../../widgets";
import {AddNode} from "../";
import {InputText} from "../../../forms";
import UTILS from "../../../common/utils";

class Utils {
    constructor(_data) {
        const {
            getComponentControlling,
            onChangeComponentState,
            connectorStartingValues,
            ...data
        } = _data;

        this.start = 'START';
        this.newNodeCoord = null;

        this.onChangeComponentState = {
            onLinkSelect: () => {},
            onNodeSelect: () => {},
            onNodeAdd: () => {},
            onGraphElementsDelete: () => {},
            onLinkReverse: () => {},
            onNodeRename: () => {},
            onLinkAndNodeAdd: () => {},
            onLinkAdd: () => {},
            onDropNode: () => {},
            ...(onChangeComponentState || {}),
        };

        this.connector = {
            ...data,
            start: this.start,
            aloneNodes: {},
            nodesRefs: {},
            nodesCurrent: {},
            nodesByIdCurrent: {current: []},
            edgesRefs: {},
            clickToNode: {},
            setSelected: {node: {}, edge: {}},
            refresh: {node: {}, edge: {}},
            showLinksLabels: data.options?.showEdgesLabelsInStart,
            showNodesBody: data.options?.showNodesBodyInStart,
            edgesOnTop: data.options?.edgesOnTopInStart,
            showNodeEnvironment: data.options?.showNodeEnvironment,
            unattainableStates: {},
            selectedEdge: null,
            selectedNode: data.options?.showNodeEnvironment || '',
            onClickToEdge: data.options?.onClickToEdge || null,
            onClickToNode: data.options?.onClickToNode || null,
            getIdForNewEdge: data.options?.getIdForNewEdge || null,
            getValueForNewEdge: data.options?.getValueForNewEdge || null,
            onConnect: data.options?.onConnect || null,
            notConnectToPane: data.options?.notConnectToPane,
        }

        this.connector.nodesSizes = {...(data?.options?.nodesSizes || this.connector.nodesSizes || {})};

        for(let key in connectorStartingValues) {
            const value = connectorStartingValues[key];
            if(value) this.connector[key] = JSON.parse(JSON.stringify(value));
        }

        if(data?.options?.startPositions) {
            localStorage.setItem(this.getLocalStorageName(), data.options.startPositions);
        }

        this.init();
        getComponentControlling(this.getComponentControlling(this.connector));
    }

    init() {
        const {links, showNodeEnvironment: sne, options: {onlyOneEdgeBetweenTwoNodes}} = this.connector;
        let startIsPresent = '';
        const edgesId = {};

        for(let i = links.length - 1; i >=0; i--) {
            const link = links[i];
            const {from, to} = link;

            if(!from) {
                if(startIsPresent) {
                    this.alert('Не должно быть более одного вхождения в граф', `Уже есть вхождение в вершину "${startIsPresent}"<br/>Удаляем вхождение в "${to}"`);
                    links.splice(i, 1);
                } else {
                    link.from = this.start;
                    startIsPresent = to;
                }
            }
            if(sne && from !== sne && to !== sne) {
                links.splice(i, 1);
            }

            const edgeId = this.getEdgeId(link);
            if (onlyOneEdgeBetweenTwoNodes && edgesId[edgeId]) {
                this.alert('Не должно быть более одного ребра между двумя вершинами', `Удаляем ребро между "${from}" и "${to}"`);
                links.splice(i, 1);
            } else {
                edgesId[edgeId] = true;
            }
        }

        this.initLinks();

        const undefinedToTrue = (key, arr) => {
            const out = this.connector.options[key] || {};
            for(let item of arr) out[item] = out[item] === undefined ? true : out[item];
            this.connector.options[key] = out;
        }

        undefinedToTrue('showControls', [
            'navigation', 'main', 'main_edgesLabelShow', 'main_nodesBodyShow', 'main_darge',
            'main_add', 'nodes', 'nodes_edit', 'nodes_delete', 'edges',
            'edges_delete', 'edges_reverse',
        ]);
        undefinedToTrue('showNodeStatus', ['first', 'last', 'unattainable']);
    }

    initLinks() {
        const {links} = this.connector;
        const {linksById, linksByFrom, linksByTo, linksAllLabels} = this.getAllLinks(links);
        this.connector.linksById = linksById;
        this.connector.linksByFrom = linksByFrom;
        this.connector.linksByTo = linksByTo;
        this.connector.linksAllLabels = linksAllLabels;
    }

    getComponentControlling(connector) {
        const graphName = this.getLocalStorageName();

        return {
            getEdgeId: this.getEdgeId.bind(this),
            getAllStatesFromScheme: this.getAllStatesFromScheme.bind(this),
            getAllLinks: this.getAllLinks.bind(this),
            getLocalStorageName: this.getLocalStorageName.bind(this),
            getStartingName: () => this.start,
            getGraphName: () => this.connector.graphName,
            getEdges: () => this.connector.edgesCurrent.current,
            getEdgesById: () => this.connector.edgesByIdCurrent.current,
            getNodes: () => this.connector.nodesCurrent.current,
            getNodesById: () => this.connector.nodesByIdCurrent.current,
            saveNodesPositions: this.saveNodesPositions.bind(this),
            clickToEdge: this.clickToEdge.bind(this),
            clickToNode: this.clickToNode.bind(this),
            setNodesAndEdges: this.setNodesAndEdges.bind(this),
            refreshMenu: this.refreshMenu.bind(this),
            refreshNode: this.refreshNode.bind(this),
            refreshAllNodes: this.refreshAllNodes.bind(this),
            refreshEdge: this.refreshEdge.bind(this),
            refreshAllEdges: this.refreshAllEdges.bind(this),
            refreshGraph: this.refreshGraph.bind(this),
            dagreGraph: this.dagreGraph.bind(this),
            getNodeInfo: this.getNodeInfo.bind(this),
            getNodesSizes: this.getNodesSizes.bind(this),
            getNodesStates: this.getNodesStates.bind(this),
            getNodesFromLinks: this.getNodesFromLinks.bind(this),
            getConnectorData: this.getConnectorData.bind(this),
            setConnectorData: this.setConnectorData.bind(this),
            setSelected: this.setSelected.bind(this),
            fitView: () => connector.fitView(),
            getSelectedNode: this.getSelectedNode.bind(this),
            getConnector: () => this.connector,
            getPositionsFromLocalStorage: () => localStorage.getItem(graphName),
            setPositionsToLocalStorage: positions => localStorage.setItem(graphName, positions),
            deleteEdge: this.deleteEdge.bind(this),
            deleteNode: this.deleteNode.bind(this),
            idToClass: this.idToClass.bind(this),
            addAloneNode: this.addAloneNode.bind(this),
            getReactFlowInstance: () => this.reactFlowInstance,
            getAloneNodes: () => this.connector.aloneNodes,
        };
    }

    getNodesStates() {
        const {firstStates, lastStates, unattainableStates, start} = this.connector;
        return {firstStates, lastStates, unattainableStates, start};
    }

    getSelectedNode() {
        return this.connector.selectedNode;
    }

    setSelected(nodeId, edgeId) {
        this.connector.selectedNode = nodeId;
        this.connector.selectedEdge = edgeId;
    }

    getConnectorData() {
        const {links, aloneNodes} = this.connector;
        return {links, aloneNodes};
    }

    setConnectorData(data) {
        const fields = ['links', 'aloneNodes'];
        for(let field of fields) {
            this.connector[field] = JSON.parse(JSON.stringify(data[field]));
        }
    }

    getNodesSizes() {
        const nodesSizes = this.connector.nodesSizes;
        return nodesSizes;
    }

    getNodeInfo(id) {
        const {nodesRefs, aloneNodes, nodesByIdCurrent} = this.connector;
        const isAlone = !!aloneNodes[id];
        const {isUnattainable, isFirst, isLast} = nodesByIdCurrent.current[id];

        return {
            label: id,
            ref: nodesRefs[id],
            isAlone,
            isUnattainable: isAlone ? true : !!isUnattainable,
            isFirst: isAlone ? true : !!isFirst,
            isLast: isAlone ? true : !!isLast,
        }
    }

    getLabelsListObjFromLinks = () => {
        const labels = {};
        for(let link of this.connector.links) {
            const {from, to} = link;
            labels[from] = true;
            labels[to] = true;
        }
        for(let label in this.connector.aloneNodes) {
            labels[label] = true;
        }
        return labels;
    }

    setShowLinksLabels(data) {
        this.connector.showLinksLabels = data;
        this.connector.resetMenu();
        this.refreshAllEdges();
    }

    setShowNodesBody(data) {
        this.connector.showNodesBody = data;
        this.connector.resetMenu();
        this.refreshAllNodes();
        setTimeout(() => {
            const nodesRefs = this.connector.nodesRefs;
            for(let label in nodesRefs) {
                this.connector.nodesSizes[label] = nodesRefs[label].getBoundingClientRect();
            }
            this.refreshGraph();
        }, 0);
    }

    setEdgesOnTop(data) {
        this.connector.edgesOnTop = data;
        this.connector.resetMenu();
        this.refreshGraph();
    }

    refreshNode(label) {
        if(!this.connector.refresh.node[label]) return;
        this.connector.refresh.node[label]();
    }

    refreshAllNodes() {
        for(let node of this.connector.nodesCurrent.current) {
            this.refreshNode(node.id);
        }
    }

    refreshEdge(id) {
        if(!this.connector.refresh.edge[id]) return;
        this.connector.refresh.edge[id]();
    }

    refreshAllEdges() {
        for(let edge of this.connector.edgesCurrent.current) {
            this.refreshEdge(edge.id);
        }
    }

    getAllLinks() {
        const links = this.connector.options.linksForStates || this.connector.links;
        const linksByFrom = {};
        const linksByTo = {};
        const linksById = {};
        const linksAllLabels = {};

        for(let link of links) {
            const {from, to} = link;
            const id = this.getEdgeId(link);
            linksByFrom[from] = linksByFrom[from] || [];
            linksByFrom[from].push(link);
            linksByTo[to] = linksByTo[to] || [];
            linksByTo[to].push(link);
            linksById[id] = link;
            if(from) linksAllLabels[from] = true;
            if(to) linksAllLabels[to] = true;
        }

        return {linksByFrom, linksByTo, linksAllLabels, linksById};
    }

    refreshMenu() {
        this.connector.refreshMenu();
    }

    clickToEdge(id) {
        const edge = this.connector.edgesByIdCurrent.current[id];
        if(!edge) return;

        const oldSelectedEdge = this.connector.selectedEdge;
        const oldSelectedNode = this.connector.selectedNode;
        this.connector.selectedNode = '';
        if(oldSelectedEdge && oldSelectedEdge !== id && this.connector.edgesByIdCurrent.current[oldSelectedEdge]) {
            this.connector.setSelected.edge[oldSelectedEdge](false);
        }
        this.connector.selectedEdge = id;
        this.connector.setSelected.edge[id](true);
        if(oldSelectedNode) {
            this.connector.setSelected.node[oldSelectedNode](false);
        }
        this.onChangeComponentState.onLinkSelect({from: edge.source, to: edge.target, id});
        this.refreshMenu();

        if(this.connector.onClickToEdge) {
            this.connector.onClickToEdge({
                id,
                link: this.connector.linksById[id],
                ref: this.connector.edgesRefs[id],
            });
        }
    }

    clickToNode(id) {
        //console.log('class ->')

        const node = this.connector.nodesByIdCurrent.current[id];
        if(!node) return;

        const oldSelectedEdge = this.connector.selectedEdge;
        const oldSelectedNode = this.connector.selectedNode;
        if(oldSelectedNode && oldSelectedNode !== id) this.connector.setSelected.node[oldSelectedNode](false);
        this.connector.selectedNode = id;
        this.connector.selectedEdge = '';
        this.connector.setSelected.node[id](true);
        if(oldSelectedEdge && this.connector.edgesByIdCurrent.current[oldSelectedEdge]) {
            this.connector.setSelected.edge[oldSelectedEdge](false);
        }
        this.onChangeComponentState.onNodeSelect(id);
        this.refreshMenu();

        if(this.connector.onClickToNode) {
            this.connector.onClickToNode({id});
        }
    }

    onDropNode({label, position}, withoutDrop) {
        this.connector.aloneNodes[label] = {position};
        this.connector.selectedEdge = '';
        this.connector.selectedNode = label;
        this.refreshGraph();
        if(!withoutDrop) this.onChangeComponentState.onDropNode(label);
        setTimeout(() => {
            this.saveNodesPositions(this.connector.nodesCurrent.current);
        }, 150);
    }

    addAloneNode(props) {
        this.onDropNode(props, true);
    }

    setNodesAndEdges() {
        this.connector.setNodes(this.getNodesFromLinks());
        this.connector.setEdges(this.getEdgesFromLinks());
    }

    idToClass({prefix, id}) {
        let out = '';

        for(let letter of String(id).replace(/\s/g, '_')) {
            const l = letter.toLowerCase();
            out += l === letter ? l : `-${l}`;
        }

        return prefix + out;
    }

    getEdgesFromLinks() {
        const {links, handlesData, /*options: {onlyOneEdgeBetweenTwoNodes}*/} = this.connector;

        const out = [];
        for (let index in links) {
            const link = links[index];
            const {from: source, to: target} = link;

            if (source && target) {
                const id = this.getEdgeId(link);
                const edgeData = {
                    id,
                    source,
                    target,
                    data: {
                        source,
                        target,
                        linkIndex: Number(index),
                        link: links[index],
                        utils: this,
                    },
                    type: 'customEdge',
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                        height: 20,
                        width: 20,
                        color: '#000',
                        strokeWidth: 1,
                    },
                }
                if (handlesData?.edges && handlesData.edges[id]) {
                    const {fromHandleId, toHandleId} = handlesData.edges[id];
                    edgeData.sourceHandle = fromHandleId;
                    edgeData.targetHandle = toHandleId;
                } else {
                    console.log('?-?-?-?-?-?-?-?-?-?-?-?-')
                }

                out.push(edgeData);
            }
        }
        return out;
    }

    getNodesFromLinks() {
        const {aloneNodes, unattainableStates, showNodeEnvironment, nodesSizes, selectedNode} = this.connector;
        const {states, firstStates, lastStates} = this.getAllStatesFromScheme();
        const {nodesType, nodesTypesByType} = showNodeEnvironment ? this.getSubSchemeData() : {};
        const isSubLinks = showNodeEnvironment && Object.keys(nodesSizes).length;
        let leftColumnRight, centerColumnLeft, rightColumnLeft;

        let sourceOffsetY = 0;
        let targetOffsetY = 0;
        let centerOffsetY = 0;
        let sourceIndex = 0;
        let targetIndex = 0;
        const offsetX = 20;
        const offsetY = 20;
        const h = 60;

        const getNodeData = (id, position) => {
            return {
                id,
                position,
                type: 'block',
                dragHandle: '.graph-node-handle',
                data: {
                    label: id,
                    isUnattainable: true,
                },
            }
        }

        if(isSubLinks) {
            if(aloneNodes[selectedNode]) {
                const {position} = aloneNodes[selectedNode];
                return [getNodeData(selectedNode, position)];
            }

            const sourceNum = nodesTypesByType.source.length;
            const targetNum = nodesTypesByType.target.length;

            const getMaxWidth = name => {
                let max = 0;
                for(let id of nodesTypesByType[name]) {
                    max = Math.max(max, nodesSizes[id].width);
                }
                return max;
            }

            // вычисляем вертикальные координаты
            const max = Math.max(sourceNum, targetNum) * h;
            sourceOffsetY = (max - sourceNum * h) / 2;
            targetOffsetY = (max - targetNum * h) / 2;
            centerOffsetY = (max - h) / 2;

            // вычисляем горизонтальные координаты
            const editorPanelWidth = this.connector.panelRef.current.getBoundingClientRect().width - 10;
            const maxCenterWidth = getMaxWidth('status');
            const maxLeftWidth = getMaxWidth('source');
            const maxLeftRightWidth = Math.max(maxLeftWidth, getMaxWidth('target'));
            const between = (editorPanelWidth - maxCenterWidth - maxLeftRightWidth * 2 ) / 2;
            leftColumnRight = maxLeftRightWidth;
            centerColumnLeft = leftColumnRight + between;
            rightColumnLeft = centerColumnLeft + maxCenterWidth + between;
        }

        const nodes = states.map((label, index) => {
            let position;
            if (isSubLinks) {
                if (label === showNodeEnvironment) {
                    position = {x: centerColumnLeft, y: offsetY + centerOffsetY};
                }
                if (nodesType[label] === 'isSource') {
                    position = {x: leftColumnRight - nodesSizes[label].width, y: offsetY + sourceOffsetY + h * sourceIndex};
                    sourceIndex++;
                }
                if (nodesType[label] === 'isTarget') {
                    position = {x: rightColumnLeft, y: offsetY + targetOffsetY + h * targetIndex};
                    targetIndex++;
                }
            } else {
                position = {x: offsetX, y: offsetY + index * h};
                if(aloneNodes[label]) {
                    position = {...aloneNodes[label].position};
                    delete aloneNodes[label];
                }
            }

            const out = {
                id: label,
                position,
                type: 'block',
                dragHandle: '.graph-node-handle',
                data: {
                    label,
                    isFirst: !!firstStates[label],
                    isLast: !!lastStates[label],
                },
            };
            return out;
        });

        if(!isSubLinks) {
            for (let id in aloneNodes) {
                const item = aloneNodes[id];
                nodes.push(getNodeData(id, {x: item?.position?.x || 0, y: item?.position?.y || 0}))
            }
        }

        this.checkUnattainableStates();
        for(let item of nodes) {
            if(unattainableStates[item.id]) {
                item.data.isUnattainable = true;
                item.data.isFirst = false;
                item.data.isLast = false;
            }
        }
        return this.restoreNodesPositions(nodes);
    }


    getSubSchemeData() {
        const {showNodeEnvironment: id, links} = this.connector;
        const nodesType = {[id] : 'isStatus'};
        const nodesTypesByType = {
            status: [id],
            source: [],
            target: [],
        }

        /* eslint-disable */
        links.map(item => {
            const from = item.from;
            const to = item.to;

            if (from !== id && to !== id) return;
            if (from && to === id) {
                nodesType[from] = 'isSource';
                nodesTypesByType.source.push(from);
            }
            if (to && from === id && !nodesType[to]) {
                nodesType[to] = 'isTarget';
                nodesTypesByType.target.push(to);
            }
        });
        /* eslint-enable */

        return {
            nodesType,
            nodesTypesByType,
            id,
        };
    }

    checkUnattainableStates() {
        const links = this.connector.options.linksForStates || this.connector.links;

        const transitions = {};
        const unattainableStates = {};

        for(let {from, to} of links) {
            transitions[from] = transitions[from] || {};
            transitions[from][to] = true;
            unattainableStates[from] = true;
            unattainableStates[to] = true;
        }
        unattainableStates[this.start] = false;

        const checkState = id => {
            if(!transitions[id]) return;
            for(let _id in transitions[id]) {
                if(unattainableStates[_id]) {
                    unattainableStates[_id] = false;
                    checkState(_id);
                }
            }
        }
        checkState(this.start);
        for(let id in this.connector.aloneNodes) {
            unattainableStates[id] = true;
        }
        this.connector.unattainableStates = unattainableStates;
    }


    getAllStatesFromScheme() {
        const links = this.connector.options.linksForStates || this.connector.links;
        const states = {};
        let allStatuses = {};

        for (let item of this.connector.links) {
            if (item.from) states[item.from] = true;
            if (item.to) states[item.to] = true;
        }

        const firstStates = {};
        const lastStates = {...states};
        let startStateIsPresent = false;

        for (let item of links) {
            const {from, to} = item;
            if (from === this.start) {
                firstStates[to] = true;
                startStateIsPresent = true;
            } else {
                allStatuses[from] = true;
                allStatuses[to] = true;
            }
            if (from && to) delete lastStates[from];
        };

        this.connector.firstStates = firstStates;
        this.connector.lastStates = lastStates;

        const out = {
            states: Object.keys(states),
            firstStates,
            lastStates,
        }

        if(!startStateIsPresent) {
            this.connector.aloneNodes[this.start] = {position: {x: 0, y: 0}};
        }

        return out;
    }

    getLocalStorageName() {
        return `graph "${this.connector.graphName}" coords`;
    }

    saveNodesPositions(_nodes, newNodeCoords) {
        const nodes = _nodes || this.connector.nodesCurrent.current;
        if(this.connector.options.showNodeEnvironment) return;
        if (!nodes.length) return;
        const replaceId = newNodeCoords ? newNodeCoords.oldLabel : '';

        const out = {};

        for (let node of nodes) {
            if(node.id === replaceId) {
                const {newLabel, position} = newNodeCoords;
                out[newLabel] = {
                    x: position.x,
                    y: position.y,
                }
            } else {
                out[node.id] = {
                    x: Math.round(node.position.x),
                    y: Math.round(node.position.y),
                }
            }
        };

        const name = this.getLocalStorageName();
        this[name] = out;

        localStorage.setItem(name, JSON.stringify(out));
        this.newNodeCoord = null;
    };

    restoreNodesPositions(nodes) {
        if(this.connector.options.showNodeEnvironment) return nodes;
        const name = this.getLocalStorageName();
        let coords = this[name];

        if (!coords) {
            coords = localStorage.getItem(name);
            if (!coords) {
                setTimeout(() => {
                    this.dagreGraph();
                }, 100)
                return nodes;
            }
            coords = JSON.parse(coords);
        }

        return nodes.map(node => {
            const id = node.id;
            const coord = coords[id];

            if (coord) {
                node.position = {x: coord.x, y: coord.y}
            }
            if (this.newNodeCoord?.id === id) {
                node.position = {x: this.newNodeCoord.x, y: this.newNodeCoord.y}
            }
            return node;
        });
    };

    isJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    recalcHandles() {
        if (!this.connector?.links?.length) return;
        this.getHandlesInfo();
    }

    getEdgeId = link => {
        const {options: {onlyOneEdgeBetweenTwoNodes}} = this.connector;
        const {from, to, id} = link;
        if(!id) console.error('!!! Нет ID у связи', link);
        return onlyOneEdgeBetweenTwoNodes
            ? `${from > to ? from : to} => ${from > to ? to : from}`
            : `${from} => ${to} (${id})`;
    }

    getRandom = () => `id${UTILS.random16()}`;

    getHandlesInfo() {
        const {links, nodesRefs} = this.connector;
        const edges = {};
        const nodes = {};

        for (let link of links) {
            const {from, to} = link;

            if (from && to) {
                const {fromSide, toSide, fromAngle, toAngle} = this.getConnectSides(nodesRefs, from, to);
                const edgeId = this.getEdgeId(link);
                const fromHandleId = this.getRandom();
                const toHandleId = this.getRandom();
                const data = {from, to, fromHandleId, toHandleId, fromSide, toSide};
                edges[edgeId] = data;

                nodes[from] = nodes[from] || {};
                nodes[from][fromSide] = nodes[from][fromSide] || [];
                nodes[from][fromSide].push({angle: fromAngle, handleId: fromHandleId, type: 'source'});
                nodes[to] = nodes[to] || {};
                nodes[to][toSide] = nodes[to][toSide] || [];
                nodes[to][toSide].push({angle: toAngle, handleId: toHandleId, type: 'target'});
            }
        };

        this.connector.handlesData = {edges, nodes};
    }

    getConnectSides(refs, from, to) {
        const getPoints = id => {
            const {x, y, width, height} = refs[id].getBoundingClientRect();
            const xc = x + width / 2;
            const yc = y + height / 2;

            return {
                pointsArr: [
                    {x: xc,             y: y,               side: 'top'   },
                    {x: x + width * .1, y: y,               side: 'top'   },
                    {x: x + width * .9, y: y,               side: 'top'   },
                    {x: xc,             y: y + height,      side: 'bottom'},
                    {x: x + width * .1, y: y + height,      side: 'bottom'},
                    {x: x + width * .9, y: y + height,      side: 'bottom'},
                    {x: x,              y: yc,              side: 'left'  },
                    {x: x,              y: y + height * .1, side: 'left'  },
                    {x: x,              y: y + height * .9, side: 'left'  },
                    {x: x + width,      y: yc,              side: 'right' },
                    {x: x + width,      y: y + height * .1, side: 'right' },
                    {x: x + width,      y: y + height * .9, side: 'right' },
                ],
                basePoints: {
                    top:    {x: xc,        y: y         },
                    bottom: {x: xc,        y: y + height},
                    left:   {x: x,         y: yc        },
                    right:  {x: x + width, y: yc        },
                }
            }
        }

        const getLength = (coord1, coord2) => {
            const l1 = coord1.x - coord2.x;
            const l2 = coord1.y - coord2.y;
            const length = Math.sqrt(l1 * l1 + l2 * l2);
            return length;
        }

        const {pointsArr: fromPoints, basePoints: baseFromPoints} = getPoints(from);
        const {pointsArr: toPoints, basePoints: baseToPoints} = getPoints(to);

        let minLength = 100000000;
        let minFromSide, minToSide, minCoordFrom, minCoordTo;

        for (let i in fromPoints) {
            const {x, y, side: fromSide} = fromPoints[i];
            const coordFrom = {x, y};

            for (let j in toPoints) {
                const {x, y, side: toSide} = toPoints[j];
                const coordTo = {x, y};

                const length = getLength(coordFrom, coordTo);
                if (length < minLength) {
                    minLength = length;
                    minFromSide = fromSide;
                    minToSide = toSide;
                }
            }
        }

        minCoordFrom = baseFromPoints[minFromSide];
        minCoordTo = baseToPoints[minToSide];
        minLength = getLength(minCoordFrom, minCoordTo);

        const getAngle = (length, coord1, coord2, side) => {
            const reversY = coord1.y < coord2.y;
            const reversX = coord2.x < coord1.x;
            const deltaX = Math.abs(coord2.x - coord1.x);
            const angle = coord1.y === coord2.y ? 0 : Math.acos(deltaX / length) * 180 / Math.PI;

            if (side === 'left' || side === 'right') {
                return reversY ? 90 + angle : 90 - angle;
            }
            return reversX ? 90 + angle : 180 - angle;
        }

        const fromAngle = getAngle(minLength, minCoordFrom, minCoordTo, minFromSide);
        const toAngle = getAngle(minLength, minCoordTo, minCoordFrom, minToSide);
        return {
            fromSide: minFromSide,
            toSide: minToSide,
            fromAngle,
            toAngle,
        }
    }

    recalcHandlesWithTimeout() {
        if(this.recalcTimeoutId) {
            clearTimeout(this.recalcTimeoutId);
        }
        this.recalcTimeoutId = setTimeout(() => {
            this.recalcTimeoutId = 0;
            this.recalcHandles();
            this.setNodesAndEdges();
        }, 100);
    }

    refreshGraph(hard) {
        this.initLinks();

        if(hard) {
            this.setNodesAndEdges();
        }

        setTimeout(() => {
            this.recalcHandles();
            this.connector.setNodes([]);
            setTimeout(() => {
                this.setNodesAndEdges();
            }, 0);
        }, 100);
    }

    dagreGraph() {
        if(this.isDargeGraph) return;
        this.isDargeGraph = true;
        const {nodesCurrent, edgesCurrent, setNodes} = this.connector;
        const g = new dagre.graphlib.Graph();
        const addHeight = 15;               // чтобы по вертикали расстояния были побольше

        g.setGraph({                        // ПО УМОЛЧАНИЮ     ЗА ЧТО ОТВЕЧАЕТ ПАРАМЕТР
            rankdir: 'LR',                  // TB               Направление для ранжирования узлов. Может быть TB, BT, LR или RL
            align: undefined,               // undefined        Выравнивание для ранговых узлов. Может быть UL, UR, DL или DR
            nodesep: 50,                    // 50               Количество пикселей, разделяющих узлы по горизонтали в макете.
            edgesep: 10,                    // 10               Количество пикселей, разделяющих края по горизонтали в макете.
            ranksep: 50,                    // 50               Количество пикселей между каждым рангом в макете
            marginx: 0,                     // 0                Количество пикселей, которые будут использоваться в качестве поля вокруг левой и правой части графика.
            marginy: 0,                     // 0                Количество пикселей, которые будут использоваться в качестве поля вокруг верхней и нижней части графика.
            acyclicer: undefined,           // undefined        Если установлено значение greedy, используется жадная эвристика для поиска набора дуг обратной связи для графика.
                                            //                  Набор дуг обратной связи — это набор ребер, которые можно удалить, чтобы сделать граф ацикличным.
            ranker: 'longest-path',         // network-simple   Тип алгоритма, присваивающего ранг каждому узлу входного графа.
                                            //                  Возможные значения: network-simplex, tight-tree или longest-path
        });

        g.setDefaultEdgeLabel(data => ({}));

        for (let node of nodesCurrent.current) {
            g.setNode(
                node.id,
                {
                    label: node.id,
                    width: node.width || 10,
                    height: (node.height + addHeight) || 10,
                }
            );
        }

        for (let edge of edgesCurrent.current) {
            g.setEdge(edge.source, edge.target);
        }

        dagre.layout(g);

        for (let node of nodesCurrent.current) {
            node.position = {
                x: Math.round(g._nodes[node.id].x),
                y: Math.round(g._nodes[node.id].y),
            }
        }

        setNodes([...nodesCurrent.current]);
        this.saveNodesPositions(nodesCurrent.current);
        this.refreshGraph();
        setTimeout(() => {
            this.isDargeGraph = false;
        }, 0);
    }

    powerGraph() {
        const {nodesCurrent, edgesCurrent, setNodes, fitView} = this.connector;

        new PowerGraph({
            nodesCurrent,
            edgesCurrent,
            setNodes,
            callback: () => {
                this.saveNodesPositions(nodesCurrent.current);
                this.refreshGraph();
                fitView();
            }
        });
    }

    addNewNode() {
        const {viewPortCurrent, aloneNodes, states} = this.connector;
        let promptCallback;

        const onSelect = label => {
            promptCallback.removeComponent();
            const {x, y, zoom} = viewPortCurrent.current;
            aloneNodes[label] = {position: {x: (x * -1) / zoom + 5, y: (y * -1 + 35) / zoom + 20}};
            this.connector.selectedEdge = '';
            this.connector.selectedNode = label;
            this.onChangeComponentState.onNodeAdd(label);
            this.refreshGraph();
        }

        promptCallback = callPrompt({
            header: 'Добавить вершину',
            children: <AddNode
                onSelect={onSelect}
                nodes={this.connector.nodesCurrent.current}
                list={states}
            />,
            buttons : [
                {text: 'Отмена', type: 'cancel', callback: () => {}},
            ],
        });
    }

    deleteNode(_id, withoutQuestion) {
        const {links, aloneNodes, nodesByIdCurrent, selectedNode: __id} = this.connector;
        const id = _id || __id;
        if(!id) return;

        const onGraphElementsDelete = this.onChangeComponentState.onGraphElementsDelete;
        const oldLabelsList = this.getLabelsListObjFromLinks();

        const removeNode = withAloneNodes => {
            const deleteNodes = {};
            const deletedLinks = [];
            const deletedNodes = [];

            if(aloneNodes[id]) {
                deletedNodes.push(id);
                delete aloneNodes[id];
            } else {

                for (let i = links.length - 1; i >= 0; i--) {
                    const {from, to} = links[i];
                    if (from === id || to === id) {
                        deleteNodes[from] = true;
                        deleteNodes[to] = true;
                        deletedLinks.push({...links[i]});
                        links.splice(i, 1);
                    }
                }

                if (!withAloneNodes) {
                    for (let link of links) {
                        const {from, to} = link;
                        deleteNodes[from] = false;
                        deleteNodes[to] = false;
                    }

                    deleteNodes[id] = false;

                    for (let id in deleteNodes) {
                        if (deleteNodes[id]) {
                            const position = {...(nodesByIdCurrent.current[id].position)};
                            aloneNodes[id] = {position};
                        }
                    }
                }

                const newLabelsList = this.getLabelsListObjFromLinks();
                for (let label in oldLabelsList) {
                    if (!newLabelsList[label]) {
                        deletedNodes.push(label);
                        if(label === this.start && !aloneNodes[label]) {
                            const position = {...(nodesByIdCurrent.current[label].position)};
                            aloneNodes[label] = {position};
                        }
                    }
                }
            }

            onGraphElementsDelete({deletedNodes, deletedLinks});

            this.connector.selectedNode = '';
            this.refreshGraph();
        }

        if(withoutQuestion) {
            removeNode(false);
            return;
        }

        const buttons = [{text: 'Отмена', type: 'cancel', callback: () => {}}]
        if(!aloneNodes[id]) buttons.push({text: 'Со всеми повисшими', type: 'cancel', callback: () => removeNode(true)});
        buttons.push({text: aloneNodes[id] ? 'Удалить' : 'Только её', type: 'danger', callback:  () => removeNode(false)});

        callPrompt({
            header: `Удаление вершины`,
            text: `${aloneNodes[id] ? 'Удалить' : 'Как Вы хотите удалить'} вершину графа "<b>${id}</b>"?`,
            buttons
        });
    }

    deleteEdge(_id, withoutQuestion) {
        const {edgesByIdCurrent, nodesByIdCurrent, links, aloneNodes, selectedEdge: __id} = this.connector;
        const id = _id || __id;
        if(!id) return;

        const edge = edgesByIdCurrent.current[id];
        const {source, target} = edge;
        const onGraphElementsDelete = this.onChangeComponentState.onGraphElementsDelete;

        const checkNodes = arr => {
            for(let id of arr) {
                let isAbsent = true;

                for(let link of links) {
                    if(link.from === id || link.to === id) {
                        isAbsent = false;
                    }
                }
                if(isAbsent) {
                    aloneNodes[id] = {
                        position: nodesByIdCurrent.current[id].position
                    };
                }
            }
        }

        const _deleteEdge = () => {
            for(let i in links) {
                const link = links[i];
                const {from, to} = link;
                const _id = this.getEdgeId(link);
                if(_id === id) {
                    this.connector.selectedEdge = '';
                    onGraphElementsDelete({
                        deletedNodes: [],
                        deletedLinks: [{...links[i]}],
                        links: JSON.parse(JSON.stringify(links)),
                        aloneNodes: JSON.parse(JSON.stringify(aloneNodes)),
                    });
                    links.splice(i, 1);
                    checkNodes([from, to])
                    break;
                }
            }
            this.refreshGraph();
        }

        if(withoutQuestion) {
            _deleteEdge();
            return;
        }

        callPrompt({
            header: `Удаление ребра`,
            text: `Вы действительно хотите удалить ребро от вершины<br />"<b>${source}</b>" к вершине "<b>${target}</b>"?`,
            success: _deleteEdge.bind(this),
        });
    }

    reverseEdge() {
        const {links, refresh, refreshMenu, selectedEdge: id} = this.connector;
        let newId = null;
        let newFrom = null;
        let newTo = null;

        for(let i in links) {
            const link = links[i];
            const {from, to} = link;
            const _id = this.getEdgeId(link);
            if(_id === id) {
                newFrom = to;
                newTo = from;
                links[i] = {...links[i], from: newFrom, to: newTo};
                newId = this.getEdgeId(links[i]);
                break;
            }
        }
        if(!newId) return;

        this.onChangeComponentState.onLinkReverse({from: newFrom, to: newTo, oldId: id, newId: newId,});

        this.connector.selectedEdge = '';
        this.refreshGraph();

        setTimeout(() => {
            this.connector.selectedEdge = newId;
            refresh.edge[newId]();
            refreshMenu();
        }, 150)
    }

    renameNode() {
        const {aloneNodes, links, nodesCurrent, refresh, refreshMenu, selectedNode: id} = this.connector;
        let newName = '';

        callPrompt({
            header: `Переименование вершины "${id}"`,
            children: <InputText
                placeholder="Новое название"
                value={newName}
                label="Введите новое имя вершины"
                onChange={data => newName = data.value}
            />,
            success: () => {
                if (newName === id || !newName) return;
                const isAloneNode = !!aloneNodes[id];

                const newNodeCoords = {
                    oldLabel: id,
                    newLabel: newName,
                };

                if(isAloneNode) {
                    aloneNodes[newName] = {position: {...aloneNodes[id].position}};
                    delete aloneNodes[id];
                } else {
                    for (let node of nodesCurrent.current) {
                        if (node.id === id) {
                            newNodeCoords.position = {...node.position};
                            break;
                        }
                    }
                }

                if(!isAloneNode) {
                    for (let link of links) {
                        const {from, to} = link;
                        if (from === id) link.from = newName;
                        if (to === id) link.to = newName;
                    }
                    this.saveNodesPositions(nodesCurrent.current, newNodeCoords);
                }

                this.connector.selectedNode = '';
                this.setNodesAndEdges();
                this.refreshGraph();

                setTimeout(() => {
                    this.connector.selectedNode = newName;
                    refresh.node[newName]();
                    refreshMenu();
                    this.onChangeComponentState.onNodeRename({oldValue: id, newValue: newName});
                }, 150)
            },
        });
    }

    onConnectStart({nodeId}) {
        this.connectingNodeId = nodeId;
    };

    onConnectEnd(e) {
        if (!this.connectingNodeId || this.connector.notConnectToPane) return;

        const targetIsPane = e.target.classList.contains('react-flow__pane');
        if(!targetIsPane) return;

        this.addNewEdge({
            fromCurrent: {current: this.connectingNodeId},
            toCurrent: {current: ''},
            position: {
                x: e.clientX,
                y: e.clientY,
            }
        });
    };

    addNewEdge(props) {
        const {fromCurrent, toCurrent, position} = props;
        const {links, viewPortCurrent, panelRef, nodesCurrent, states} = this.connector;
        let promptCallback;

        const continueCreateNewNode = label => {
            promptCallback.removeComponent();
            toCurrent.current = label;

            const newLink = {
                from: fromCurrent.current,
                to: toCurrent.current,
                value: '',
                id: UTILS.random16(),
            };

            links.push(newLink);

            const newEdgeId = this.getEdgeId(newLink);

            const {x, y, zoom} = viewPortCurrent.current;
            const {left, top} = panelRef.current.getBoundingClientRect();

            this.newNodeCoord = {
                id: toCurrent.current,
                x: (position.x - left - x) / zoom,
                y: (position.y - top - y) / zoom,
            }

            this.connector.selectedEdge = newEdgeId;
            this.connector.selectedNode = '';

            this.setNodesAndEdges();
            this.saveNodesPositions(nodesCurrent.current);
            this.refreshGraph();

            const nodeId = toCurrent.current;
            this.onChangeComponentState.onLinkAndNodeAdd({
                link: {from: fromCurrent.current, to: nodeId, id: newEdgeId},
                node: nodeId,
            });
        }

        promptCallback = callPrompt({
            header: 'Добавить вершину',
            children: <AddNode
                onSelect={continueCreateNewNode}
                nodes={this.connector.nodesCurrent.current}
                list={states}
            />,
            buttons : [
                {text: 'Отмена', type: 'cancel', callback: () => {}},
            ],
        });

    }

    alert(text1, text2) {
        callAlert({
            header: '<span style="color: #dc3545; font-weight: bold">Ошибка</span>',
            text: `<span style="font-weight: bold">${text1}</span><br/><br/>${text2}`,
            buttons : [
                {text: 'Понятно', type: 'danger', callback: null},
            ]
        });
    }

    onConnect({source, target}) {
        const {links, refresh, refreshMenu, aloneNodes, options: {onlyOneEdgeBetweenTwoNodes}, edgesByIdCurrent} = this.connector;

        const newId = this.connector.getIdForNewEdge ? this.connector.getIdForNewEdge({from: source, to: target}) : UTILS.random16();

        if(onlyOneEdgeBetweenTwoNodes) {
            const edgeId = this.getEdgeId({from: source, to: target, id: newId});
            if(edgesByIdCurrent.current[edgeId]) {

                this.alert('Не должно быть более одного ребра между двумя вершинами', `Между "${source}" и "${target}" уже есть связь`);
                return;
            }
        }

        if(source === this.start && !aloneNodes[this.start]) {
            for(let i = links.length - 1; i >=0; i--) {
                if(links[i].from === this.start) {
                    links.splice(i, 1);
                }
            }
        }

        const newLink = {
            from: source,
            to: target,
            id: newId,
            event: 'Кнопка',
        };
        newLink.value = this.connector.getValueForNewEdge ? this.connector.getValueForNewEdge(newLink) : '11';

        links.push(newLink);

        const newEdgeId = this.getEdgeId(newLink);
        this.connector.selectedNode = '';
        this.connector.selectedEdge = '';
        this.refreshGraph();

        this.onChangeComponentState.onLinkAdd({from: source, to: target, id: newEdgeId});

        setTimeout(() => {
            this.connector.selectedEdge = newEdgeId;
            refresh.edge[newEdgeId]();
            refreshMenu();

            if(this.connector.onConnect) {
                this.connector.onConnect(newLink);
            }
        }, 150)
    }
}

export default Utils;