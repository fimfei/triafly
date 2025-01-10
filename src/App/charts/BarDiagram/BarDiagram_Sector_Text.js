import React from 'react';
import {chartsUtils} from "../chartsUtils";

import './scss/bar-diagram-sector-text.scss';

const BarDiagramSectorText = props => {
    const {connector, fraction, indicator, indicatorIndex, sectorIndex, barDiagramId} = props;
    const {maxValue, minValue} = connector[barDiagramId];


    const {svgData, barDiagramUtils } = connector[barDiagramId];

    const {
        multiplier = 1,
        valueKey,
        format = '[VALUE]',
        color,
        showValue = false,
        offsetPercent = 100,
        offsetNumber = 10,
        className = '',
        valueStyle = {},
        textRotate = 0,
    } = indicator;

    const textRef = React.useRef(null);

    const recalcRotate = () => barDiagramUtils.rotateTextAroundCenter(textRef.current, textRotate);

    React.useEffect(() => {
        if(textRotate) recalcRotate();
    }, []);

    React.useEffect(() => {
        if(textRotate) recalcRotate();
    }, [svgData]);

    if(!showValue) return null;

    const v = chartsUtils.replaceValues(fraction, valueKey);
    const value = v * multiplier;
    const text = format.replace('[VALUE]', v);

    const percent = (value - minValue) * 100 / (maxValue - minValue);
    const y = svgData.height - (svgData.height * percent / 100 / 100 * offsetPercent + offsetNumber);

    return (
        <React.Fragment>
            <text
                ref={textRef}
                className={className}
                x="50%"
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                {...barDiagramUtils.getStyle({style: valueStyle, color})}
            >
                {text}
            </text>
        </React.Fragment>
    )
}

export default BarDiagramSectorText;