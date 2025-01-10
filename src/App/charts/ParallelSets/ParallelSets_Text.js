import React from 'react';
import {ParallelSetsTextItem} from ".";

import './scss/parallel-sets-text.scss';

const ParallelSetsText = props => {
    const {connector, side} = props;
    const {data, options, utils} = connector;
    const {verticalMarginPercent} = options;
    const {leftItemsPercent, rightItemsPercent, leftItemsChildren, rightItemsChildren, leftItems, rightItems} = data;

    const isLeft = side === 'left';
    const heightPercent = isLeft ? leftItemsPercent : rightItemsPercent;
    const itemsChildren = isLeft ? leftItemsChildren : rightItemsChildren;
    const itemsLabel = isLeft ? leftItems : rightItems;
    const gapPercent = `${verticalMarginPercent}%`;

    const itemData = {...props, isLeft}

    return (
        <div className="parallel-sets-text">
            <div className="parallel-sets-text-gap" style={{height: gapPercent}}/>
            {heightPercent.map((totalPercent, index) => {
                const doubleGapPercent = `${totalPercent - verticalMarginPercent * 2}%`;

                return (
                    <React.Fragment key={`text-${side}-item-${index}`}>
                        {!!index && (
                            <div className="parallel-sets-text-gap" style={{height: `${verticalMarginPercent * 2}%`}}/>
                        )}
                        <div
                            className="parallel-sets-text-item"
                            style={{
                                minHeight: doubleGapPercent,
                                maxHeight: doubleGapPercent,
                            }}
                        >
                            <ParallelSetsTextItem
                                {...itemData}
                                childrenPercent={itemsChildren[index].percents}
                                childrenValue={itemsChildren[index].items}
                                itemIndex={index}
                                itemId={utils.getId(isLeft, index)}
                                label={itemsLabel[index]}
                                totalPercent={totalPercent}
                            />
                        </div>
                    </React.Fragment>
                )
            })}
            <div className="parallel-sets-text-gap" style={{height: gapPercent}}/>
        </div>
    )
}

export default ParallelSetsText;