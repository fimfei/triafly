import React from 'react';
import {FourPanels} from '../../components/FourPanels';
import {Utils, ChartGeneratorChart, ChartGeneratorMenu, ChartGeneratorFractions, ChartGeneratorCode} from '.';

import './scss/chart-generator.scss';

const ChartGenerator = props => {
    const {} = props;

    const utilsCurrent = React.useRef(new Utils(props));
    const utils = utilsCurrent.current;
    const connector = utils.connector;

    const[chart, _setChart] = React.useState(connector.chart);
    const setChart = chart => {
        connector.chart = chart;
        _setChart(chart);
    }

    const data = {connector, chart, setChart}

    const panels = {
        left: {
            top: {
                component: ChartGeneratorChart,
                props: {...data}
            },
            bottom: {
                component: ChartGeneratorMenu,
                props: {...data}
            },
        },
        right: {
            top: {
                component: ChartGeneratorFractions,
                props: {...data}
            },
            bottom: {
                component: ChartGeneratorCode,
                props: {...data}
            },
        },
    }

    return (
        <div className={`chart-generator-wrapper`}>
            <FourPanels panels={panels} idForLocalStorage="chart-generator" />
        </div>
    )
}



export default ChartGenerator;