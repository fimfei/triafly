import React from 'react';

const BarDiagramDefs = props => {
    const {connector, indicators, barDiagramId} = props;

    const barDiagramUtils = connector[barDiagramId].barDiagramUtils;

    return (
            <defs>
                {indicators.map((indicator, index) => {
                    const {type, color: col} = indicator;

                    let color = col;
                    let darkColor = 'transparent';
                    let lightColor = 'transparent';
                    if(color) {
                        darkColor = barDiagramUtils.adjustColor(color, .6, true);
                        lightColor = barDiagramUtils.adjustColor(color, .6, false);
                    } else {
                        color = 'transparent';
                    }

                    const id = `indicator-${barDiagramId}-${index}`;

                    if(type === 'oval') return (
                        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%" key={id}>
                            <stop offset="0%" stopColor={darkColor} />
                            <stop offset="15%" stopColor={color} />
                            <stop offset="85%" stopColor={color} />
                            <stop offset="100%" stopColor={lightColor} />
                        </linearGradient>
                    )

                    if(type === 'cylinder') return (
                        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%" key={id}>
                            <stop offset="0%" stopColor={darkColor} />
                            <stop offset="50%" stopColor={color} />
                            <stop offset="100%" stopColor={lightColor} />
                        </linearGradient>
                    )

                    return (
                        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%" key={id}>
                            <stop offset="0%" stopColor={color} />
                        </linearGradient>
                    )
                })}
            </defs>
    )
}

export default BarDiagramDefs;