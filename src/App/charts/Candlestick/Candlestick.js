import React from 'react';
import {chartsUtils} from "../chartsUtils";

import './scss/candlestick.scss';

const Candlestick = props => {
    const {connector, linkToScale = 'left', openKey, closeKey, lowKey, highKey, bullColor = '#080', bearColor = '#800', style = {}, className = ''} = props;
    const {options: {fractions}, data} = connector;
    const {maxValueLeft, minValueLeft, maxValueRight, minValueRight} = data;

    const isLeft = linkToScale !== 'right';
    const minValue = isLeft ? minValueLeft : minValueRight;
    const maxValue = isLeft ? maxValueLeft : maxValueRight;
    const chartHeight = maxValue - minValue;

    const posToPercent = y => (y - minValue) * 100 / chartHeight;

    return (
        <div
            className={`candlestick-wrapper${className ? ' ' + className : ''}`}
        >
            {fractions.map((fraction, index) => {
                const open = chartsUtils.getValueFromObject(fraction, openKey);
                const openPercent = posToPercent(open);
                const close = chartsUtils.getValueFromObject(fraction, closeKey);
                const closePercent = posToPercent(close);
                const low = chartsUtils.getValueFromObject(fraction, lowKey);
                const lowPercent = posToPercent(low);
                const high = chartsUtils.getValueFromObject(fraction, highKey);
                const highPercent = posToPercent(high);

                const topPercent = Math.max(openPercent, closePercent);
                const bottomPercent = Math.min(openPercent, closePercent);

                const highStyle = {
                    height: `${highPercent - topPercent}%`,
                    bottom: `${topPercent}%`,
                }
                const lowStyle = {
                    height: `${bottomPercent - lowPercent}%`,
                    bottom: `${lowPercent}%`,
                }
                const blockStyle = {
                    height: `${Math.abs(closePercent - openPercent)}%`,
                    bottom: `${bottomPercent}%`,
                    background: close > open ? bullColor : bearColor,
                }

                return (
                    <div
                        key={`candlestick-item-${index}`}
                        className={`candlestick-item ${close > open ? 'bull' : 'bear'}`}
                    >
                        <div className="candlestick-item-high"  style={highStyle}></div>
                        <div className="candlestick-item-low"   style={lowStyle}></div>
                        <div className="candlestick-item-block" style={blockStyle}></div>
                        <div className="value high"    style={{bottom: `${highPercent}%`}}><div>{high}</div></div>
                        <div className="value low"     style={{bottom: `${lowPercent}%`}}><div>{low}</div></div>
                        <div className="value top"     style={{bottom: `${topPercent}%`}}><div>{Math.max(open, close)}</div></div>
                        <div className="value bottom"  style={{bottom: `${bottomPercent}%`}}><div>{Math.min(open, close)}</div></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Candlestick;