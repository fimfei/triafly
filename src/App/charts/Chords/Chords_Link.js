import React from 'react';
import {chartsUtils} from "../chartsUtils";

import './scss/chords-link.scss';

const ChordsLink = props => {
    const {connector, link, selectedSector} = props;
    const {options} = connector;
    const {ringWidthPercent = 0} = options;
    const {from, to} = link;


    const getPath = () => {
        if(!from.angles) return null;

        const d1 = chartsUtils.getArcPath({
            radius: 50 - ringWidthPercent,
            startAngle: from.angles.from + .1,
            endAngle: from.angles.to - .1,
            controlPoints: true
        });
        const d2 = chartsUtils.getArcPath({
            radius: 50 - ringWidthPercent,
            startAngle: to.angles.from + .1,
            endAngle: to.angles.to - .1,
            controlPoints: true
        });

        const bezier1 = `C ${d1.cxEnd} ${d1.cyEnd}, ${d2.cxStart} ${d2.cyStart}, ${d2.startX} ${d2.startY}`;
        const bezier2 = `C ${d2.cxEnd} ${d2.cyEnd}, ${d1.cxStart} ${d1.cyStart}, ${d1.startX} ${d1.startY}`;
        return `${d1.path} ${bezier1} A ${d2.path.split('A')[1]} ${bezier2} Z`
    }

    const path = React.useRef(getPath());
    if(!path.current) return null;

    const opacity = selectedSector === null ? .5 : (from.index === selectedSector || to.index === selectedSector ? .5 : .05);
    console.log(selectedSector, from.index, to.index)

    return (
        <React.Fragment>
            <path
                d={path.current}
                fill="#ff0"
                opacity={opacity}
                fill={from.color}
            />
        </React.Fragment>
    )
}

export default ChordsLink;