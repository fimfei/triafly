import React from "react";
import TableCellEditorSet from "./TableCellEditor_Set";

const TableCellEditorSetMultiple = props => {

    return (
        <TableCellEditorSet {...props} isMultiSelect={true} />
    );
}

export default TableCellEditorSetMultiple;