import React from 'react';
import {BarDiagramDefs, BarDiagramSector} from './';
import {Utils} from '.';

import './scss/bar-diagram.scss';

const BarDiagram = props => {
    const {connector, svgData, indicators = [], linkToScale = 'left'} = props;
    const {options, data} = connector;
    const {fractions, scaleTypeX} = options;
    const {maxValueLeft, maxValueRight, maxValueLeftDelta, maxValueRightDelta, maxValueLeftArr, maxValueRightArr, minValueLeft, minValueRight} = data;

    const isLeft = linkToScale === 'left';

    const barDiagramIdRef = React.useRef(`BarDiagram-${Math.round(Math.random() * 100000)}`);
    const barDiagramId = barDiagramIdRef.current;

    const utilsCurrent = React.useRef(new Utils(props));
    const barDiagramUtils = utilsCurrent.current;

    if((isLeft && maxValueLeft === undefined) || (!isLeft && maxValueRight === undefined)) {
        console.error('BarDiagram -- Ошибка входных параметров. Невозможно вычислить "maxValue"')
        return null;
    }

    connector[barDiagramId] = {
        indicators,
        barDiagramUtils,
        svgData,
        linkToScale,
        maxValue: isLeft ? maxValueLeft : maxValueRight,
        maxValueDelta: isLeft ? maxValueLeftDelta : maxValueRightDelta,
        maxValueArr: isLeft ? maxValueLeftArr : maxValueRightArr,
        minValue: isLeft ? minValueLeft : minValueRight,
    };

    if(!indicators.length) return null;

    const sectorItemsWidthPercent = barDiagramUtils.getTotalWidthPercent(indicators);

    const sectorWidth = scaleTypeX === 'line'
        ? svgData.width / (fractions.length - 1)
        : svgData.width / fractions.length;
    const sectorStartOffset = scaleTypeX === 'line' ? sectorWidth / 2 * -1 : 0;

    return (
        <React.Fragment>
            <BarDiagramDefs connector={connector} indicators={indicators} barDiagramId={barDiagramId} />
            {fractions.map((fraction, index) => {

                const sectorOffsetX = sectorStartOffset + sectorWidth * index;

                return (
                    <svg
                        key={`bar-diagram-sector-${index}`}
                        className={`bar-diagram-svg-sector`}
                        x={sectorOffsetX}
                        y={0}
                        width={sectorWidth}
                        height="100%"
                        overflow="visible"
                    >
                        <BarDiagramSector
                            {...props}
                            svgData={svgData}
                            sectorIndex={index}
                            connector={connector}
                            fraction={fraction}
                            indicators={indicators}
                            sectorWidth={sectorWidth}
                            sectorItemsWidthPercent={sectorItemsWidthPercent}
                            barDiagramId={barDiagramId}
                        />
                    </svg>
                )
            })}
        </React.Fragment>
    )
}

export default BarDiagram;