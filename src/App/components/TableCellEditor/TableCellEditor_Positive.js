import React from 'react';
import {UTILS as COMMON_UTILS} from '../../common';
import {TableCellEditorString, UTILS} from './';

const TableCellEditorPositive = props => {
    const {texts} = UTILS;
    const {validators} = COMMON_UTILS;

    const validator = value => {
        if (validators.positive(value)) {
            return {valid: true};
        }
        return {valid: false, msg: texts.positiveError};
    };
    return <TableCellEditorString {...props} validator={validator} />
};

export default TableCellEditorPositive;