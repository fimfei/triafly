import React from 'react';

const RingDiagramDefs = () => {

    return (
        <svg width="100%" height="100%">
        <defs>
            <radialGradient id="edge-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0 }} />
                <stop offset="90%" style={{ stopColor: '#fff', stopOpacity: 0 }} />
                <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0.6 }} />
            </radialGradient>
            <linearGradient id="linearGradient" x1="0" y1="0" x2="3" y2="3" spreadMethod="repeat" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="50%" stopColor="#fff" />
                <stop offset="51%" stopColor="#f00" />
                <stop offset="70%" stopColor="#f00" />
                <stop offset="71%" stopColor="#fff" />
                <stop offset="100%" stopColor="#fff" />
            </linearGradient>
        </defs>
        </svg>
    );
};
export default RingDiagramDefs;