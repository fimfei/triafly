import React from 'react';
import {chartsUtils} from "../chartsUtils";
import {GraphDiagramLine, GraphDiagramItemText} from ".";

import './scss/graph-diagram-item.scss';

const GraphDiagramItem = props => {
    const {fractions, indicator, maxValue, minValue, lineStartOffset, distanceBetweenLines, indicatorIndex, svgData} = props;

    return (
        <React.Fragment>
            <GraphDiagramLine {...props} />
            {fractions.map((fraction, index) => {
                const {
                    valueKey,
                    pointStyle = {},
                    pointType = 'circle',
                    pointSize = 10,
                    pointRotate = 0,
                    showValue = false,
                    valueFormat = '[VALUE]',
                    valueStyle,
                    valueOffset,
                    color = "#000",
                } = indicator;
                const value = chartsUtils.replaceValues(fraction, valueKey);
                const height = (value - minValue) * 100 / (maxValue - minValue);

                const lineOffsetX = Math.round(lineStartOffset + distanceBetweenLines * index);

                const x = Math.round(lineOffsetX);
                const y = Math.round((100 - height) * svgData.height / 100);

                const {svgStyles, htmlStyles} = chartsUtils.splitStyles(pointStyle);
                const data = {lineOffsetX, height, svgStyles, htmlStyles, pointSize, pointRotate, svgData, x, y, color};
                const valueData = {value, valueFormat, valueStyle, valueOffset, x, y, color};

                return (
                    <React.Fragment key={`graph-diagram-item-${indicatorIndex}-${index}`}>
                        {showValue && (
                            <React.Fragment>
                                {pointType === 'circle' && <Circle {...data} />}
                                {pointType === 'square' && <Square {...data} />}
                                {pointType === 'rhomb' && <Rhomb {...data} />}
                                <GraphDiagramItemText {...valueData} />
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

const Circle = props => {
    const {lineOffsetX, height, svgStyles, htmlStyles, pointSize, color} = props;

    return (
        <circle
            cx={lineOffsetX}
            cy={`${Math.round(100 - height)}%`}
            r={pointSize / 2}
            fill="#fff"
            stroke={color}
            strokeWidth="2"
            {...svgStyles}
            style={htmlStyles}
        />
    )
}

const Square = props => {
    const {lineOffsetX, height, svgStyles, htmlStyles, pointSize, svgData, color} = props;
    const y = Math.round((100 - height) * svgData.height / 100) - pointSize / 2;

    return (
        <rect
            x={Math.round(lineOffsetX - pointSize / 2)}
            y={y}
            width={pointSize}
            height={pointSize}
            fill="#fff"
            stroke={color}
            strokeWidth="2"
            {...svgStyles}
            style={htmlStyles}
        />
    )
}

const Rhomb = props => {
    const {svgStyles, htmlStyles, pointSize, x, y, color} = props;

    const delta = pointSize / 2;

    let points = `${x        },${y - delta} `;
    points +=    `${x + delta},${y        } `;
    points +=    `${x        },${y + delta} `;
    points +=    `${x - delta},${y        }`;

    return (
        <polygon
            points={points}
            fill="#fff"
            stroke={color}
            strokeWidth="2"
            {...svgStyles}
            style={htmlStyles}
        />
    )
}

export default GraphDiagramItem;