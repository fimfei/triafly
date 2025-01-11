import React from 'react';
import {utils} from "./utils";
import {HeatmapPanel} from ".";

import './scss/heatmap.scss';

const Heatmap = props => {
    const {
        connector, coordinatesPanelId, valuesArrayKey, temperature = [], temperaturePanel, smooth = 'none',
        style = {}, className = '', minValue: externalMinValue, maxValue: externalMaxValue,
        linkToScale = 'left',
    } = props;
    const {options} = connector;
    const {fractions, scaleYLeft, scaleYRight} = options;
    const {show = false} = temperaturePanel;

    const heatmapLength = linkToScale === 'right' ? scaleYRight.fixValues?.length : scaleYLeft.fixValues?.length;

    console.log('--->', heatmapLength, props)

    const [showPanel, setShowPanel] = React.useState(false);
    const [minMax, setMinMax] = React.useState(utils.getMinMax({fractions, valuesArrayKey, externalMinValue, externalMaxValue}));
    const [colors, setColors] = React.useState(null);

    React.useEffect(() => {
        setShowPanel(show);
        setColors(utils.fractionsToColors({fractions, minMax, valuesArrayKey, temperature, smooth}));
    }, []);

    if(temperature.length < 2 || !heatmapLength) return null;

    return (
        <React.Fragment>
            {colors && (
                <div className={`heatmap-root${className ? ' ' + className : ''}`} style={style}>
                    <div className={`heatmap-wrapper`}>
                        {colors.map((colorsItems, index) => {
                            return (
                                <div
                                    key={`heatmap-column-${index}`}
                                    className="heatmap-column"
                                >
                                    {colorsItems.map((color, itemIndex) => {
                                        let background;

                                        switch(smooth) {
                                            case 'vertical':
                                                background = utils.getBackgroundSmoothVertical(colors, index, itemIndex);
                                                break;
                                            case 'horizontal':
                                            case 'both':
                                            case 'super-both':
                                            case 'extra-both':
                                                background = utils.getBackgroundSmoothHorizontal(colors, index, itemIndex);
                                                break;
                                            default:
                                                background = color;
                                                break;
                                        }

                                        return (
                                            <div
                                                key={`heatmap-item-${index}-${itemIndex}`}
                                                className="heatmap-item"
                                                style={{background}}
                                            >
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    {showPanel && (
                        <HeatmapPanel
                            temperature={temperature}
                            minMax={minMax}
                            className={className}
                            coordinatesPanelId={coordinatesPanelId}
                            temperaturePanel={temperaturePanel}
                        />
                    )}
                </div>
            )}
        </React.Fragment>
    )
}

Heatmap.displayName = 'Heatmap';

export default Heatmap;