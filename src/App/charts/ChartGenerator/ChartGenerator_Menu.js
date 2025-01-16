import React from 'react';

import './scss/chart-generator-menu.scss';

const ChartGeneratorMenu = props => {
    const {connector, chart, setChart} = props;
    const {} = connector;

    const menu = [
        {label: 'Хорды', chart: 'chords'},
        {label: 'Параллельные наборы', chart: 'parallel'},
        {label: 'Тепловая карта', chart: 'heatmap'},
    ];

    return (
        <div className="chart-generator-item menu">
            <div className="menu-wrapper">
                <div className="menu-items">
                    {menu.map((item, index) => {

                        return (
                            <div
                                key={`menu-item-${index}`}
                                className={`menu-item${item.chart === chart ? ' selected' : ''}`}
                                onClick={() => setChart(item.chart)}
                            >
                                {item.label}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default ChartGeneratorMenu;