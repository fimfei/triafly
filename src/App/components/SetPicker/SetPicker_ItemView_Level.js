import React from 'react';
import UTILS from "../../common/utils";

const SetPickerItemViewLevel = ({...props}) => {
    const {item, options, deltaLevel} = props;
    const {selectedRoots: _selectedRoots} = options;
    const {level: _level, l, id, hasChildren} = item;

    const empty = !id;
    let level = empty ? l : _level;
    level += deltaLevel || 0;
    const selectedRoots = !(_selectedRoots === false);

    const arr = UTILS.monoArray(level + (!hasChildren && selectedRoots), true);

    return (
        <React.Fragment>
            {arr.map(() => <div className="s-em"></div>)}
        </React.Fragment>
    )
}
export default SetPickerItemViewLevel;
