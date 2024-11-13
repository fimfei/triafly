/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo} from 'react';
import {Handle, Position, useStore} from 'reactflow';
import {useCurrentState} from "../../hooks";

import './scss/graph-custom-node.scss';

const CustomNode = props => {
    const {id, data} = props;
    const {label, commonData} = data;
    const {utils} = commonData;
    const {connector} = utils;
    const {aloneNodes, start, options, linksAllLabels, unattainableStates, firstStates, lastStates} = connector;
    const {nodesNotDraggable, showNodeStatus, maxDistanceBetweenArrows = 20, edgesFromNodeCenter, graphView} = options;
    const {first, last, unattainable} = showNodeStatus;

    const Null = () => null;
    const {components: customComponents = {}, nodeClasses: customClasses = '', nodeTitle = '', startNodeTitle = ''} = graphView;
    const {navigator: CustomNavigator = Null, body: CustomBody = Null, data: customData = {}} = customComponents;

    const customTitle = nodeTitle.replace(/%label/g, label);
    const isUnattainable = !!unattainableStates[id];
    const isFirst = !!firstStates[id];
    const isLast = !!lastStates[id];
    const isStart = id === start;

    const nodeRef = React.useRef(null);
    const handles = React.useRef(null);

    const connectionNodeIdSelector = state => state.connectionNodeId;
    const connectionNodeId = useStore(connectionNodeIdSelector);

    const [selected, selectedCurrent, setSelected] = useCurrentState(id === connector.selectedNode);
    const [_, refreshCurrent, setRefresh] = useCurrentState(0);
    const refreshNode = () => {
        const sel = connector.selectedNode === id;
        if(sel !== selectedCurrent.current) {
            setSelected(sel);
        } else {
            setRefresh(refreshCurrent.current + 1);
        }
    }

    /* eslint-disable */
    React.useEffect(() => {
        connector.nodesRefs[label] = nodeRef.current;
        connector.nodesSizes[label] = nodeRef.current.getBoundingClientRect();
        connector.setSelected.node[label] = setSelected;
        connector.refresh.node[label] = refreshNode;
        connector.clickToNode[label] = clickToNode;

        return () => {
            delete connector.nodesRefs[label];
            delete connector.setSelected.node[label];
            delete connector.refresh.node[label];
            delete connector.clickToNode[label];
        }
    }, []);
    React.useEffect(() => {
        const setSelected = el => el.classList ? el.classList[selected ? 'add' : 'remove']('is-selected') : null;

        let selector = `.react-flow__node[data-id="${id}"]`;
        if(customClasses) selector += ` .${customClasses.replace(/ /g, '.')}`;
        const el = document.querySelector(selector);
        setSelected(el);
        setSelected(el.parentNode);
    });

    /* eslint-enable */

    if(connector.handlesData) {
        const data = connector.handlesData.nodes[label];
        const out = [];
        const setSideHandles = side => {
            const sideParams = {
                'left':     {fix: 'left', fixVal: '-1px',             vari: 'top' },
                'right':    {fix: 'left', fixVal: 'calc(100% - 7px)', vari: 'top' },
                'top':      {fix: 'top',  fixVal: '-1px',             vari: 'left'},
                'bottom':   {fix: 'top',  fixVal: 'calc(100% - 7px)', vari: 'left'},
            }
            const vertical = side === 'right' || side === 'left';
            let revers = vertical ? -1 : 1;
            let sidesData = data[side].sort((a, b) => a.angle > b.angle ? -1 * revers : revers);
            const nodeSideLength = connector.nodesSizes[label][vertical ? 'height' : 'width'];
            const step = Math.min(maxDistanceBetweenArrows, nodeSideLength / (sidesData.length + 1));
            const length = (sidesData.length - 1) * step;

            for(let i in sidesData) {

                const {handleId, type, angle} = sidesData[i];
                const {fix, fixVal, vari} = sideParams[side];

                const offset = `calc(50% - ${length / 2 - i * step}px)`;

                out.push({handleId, type, style: {[fix]: fixVal, [vari]: offset}, position: side, angle});
            }
        }

        for(let side in data) {
            setSideHandles(side);
        }
        handles.current = out;
    }

    const clickToNode = () => {
        if(isStart) return;
        utils.clickToNode(id);
    }

    const connectorClass = connectionNodeId ? (connectionNodeId === id ? ' is-source' : ' is-target') : '';

    let classes = 'graph-node-wrapper';
    classes += customClasses ? ` ${customClasses}` : '';
    classes += isStart ? ' is-start' : '';
    if(!isStart) {
        classes += first && isFirst ? ' is-first' : '';
        classes += last && isLast ? ' is-last' : '';
        classes += (unattainable && isUnattainable) || !linksAllLabels[start] || aloneNodes[id] ? ' is-unattainable' : '';
        classes += selected ? ' is-selected' : '';
    }

    return (
        <div
            className={classes}
            ref={nodeRef}
            title={isStart ? startNodeTitle : customTitle}
            onClick={clickToNode}
        >
            {!nodesNotDraggable && (
                <div className={`graph-node-handle${connectionNodeId ? ' is-connecting' : ''}`}>
                    {/*<i className="fas fa-arrows-alt fa-fw"></i>*/}
                </div>
            )}
            {handles.current && (
                <React.Fragment>
                    {handles.current.map((handel, index) => {
                        const {type, style, handleId, position} = handel;
                        return (
                            <Handle
                                type={type}
                                style={edgesFromNodeCenter ? {left: '50%', top: '50%'} : style}
                                position={position}
                                id={handleId}
                            />
                        )
                    })}
                </React.Fragment>
            )}
            <Handle type="source" position={Position.Left} id="connector" className={`graph-common-connector common-source${connectorClass}`} />
            {!isStart && (
                <Handle type="target" position={Position.Left} id="connector" className={`graph-common-connector common-target${connectorClass}`} />
            )}
            <div
                _={_}
                style={{position: 'relative', width: '100%', height: '100%'}}
            >
                {!isStart && (
                    <CustomNavigator id={id} graphConnector={connector} data={customData} />
                )}
            </div>
            {!isStart && connector.showNodesBody && (
                <CustomBody id={id} graphConnector={connector} data={customData} />
            )}
        </div>
    )
};

export default memo(CustomNode);