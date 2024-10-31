/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo} from 'react';
import {Handle, Position, useStore} from 'reactflow';

import './scss/custom-node.scss';

const CustomNode = props => {
    const {id, data: {label, customData}} = props;
    const {oneHandleCurrent, relations, nodesConnector, nodesRefs, onClickToNode} = customData;
    
    const [isSelected, setIsSelected] = React.useState(!!relations.statuses[id]?.selected);
    const nodeRef = React.useRef(null);
    
    const connectionNodeIdSelector = state => state.connectionNodeId;
    const connectionNodeId = useStore(connectionNodeIdSelector);

    const isTarget = connectionNodeId && connectionNodeId !== id;
    const connectingNowClass = isTarget ? ' connecting-now' : '';
    const sidesHandlesClass = 'side-edge' + (oneHandleCurrent.current ? ' to-center' : '');

    const fields = relations.fields[id];

    const connector = {
        setIsSelected: selected => setIsSelected(selected),
    }
    /* eslint-disable */
    React.useEffect(() => {
        nodesConnector.current[id] = connector;
        nodesRefs.current[id] = nodeRef;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /* eslint-enable */
    const onClick = () => onClickToNode(id);

    return (
        <React.Fragment>
            {!connectionNodeId && (
                <React.Fragment>
                    <Handle type="target" position={Position.Left}   id="left"   className={sidesHandlesClass} />
                    <Handle type="target" position={Position.Right}  id="right"  className={sidesHandlesClass} />
                    <Handle type="target" position={Position.Top}    id="top"    className={sidesHandlesClass} />
                    <Handle type="target" position={Position.Bottom} id="bottom" className={sidesHandlesClass} />

                    <Handle type="source" position={Position.Left}   id="left"   className={sidesHandlesClass} />
                    <Handle type="source" position={Position.Right}  id="right"  className={sidesHandlesClass} />
                    <Handle type="source" position={Position.Top}    id="top"    className={sidesHandlesClass} />
                    <Handle type="source" position={Position.Bottom} id="bottom" className={sidesHandlesClass} />
                </React.Fragment>
            )}

            <div className={`block-for-link${isSelected ? ' is-selected' : ''}`} ref={nodeRef}>
                <div className="block-wrapper">
                    <div className="block-label custom-drag-handle" onClick={onClick}>{label}</div>
                    <div className="block-fields">
                        <Handle type="source" position={Position.Left} id="connector" className="common-connector common-source" />
                        <Handle type="target" position={Position.Left} id="connector" className={`common-connector common-target${connectingNowClass}`} />
                        {fields.map((field, index) => {
                            if(!field.isActive/* && !field.isRequired*/) {
                                return null;
                            }

                            return (
                                <div className={`block-field${field.isRequired ? ' is-required' : ''}${field.isActive ? '' : ' is-not-active'}`}>{field.name}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default memo(CustomNode);