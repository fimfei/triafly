import React from 'react';
import {DatePicker} from '../../widgets';

const TableCellEditorDate = props => {
    const {cell} = props;

    const onChange = date => {
        cell.value = date;
        cell._.refreshCell();
    }

    return (
        <DatePicker
            value={cell.value}
            onChange={onChange}
            withTime={true}
        />
    );
};

export default TableCellEditorDate;