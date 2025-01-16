import React from 'react';

import './scss/radar-svg-circle.scss';

const RadarSvgCircle = props => {
    const {connector, pixel} = props;
    const {data: {circles, outerRadius}} = connector;

    return (
        <React.Fragment>
            {circles.map((circle, index) => {
                const radius = circle * 50 / outerRadius;

                return (
                    <circle
                        key={`radar-circle-${index}`}
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#000"
                        strokeOpacity={.4}
                        strokeWidth={pixel}
                        filter="url(#circle-shadow)"
                    />
                )
            })}
        </React.Fragment>
    )
}

export default RadarSvgCircle;