import React from 'react';

import './scss/graph-view-edge.scss';

const GraphViewEdge = props => {
    const {/*id, source, target, edge,*/ labelX, labelY, link, selected} = props;

    const eventsClass = {
        'Внешнее событие':         'event-external',
        'Кнопка':                  'event-button',
        'До конца периода сбора':  'event-until-end',
        'От начала периода сбора': 'event-from-beginning',
        'От перехода в статус':    'event-from-status',
    }

    const selectedClass = selected ? ' selected' : '';

    return (
        <div
            className={`workflow-editor-edge-wrapper nodrag nopan ${eventsClass[link.event]}${selectedClass}`}
            style={{transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`}}
        >
            <div
                className={`${eventsClass[link.event]}${selectedClass}`}
                dangerouslySetInnerHTML={{__html: link.value}}
            ></div>
        </div>
    )
}

export default GraphViewEdge;
