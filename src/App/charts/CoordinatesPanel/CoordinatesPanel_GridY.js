import React from 'react';

import './scss/coordinates-panel-grid-y.scss';

const CoordinatesPanelGridY = props => {
    const {connector, style = {}, className = '', linkToScale = 'left'} = props;
    const {data} = connector;
    const {maxValueLeftArr, maxValueRightArr, scaleTypeLeft, scaleTypeRight} = data;

    const isLeftScale = linkToScale === 'left';
    const maxValueArr = isLeftScale ? maxValueLeftArr : maxValueRightArr;
    const scaleType = isLeftScale ? scaleTypeLeft : scaleTypeRight;

    if(!maxValueLeftArr) {
        console.error('CoordinatesPanelGridY -- Ошибка входных параметров. Невозможно вычислить "maxValue"')
        return null;
    }

    const height = `calc(100% / ${maxValueArr.length - (scaleType === 'area' ? 0 : 1)})`;
    const wrapperStyle = {minHeight: height, maxHeight: height}

    return (
        <div className={`coordinates-panel-grid-y${className ? ' ' + className : ''}`}>
            {maxValueArr.map((value, index) => {
                if(index === (maxValueArr.length - 1)) return null;

                return (
                    <div
                        key={`grid-y-item-${index}`}
                        className="coordinates-panel-grid-y-item"
                        style={wrapperStyle}
                    >
                        <div
                            className="coordinates-panel-grid-y-item-line"
                            style={style}
                        ></div>
                    </div>
                )
            })}
            {scaleType === 'area' && (
                <div
                    className="coordinates-panel-grid-y-item"
                    style={wrapperStyle}
                >
                    <div
                        className="coordinates-panel-grid-y-item-line"
                        style={style}
                    ></div>
                </div>
            )}
        </div>
    )
}

export default CoordinatesPanelGridY;