import React from 'react';
import {
    Chart,
    ParallelSets,
} from '../';

import './scss/parallel.scss';

const PARALLEL = () => {

    const fractions = [
        {year: 'апрель 2017г.',   color: '#d62728', values: [ 345,    0, 567,  354]},
        {year: 'май 2017г.',      color: '#8c564b', values: [2036,  567,   1,  478]},
        {year: 'июнь 2017г.',     color: '#9467bd', values: [  0,     1,   1, 1476]},
        {year: 'июль 2017г.',     color: '#2ca02c', values: [ 456,  333, 444,  555]},
        {year: 'август 2017г.',   color: '#ff7f0e', values: [ 365, 1000,   0,  543]},
        {year: 'сентябрь 2017г.', color: '#1f77b4', values: [ 765,  654, 543,  432]},
    ];

    return (
        <div className="bar-root parallel-test">
            <Chart fractions={fractions}>
                <ParallelSets
                    rightItems={['Газпром', 'Роснефть', 'Сбербанк', 'Яндекс']}
                    leftItemsKey="year"
                    dataKey="values"
                    colorKey="color"
                    verticalMarginPercent={2}
                    rectWidthPercent={10}
                    minHeightPercent={.2}
                />
            </Chart>
        </div>
    )
}

export default PARALLEL;