import React from 'react';
import {useCurrentState} from "../../hooks";

import './scss/links-editor-edge.scss';

const LinksEditor_Edge = props => {
    const {id, data, edge, labelX, labelY, source, target} = props;
    const {utils} = data;
    const {connector} = utils;
    const {link} = edge.data;
    const {label: _label} = link;

    const [_, refreshCurrent, setRefresh] = useCurrentState(0);
    const refreshEdge = () => setRefresh(refreshCurrent.current + 1);

    /* eslint-disable */
    React.useEffect(() => {
        connector.refresh[id] = refreshEdge;
        return () => {
            delete connector.refresh[id];
        }
    }, []);
    /* eslint-enable */

    const selected = connector.selectedId === id;
    const hoverLink = false;

    const{label, error} = utils.valueToLabel(_label, source, target);
    utils.setConnectingLinesStyle({from: source, to: target, id, error});

    return (
        <div
            _={_}
            style={{transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,}}
            className={`custom-edge${hoverLink ? ' hover' : ''}${selected ? ' selected' : ''}${error ? ' error' : ''}`}
        >
            <div dangerouslySetInnerHTML={{__html: label}} ></div>
        </div>
    )
}

export default LinksEditor_Edge;