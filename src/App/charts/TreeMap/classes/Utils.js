import React from "react";
import {chartsUtils} from "../../chartsUtils";

class Utils {
    constructor(props) {
        this.connector = {
            utils: this,
            options: {...props},
            data: {},
            refreshItems: {},
        };

        this.getIMapItems();
    }

    getIMapItems() {
        const {fractions, labelKey, colorKey, itemsKey, itemLabelKey, itemValueKey} = this.connector.options;

        const out = [];
        let totalSum = 0;

        for (let fraction of fractions) {
            const label = chartsUtils.getValueFromObject(fraction, labelKey);
            const color = chartsUtils.getValueFromObject(fraction, colorKey);
            const items = chartsUtils.getValueFromObject(fraction, itemsKey);

            const elem = {label, color, items: []};
            let sum = 0;
            for (let item of items) {
                const label = chartsUtils.getValueFromObject(item, itemLabelKey);
                const value = chartsUtils.getValueFromObject(item, itemValueKey);
                elem.items.push({label, sum: value});
                sum += value;
            }
            elem.sum = sum;
            totalSum += sum;
            out.push(elem);
        }
        this.connector.data = {...this.connector.data, items: out, totalSum};
    }

    getTreeMap(props) {
        const {items: externalItems, ref: externalRef, totalSum: externalTotalSum, aaa} = props || {};
        const {data: {items: connectorItems, wrapperRef, totalSum: connectorTotalSum}} = this.connector;

        const isItems = !!externalRef;

        const ref = externalRef || wrapperRef.current;
        const items = externalItems || connectorItems;
        const totalSum = externalTotalSum || connectorTotalSum;

        const {width, height} = ref.getBoundingClientRect();

        const ratio = Math.max(width, height) / Math.min(width, height);
        const partsNumber = isItems ? 2 : Math.min(Math.max(2, Math.ceil(ratio)), items.length);
        const splitHorizontally = width > height;

        const parts = this.groupItems({
            partsNumber,
            splitHorizontally,
            items,
            left: 0,
            top: 0,
            width,
            height,
            totalSum,
        })

        return this.unpackParts(parts);
    }

    groupItems(props) {
        const {partsNumber, items, left, top, width, height, totalSum, splitHorizontally} = props;

        const blocks = [];

        let count = 0;
        for(let item of items) {
            blocks[count] = blocks[count] || {sum: 0, block: []};

            blocks[count].block.push(item);
            blocks[count].sum += item.sum;

            count++;
            if(count >= partsNumber) count = 0;
        }

        this.setBlockSizeAndPosition({blocks, left, top, width, height, totalSum, splitHorizontally});

        for(let i in blocks) {
            const block = blocks[i];

            if(blocks[i].block.length > 1) {
                const {left, top, width, height, sum} = block;
                blocks[i].block = this.groupItems({
                    partsNumber: 2,
                    items: block.block,
                    splitHorizontally: !splitHorizontally,
                    left, top, width, height,
                    totalSum: sum,
                });
            }
        }

        return blocks;
    }

    setBlockSizeAndPosition(props) {
        const {blocks, left, top, width, height, totalSum, splitHorizontally} = props;

        let _left = left;
        let _top = top;

        for(let block of blocks) {
            const percent = block.sum * 100 / totalSum;
            const _width = splitHorizontally ? percent * width / 100 : width;
            const _height = splitHorizontally ? height : percent * height / 100;

            block.width = _width;
            block.height = _height;
            block.left = _left;
            block.top = _top;
            if(splitHorizontally)
                _left += _width; else
                _top += _height;
        }
    }

    unpackParts(parts) {
        const out = [];

        const unpack = props => {
            const {parts} = props;

            for(let part of parts) {
                if(part.block) {
                    unpack({...part, parts: part.block} );
                } else {
                    const {left, top, width, height, sum} = props;
                    const {color, items, label} = part;
                    out.push({left, top, width, height, color, items, label, sum});
                }
            }
        }
        unpack({parts});

        return out;
    }

    getScheme(parts) {
        let out = '';
        for(let part of parts) {
            out += `${part.label} / `;
        }
        return out;
    }

}

export default Utils;