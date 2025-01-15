import React from 'react';
import {Utils, ParallelSetsSvg, ParallelSetsText} from ".";

import './scss/parallel-sets.scss';

const ParallelSets = props => {
    const utilsCurrent = React.useRef(new Utils(props));
    const utils = utilsCurrent.current;
    const connector = utils.connector;

    const [random, setRandom] = React.useState(1);
    connector.refresh = () => setRandom(Math.round(Math.random() * 100000));

    const [selectedId, _setSelectedId] = React.useState(null);
    const setSelectedId = _id => {
        const id = _id === selectedId ? null : _id;
        if(id) {
            const {index, isLeft} = utils.decomposeId(_id);
            const {leftItemsChildren, rightItemsChildren} = connector.data;
            const itemsChildren = isLeft ? leftItemsChildren : rightItemsChildren;
            connector.data.selectedIdInfo = {
                children: itemsChildren[index],
                isLeft,
                index,
            };
        }
        _setSelectedId(id);
    }

    const data = {connector, random, selectedId, setSelectedId};

    return (
        <div className="parallel-sets-wrapper">
            <ParallelSetsText side="left" {...data} />
            <ParallelSetsSvg {...props} {...data} />
            <ParallelSetsText side="right" {...data} />
        </div>
    )
}

export default ParallelSets;