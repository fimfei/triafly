import {chartsUtils} from "../../chartsUtils";

class Utils {
    constructor(props) {
        this.connector = {
            options: {...props},
            data: {},
            utils: this,
            rotateSector: {},
            totalAngle: 0,
            moveProgressAngle: 0,
            setTextPosition: {},
        };

//        this.fractionsToAngles();
    }

    getPartValuesSum(fraction, sectorParts) {
        let sum = 0;
        for(let sectorPart of sectorParts) {
            sum += chartsUtils.replaceValues(fraction, sectorPart.valueKey);
        }
        return sum;
    }

    fractionsToAngles({toCalculateAnglesKey, sectorParts, maximumValue}) {
        const options = this.connector.options;
        const connectorData = this.connector.data;
        const {fractions, outerRadius, innerRadius, rotate = 0} = options;

        const angles = [];

        let sum = 0;
        let maxValue = maximumValue;
        for (let fraction of fractions) {
            sum += chartsUtils.replaceValues(fraction, toCalculateAnglesKey);
            if(!maximumValue) {
                const partSum = this.getPartValuesSum(fraction, sectorParts);
                maxValue = Math.max(maxValue, partSum);
            }
        }

        const getPartData = (fraction, valueKey, offset)  => {
            const v = chartsUtils.replaceValues(fraction, valueKey);
            const value = v === undefined ? valueKey : v;
            const sectorHeightPercent = Math.round(value * 100 / maxValue);
            const sectorHeightNumber = Math.round(sectorHeightPercent * (outerRadius - innerRadius) / 100);
            const realInnerRadius = offset;
            const realOuterRadius = offset + sectorHeightNumber;
            return {value, valueKey, sectorHeightPercent, sectorHeightNumber, realInnerRadius, realOuterRadius}
        }

        let pre = Number(rotate);
        for (let i in fractions) {
            const fraction = fractions[i];
            const to = chartsUtils.replaceValues(fraction, toCalculateAnglesKey) * 360 / sum;
            const parts = [];

            for(let j in sectorParts) {
                const sectorPart = sectorParts[j];
                const {style, sectorStyle, className, offsetPercent, offsetNumber, area, format, colorKey, valueKey} = sectorPart;

                const offset = Number(j) ? parts[Number(j)-1].realOuterRadius : innerRadius;
                parts.push({
                    ...getPartData(fraction, valueKey, offset),
                    color: chartsUtils.replaceValues(fraction, sectorPart.colorKey),
                    text: chartsUtils.replaceValues(fraction, sectorPart.format),
                    style, sectorStyle, className, offsetPercent, offsetNumber, area, format, colorKey, valueKey,
                });
            }

            angles.push({
                fraction,
                from: this.round(pre),
                to: this.round(pre + to),
                parts,
//                ...(parts[0])
            });
            pre += to;
        }
        const centerX = options.diagramSize / 2;
        const centerY = centerX;

        this.connector.options = {...options, outerRadius, innerRadius, rotate, toCalculateAnglesKey, maximumValue: maxValue};
        this.connector.data = {...connectorData, angles, centerX, centerY};
    }

    round = num => Math.round(Number(num) * 10) / 10;

    getSectorPath({innerRadius, outerRadius, startAngle: start, endAngle: stop, angleGap = 0}) {
        const {centerX, centerY} = this.connector.data;

        const startAngle = start + angleGap;
        const endAngle = stop - angleGap;

        return chartsUtils.getSectorPath({
            innerRadius,
            outerRadius,
            startAngle,
            endAngle,
            centerX,
            centerY,
        })
    }

    rotateDiagram(deg, dur) {
        const functions = this.connector.rotateSector;
        for(let i in functions) functions[i](deg, dur);
    }

    setTextPosition() {
        const functions = this.connector.setTextPosition;
        for(let i in functions) functions[i]();
    }

    getStyle({style, color}) {
        const out = {};

        for(let key in style) {
            if(style[key].replace) {
                out[key] = style[key].replace(/\[COLOR\]/g, color);
            } else {
                out[key] = style[key];
            }
        }

        return out;
    }

    getAreaRadius(parts, part, area) {
        const {innerRadius, outerRadius, diagramSize} = this.connector.options;
        const {realInnerRadius, realOuterRadius} = part;

        const maxRadius = parts[parts.length - 1].realOuterRadius;

        const place = {
            real:   {r: realInnerRadius, R: realOuterRadius                  },
            max:    {r: innerRadius,     R: Math.max(outerRadius, maxRadius) },
            full:   {r: innerRadius,     R: diagramSize / 2                  },
        }
        return place[area];
    }
}

export default Utils;
