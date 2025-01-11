import React from 'react';

import './scss/coordinates-panel-scale-y.scss';

const CoordinatesPanelScaleY = props => {
    const {connector, style = {}, className = '', format = '[VALUE]', dash, linkToScale = 'left'} = props;
    const {data} = connector;
    const {maxValueLeftArr, maxValueRightArr, scaleTypeLeft, scaleTypeRight} = data;

    const isLeftScale = linkToScale === 'left';

    if((isLeftScale && !maxValueLeftArr) || (!isLeftScale && !maxValueRightArr)) {
        console.error('CoordinatesPanelScaleY -- Ошибка входных параметров. Невозможно вычислить "maxValue"')
        return null;
    }

    const maxValueArr = isLeftScale ? maxValueLeftArr : maxValueRightArr;
    const scaleType = isLeftScale ? scaleTypeLeft : scaleTypeRight;
    const height = `calc(100% / ${maxValueArr.length - (scaleType === 'area' ? 0 : 1)})`;

    return (
        <div
            className={`coordinates-panel-scale-y ${isLeftScale ? 'is-left' : 'is-right'}${className ? ' ' + className : ''}`}
            style={style}
        >
            {maxValueArr.map((value, index) => {
                const formatValue = value ? format.replace('[VALUE]', value) : value;

                return (
                    <div
                        key={`scale-y-item-${index}`}
                        className={`coordinates-panel-scale-y-item ${scaleType}`}
                        style={{
                            minHeight: height,
                            maxHeight: height,
                        }}
                    >
                        <div className={`scale-y-item-value ${scaleType}`}>{formatValue}</div>
                        {dash && (
                            <div className={`scale-y-item-dash ${scaleType}`}></div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export const CoordinatesPanelScaleYLeft = props => {
    return (
        <CoordinatesPanelScaleY {...props} />
    )
}

export const CoordinatesPanelScaleYRight = props => {
    return (
        <CoordinatesPanelScaleY {...props} />
    )
}

CoordinatesPanelScaleY.displayName = 'CoordinatesPanelScaleY';

export default CoordinatesPanelScaleY;