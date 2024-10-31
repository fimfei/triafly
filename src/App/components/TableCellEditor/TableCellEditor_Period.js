import React from "react";
import {PeriodPicker} from '../../widgets';

const TableCellEditorPeriod = props => {
    const {cell} = props;

    const onChange = period => {
        cell.value = period;
        cell._.refreshCell();
    }

    return (
        <PeriodPicker
            value={cell.value}
            onChange={onChange}
        />
    );
};

export default TableCellEditorPeriod;