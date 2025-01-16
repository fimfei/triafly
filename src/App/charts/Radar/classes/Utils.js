import React from "react";
import {chartsUtils} from "../../chartsUtils";

class Utils {
    constructor(props) {
        this.connector = {
            utils: this,
            options: {...props},
            data: {},

        };

        this.getCircles();
        this.getAngles();
    }

    getMaxValue() {
        const {options: {fractions, indicators, maxValue}} = this.connector;
        if(maxValue) return maxValue;

        let max = -100000;
        for(let fraction of fractions) {
            for(let indicator of indicators) {
                const value = chartsUtils.getValueFromObject(fraction, indicator.valueKey);
                max = Math.max(max, value);
            }
        }

        const countIntegerDigits = number => {
            const integerPart = Math.floor(Math.abs(number)).toString();
            return integerPart.length;
        }

        const rate = Math.max( 0, countIntegerDigits(max) - 2);
        const divider = 10 ** rate;

        return Math.ceil(max / divider) * divider;
    }

    getValueStep(maxValue) {
        const {options: {valueStep}} = this.connector;
        return valueStep ? valueStep : maxValue / 5;
    }

    getCircles() {
        const circles = [];

        const maxValue = this.getMaxValue();
        const valueStep = this.getValueStep(maxValue);
        const outerRadius = maxValue + valueStep / 2;

        let _maxValue = maxValue;
        while(_maxValue > 0) {
            circles.push(_maxValue);
            _maxValue -= valueStep;
        }

        this.connector.data = {...this.connector.data, circles, maxValue, outerRadius};
    }

    handleResize() {
        const {data: {radarWrapperRef, setPixel}} = this.connector;
        const {width, height} = radarWrapperRef.current.getBoundingClientRect();
        const scale = Math.min(width, height) / 100;
        const pixel = 1 / scale;
        setPixel(pixel);
        const firstChild = radarWrapperRef.current.firstElementChild;
        this.connector.data.outerRadiusPx = Math.min(firstChild.clientWidth, firstChild.clientHeight) / 2;
    }


    getAngles() {
        const {options: {fractions}, data} = this.connector;
        const angles = [];

        const delta = 360 / fractions.length;
        for(let i in fractions) {
            angles.push(90 - Number(i) * delta);
        }
        data.angles = angles;
        data.anglesDelta = delta;
    }

    getPolygon(key) {
        const {options: {fractions}, data: {angles, outerRadius}} = this.connector;
        const points = [];
        let polygonPoints = '';

        for(let i in fractions) {
            const fraction = fractions[i];
            const angle = angles[i] * (Math.PI / 180);
            const value = chartsUtils.getValueFromObject(fraction, key) * 50 / outerRadius;
            const x = 50 + value * Math.cos(angle);
            const y = 50 - value * Math.sin(angle);
            polygonPoints += `${x},${y} `;
            points.push([x, y]);
        }
        return {points, polygonPoints};
    }
}

export default Utils;