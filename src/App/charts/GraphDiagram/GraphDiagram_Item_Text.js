import React from 'react';
import {chartsUtils} from "../chartsUtils";

import './scss/graph-diagram-item-text.scss';

const GraphDiagramItemText = props => {
    const {value, valueFormat = '[VALUE]', valueStyle = {}, valueOffset = 0, x, y, color} = props;

    const text = valueFormat.replace('[VALUE]', value);

    const {svgStyles, htmlStyles} = chartsUtils.splitStyles(valueStyle);


    return (
        <React.Fragment>
            <text
                x={x}
                y={y - valueOffset}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={color}
                {...svgStyles}
                style={htmlStyles}
            >
                {text}
            </text>
        </React.Fragment>
    )
}

export default GraphDiagramItemText;