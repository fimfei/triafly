import React from 'react';
import {
    Chart,
    Chords,
} from '../';

import './scss/chords.scss';

const CHORDS = () => {

    const fractions = [
        {org: 'AO "Корпорация "Компомаш"',  color: '#d62728', values: [     0, 100000,      0, 100000, 250000,      0]},
        {org: 'AO "НИИМП-К"',               color: '#8c564b', values: [100000,      0, 150000,      0,      0,      0]},
        {org: 'АО "НПО "Энергомаш"',        color: '#9467bd', values: [     0, 200000,      0,      0,      0,  50000]},
        {org: 'АО "СХЗ"',                   color: '#2ca02c', values: [200000,      0,      0,      0,      0,  70000]},
        {org: 'АО "ЭХО"',                   color: '#ff7f0e', values: [ 90000,      0,      0,      0,      0, 700000]},
        {org: 'АО "ИПК Машприбор"',         color: '#1f77b4', values: [     0,      0, 350000, 300000, 250000,      0]},
    ];

    return (
        <div className="bar-root chords-test">
            <Chart fractions={fractions}>
                <Chords
                    dataKey="values"
                    colorKey="color"
                    labelKey="org"
                    sectorBorderAngleGap={1}
                    ringWidthPercent={6}
                    rotate={-90}
                    dyText={1}
                    className="aaa bbb ccc"
                    fontSize={14}
                    optimizeShortLinksFirst={true}
                    oneDirectionalChords={false}
                />
            </Chart>
        </div>
    )
}

export default CHORDS;