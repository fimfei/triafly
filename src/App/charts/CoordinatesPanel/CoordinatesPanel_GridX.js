import React from 'react';

import './scss/coordinates-panel-grid-x.scss';

const CoordinatesPanelGridX = props => {
    const {connector, style = {}, className = ''} = props;
    const {options} = connector;
    const {fractions, scaleTypeX = 'area'} = options;

    return (
        <div className={`coordinates-panel-grid-x${className ? ' ' + className : ''}`}>
            {fractions.map((fraction, index) => {
                if(scaleTypeX === 'line' && !index) return null;

                return (
                    <div
                        key={`grid-x-item-${index}`}
                        className="coordinates-panel-grid-x-item"
                    >
                        <div
                            className="coordinates-panel-grid-x-item-line"
                            style={style}
                        ></div>
                    </div>
                )
            })}
        </div>
    )
}

CoordinatesPanelGridX.displayName = 'CoordinatesPanelGridX';

export default CoordinatesPanelGridX;