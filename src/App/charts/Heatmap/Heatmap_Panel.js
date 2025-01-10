import React from 'react';
import ReactDOM from "react-dom";

import './scss/heatmap-panel.scss';

const HeatmapPanel = props => {
    const {temperature, minMax, className, coordinatesPanelId, temperaturePanel} = props;
    const {type: panelType = 'horizontal', style: panelStyle} = temperaturePanel;

    const isVertical = panelType === 'vertical';

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div className={`heatmap-panel-wrapper ${panelType}${className ? ' ' + className : ''}`}>
                    {temperature.map((item, index) => {
                        const partsNumber = temperature.length - 1;
                        if(index === partsNumber) return null;

                        const [min, max] = minMax;
                        const delta = (max - min) / partsNumber;
                        const nextItem = temperature[index + 1];
                        const value = Math.round((min + delta * index) * 10) / 10;

                        return (
                            <div
                                key={`heatmap-panel-item-${index}`}
                                className="heatmap-panel-item"
                                style={{
                                    background: `linear-gradient(to ${isVertical ? 'top' : 'right'}, ${item}, ${nextItem})`,
                                }}
                            >
                                <div className="heatmap-panel-item-value">
                                    <div className="heatmap-panel-item-text">
                                        {value}
                                    </div>
                                </div>
                                {index === (partsNumber - 1) && (
                                    <div className="heatmap-panel-item-value last">
                                        <div className="heatmap-panel-item-text">
                                            {Math.round(max * 10) / 10}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>,
                document.getElementById(coordinatesPanelId)
            )}
        </React.Fragment>
    )
}

export default HeatmapPanel;