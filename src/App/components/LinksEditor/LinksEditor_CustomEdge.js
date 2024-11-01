/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {BaseEdge, EdgeLabelRenderer} from 'reactflow';
import {getStraightPath, getSmoothStepPath, getBezierPath} from 'reactflow';

import './scss/custom-edge.scss';

const CustomEdge = ({...props}) => {
    const {id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, markerEnd, label = '', data} = props;
    const {edgesObjCurrent, hoverLinkCurrent, showLinksLabelsCurrent, edgePathCurrent, onEditLink, linksObjCurrent, edgesRefs, edgesConnector, clickToPane} = data; // eslint-disable-line

    const edgeRef = React.useRef(null);

    const connector = {
        clickToEdge: () => {
            const {source, target} = edgesObjCurrent.current[id];
            const {label: virtualJoinsText} = linksObjCurrent.current[id];
            onEditLink({id, edgeRef, source, target, virtualJoinsText});
        }
    }
/* eslint-disable */
    React.useEffect(() => {
        edgesRefs.current[id] = edgeRef;
        edgesConnector.current[id] = connector;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
/* eslint-enable */
    if(!edgesObjCurrent.current[id] || !linksObjCurrent.current[id]) return null;

    const paths = {getStraightPath, getSmoothStepPath, getBezierPath};
    const [edgePath, labelX, labelY] = paths[edgePathCurrent.current]({sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition});
    const {error: errorLink} = edgesObjCurrent.current[id];

    const hoverLink = !!hoverLinkCurrent.current[id];

    const labelStyle = {
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
        fontSize: 12,
        pointerEvents: 'all',
        color: '#000',
        'box-shadow': `0px 0px ${hoverLink ? 0 : 1}px ${hoverLink ? 2 : 0}px #000`,
        visibility: showLinksLabelsCurrent.current ? 'visible' : 'hidden',
    }
    if(hoverLink) labelStyle['z-index'] = '1100';

    return (
        <React.Fragment>
            <BaseEdge
                path={edgePath}
                markerEnd={markerEnd}
                style={{
                    stroke: errorLink ? '#f00' : '#000',
                    'stroke-width': hoverLink ? 2 : 1,
                }}
            />
            <EdgeLabelRenderer>
                <div
                    style={labelStyle}
                    className={`link-label-wrapper nodrag nopan`}
                    ref={edgeRef}
                >
                    {showLinksLabelsCurrent.current && (
                        <div dangerouslySetInnerHTML={{__html: label}} ></div>
                    )}
                </div>
            </EdgeLabelRenderer>
        </React.Fragment>
    );
}

export default CustomEdge;