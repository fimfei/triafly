import React from "react";

class Utils {
    constructor(props) {
    }

    getTotalWidthPercent = indicators => {
        let sum = 0;
        const items = [];

        for (let indicator of indicators) {
            const {widthPercent = '1 10 1'} = indicator;
            const percents = widthPercent.trim().replace(/\s+/g, ' ').split(' ');
            percents.map(percent => sum += Number(percent))
            items.push({
                left: Number(percents[0]),
                width: Number(percents[1]),
                right: Number(percents[2]),
            });
        }

        const out = [];

        for (let item of items) {
            const {left, width, right} = item;
            out.push({
                left: left * 100 / sum,
                width: width * 100 / sum,
                right: right * 100 / sum,
            });
        }
        return out;
    }

    adjustColor(color, amount, isDarken = true) {
        const parseColor = color => {
            color = color.replace(/^#/, '');

            if (color.length === 3) {
                color = color.split('').map(c => c + c).join('');
            }

            if (color.length === 6) {
                return {
                    r: parseInt(color.slice(0, 2), 16),
                    g: parseInt(color.slice(2, 4), 16),
                    b: parseInt(color.slice(4, 6), 16)
                };
            }

            if (color.startsWith('rgb')) {
                const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
                if (match) {
                    return {
                        r: parseInt(match[1], 10),
                        g: parseInt(match[2], 10),
                        b: parseInt(match[3], 10)
                    };
                }
            }

            if (color.startsWith('hsl')) {
                const match = color.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
                if (match) {
                    const h = parseInt(match[1], 10);
                    const s = parseInt(match[2], 10);
                    const l = parseInt(match[3], 10);
                    return hslToRgb(h, s, l);
                }
            }
            return null;
        }

        function hslToRgb(h, s, l) {
            s /= 100;
            l /= 100;

            const c = (1 - Math.abs(2 * l - 1)) * s;
            const x = c * (1 - Math.abs((h / 60) % 2 - 1));
            const m = l - c / 2;

            let r = 0, g = 0, b = 0;

            if (h >= 0   && h <  60) { r = c; g = x; b = 0; } else
            if (h >= 60  && h < 120) { r = x; g = c; b = 0; } else
            if (h >= 120 && h < 180) { r = 0; g = c; b = x; } else
            if (h >= 180 && h < 240) {  r = 0; g = x; b = c ;} else
            if (h >= 240 && h < 300) { r = x; g = 0; b = c; } else
            if (h >= 300 && h < 360) { r = c; g = 0; b = x; }

            return {
                r: Math.round((r + m) * 255),
                g: Math.round((g + m) * 255),
                b: Math.round((b + m) * 255),
            };
        }

        const toHex = (r, g, b) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

        const { r, g, b } = parseColor(color);

        const factor = isDarken ? 1 - amount : 1 + amount;
        const newR = Math.min(255, Math.max(0, Math.round(r * factor)));
        const newG = Math.min(255, Math.max(0, Math.round(g * factor)));
        const newB = Math.min(255, Math.max(0, Math.round(b * factor)));

        return toHex(newR, newG, newB);
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

    rotateTextAroundCenter(el, angle) {
        const bbox = el.getBBox();
        const cx = bbox.x + bbox.width / 2;
        const cy = bbox.y + bbox.height / 2;
        el.setAttribute('transform', `rotate(${angle}, ${cx}, ${cy})`);
    }
}

export default Utils;
