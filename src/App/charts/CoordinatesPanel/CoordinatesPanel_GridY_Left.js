import React from 'react';
import {CoordinatesPanelGridY} from '.';

export const CoordinatesPanelGridYLeft = props => {
    return (
        <CoordinatesPanelGridY {...props} linkToScale="left" />
    )
}

CoordinatesPanelGridYLeft.displayName = 'CoordinatesPanelGridYLeft';

export default CoordinatesPanelGridYLeft;