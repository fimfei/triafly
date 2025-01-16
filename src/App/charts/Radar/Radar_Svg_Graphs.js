import React from 'react';

import './scss/radar-svg-graphs.scss';

const RadarSvgGraphs = props => {
    const {connector, pixel} = props;
    const {utils, options: {indicators}} = connector;

    return (
        <React.Fragment>
            {indicators.map((indicator, index) => {
                const {points, polygonPoints} = utils.getPolygon(indicator.valueKey);
                const color = indicator.color;

                return (
                    <React.Fragment key={`radar-graph-${index}`}>
                        <polygon
                            points={polygonPoints}
                            fill={color}
                            fillOpacity={.1}
                            stroke={color}
                            strokeWidth={2 * pixel}
                            strokeOpacity={.6}
                            filter="url(#graph-shadow)"
                        />
                        {points.map((point, pointIndex) => {
                            const [cx, cy] = point;

                            return (
                                <circle
                                    key={`radar-graph-${index}-point-${pointIndex}`}
                                    cx={cx}
                                    cy={cy}
                                    r={pixel * 4}
                                    fill={color}
                                    stroke="none"
                                />
                            )
                        })}
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

export default RadarSvgGraphs;