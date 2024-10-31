/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import ReactFlow, {applyNodeChanges, applyEdgeChanges, Background, Controls, ReactFlowProvider, useReactFlow} from 'reactflow';
import {useCurrentState} from '../../hooks';
import {ControlPanel, CustomEdge, CustomNode, CustomConnectionLine, Menu, utils} from './';
import UTILS from "../../common/utils";
import {PowerGraph, Resizer} from './classes';

import 'reactflow/dist/style.css';
import './scss/links-editor.scss';

const LinksEditor = ({...props}) => {
    return (
        <ReactFlowProvider>
            <LinksEditorRoot {...props} />
        </ReactFlowProvider>
    )
};

const LinksEditorRoot = ({...props}) => {
    const {options: {
        onSave: onSaveExternal,
        onCancel: onCancelExternal,
        onTextEditor: onTextEditorExternal,
        relations,
        links: externalLinks = '',
        positions: externalPositions = '',
        onChangeSelectedRelation,
        onEditLink,
        elementForCalculatingMaximumHeight,
    }, componentReturn, portal} = props;

    const {fitView: _fitView} = useReactFlow();
    const fitViewCurrent = React.useRef(_fitView);
    if(_fitView !== fitViewCurrent.current) fitViewCurrent.current = _fitView;
    const fitView = trace => {
        setTimeout(() => {
            if(trace) {
                fitViewCurrent.current({duration: 800});
            }
        }, 0);
    }

    const nodesConnector = React.useRef({});
    const edgesConnector = React.useRef({});
    const resizerRef = React.useRef(null);
    const nodesRefs = React.useRef({});
    const edgesRefs = React.useRef({});

    const [, hoverLinkCurrent, setHoverLink] = useCurrentState({});

    const selectedNodeCurrent = React.useRef(utils.getSelectedRelationId());

    const reactFlowWrapper = React.useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = React.useState(null);
    const linksObjCurrent = React.useRef({});
    const [, linksCurrent, _setLinks] = useCurrentState([]);
    const setLinks = data => {
        const out = {};
        for(let link of data) out[link.id] = link;
        linksObjCurrent.current = out;
        _setLinks(data);
    }
    const [connectIsDrag, setConnectIsDrag] = React.useState(false);

    const [, showLinksLabelsCurrent, setShowLinksLabels] = useCurrentState(false);
    const [, showFieldsCurrent, _setShowFields] = useCurrentState(null);          // null - никогда, true - всегда, false - при hover-е
    const [, edgePathCurrent, setEdgePath] = useCurrentState('getBezierPath');
    const [, oneHandleCurrent, _setOneHandle] = useCurrentState(true); // в одну точку по центру

    const setShowFields = data => {
        _setShowFields(data);
        recalcNodesAndEdges({});
    }

    const setOneHandle = data => {
        _setOneHandle(data);
        recalcNodesAndEdges({});
    }

    const notValidatedCurrent = React.useRef([]);
    const positionsCurrent = React.useRef('');

    const nodeTypes = React.useRef({block: CustomNode});
    const edgeTypes = React.useRef({buttonedge: CustomEdge});

    const edgesObjCurrent = React.useRef({});
    const nodesObjCurrent = React.useRef({});

    const [nodes, nodesCurrent, _setNodes] = useCurrentState([]);
    const setNodes = (nodes) => {
        utils.arrayToObjById(nodes, nodesObjCurrent);
        for(let node of nodes) {
            node.data.customData = {oneHandleCurrent, relations, showFieldsCurrent, nodesConnector, nodesRefs, onClickToNode};
        }
        _setNodes(nodes);
    }

    const [edges, edgesCurrent, _setEdges] = useCurrentState([]);
    const setEdges = data => {
        utils.arrayToObjById(data, edgesObjCurrent);
        _setEdges(data);
    }

    const onNodesChange = changes => {
        setNodes(applyNodeChanges(changes, nodes));

        const {id, type} = changes[0];
        if(type !== 'position') return;

        utils.recalcNearestHandlesForNode(id, edges);
        setEdges([...edges]);
    }

    const onEdgesChange = changes => {
        if(changes[0].type === 'remove') {
            for(let change of changes) {
                utils.removeLinksByEdgeId(change.id);
            }
            setLinks(linksCurrent.current);
        }
        setEdges(applyEdgeChanges(changes, edges));
    }

    const recalcTimeoutId = React.useRef(null);

    const recalcNodesAndEdges = ({...props}) => {
        if(recalcTimeoutId.current) {
            clearTimeout(recalcTimeoutId.current);
        }
        recalcTimeoutId.current = setTimeout(() => {
            recalcTimeoutId.current = 0;
            _recalcNodesAndEdges(props);
        }, 0);
    }

    const _recalcNodesAndEdges = ({...props}) => {
        const {extNodes, extEdges, hard} = props;
        const _nodes = extNodes || [...nodesCurrent.current];
        const _edges = extEdges || [...edgesCurrent.current];

        if(hard) {
            setNodes([]);
        }

        setTimeout(() => {
            setNodes(_nodes);
            utils.recalcNearestHandlesForAllEdges(_edges);
            setEdges(_edges);
        }, 0);
    }

    const onConnect = connection => {
        if(utils.connectionIsPresent(connection)) {
            return;
        }
        utils.searchNearestHandles(connection, nodesObjCurrent.current);
        const {source, target, sourceHandle, targetHandle} = connection;
        const id = utils.getEdgeId(source, target);

        const newLinks = [...linksCurrent.current];
        const label = `${source}._ = ${target}._`;

        newLinks.push({id, source, target, sourceHandle, targetHandle, label});

        setLinks(newLinks);
        setEdges(newLinks);
        reDrawEdges();

        setTimeout(() => {
            onEditLink({id, edgeRef: edgesRefs.current[id], source, target, virtualJoinsText: label});
        }, 0);
    }

    const onDrop = e => {
        e.preventDefault();
        const _data = e.dataTransfer.getData('application/reactflow');

        if (!utils.isJsonString(_data)) return;

        const data = JSON.parse(_data);

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const position = reactFlowInstance.project({
          x: e.clientX - reactFlowBounds.left,
          y: e.clientY - reactFlowBounds.top,
        });

        const oldNode = nodes.find(node => node.id === data.name);

        if(oldNode) {
            oldNode.position = position;
            setNodes([...nodes]);
            return;
        }

        const newNode = {
            id: data.name,
            position,
            dragHandle: '.custom-drag-handle',
            data: {
                label: data.name,
                fields: relations.fields[data.name],
                connectIsDrag,
                setConnectIsDrag,
                oneHandleCurrent,
            },
            type: 'block',
            _data: data,
        };

        const newNodesList = [...nodes];
        newNodesList.push(newNode);
        setNodes(newNodesList);
    }

    const onDragOver = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    const onCancel = () => onCancelExternal();

    const onSave = () => {
        const data = utils.getLinksData();
        if(data) {
            onSaveExternal(data);
        }
    }

    const onTextEditor = () => {
        const linksInServerFormat = utils.linksToSystemLinks(linksCurrent.current);
        utils.getTablesPositions();
        onTextEditorExternal(linksInServerFormat === false ? null : linksInServerFormat);
    }

    const reDrawEdges = () => {
        setTimeout(() => {
            const edges = utils.getEdgesFromLinks(linksCurrent.current);
            utils.recalcNearestHandlesForAllEdges(edges);
            setEdges(edges);
        }, 0);
    }

    const defaultEdgeOptions = React.useRef({
        data: {
            nodesCurrent, edgesCurrent, edgesObjCurrent, setEdges, relations, linksCurrent, setLinks, reDrawEdges,
            connectIsDrag, hoverLinkCurrent, showLinksLabelsCurrent, edgePathCurrent, linksObjCurrent, onEditLink, edgesRefs,
            edgesConnector
        },
        type: 'buttonedge',
        interactionWidth: 10,
        style: {
            stroke: '#00f',
        },
        ariaLabel: '',
    });

    const powerGraph = () => new PowerGraph({nodesCurrent, edgesCurrent, setNodes, setEdges, callback: () => recalcNodesAndEdges({})});

    const parseSystemLinks = (externalLinks, notChangeNodes) => {
        const {initialLinks} = utils.systemLinksToLinks({externalLinks});
        setLinks(initialLinks);

        const positionsString = positionsCurrent.current;

        const nodes = utils.getNodesFromLinks(initialLinks);
        if(positionsString) {
            const positions = JSON.parse(positionsString);
            for(let node of nodes) {
                if(positions[node.id]) {
                    node.position = positions[node.id];
                }
            }
        }

        if(!notChangeNodes) {
            setNodes(nodes);
        }

        setTimeout(() => {
            for(let node of nodesCurrent.current) {
                const {width, height} = nodesRefs.current[node.id].current.getBoundingClientRect();
                node.width = width;
                node.height = height;
            }
            setNodes(nodesCurrent.current);
            const edges = utils.getEdgesFromLinks(initialLinks);
            utils.recalcNearestHandlesForAllEdges(edges);
            setEdges(edges);
            if(!positionsString) {
                setTimeout(() => {
                    //powerGraph();
                    utils.dagreGraph();
                    setTimeout(() => fitView('parseSystemLinks'), 0);
                }, 0);
            }
        }, 100);
    }


    const checkFullScreen = () => !utils.getSelectedTable();
    const resizerChangeFullScreenCallback = React.useRef(null);
    const isFullScreen = React.useRef(null);


    /* eslint-disable */
    const resizerCurrent = React.useRef(null);
    React.useEffect(() => {
        Object.assign(utils, {
            relations, defaultEdgeOptions,
            linksCurrent, linksObjCurrent,
            nodesCurrent, nodesObjCurrent,
            edgesCurrent, edgesObjCurrent,
            notValidatedCurrent, positionsCurrent,
            setNodes, setEdges,
        });
        componentReturn.onChangeLinks = data => {
            const {virtualJoinsText, virtualJoinsPositions} = data;
            if(virtualJoinsPositions) {
                positionsCurrent.current = virtualJoinsPositions;
            }
            parseSystemLinks(virtualJoinsText, true);
        };
        componentReturn.onChangeLink = data => {
            const {id, virtualJoinsText} = data;
            linksObjCurrent.current[id].label = virtualJoinsText;
            utils.getTablesPositions();
            parseSystemLinks(utils.linksToVirtualJoinsText(), true);
        };
        componentReturn.onDeleteLink = id => {
            const newEdges = [];
            const newLinks = [];

            for(let i in edgesCurrent.current) {
                if(edgesCurrent.current[i].id !== id) newEdges.push(edgesCurrent.current[i]);
                if(linksCurrent.current[i].id !== id) newLinks.push(linksCurrent.current[i]);
            }
            setLinks(newLinks);
            setEdges(newEdges);
        };
        componentReturn.onDeleteNode = nodeIdToRemove => {
            const newNodes = nodesCurrent.current.filter(node => node.id !== nodeIdToRemove);
            if (newNodes.length !== nodesCurrent.current.length) {
                const newEdges = edgesCurrent.current.filter(edge => (edge.target !== nodeIdToRemove) && (edge.source !== nodeIdToRemove));
                const newLinks = linksCurrent.current.filter(link => (link.target !== nodeIdToRemove) && (link.source !== nodeIdToRemove));
                setLinks(newLinks);
                setEdges(newEdges);
                setNodes(newNodes);
            }
        };
        componentReturn.onSave = onSave;
        componentReturn.onCancel = onCancel;
        componentReturn.getLinksData = utils.getLinksData;

        positionsCurrent.current = externalPositions;
        parseSystemLinks(externalLinks);

        isFullScreen.current = checkFullScreen();
        resizerCurrent.current = new Resizer({
            resizerRef: resizerRef.current,
            portalRef: portal,
            fitView,
            checkFullScreen: checkFullScreen,
            elementForCalculatingMaximumHeight,
            resizerChangeFullScreenCallback,
        });

        let timeoutId = 0;
        componentReturn.redraw = action => {
            if(action === 'activeRelationChange') {
                const currentFullScreen = checkFullScreen();
                if(currentFullScreen !== isFullScreen.current) {
                    isFullScreen.current = currentFullScreen;
                    resizerChangeFullScreenCallback.current(currentFullScreen);
                }
            }
            if(timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                timeoutId = 0;
                recalcNodesAndEdges({hard: true});
            }, 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /* eslint-enable */
    const onClickToNode = id => {
        for(let i in nodesConnector.current) {
            nodesConnector.current[i].setIsSelected(i === id);
        }
        const originalName = relations.statuses[id].originalName;
        onChangeSelectedRelation(originalName);
        selectedNodeCurrent.current = id;
        setTimeout(() => {
//            resizerCurrent.current.setHeight();
        }, 0);
    }

    const onEdgeClick = (_, data) => edgesConnector.current[data.id].clickToEdge();
    const onEdgeMouseEnter = (_, data) => setHoverLink({[data.id]: true});
    const onEdgeMouseLeave = () => setHoverLink({});

    const [clickToPane, setClickToPane] = React.useState(0);
    const onPaneClick = () => setClickToPane(UTILS.random16());

    const menuData = {
        setShowLinksLabels, setEdgePath, setOneHandle, setShowFields, fitView,
        showLinksLabelsCurrent, edgePathCurrent, oneHandleCurrent, showFieldsCurrent,
        clickToPane, powerGraph, nodesCurrent, edgesCurrent, setNodes, setEdges,
    };

    return (
        <>
            <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes.current}
                    edgeTypes={edgeTypes.current}
                    elementsSelectable={true}
                    nodesConnectable={true}
                    nodesDraggable={true}
                    zoomOnScroll={true}
                    onInit={setReactFlowInstance}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    connectionLineType="smoothstep"
                    defaultEdgeOptions={defaultEdgeOptions.current}
                    connectionLineComponent={CustomConnectionLine}
                    connectionLineStyle={{strokeWidth: 1, stroke: '#ccc'}}
                    onEdgeClick={onEdgeClick}
                    onEdgeMouseEnter={onEdgeMouseEnter}
                    onEdgeMouseLeave={onEdgeMouseLeave}
                    onPaneClick={onPaneClick}
                    multiSelectionKeyCode={null}
                    minZoom={0.05}
                    maxZoom={2}
                >
                    <Controls
                        position="top-left"
                        showInteractive={false}
                        showFitView={false}
                        showZoom={false}
                    >
                        <Menu {...menuData} />
                    </Controls>
                    <Background />
                </ReactFlow>
            </div>
            <ControlPanel onSave={onSave} onCancel={onCancel} onTextEditor={onTextEditor}/>
            <div className="resizer" ref={resizerRef} draggable={false}></div>
        </>
    );
};

export default LinksEditor;
