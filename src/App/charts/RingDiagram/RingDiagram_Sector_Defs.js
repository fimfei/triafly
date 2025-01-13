import React from 'react';

const RingDiagramSectorDefs = props => {
    const {id, path, clipRef} = props;


    return (
        <defs>
            <clipPath id={`clip-${id}`}>
                <path
                    d={path.current}
                    ref={clipRef}
                />
            </clipPath>
        </defs>
    );
};
export default RingDiagramSectorDefs;