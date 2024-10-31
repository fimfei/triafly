import React from 'react';
import {UTILS as COMMON_UTILS} from '../../common';
import {TableCellEditorString, UTILS} from './';

const TableCellEditorInteger = props => {
    const {texts} = UTILS;
    const {validators} = COMMON_UTILS;

    const validator = value => {
        if (validators.int(value)) {
            return {valid: true};
        }
        return {valid: false, msg: texts.integerError};
    };
    return <TableCellEditorString {...props} validator={validator} />
};

export default TableCellEditorInteger;