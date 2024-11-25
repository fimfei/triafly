import React from 'react';
import {DatePicker} from '../../widgets';

const TableCellEditorDate = props => {
    const {cell} = props;

    const onChange = date => {
        if(date == null) return;

        cell.value = date;
        cell._.refreshCell();
    }

    return (
        <DatePicker
            value={cell.value}
            onChange={onChange}
            withTime={true}
            autoOpen={true}
        />
    );
};

export default TableCellEditorDate;