import React from 'react';
import {CoordinatesPanelScaleY} from '.';

export const CoordinatesPanelScaleYLeft = props => {
    return (
        <CoordinatesPanelScaleY {...props} linkToScale="left" />
    )
}

CoordinatesPanelScaleYLeft.displayName = 'CoordinatesPanelScaleYLeft';

export default CoordinatesPanelScaleYLeft;