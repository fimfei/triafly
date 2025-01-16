import React from 'react';

import './scss/chart-generator-chart.scss';

const ChartGeneratorChart = props => {
    const {connector, chart} = props;
    const {utils} = connector;

    const func = utils.getChart(chart)

    return (
        <div className="chart-generator-item chart">
            {func(connector)}
        </div>
    )
}


export default ChartGeneratorChart;