import React from 'react';
import {chartsUtils} from "../chartsUtils";

import './scss/graph-diagram-line.scss';

const GraphDiagramLine = props => {
    const {fractions, indicator, maxValue, minValue, lineStartOffset, distanceBetweenLines, indicatorIndex, svgData} = props;

    const {
        valueKey,
        pointStyle = {},
        pointType = 'circle',
        pointSize = 10,
        pointRotate = 0,
        lineStyle = {},
        lineSplinePercent = 0,
        color = "#000",
    } = indicator;

    let points = '';
    let preX = 0;
    let preY = 0;

    for(let index in fractions) {
        const fraction = fractions[index];
        const {valueKey} = indicator;

        const value = chartsUtils.replaceValues(fraction, valueKey);
        const height = (value - minValue) * 100 / (maxValue - minValue);
        const lineOffsetX = Math.round(lineStartOffset + distanceBetweenLines * Number(index));
        const x = Math.round(lineOffsetX);
        const y = Math.round((100 - height) * svgData.height / 100);

        if(!Number(index)) {
            points += `M${x},${y}`;
        } else {
            const middleX1 = preX + (x - preX) / 100 * lineSplinePercent;
            const middleX2 = preX + (x - preX) / 100 * (100 - lineSplinePercent);
            points += ` C${middleX1},${preY} ${middleX2},${y} ${x},${y}`;
        }
        preX = x;
        preY = y;
    }
    const {svgStyles, htmlStyles} = chartsUtils.splitStyles(lineStyle);

    return (
        <path
            d={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            {...svgStyles}
            style={htmlStyles}
        />
    )
}

export default GraphDiagramLine;