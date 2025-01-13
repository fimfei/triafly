import React from "react";

const RingDiagramBackground = props => {
    const {connector,  stroke: externalStroke, strokeWidth: externalStrokeWidth, fill: externalFill, className = '', style = {}} = props;
    const {diagramSize} = connector.options;

    return (
        <rect
            className={`ring-diagram-background${className ? ' ' + className : ''}`}
            x="0"
            y="0"
            width={diagramSize}
            height={diagramSize}
            fill={externalFill || 'none'}
            stroke={externalStroke || '#888'}
            strokeWidth={externalStrokeWidth || 1}
            style={style}
        />
    )
}

RingDiagramBackground.displayName = 'RingDiagramBackground';

export default RingDiagramBackground;
