import React from "react";
import ReactFlow, {applyNodeChanges/*, Background*/, useReactFlow, ReactFlowProvider, Controls, useOnViewportChange} from 'reactflow';
import {CustomEdge, CustomNode, Menu, CustomConnectionLine, ButtonsPanel} from "./";
import {useCurrentState} from "../../hooks";

import './scss/graph.scss';

const GraphRoot = props => {
    const {utils, options = {}} = props;
    const {connector} = utils;
    const {nodesNotConnectable, nodesNotDraggable, graphView = {}, buttonsPanel, callbackOnGraphReady = null} = options;
    const {graphClasses = ''} = graphView;

    const {fitView: _fitView} = useReactFlow();

    const fitViewCurrent = React.useRef(_fitView);
    if(_fitView !== fitViewCurrent.current) fitViewCurrent.current = _fitView;
    const fitView = () => {
        setTimeout(() => {
            fitViewCurrent.current({
                duration: 800,
                maxZoom: 1,
                minZoom: .01
            });
        }, 100);
    }

    const viewPortCurrent = React.useRef(null);
    useOnViewportChange({onChange: viewport => viewPortCurrent.current = viewport});

    const panelRef = React.useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = React.useState(null);
    utils.reactFlowInstance = reactFlowInstance;

    const nodeTypes = React.useRef({block: CustomNode});
    const edgeTypes = React.useRef({customEdge: CustomEdge});

    const nodesByIdCurrent = React.useRef({});
    const [nodes, nodesCurrent, _setNodes] = useCurrentState([]);
    const setNodes = nodes => {
        const nodesById = {};
        for(let node of nodes) {
            node.data.commonData = {utils};
            nodesById[node.id] = node;
        }
        nodesByIdCurrent.current = nodesById;
        _setNodes(nodes);
    }

    const edgesByIdCurrent = React.useRef({});
    const [edges, edgesCurrent, _setEdges] = useCurrentState([]);
    const setEdges = edges => {
        const edgesById = {};
        for(let edge of edges) {
            edgesById[edge.id] = edge;
        }
        edgesByIdCurrent.current = edgesById;
        _setEdges(edges);
    }

    const onNodesChange = changes => {
        const newNodes = applyNodeChanges(changes, nodes);
        setNodes(newNodes);

        if(changes[0]?.position) {
            utils.saveNodesPositions(newNodes);
            utils.recalcHandlesWithTimeout();
        }
    }

    const onEdgeClick = (_, data) => utils.clickToEdge(data.id, true);

    const onConnectStart = (_, data) => utils.onConnectStart(data);
    const onConnectEnd = data => utils.onConnectEnd(data);
    const onConnect = data => utils.onConnect(data);

    const initConnectorData = () => {
        connector.setNodes = setNodes;
        connector.nodesCurrent = nodesCurrent;
        connector.nodesByIdCurrent = nodesByIdCurrent;

        connector.setEdges = setEdges;
        connector.edgesCurrent = edgesCurrent;
        connector.edgesByIdCurrent = edgesByIdCurrent;
        connector.panelRef = panelRef;

        connector.fitView = fitView;
        connector.viewPortCurrent = viewPortCurrent;
    }

    const init = () => {
        initConnectorData();
        setNodes(utils.getNodesFromLinks());
        setTimeout(() => {
            utils.recalcHandles();
            setNodes([]);
            setTimeout(() => {
                utils.setNodesAndEdges();
                fitView();
                if(callbackOnGraphReady) {
                    setTimeout(() => {
                        callbackOnGraphReady();
                    }, 100)
                }
            }, 0);
        }, 100);
    }

    const onDrop = e => {
        e.preventDefault();
        const _data = e.dataTransfer.getData('application/reactflow');

        if (!utils.isJsonString(_data)) return;

        const data = JSON.parse(_data);
        const {label, name} = data;

        const panelRefBounds = panelRef.current.getBoundingClientRect();
        const position = reactFlowInstance.project({
            x: e.clientX - panelRefBounds.left,
            y: e.clientY - panelRefBounds.top,
        });

        utils.onDropNode({label: label || name, position});
    }

    const onDragOver = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    /* eslint-disable */
    React.useEffect(() => {
        init();
    }, []);
    /* eslint-enable */


//    console.log('G R A P H', props, utils)

    return (
        <div className={`graph-panel ${graphClasses}`} ref={panelRef} >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                nodesConnectable={!nodesNotConnectable}
                onConnect={!!nodesNotConnectable ? null : onConnect}
                onConnectStart={!!nodesNotConnectable ? null : onConnectStart}
                onConnectEnd={!!nodesNotConnectable ? null : onConnectEnd}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes.current}
                edgeTypes={edgeTypes.current}
                onDrop={options.isDroppable ? onDrop : null}
                onDragOver={options.isDroppable ? onDragOver : null}
                nodesDraggable={!nodesNotDraggable}
                connectionLineComponent={CustomConnectionLine}
                connectionLineStyle={{strokeWidth: 1, stroke: '#ccc'}}
                onEdgeClick={onEdgeClick}
                minZoom={0.05}
                maxZoom={1}
            >
                {!connector.options.hideControls && (
                    <Controls
                        position="top-left"
                        showInteractive={false}
                        showFitView={false}
                        showZoom={false}
                    >
                        <Menu utils={utils} />
                    </Controls>
                )}
            </ReactFlow>
            {buttonsPanel && (
                <ButtonsPanel buttons={buttonsPanel} />
            )}
        </div>
    )
}

const providerWrapper = props => (
    <ReactFlowProvider>
        <GraphRoot {...props} />
    </ReactFlowProvider>
);

export default providerWrapper;