import React from 'react';

import './scss/parallel-sets-text-item.scss';

const ParallelSetsTextItem = props => {
    const {connector, isLeft, itemIndex, itemId, childrenPercent, childrenValue, label, totalPercent, selectedId} = props;
    const {data} = connector;

    let selectedChildren = null;
    let selectedIndex = null;

    if(selectedId && (itemId !== selectedId)) {
        const {children, index, isLeft: selectedIsLeft} = data.selectedIdInfo;
        if(isLeft === selectedIsLeft) {
            return null
        } else {
            selectedChildren = children;
            selectedIndex = index;
        }
    }

    const leftRightClass = isLeft ? 'is-left' : 'is-right';

    return (
        <div className={`text-item ${leftRightClass}`}>

            {selectedChildren ? (
                <div className={`text-item-children-wrapper ${leftRightClass}`}>
                    {childrenPercent.map((childPercent, childIndex) => {

                        return (
                            <div
                                key={`text-item-${itemIndex}-child-${childIndex}`}
                                className={`text-item-children-inner ${leftRightClass}`}
                                style={{height: `${childPercent}%`}}
                            >
                                {selectedIndex === childIndex && !!childrenValue[childIndex] && (
                                    <React.Fragment>
                                        <div className={`text-item-label ${leftRightClass}`}>{label}</div>
                                        <div className={`text-item-percents ${leftRightClass}`}>{`${selectedChildren.percents[itemIndex]}%`}</div>
                                    </React.Fragment>
                                )}
                            </div>
                        )
                    })}
                </div>
            ) : (
                <React.Fragment>
                    <div className={`text-item-label ${leftRightClass}`}>{label}</div>
                    <div className={`text-item-percents ${leftRightClass}`}>{`${totalPercent}%`}</div>
                </React.Fragment>
            )}
        </div>
    )
}

export default ParallelSetsTextItem;