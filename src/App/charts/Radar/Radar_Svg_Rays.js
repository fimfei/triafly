import React from 'react';

import './scss/radar-svg-rays.scss';

const RadarSvgRays = props => {
    const {connector, pixel} = props;
    const {data: {angles}} = connector;

    return (
        <React.Fragment>
            {angles.map((angle, index) => {
                const angleRad = angle * (Math.PI / 180);
                const x2 = 50 + 50 * Math.cos(angleRad);
                const y2 = 50 - 50 * Math.sin(angleRad);

                return (
                    <line
                        key={`radar-ray-${index}`}
                        x1="50"
                        y1="50"
                        x2={x2}
                        y2={y2}
                        stroke="#888"
                        strokeWidth={2 * pixel}
                    />
                )
            })}
        </React.Fragment>
    )
}

export default RadarSvgRays;