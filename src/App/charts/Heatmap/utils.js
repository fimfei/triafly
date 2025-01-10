import {chartsUtils} from "../chartsUtils";

export const utils = {
    getMinMax: ({fractions, valuesArrayKey, externalMinValue, externalMaxValue}) => {
        const calcMin = externalMinValue === undefined;
        const calcMax = externalMaxValue === undefined;

        if(!calcMin && !calcMax) return [externalMinValue, externalMaxValue];

        let min = undefined;
        let max = undefined;

        for(let fraction of fractions) {
            const arr = chartsUtils.getValueFromObject(fraction, valuesArrayKey);
            for(let item of arr) {
                if(calcMin && (min === undefined || item < min)) min = item;
                if(calcMax && (max === undefined || item > max)) max = item;
            }
        }
        return [calcMin ? min : externalMinValue, calcMax ? max : externalMaxValue];
    },

    getColorByValue: ({temperature, minMax, value}) => {
        const [min, max] = minMax;
        const blocksNumber = temperature.length - 1;
        const blocksDelta = (max - min) / blocksNumber;

        if(value < min) return temperature[0];
        if(value > max) return temperature[blocksNumber];


        const block = Math.floor((value - min) / blocksDelta);
        if(block >= blocksNumber) return temperature[blocksNumber];

        const interpolateColor = (valueFrom, colorFrom, valueTo, colorTo, value) => {
            const hexToRgb = (hex) => {
                hex = hex.replace("#", "");

                if (hex.length === 3) {
                    hex = hex
                        .split("")
                        .map((char) => char + char)
                        .join("");
                }

                const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result
                    ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16),
                    }
                    : null;
            };

            const rgbToHex = (r, g, b) =>
                `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

            const fromRgb = hexToRgb(colorFrom);
            const toRgb = hexToRgb(colorTo);

            if (!fromRgb || !toRgb) {
                throw new Error("Неверный формат цвета");
            }

            const t = (value - valueFrom) / (valueTo - valueFrom);

            const r = Math.round(fromRgb.r + t * (toRgb.r - fromRgb.r));
            const g = Math.round(fromRgb.g + t * (toRgb.g - fromRgb.g));
            const b = Math.round(fromRgb.b + t * (toRgb.b - fromRgb.b));

            return rgbToHex(r, g, b);
        }

        const valueFrom = min + blocksDelta * block;
        const valueTo = valueFrom + blocksDelta;
        const offset = valueFrom + (value - min) - (block * blocksDelta);
        const colorFrom = temperature[block];
        const colorTo = temperature[block + 1];

        const color = interpolateColor(valueFrom, colorFrom, valueTo, colorTo, offset);
        return color
    },

    getMixColor: props => {
        const {from, to, percent: percent1} = props;
        const percent2 = 100 - percent1;

        function hexToRgb(hex) {
            if (hex.length === 4) {
                hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
            }

            const bigint = parseInt(hex.slice(1), 16);
            return [
                (bigint >> 16) & 255,
                (bigint >> 8) & 255,
                bigint & 255
            ];
        }

        const rgbToHex = rgb => {
            return (
                '#' +
                rgb
                    .map(value => Math.round(value).toString(16).padStart(2, '0'))
                    .join('')
            );
        }

        const rgb1 = hexToRgb(from);
        const rgb2 = hexToRgb(to);

        const mixedR = (rgb1[0] * (percent1 / 100)) + (rgb2[0] * (percent2 / 100));
        const mixedG = (rgb1[1] * (percent1 / 100)) + (rgb2[1] * (percent2 / 100));
        const mixedB = (rgb1[2] * (percent1 / 100)) + (rgb2[2] * (percent2 / 100));

        return rgbToHex([mixedR, mixedG, mixedB]);
    },

    getBackgroundSmoothVertical: (colors, index1, index2) => {
        const color = colors[index1][index2];
        const preColor = index2 ? colors[index1][index2 - 1] : color;
        const nextColor = index2 === (colors[index1].length - 1) ? color: colors[index1][index2 + 1];

        const leftMixColor = utils.getMixColor({from: preColor, to: color, percent: 50});
        const rightMixColor = utils.getMixColor({from: color, to: nextColor, percent: 50});

        return `linear-gradient(to bottom, ${leftMixColor}, ${color}, ${rightMixColor})`
    },

    getBackgroundSmoothHorizontal: (colors, index1, index2) => {
        const color = colors[index1][index2];
        const preColor = index1 ? colors[index1 - 1][index2] : color;
        const nextColor = index1 === (colors.length - 1) ? color: colors[index1 + 1][index2];

        const leftMixColor = utils.getMixColor({from: preColor, to: color, percent: 50});
        const rightMixColor = utils.getMixColor({from: color, to: nextColor, percent: 50});

        return `linear-gradient(to right, ${leftMixColor}, ${color}, ${rightMixColor})`
    },

    getBackgroundSmoothBoth: (colors, index1, index2) => {
        const color = colors[index1][index2];
        const preColor = index1 ? colors[index1 - 1][index2] : color;
        const nextColor = index1 === (colors.length - 1) ? color: colors[index1 + 1][index2];

        const leftMixColor = utils.getMixColor({from: preColor, to: color, percent: 50});
        const rightMixColor = utils.getMixColor({from: color, to: nextColor, percent: 50});

        return `linear-gradient(to right, ${leftMixColor}, ${color}, ${rightMixColor})`
    }
};


utils.fractionsToColors = props => {
    const {fractions, minMax, valuesArrayKey, temperature, smooth} = props;

    const out = [];

    for(let fraction of fractions) {
        const arr = chartsUtils.getValueFromObject(fraction, valuesArrayKey);
        const outItem = [];

        for(let item of arr) {
            const color = utils.getColorByValue({temperature, minMax, value: item});
            outItem.push(color);
        }
        out.push(outItem);
    }

    const getBothArr = () => {
        const bothOut = [];
        let percent = 50;

        switch(smooth) {
            case 'super-both': percent = 25; break;
            case 'extra-both': percent = 10; break;
            default: break;
        }

        for(let i in out) {
            const index1 = Number(i);
            const arr = out[i];
            const outArr = [];

            for(let j in arr) {
                const index2 = Number(j);

                const color = arr[j];
                let preColor = index2 ? out[index1][index2 - 1] : color;
                preColor = utils.getMixColor({from: preColor, to: color, percent: 50})
                let nextColor = index2 === (arr.length - 1) ? color :  out[index1][index2 + 1];
                nextColor = utils.getMixColor({from: nextColor, to: color, percent: 50})

                for(let p = 100; p >= 0; p -= percent) outArr.push(utils.getMixColor({from: preColor, to: color, percent: p}));
                for(let p = 100; p >= 0; p -= percent) outArr.push(utils.getMixColor({from: color, to: nextColor, percent: p}));
            }
            bothOut.push(outArr);
        }
        return bothOut;
    }

    const bothTypes = ['both', 'super-both', 'extra-both']

    if(bothTypes.includes(smooth)) {
        return getBothArr();
    }

    return out;
};


