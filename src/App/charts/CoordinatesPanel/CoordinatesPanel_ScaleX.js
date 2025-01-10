import React from 'react';
import {chartsUtils} from "../chartsUtils";

import './scss/coordinates-panel-scale-x.scss';

const CoordinatesPanelScaleX = props => {
    const {connector, style = {}, className = '', rowKey = 'text', dash, format = '[VALUE]', textRotate = 0} = props;
    const {options} = connector;
    const {fractions, scaleTypeX = 'area'} = options;

    const width = scaleTypeX === 'line'
        ? 100 / (fractions.length - 1)
        : 100 / fractions.length;
    const startOffset = scaleTypeX === 'line' ? width / 2 * -1 : 0;

    const textStyle = textRotate ? {transform: `translate(calc(-50% - 8px), 0) rotate(${textRotate}deg)`} : {};

    return (
        <div
            className={`coordinates-panel-scale-x${className ? ' ' + className : ''}`}
            style={style}
        >
            {fractions.map((fraction, index) => {
                const v = chartsUtils.replaceValues(fraction, rowKey);
                const value = format.replace('[VALUE]', v);


                return (
                    <div
                        key={`scale-x-item-${index}`}
                        className="coordinates-panel-scale-x-item"
                        style={{
                            width: `${width}%`,
                            left: `${startOffset + width * index}%`,
                        }}
                    >
                        {dash && (
                            <div className={`scale-x-item-dash ${scaleTypeX}`}></div>
                        )}
                        <div
                            className={`scale-x-item-text${textRotate ? ' rotate' : ''}`}
                            style={textStyle}
                        >
                            {value}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CoordinatesPanelScaleX;