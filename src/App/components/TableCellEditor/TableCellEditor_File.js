import React from "react";
import TableCellEditorFileMultiple from "./TableCellEditor_FileMultiple";

const TableCellEditorFile = props => {

    return (
        <TableCellEditorFileMultiple
            {...props}
            isNotMultiple={true}
        />
    );
};

export default TableCellEditorFile;