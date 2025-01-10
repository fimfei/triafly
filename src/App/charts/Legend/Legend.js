import React from 'react';
import {chartsUtils} from "../chartsUtils";

import './scss/legend.scss';

const Legend = props => {
    const {connector, chartControllingRef, fractions: legendFractions, nameКey = 'legend', colorKey = 'color', className = ''} = props;
    const fractions = legendFractions || connector.options?.fractions;

    const getLegend = () => {
        const outObj = {};
        const withoutColor = [];

        for(let i in fractions) {
            const fraction = fractions[i];
            const text = chartsUtils.replaceValues(fraction, nameКey);
            const color = chartsUtils.replaceValues(fraction, colorKey) || null;
            if(text && color) outObj[color] = {color, text, index: Number(i)};
            if(text && !color) withoutColor.push({text, index: Number(i)});
        }
        return withoutColor.concat(Object.values(outObj)).sort((a, b) => a.index > b.index ? 1 : -1);
    }

    const legend = React.useRef(getLegend());
    const id = React.useRef(Math.random());

    return (
        <div className={`legend-root${className ? ' ' + className : ''}`} >
            {legend.current.map((item, index) => {
                const {color, text} = item;

                return (
                    <div className="legend-item" key={`legend-${id.current}-${index}`}>
                        {color && (
                            <div className="legend-point" style={{background: color}}></div>
                        )}
                        <div className="legend-text">{text}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Legend;