import React from 'react';
import {chartsUtils} from "../chartsUtils";

import './scss/radar-text.scss';

const RadarText = props => {
    const {connector} = props;
    const {data: {circles, angles, outerRadius, outerRadiusPx}, options: {fractions, labelKey}} = connector;

    return (
        <div className="radar-text-wrapper">
            {fractions.map((fraction, index) => {
                const length = outerRadiusPx + 20;

                const angleRad = (360 - angles[index]) * (Math.PI / 180);
                const x = length * Math.cos(angleRad);
                const y = length * Math.sin(angleRad);

                return (
                    <div
                        key={`radar-text-label-${index}`}
                        className="radar-text-point"
                        style={{
                            left: `${x}px`,
                            top: `${y}px`,
                        }}
                    >
                        <div className="radar-text-label">
                            {chartsUtils.getValueFromObject(fractions[index], labelKey)}
                        </div>
                    </div>
                )
            })}
            <div className="radar-text-scale">
                {circles.map((circle, index) => {
                    const x = circle * outerRadiusPx / outerRadius;

                    return (
                        <div
                            key={`radar-text-scale-${index}`}
                            className="radar-text-scale-item"
                            style={{
                                top: `-${x}px`,
                            }}
                        >
                            {circle}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RadarText;