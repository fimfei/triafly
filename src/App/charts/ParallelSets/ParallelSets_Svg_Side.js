import React from 'react';

import './scss/parallel-sets-svg-side.scss';

const ParallelSetsSvgSide = props => {
    const {connector, side, selectedId, setSelectedId} = props;
    const {data, utils, options} = connector;
    const {leftItemsChildrenPercent, rightItemsChildrenPercent, oppositeElements} = data;
    const {minHeightPercent} = options;

    const isLeft = side === 'left';
    const positions = isLeft ? leftItemsChildrenPercent : rightItemsChildrenPercent;

    const onClick = item => () => setSelectedId(item.id);

    return (
        <React.Fragment>
            {positions.map((item, index) => {
                const {x, y, width, height, fill, itemValue} = item;
                if(!itemValue) return null;

                let opacity = 1;
                const id = item.id;

                if(
                    selectedId &&
                    id !== selectedId &&
                    (
                        !oppositeElements[selectedId] ||
                        !oppositeElements[selectedId][id] ||
                        (utils.decomposeId(selectedId).index !== item.subIndex)
                    )
                ) {
                        opacity = .1;

                }

                const params = {x, y, width, height: Math.max(minHeightPercent, height), fill};

                return (
                    <rect
                        key={`svg-${side}-side-${index}`}
                        {...params}
                        strokeWidth={0}
                        onClick={onClick(item)}
                        opacity={opacity}
                    />
                )
            })}
        </React.Fragment>
    )
}

export default ParallelSetsSvgSide;