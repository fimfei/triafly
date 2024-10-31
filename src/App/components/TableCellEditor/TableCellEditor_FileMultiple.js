import React from "react";
import {FilesPicker} from '../../widgets';

const TableCellEditorFileMultiple = props => {
    const {cell, onCellBlur, isNotMultiple = false} = props;

    const onChange = props => {
        const {newFilesData, value} = props;
        cell.value = value;
        cell.__ = {newFilesData};
        onCellBlur();
    }

    return (
        <FilesPicker
            value={cell.value}
            onChange={onChange}
            isMultiple={!isNotMultiple}
        />
    );
};

export default TableCellEditorFileMultiple;