import React from "react";
import {chartsUtils} from "../../chartsUtils";

class Utils {
    constructor(props) {
        this.connector = {
            utils: this,
            options: {...props},
            data: {},
        };
        this.setOriginalFractions();
        this.getSidesData();
        this.getLinksData();
        this.getOppositeElements();
    }

    getOppositeElements() {
        const {originalFractions} = this.connector.data;
        const out = {};

        for(let i in originalFractions) {
            const fraction = originalFractions[i];
            const lefId = this.getId(true, i);

            for(let j in fraction) {
                const value = fraction[j];
                const rightId = this.getId(false, j);

                if(value) {
                    out[rightId] = out[rightId] || {};
                    out[lefId] = out[lefId] || {};
                    out[rightId][lefId] = true;
                    out[lefId][rightId] = true;
                }
            }
        }
        this.connector.data.oppositeElements = out;
    }

    getSidesData(_fractions) {
        const {options, data} = this.connector;
        const {originalFractions, originalColors: colors, originalLeftItems: leftItems} = data;
        const {rightItems} = options;
        const fractions = _fractions || originalFractions;

        let totalValue = 0;
        const leftItemsTotal = [];
        const rightItemsTotal = [];
        const rightItemsChildren = [];
        const leftItemsChildren = [];

        for(let i in fractions) {
            const fraction = fractions[i];
            leftItemsTotal[i] = leftItemsTotal[i] || 0;

            //const data = chartsUtils.getValueFromObject(fraction, dataKey);

            leftItemsChildren[i] = {items: fraction, total: 0};

            for(let j in fraction) {
                const val = fraction[j];

                totalValue += val;

                rightItemsTotal[j] = rightItemsTotal[j] || 0;
                rightItemsTotal[j] += val;
                leftItemsTotal[i] += val;

                leftItemsChildren[i].total += val;

                rightItemsChildren[j] = rightItemsChildren[j] || {items: [], total: 0};
                rightItemsChildren[j].items.push(val);
                rightItemsChildren[j].total += val;
            }
        }

        const getPercent = arr => {
            const out = [];
            for(let item of arr) {
                out.push(Math.round(item * 100 / totalValue * 10) / 10);
            }
            return out;
        }

        const getPositions = (heightPercent, isLeft) => {
            const {verticalMarginPercent, rectWidthPercent} = this.connector.options;

            const out = [];
            let y = verticalMarginPercent;
            const x = isLeft ? 0 : 100 - rectWidthPercent;

            for(let item of heightPercent) {
                const width = rectWidthPercent;
                const height = item - verticalMarginPercent * 2;

                out.push({x, y, width, height});
                y += item;
            }
            return out;
        }

        const childrenValuesToPercent = (children, itemsPosition, colors, isLeft) => {
            const out = [];

            const childValuesToPercent = (ch, pos, index) => {
                const {x, y, width, height} = pos;
                let _y = y;

                const round = num => Math.round(num * 10) / 10;

                const {items, total} = ch;
                const percents = [];
                for(let i in items) {
                    const item = items[i];
                    const percent = round(item * 100 / total);
                    percents.push(percent);
                    const _height = round(height / 100 * percent);
                    const fill = isLeft ? colors[index] : colors[i];
                    out.push({
                        x,
                        width,
                        y: round(_y),
                        height: _height,
                        fill,
                        children,
                        ch,
                        index,
                        itemValue: item,
                        subIndex: Number(i),
                        isLeft, id: this.getId(isLeft, index)}
                    );
                    _y += _height;
                }
                ch.percents = percents;
            }

            for(let i in children) {
                const child = children[i];
                childValuesToPercent(child, itemsPosition[i], Number(i));
            }
            return out;
        }

        const leftItemsPercent = getPercent(leftItemsTotal);
        const rightItemsPercent = getPercent(rightItemsTotal);
        const leftItemsPosition = getPositions(leftItemsPercent, true);
        const rightItemsPosition = getPositions(rightItemsPercent, false);
        const leftItemsChildrenPercent = childrenValuesToPercent(leftItemsChildren, leftItemsPosition, colors, true);
        const rightItemsChildrenPercent = childrenValuesToPercent(rightItemsChildren, rightItemsPosition, colors, false);

        this.connector.data = {
            ...this.connector.data,
//            totalValue,
//            leftItemsTotal,
//            rightItemsTotal,
            leftItems,
            rightItems,
            leftItemsChildren,
            rightItemsChildren,
//            leftItemsPosition,
//            rightItemsPosition,
            leftItemsPercent,
            rightItemsPercent,
            leftItemsChildrenPercent,
            rightItemsChildrenPercent,
            colors,
        }
    }

    getId(isLeft, index) {
        return `${isLeft ? 'left' : 'right'}-${index}`;
    }

    decomposeId(id) {
        const arr = id.split('-');
        return {
            isLeft: arr[0] === 'left',
            index: Number(arr[1]),
        };
    }

    getLinksData() {
        const {data} = this.connector;
        const {leftItems, rightItems, leftItemsChildrenPercent, rightItemsChildrenPercent} = data;

        const out = [];
        const leftLength = leftItems.length;
        const rightLength = rightItems.length;

        for(let i in leftItems) {
            for(let j in rightItems) {
                const left = leftItemsChildrenPercent[Number(i) * rightLength + Number(j)];
                const right = rightItemsChildrenPercent[Number(j) * leftLength + Number(i)];
                const link = {
                    left,
                    right,
                    leftItemName: leftItems[i],
                    rightItemName: rightItems[j],
                    id: {
                        [left.id]: 'left',
                        [right.id]: 'right'
                    },
                }
                out.push(link);
            }
        }
        this.connector.data.linksData = out;
        return out;
    }

    getLinkPath(item) {
        const {minHeightPercent} = this.connector.options;
        const {
            left: {x: leftX, y: leftY, width: leftWidth, height: _leftHeight, fill, itemValue: leftItemValue},
            right: {x: rightX, y: rightY, width: rightWidth, height: _rightHeight, itemValue: rightItemValue},
        } = item;

        const leftHeight = leftItemValue ? Math.max(minHeightPercent, _leftHeight) : 0;
        const rightHeight = rightItemValue ? Math.max(minHeightPercent, _rightHeight) : 0;

        const x1 = leftX + leftWidth;
        const y1 = leftY;
        const x2 = x1;
        const y2 = y1 + leftHeight;
        const x4 = rightX;
        const y4 = rightY;
        const x3 = x4;
        const y3 = y4 + rightHeight;
        const deltaX = (rightX - (leftX + leftWidth)) / 2;

        return `M ${x1},${y1} ` +
            `L ${x2},${y2} ` +
            `C ${x2 + deltaX},${y2} ${x3 - deltaX},${y3} ${x3},${y3} ` +
            `L ${x4},${y4} ` +
            `C ${x4 - deltaX},${y4} ${x1 + deltaX},${y1} ${x1},${y1} ` +
            `Z`;
    }

    setOriginalFractions() {
        const {options: {fractions, dataKey, leftItemsKey, colorKey}} = this.connector;
        const originalFractions = [];
        const originalLeftItems = [];
        const originalColors = [];

        for(let fraction of fractions) {
            const data = chartsUtils.getValueFromObject(fraction, dataKey);
            originalFractions.push(data);
            originalLeftItems.push(chartsUtils.getValueFromObject(fraction, leftItemsKey));
            originalColors.push(chartsUtils.getValueFromObject(fraction, colorKey));
        }
        this.connector.data = {
            ...this.connector.data,
            originalFractions,
            originalLeftItems,
            originalColors,
        };
    }
}

export default Utils;