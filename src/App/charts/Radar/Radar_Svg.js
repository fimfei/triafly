import React from 'react';
import {RadarSvgCircles, RadarSvgRays, RadarSvgGraphs} from ".";

import './scss/radar-svg.scss';

const RadarSvg = props => {
    return (
        <div className="radar-svg-wrapper">
            <svg
                className="parallel-sets-svg-root"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
            >
                <filter id="circle-shadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation=".6" result="blur" />
                    <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
                    <feMerge>
                        <feMergeNode in="offsetBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="graph-shadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                    <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
                    <feMerge>
                        <feMergeNode in="offsetBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <RadarSvgCircles {...props} />
                <RadarSvgRays {...props} />
                <RadarSvgGraphs {...props} />
            </svg>
        </div>
    )
}

export default RadarSvg;