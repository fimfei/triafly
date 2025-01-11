import React from "react";
import {chartsUtils} from "../../chartsUtils";

class Utils {
    constructor(props) {
        this.connector = {
            options: {
                ...props,
                scaleXHeight: 0,
                scaleYWidth: 0,
            },
            data: {
            },
            utils: this,
        };
    }

    getChildrenData(children) {
        const options = this.connector.options;

        const internalChildrenObj = {};
        const externalChildren = [];
        const internalChildren = [
            'CoordinatesPanelScaleX',
            'CoordinatesPanelScaleY',
            'CoordinatesPanelScaleYLeft',
            'CoordinatesPanelScaleYRight',
            'CoordinatesPanelGridX',
            'CoordinatesPanelGridY',
            'CoordinatesPanelGridYLeft',
            'CoordinatesPanelGridYRight',

            'BarDiagram',
            'GraphDiagram',
            'Heatmap',
            'Candlestick',
        ];

        React.Children.map(children, child => {
            const childName = child.type.displayName || child.type.name;
            const {width, height} = child.props;

            if(childName === 'CoordinatesPanelScaleX' && height) options.scaleXHeight = height;
            if(childName === 'CoordinatesPanelScaleYLeft' && width)  options.scaleYLeftWidth  = width;
            if(childName === 'CoordinatesPanelScaleYRight' && width)  options.scaleYRightWidth  = width;

            if(internalChildren.includes(childName)) {
                if(childName === 'BarDiagram' || childName == 'GraphDiagram') {
                    internalChildrenObj.diagrams = internalChildrenObj.diagrams || [];
                    internalChildrenObj.diagrams.push(child);
                } else {
                    internalChildrenObj[childName] = internalChildrenObj[childName] || [];
                    internalChildrenObj[childName].push(child);
                }
            } else {
                externalChildren.push(child);
            }
        })
        this.connector.data.children = {internalChildrenObj, externalChildren};
        return this.connector.data.children;
    }

    calcMaxValue() {
        const {data, options} = this.connector;
        const {fractions, scaleYLeft, scaleYRight} = options;

        const calcMaxValue = (key, scaleY) => {
            const {valuesKey, valuesMaxKey, valuesMinKey, gridStepsNumber = 10, decimalPlacesNumber = 0} = scaleY;

            const mask = Math.pow(10, decimalPlacesNumber);

            if(!valuesKey && !valuesMaxKey) return;
            const valMaxKey = valuesMaxKey || valuesKey;
            const valMinKey = valuesMinKey || null;

            let max = -100000000000;
            let min =  100000000000;
            for (let fraction of fractions) max = Math.max(max, chartsUtils.replaceValues(fraction, valMaxKey));
            if(valMinKey) {
                for (let fraction of fractions) min = Math.min(min, chartsUtils.replaceValues(fraction, valMinKey));
            } else {
                min = 0;
            }

            max = (Math.round(max * mask)) / mask;
            min = (Math.round(min * mask)) / mask;

            const delta = (max - min) / gridStepsNumber;

            const arr = [];
            let val = max;
            for (let i = gridStepsNumber; i >= 0; i--) {
                arr.push((Math.round(val * mask)) / mask);
                val -= delta;
            }

            data[key] = max;
            data[key.replace('max', 'min')] = min;
            data[`${key}Delta`] = delta;
            data[`${key}Arr`] = arr;
        }

        const setMaxValue = (key, scaleData) => {
            const {maxValue, minValue = 0, gridStepsNumber = 10, decimalPlacesNumber = 0} = scaleData;
            const delta = (maxValue - minValue) / gridStepsNumber;
            const mask = Math.pow(10, decimalPlacesNumber);

            const arr = [];
            let val = maxValue;
            for (let i = 0; i <= gridStepsNumber; i++) {
                arr.push(Math.round(val * mask) / mask);
                val -= delta;
            }

            data[key] = maxValue;
            data[key.replace('max', 'min')] = minValue;
            data[`${key}Delta`] = delta;
            data[`${key}Arr`] = arr;
        }

        if(scaleYLeft) {
            if(scaleYLeft.maxValue) {
                setMaxValue('maxValueLeft', scaleYLeft);
            } else {
                calcMaxValue('maxValueLeft', scaleYLeft);
            }
            if(scaleYLeft.fixValues?.length) data.maxValueLeftArr = scaleYLeft.fixValues.reverse();
            data.scaleTypeLeft = scaleYLeft.scaleType || 'line';
        }
        if(scaleYRight) {
            if(scaleYRight.maxValue) {
                setMaxValue('maxValueRight', scaleYRight);
            } else {
                calcMaxValue('maxValueRight', scaleYRight);
            }
            if(scaleYRight.fixValues?.length) data.maxValueRightArr = scaleYRight.fixValues.reverse();
            data.scaleTypeRight = scaleYRight.scaleType || 'line';
        }
    }
}

export default Utils;
