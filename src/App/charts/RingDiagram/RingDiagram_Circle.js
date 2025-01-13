import React from "react";

const RingDiagramCircle = props => {
    const {connector, radius, innerRadius, outerRadius, className} = props;

    if(!radius && !innerRadius && !outerRadius) return null;
    if(radius && (innerRadius || outerRadius)) return null;
    if((innerRadius && !outerRadius) || (!innerRadius && outerRadius)) return null;

    const {innerRadius: diagramInnerRadius, outerRadius: diagramOuterRadius} = connector.options;
    const centerX = connector.options.diagramSize / 2;
    const centerY = centerX;

    const getRadius = r => {
        let radius;

        switch(r) {
            case 'innerRadius': radius = diagramInnerRadius; break;
            case 'outerRadius': radius = diagramOuterRadius; break;
            default:            radius = r;                  break;
        }
        return radius;
    }

    const data = {
        ...props,
        getRadius,
        centerX,
        centerY,
        className: `ring-diagram-circle${className ? ' ' + className : ''}`,
    }

    if(radius) return <Circle {...data} />
    return <Ring {...data} />
}

const Circle = props => {
    const {
        radius: externalRadius,
        stroke = '#888',
        strokeWidth = 1,
        className = '',
        style = {},
        fill = 'none',
        getRadius,
        centerX,
        centerY,
    } = props;

    const radius = getRadius(externalRadius);

    return (
        <circle
            className={className}
            cx={centerX}
            cy={centerY}
            r={radius}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            style={style}
        />
    )
}

const Ring = props => {
    const {
        innerRadius: externalInnerRadius,
        outerRadius: externalOuterRadius,
        stroke = '#888',
        fill = '#eee',
        strokeWidth = 1,
        className = '',
        style = {},
        getRadius,
        centerX,
        centerY,
    } = props;

    const innerRadius = getRadius(externalInnerRadius);
    const outerRadius = getRadius(externalOuterRadius);

    let d = `M ${centerX},${centerY - outerRadius}`;
    d += `A ${outerRadius},${outerRadius} 0 1,1 ${centerX},${centerY + outerRadius}`;
    d += `A ${outerRadius},${outerRadius} 0 1,1 ${centerX},${centerY - outerRadius}`;
    d += `Z`;
    d += `M ${centerX},${centerY - innerRadius}`;
    d += `A ${innerRadius},${innerRadius} 0 1,0 ${centerX},${centerY + innerRadius}`;
    d += `A ${innerRadius},${innerRadius} 0 1,0 ${centerX},${centerY - innerRadius}`;
    d += `Z`;

    return (
        <path
            className={className}
            d={d}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            style={style}
        />
    )
}

RingDiagramCircle.displayName = 'RingDiagramCircle';

export default RingDiagramCircle;
