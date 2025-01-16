import React from "react";
import {codes as codesList} from './codes';
import {fractions as fractionsList} from './fractions';
import {charts as chartsList} from './charts';
import {chartsData as chartsDataList} from './chartsData';

class Utils {
    constructor() {
        this.connector = {
            utils: this,
            chart: 'chords',
        }
    }

    jsonStringify(obj) {
        return JSON.stringify(obj)
            .replace(/\\"/g, '|||')
            .replace(/"/g, "'")
            .replace(/\|\|\|/g, '"')
            .replace(/,/g, ', ')

    }

    getFractionsData(fractions) {
        console.log('fractions', fractions)
        const transpose = array => {
            return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
        }

        const testInt = input => {
            const regex = /^-?\d+(\.\d+)?([ ,]*)$/;
            return regex.test(input);
        }

        const _out = [];
        for (let fraction of fractions) {
            const json = JSON.stringify(fraction, null, 1)
                .replace(/"([^"]+)":/g, '$1:')
                .replace(/: "([^"\\]*(\\.[^"\\]*)*)"/g, ": '$1'")
                .replace(/\\"/g, '"')
                .replace(/\s+/g, ' ').trim()
                .replace(/\[\s*([\s\S]*?)\s*\]/g, '[$1]')
                .replace(/\{\s/g, '{')
                .replace(/\s\}/g, '}')
                .replace(/, /g, ', <!>')
                .replace(/ \[/g, ' [<!>')
                .replace(/\]/g, '<!>]')
                .replace(/\}/g, '<!>}')

            const arr = json.split('<!>')
            _out.push(arr);
        }

        const out = transpose(_out);

        const isInteger = [];
        for(let i in out) {
            isInteger[i] = true;
            for(let j in out[i]) {
                if(!testInt(out[i][j])) isInteger[i] = false;
            }
        }
        return {out, isInteger}
    }

    getFractions(chart) {
        return fractionsList[chart];
    }

    getCode(chart) {
        return codesList[chart];
    }

    getChart(chart) {
        return chartsList[chart];
    }

    getChartData(chart) {
        const data = chartsDataList[chart];
        const out = {};
        for(let i in data) {
            if(!data[i].notParameter) {
                out[data[i].key] = data[i].value;
            }
        }
        return out;
    }

    getChartFullData(chart) {
        return chartsDataList[chart];
    }
};

export default Utils;
