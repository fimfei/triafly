import React from 'react';
import {Popup} from '../../widgets';
import {TableCellEditor} from '../TableCellEditor';

import './scss/table-row-cell-content-editor.scss';

const TableRowCellContentEditor = props => {
    const {connector, utils, cell, cellRef, stopEditor} = props;
    const {editors = {}} = connector;
    const {cellEditor = 'internal'} = editors;

    /* eslint-disable */
    React.useEffect(() => {
        return () => {
            stopEditor();
            console.log('--- TableRowCellContentEditor')
        }
    }, []);
    /* eslint-enable */

    const clickOutsideThePopup = () => {
        console.log('clickOutsideThePopup')
        stopEditor();
        utils.setEditableCell(null);
    };

    const Editor = typeof cellEditor === 'function' ? cellEditor : (cellEditor === 'TableCellEditor' ? TableCellEditor : InternalTableCellEditor);

    cell._.popupData = {};

    console.log('+++ TableRowCellContentEditor')
    return (
        <Popup
            initiator={cellRef.current}
            notResize={true}
            fitToParent={true}
            onOutsideClick={clickOutsideThePopup}
            style={{
                background: 'transparent',
                overflow: 'visible',
                boxShadow: 'none',
            }}
            extraClass="unitable-row-cell-value-editor"
            answer={cell._.popupData}
        >
            <Editor cell={cell} />
        </Popup>
    )
}

const InternalTableCellEditor = props => {
    const {cell} = props;

    const [value, setValue] = React.useState(cell.value)

    const onChangeValue = e => {
        const v = e.target.value
        setValue(v)
        cell.value = v
        cell._.refreshCell();
    }

    return (
        <input
            className="tf_form-control tf_form-control-xs unitable-row-cell-internal-editor"
            type="text"
            value={value}
            onChange={onChangeValue}
            autoFocus={true}
        />
    )
}


export default TableRowCellContentEditor;
