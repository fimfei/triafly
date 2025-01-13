import React from "react";
import {chartsUtils} from "../../chartsUtils";

class Utils {
    constructor(props) {
        this.connector = {
            utils: this,
            options: {...props},
            data: {},
        };

        this.getFractionsData();
    }

    round(n) {
        return Math.round(n * 100) / 100;
    }

    getFractionsData() {
        const {fractions, dataKey, colorKey, labelKey, sectorBorderAngleGap = 0, rotate = 0, oneDirectionalChords = false} = this.connector.options;

        let totalValue = 0;
        const values = [];
        const totalValues = [];
        const colors = [];
        const labels = [];
        const totalValuesPercent = [];
        const sectorsAngles = [];

        for(let i in fractions) {
            const fraction = fractions[i];
            const color = chartsUtils.getValueFromObject(fraction, colorKey);
            const label = chartsUtils.getValueFromObject(fraction, labelKey);
            const data = chartsUtils.getValueFromObject(fraction, dataKey);

            colors.push(color);
            labels.push(label);
            values.push([...data]);

            for (let j in data) {
                const val = data[j];

                if (val) {
                    if (i === j) {
                        console.error(`ОШИБКА -- данные строк и столбцов на диагонали недопустимы`)
                    } else {
                        totalValues[j] = totalValues[j] || 0;
                        totalValues[j] += val;

                        if (oneDirectionalChords) {
                            totalValues[i] = totalValues[i] || 0;
                            totalValues[i] += val;
                        }
                    }
                }
            }
        }
        for(let val of totalValues) totalValue += val;

        let currAngle = rotate;
        let currAnglePre = rotate;
        for(let val of totalValues) {
            const percent = val * 100 / totalValue;
            currAngle = currAnglePre + 360 / 100 * percent;
            totalValuesPercent.push(this.round(percent));
            sectorsAngles.push({from: this.round(currAnglePre + sectorBorderAngleGap), to: this.round(currAngle - sectorBorderAngleGap) });
            currAnglePre = currAngle;
        }

        const links = this.getLinks(sectorsAngles, values, totalValues, colors);

        this.connector.data = {
            ...this.connector.data,
            values,
            totalValues,
            totalValue,
            totalValuesPercent,
            sectorsAngles,
            colors,
            labels,
            links,
        }
    }

    _getId(i, j) {
        return `${i}->${j}`;
    }

    getMidpointOfChord({radius = 50, centerX = 50, centerY = 50, from, to, angle: _angle}) {
        const angle = _angle === undefined ? from + (to - from) / 2 : _angle;
        const rad = angle * (Math.PI / 180);
        const x = centerX + radius * Math.cos(rad);
        const y = centerY + radius * Math.sin(rad);
        return [x, y];
    }

    getLengthBetweenChords({from1, to1, from2, to2, angle1, angle2}) {
        const [x1, y1] = this.getMidpointOfChord({from: from1, to: to1, angle: angle1});
        const [x2, y2] = this.getMidpointOfChord({from: from2, to: to2, angle: angle2});
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    getLinks(sectorsAngles, values, totalValues, colors) {
        const {optimizeShortLinksFirst = false, oneDirectionalChords = false} = this.connector.options;
        const links = [];
        const sectorContent = [];
        let maxDistance = 0;

        const getAngle = (i, value) => {
            const {from, to} = sectorsAngles[i];
            const sectorAngle = to - from;
            return this.round(value * sectorAngle / totalValues[i]);
        }

        for (let i in values) {
            for (let j in values[i]) {
                const value = values[i][j];
                const id = this._getId(i, j);
                const il = Number(i);
                const jl = Number(j);
                const distance = Math.max(il, jl) - Math.min(il, jl);

                maxDistance = Math.max(maxDistance, distance);

                if(value && (oneDirectionalChords || (j < i))) {
                    const _value = oneDirectionalChords ? value : values[j][i];
                    links.push({
                        from: {index: Number(i), totalValue: totalValues[i], id, subSectorAngle: getAngle(i, _value), color: colors[i]},
                        to: {index: Number(j), totalValue: totalValues[j], id, subSectorAngle: getAngle(j, value), color: colors[j]},
                        distance,
                        value,
                    });

                    sectorContent[i] = sectorContent[i] || {
                        from: sectorsAngles[i].from,
                        to: sectorsAngles[i].to,
                        parts: {},
                    };
                    sectorContent[i].parts[id] = {value, subSectorAngle: getAngle(i, _value)};

                    sectorContent[j] = sectorContent[j] || {
                        from: sectorsAngles[j].from,
                        to: sectorsAngles[j].to,
                        parts: {},
                    };
                    sectorContent[j].parts[id] = {value, subSectorAngle: getAngle(j, value)};
                }
            }
        }

        const checkDistance = num => {
            const check = [];
            let isEmpty = true;

            const getVariants = data => {
                const {index, subSectorAngle} = data;
                const {from, to} = sectorContent[index];
                return [{
                    middleAngle: from + subSectorAngle / 2,
                    from: from,
                    to: from + subSectorAngle,
                    newSectorAngles: {from: from + subSectorAngle, to},
                }, {
                    middleAngle: to - subSectorAngle / 2,
                    from: to - subSectorAngle,
                    to: to,
                    newSectorAngles: {from, to: to - subSectorAngle},
                }];
            }

            for(let link of links) {
                const {from, to, distance} = link;
                if(distance === num && !link.isReady) {
                    isEmpty = false;
                    const [from1, from2] = getVariants(from);
                    const [to1, to2] = getVariants(to);
                    const ch = [
                        {fromData: from1, toData: to1, length: this.getLengthBetweenChords({angle1: from1.middleAngle, angle2: to1.middleAngle})},
                        {fromData: from1, toData: to2, length: this.getLengthBetweenChords({angle1: from1.middleAngle, angle2: to2.middleAngle})},
                        {fromData: from2, toData: to1, length: this.getLengthBetweenChords({angle1: from2.middleAngle, angle2: to1.middleAngle})},
                        {fromData: from2, toData: to2, length: this.getLengthBetweenChords({angle1: from2.middleAngle, angle2: to2.middleAngle})},

                    ]
                    ch.sort((a, b) => a.length > b.length ? 1 : -1);
                    check.push({link, ...ch[0], length: ch[0].length});
                }
            }
            if(isEmpty) return false;

            check.sort((a, b) => a.length > b.length ? 1 : -1);
            const {link, fromData, toData} = check[0];
            link.isReady = true;
            link.from.angles = {
                from: fromData.from,
                to: fromData.to,
            }
            link.to.angles = {
                from: toData.from,
                to: toData.to,
            }
            const fromIndex = link.from.index;
            const toIndex = link.to.index;
            sectorContent[fromIndex] = {...sectorContent[fromIndex], ...fromData.newSectorAngles}
            sectorContent[toIndex] = {...sectorContent[toIndex], ...toData.newSectorAngles}
            return true;
        }


        const startDistance = optimizeShortLinksFirst ? 1 : maxDistance;
        const stopDistance = optimizeShortLinksFirst ? maxDistance + 1 : 0;

        for(let distance = startDistance; distance !== stopDistance;) {
            let goNext = true;
            while (goNext) goNext = checkDistance(distance);
            distance += optimizeShortLinksFirst ? 1 : -1;
        }

        return links;
    }
};

export default Utils;
