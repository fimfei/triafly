import React from 'react';
import {CoordinatesPanelGridY} from '.';

export const CoordinatesPanelGridYRight = props => {
    return (
        <CoordinatesPanelGridY {...props} linkToScale="right" />
    )
}

CoordinatesPanelGridYRight.displayName = 'CoordinatesPanelGridYRight';

export default CoordinatesPanelGridYRight;