import React from 'react';
import {chartsUtils} from "../chartsUtils";

import './scss/bar-diagram-sector-item.scss';

const BarDiagramSectorItem = props => {
    const {connector, fraction, indicator, indicatorIndex, sectorIndex, barDiagramId} = props;
    const {maxValue, minValue} = connector[barDiagramId];

    const {
        valueKey,
        style = {},
        className = '',
        multiplier = 1,
        histogram = {portion: 0, gap: 0},
    } = indicator;

    const value = chartsUtils.replaceValues(fraction, valueKey) * multiplier;
    const height = (value - minValue) * 100 / (maxValue - minValue);

    const onClick = () => {
//        console.log('CLICK', barDiagramId, sectorIndex, indicatorIndex)
    }

    const {svgStyles, htmlStyles} = chartsUtils.splitStyles(style);

    const data = {
        className,
        x: 0,
        y:`${100 - height}%`,
        width: '100%',
        height,
        fill: `url(#indicator-${barDiagramId}-${indicatorIndex})`,
        style: htmlStyles,
    }

    return (
        <React.Fragment>
            {histogram.portion ? (
                <Histogram
                    {...data}
                    svgStyles={svgStyles}
                    histogram={histogram}
                    sectorIndex={sectorIndex}
                />
            ) : (
                <rect
                    {...data}
                    height={`calc(${height}% - 1px)`}
                    {...svgStyles}
                    onClick={onClick}
                />
            )}
        </React.Fragment>
    )
}

const Histogram = props => {
    const {height, histogram, fill, svgStyles, style, sectorIndex, className} = props;
    const {portion, gap} = histogram;

    const parts = [];

    const partsLength = Math.floor((height + portion) / (portion + gap));
    let currTop = 0;

    for(let i = 0; i < partsLength; i++) {
        const h = Math.min(portion, height - currTop);
        parts.push({y: 100 - currTop - h, height: h});
        currTop += (portion + gap);
    }

    return (
        <svg className={className}>
            {parts.map((part, index) => {
                const {y, height} = part;

                return (
                    <rect
                        key={`hist-${sectorIndex}-${index}`}
                        x="0"
                        y={`calc(${y}% - 1px)`}
                        width="100%"
                        height={`${height}%`}
                        fill={fill}
                        {...svgStyles}
                        style={style}
                    />
                )
            })}
        </svg>
    )
}

export default BarDiagramSectorItem;