import React from 'react';
import {ParallelSetsSvgSide, ParallelSetsSvgLinks} from ".";

import './scss/parallel-sets-svg.scss';

const ParallelSetsSvg = props => {
    return (
        <div className="parallel-sets-center">
            <svg className="parallel-sets-svg-root" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <ParallelSetsSvgSide {...props} side="left"/>
                <ParallelSetsSvgLinks {...props}/>
                <ParallelSetsSvgSide {...props} side="right"/>
            </svg>
        </div>
    )
}

export default ParallelSetsSvg;