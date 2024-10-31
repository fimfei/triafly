import React from 'react';
import {createPortal} from 'react-dom';
import {Popup, ListPicker} from '../../widgets';
import {CONSTANTS} from '../../common';

import './scss/table-cell-editor-bool.scss';

const {booleanItems} = CONSTANTS;

const TableCellEditorBool = props => {
    const {cell, onCellBlur} = props;

    const inputRef = React.useRef(null);

    const onChangeValue = data => {
        cell.value = data.selectedValues[0];
        cell.server_value = booleanItems.find(item => item.name === data.selectedValues[0]).serverValue; //передача серверного значения
        cell._.refreshCell();

        onCellBlur();
    };

    return (
        <div className="tce-bool" ref={inputRef}>
            {cell.value}
            {createPortal(
                <Popup
                    initiator={cell._.wrapperRefCurrent.current}
                    autoSize={true}
                    id={'boolean'}
                    minWidth="200"
                    minHeight="55"
                    maxHeight="55"
                    autoSize={true}
                    notResize={true}
                    onOutsideClick={() => {}}
                >
                    <ListPicker
                        {...props}
                        label='boolean'
                        list={booleanItems.map(item => item.name)}
                        onChange={onChangeValue}
                        selectedValue={cell.value}
                        hideSearchBar={true}
                        hideCountersBar={true}
                    />
                </Popup>,
                document.body
            )}
        </div>
    )
}

export default TableCellEditorBool;