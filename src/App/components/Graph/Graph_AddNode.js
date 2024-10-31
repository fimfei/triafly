import React from 'react';
import {ListPicker} from "../../widgets";

import './scss/graph-add-node.scss';

const AddNode = props => {
    const {onSelect: externalOnSelect, nodes, list} = props;

    const getNodesIdsList = () => nodes.map(item => item.id);
    const nodesIdsListCurrent = React.useRef(getNodesIdsList());

    const onSelect = ({selectedValues}) => {
        externalOnSelect(selectedValues[0]);
    }

    const getList = () => {
        return list.map(item => {
            const {label} = item;

            return {
                label,
                notAvailable: nodesIdsListCurrent.current.includes(label),
            }
        })
    }

    return (
        <div className="add-node">
            <ListPicker
                label="graphAddNode"
                list={getList()}
                onChange={onSelect}
                selectedValue=""
                hideSearchBar={true}
                hideCountersBar={true}
            />
        </div>
    )
}
export default AddNode;