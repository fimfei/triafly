import React from 'react';

import './scss/graph-view-node.scss';

const GraphViewNodeNavigator = props => {
    const {id} = props;

    return (
        <div className="workflow-editor-graph-node-view-navigator">{id}</div>
    )
}

export default GraphViewNodeNavigator;
