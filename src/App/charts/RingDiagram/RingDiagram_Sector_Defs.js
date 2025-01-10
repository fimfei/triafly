import React from 'react';

const RingDiagramSectorDefs = props => {
    const {connector, id, realOuterRadius, fillColor, path, clipRef, defectGradientColor = '#888'} = props;
    const {options, data} = connector;
    const {centerX, centerY} = data;
    const {innerRadius} = options;

    return (
        <svg width="100%" height="100%">
            <defs>
                <clipPath id={`clip-${id}`}>
                    <path
                        d={path.current}
                        ref={clipRef}
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
export default RingDiagramSectorDefs;