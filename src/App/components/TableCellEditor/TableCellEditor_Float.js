import React from 'react';
import {UTILS as COMMON_UTILS} from '../../common';
import {TableCellEditorString, UTILS} from './';

const TableCellEditorFloat = props => {
    const {texts} = UTILS;
    const {validators} = COMMON_UTILS;

    const validator = value => {
        if (validators.float(value)) {
            return {valid: true};
        }
        return {valid: false, msg: texts.floatError};
    };
    return <TableCellEditorString {...props} validator={validator} />
};

export default TableCellEditorFloat;