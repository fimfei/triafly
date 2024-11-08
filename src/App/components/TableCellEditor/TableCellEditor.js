import React from 'react';
import {COMMUNICATION, CONSTANTS} from "../../common";
import {
    TableCellEditorBool,
    TableCellEditorString,
    TableCellEditorFloat,
    TableCellEditorInteger,
    TableCellEditorPositive,
    TableCellEditorDate,
    TableCellEditorPeriod,
    TableCellEditorFile,
    TableCellEditorFileMultiple,
    TableCellEditorSet,
    TableCellEditorSetMultiple,
} from './';

import './scss/table-cell-editor.scss';

const TableCellEditor = props => {
    const {cell} = props;
    const {fieldTypeId, value} = cell;

    const ref = React.useRef(null);
    const hintRefCurrent = React.useRef(null);
    const startValue = React.useRef(value);

    const checkToEscape = e => {
        if (e.code == "Escape") {
            setTimeout(() => {
                cell.value = startValue.current;
                setTimeout(() => {
                    onCellBlur();
                }, 0)
            }, 100)
        }
    }

    /* eslint-disable */
    React.useEffect(() => {
        document.addEventListener('keydown', checkToEscape);
        return () => {
            document.removeEventListener('keydown', checkToEscape);
        }
    }, []);
    /* eslint-enable */

    const editors = {
        TableCellEditorBool,
        TableCellEditorString,
        TableCellEditorFloat,
        TableCellEditorInteger,
        TableCellEditorPositive,
        TableCellEditorDate,
        TableCellEditorPeriod,
        TableCellEditorFile,
        TableCellEditorFileMultiple,
        TableCellEditorSet,
        TableCellEditorSetMultiple,
    };

    const Component = editors[CONSTANTS.fieldTypesById[fieldTypeId]?.editor] || TableCellEditorString;

    const onCellBlur = () => {
        if (cell._.invalidValueFormat) {
            setTimeout(()=> {
                COMMUNICATION.notify({isError: true, text: cell._.invalidValueFormat});
            })
        }
        cell._.stopEditor();
    };

    const setEditorHint = text => {
        if(hintRefCurrent.current) {
            hintRefCurrent.current.textContent = text;
        }
    }

    const idClass = fieldTypeId ? ` table-cell-editor-${CONSTANTS.fieldTypesById[fieldTypeId].type}` : '';

    return (
        <div ref={ref} className={`table-cell-editor selected${idClass}`}>
            <div className="table-cell-editor-hint" ref={hintRefCurrent}></div>
            <Component {...props} startValue={cell.value} onCellBlur={onCellBlur} setEditorHint={setEditorHint} />
        </div>
    )
}

export default TableCellEditor;