/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo} from 'react';
import {BaseEdge, EdgeLabelRenderer} from 'reactflow';
import {getStraightPath, getSmoothStepPath, getBezierPath} from 'reactflow';
import {useCurrentState} from "../../hooks";

import './scss/graph-custom-edge.scss';

const CustomEdge = props => {
    const {id, source, sourceX, sourceY, sourcePosition, target, targetX, targetY, targetPosition, markerEnd, data} = props;
    const {utils} = data;
    const {connector} = utils;
    const {options, edgesByIdCurrent} = connector;
    const {edgeType: _edgeType, graphView, hideEdgeDirection, managingConnectingLineStyles = false} = options;

    const startConnectingLineStyle = (!!managingConnectingLineStyles && managingConnectingLineStyles[id])
        ? managingConnectingLineStyles[id].connectingLineStyleCurrent.current
        : null;

    const {components: customComponents = {}} = graphView;
    const {link: EdgeView = () => null, data: customData = {}} = customComponents;

    const edgeTypes = {
        vector: getStraightPath,
        orthogonally: getSmoothStepPath,
        bezier: getBezierPath,
    }

    const edgeRef = React.useRef(null);

    const [, connectingLineStyleCurrent, setConnectingLineStyle] = useCurrentState(startConnectingLineStyle || {});

    const [selected, selectedCurrent, setSelected] = useCurrentState(connector.selectedEdge === id);
    const [_, refreshCurrent, setRefresh] = useCurrentState(0);
    const refreshEdge = () => {
        const sel = connector.selectedEdge === id;
        if(sel !== selectedCurrent.current) {
            setSelected(sel);
        } else {
            setRefresh(refreshCurrent.current + 1);
        }
    }

    /* eslint-disable */
    React.useEffect(() => {
        if(managingConnectingLineStyles) {
            managingConnectingLineStyles[id] = {
                connectingLineStyleCurrent,
                setConnectingLineStyle,
            }
        }
        connector.setSelected.edge[id] = setSelected;
        connector.refresh.edge[id] = refreshEdge;
        return () => {
            delete connector.setSelected.edge[id];
            delete connector.refresh.edge[id];
        }
    }, []);
    /* eslint-enable */

    React.useEffect(() => {
        connector.edgesRefs[id] = edgeRef['current'];
    });

    const edgeType = edgeTypes[_edgeType] || getBezierPath;

    const [edgePath, labelX, labelY] = edgeType({sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition});

    const edge = edgesByIdCurrent.current[id];

    const style = {
        stroke: selected ? '#000' : '#b1b1b7',
        strokeWidth: selected ? 1.5 : 1,
    };

    Object.assign(style, connectingLineStyleCurrent.current);

    return (
        <React.Fragment>
            <BaseEdge
                _={_}
                path={edgePath}
                markerEnd={hideEdgeDirection ? null : markerEnd}
                style={style}
            />
                {connector.showLinksLabels && (
                    <EdgeLabelRenderer>
                        <div ref={edgeRef}>
                            <EdgeView
                                id={id}
                                source={source}
                                target={target}
                                labelX={labelX}
                                labelY={labelY}
                                positionCSS={{transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`}}
                                edge={edge}
                                link={edge.data.link}
                                selected={selected}
                                graphConnector={connector}
                                data={customData}
                            />
                        </div>
                    </EdgeLabelRenderer>
                )}
        </React.Fragment>
    )
};

export default memo(CustomEdge);