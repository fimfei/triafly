import React from 'react';
import {Chords, ParallelSets} from "../../index";

export const charts = {
    chords: connector => {
        const {utils, chart} = connector;

        const fractions = utils.getFractions(chart);
        const data = utils.getChartData(chart);

        return (
            <Chords fractions={fractions} {...data} />
        )
    },
    parallel: connector => {
        const {utils, chart} = connector;

        const fractions = utils.getFractions(chart);
        const data = utils.getChartData(chart);

        return (
            <ParallelSets fractions={fractions} {...data} />
        )
    },
    heatmap: () => null,
}