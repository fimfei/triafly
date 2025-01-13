import React from 'react';

import './scss/chords-sector-info.scss';

const SectorInfo = props => {
    const {connector, selectedSector, inner} = props;
    const {data: {sectorsAngles, totalValues, labels}} = connector;
    const {width: innerWidth, height: innerHeight} = inner;

    const radius = Math.min(innerWidth, innerHeight) / 2 + 10;
    const angles = sectorsAngles[selectedSector];
    const angle = (angles.from + (angles.to - angles.from) / 2);
    let _angle = angle - 90;
    _angle = _angle > 180 ? _angle - 360 : _angle;
    const angleDeg = angle * (Math.PI / 180);

    const x = radius * Math.cos(angleDeg);
    const y = radius * Math.sin(angleDeg);

    const text = `${labels[selectedSector]}: ${totalValues[selectedSector]}`;

    return (
        <div
            className="chords-sector-info-wrapper"
            style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px`,
                justifyContent: _angle > 0 ? 'flex-end' : 'flex-start',
            }}
        >
            <div
                className="chords-sector-info"
            >
                {text}
            </div>
        </div>
    )
}

export default SectorInfo;
