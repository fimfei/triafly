import React from 'react';
import {GraphDiagramItem} from '.';

import './scss/graph-diagram.scss';

const GraphDiagram = props => {
    const {connector, svgData, indicators = [], linkToScale = 'left'} = props;
    const {options, data} = connector;
    const {fractions, scaleTypeX} = options;
    const {maxValueLeft, maxValueRight, minValueLeft, minValueRight} = data;

    const isLeft = linkToScale === 'left';

    if((isLeft && maxValueLeft === undefined) || (!isLeft && maxValueRight === undefined)) {
        console.error('GraphDiagram -- Ошибка входных параметров. Невозможно вычислить "maxValue"')
        return null;
    }

    const maxValue = isLeft ? maxValueLeft : maxValueRight;
    const minValue = isLeft ? minValueLeft : minValueRight;

    const linesNumber = fractions.length;
    const distanceBetweenLines = scaleTypeX === 'line'
        ? svgData.width / (linesNumber - 1)
        : svgData.width / linesNumber;
    const lineStartOffset = scaleTypeX === 'line' ? 0 : distanceBetweenLines / 2;

    const getStyle = (style, color) => {
        const out = {};
        for(let key in style) {
            out[key] = style[key].replace
                ? style[key].replace(/\[COLOR\]/g, color)
                : out[key] = style[key];
        }
        return out;
    }

    if(!indicators.length) return null;

    return (
        <React.Fragment>
            {indicators.map((indicator_, indicatorIndex) => {
                const {valueStyle, pointStyle, lineStyle, color} = indicator_;

                const indicator = {
                    ...indicator_,
                    valueStyle: getStyle(valueStyle, color),
                    pointStyle: getStyle(pointStyle, color),
                    lineStyle: getStyle(lineStyle, color),
                }

                const data = {fractions, indicator, maxValue, minValue, lineStartOffset, distanceBetweenLines, indicatorIndex, svgData};

                return (
                    <GraphDiagramItem {...data} key={`graph-diagram-${indicatorIndex}`}/>
                )
            })}
        </React.Fragment>
    )
}

GraphDiagram.displayName = 'GraphDiagram';

export default GraphDiagram;