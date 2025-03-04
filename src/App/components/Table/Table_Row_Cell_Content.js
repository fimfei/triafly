import React from 'react';
import {useCurrentState} from "../../hooks";
import {TableRowCellContentEditor} from "./";

import './scss/table-row-cell-content.scss';

const TableRowCellContent = props => {
    const {connector, utils, cellIndex, rowIndex, isTreeCell, isTreeRoot, rowTreeData, toggleShowRowTree, cell, valueStyle, CellView, cellRef, html, refreshCell,} = props;
    const {onChangeComponentState: {onChangeCell = () => {}}, rowsTree, commonForBody = {}} = connector;
    const {isEditable: isEditableCell} = cell;
    const {isEditable: isEditableCommon = false} = commonForBody;

    const headerEndCell = connector.data.headerRootByEndIndex[cellIndex]?.cell || {};
    const isEditableColumn = headerEndCell._?.isEditable;
    let isEditable = isEditableCell === undefined ? isEditableColumn : isEditableCell;
        isEditable = isEditable     === undefined ? isEditableCommon : isEditable;

    const oldValueBeforeEdit = React.useRef(null);
    const [isEdit, isEditCurrent, setIsEdit] = useCurrentState(cell === connector.editableCell?.cell);

    const startEditor = () => {
        oldValueBeforeEdit.current = cell.value;
        setIsEdit(true);
    }

    const stopEditor = () => {
        if(!isEditCurrent.current) return;

        if(cell.value !== oldValueBeforeEdit.current) {
            onChangeCell({
                cell,
                oldValue: oldValueBeforeEdit.current,
                newValue: cell.value,
                rows: rowsTree,
            })
        }
        setIsEdit(false);
        connector.editableCell = null;
        refreshCell();
    }

    const clickToCell = () => {
        if(isTreeCell || !isEditable) return;
        utils.setEditableCell({cell, stopEditor, cellRef: cellRef.current});
        startEditor();
    }

    const old_ = cell?._ || {};
    cell._ = {...old_, cellIndex, rowIndex, isTreeCell, isTreeRoot, rowTreeData, wrapperRefCurrent: cellRef, refreshCell, stopEditor};

    return (
        <React.Fragment>
            {isTreeCell && (
                <div className="unitable-row-cell-tree" style={{width: `${rowTreeData.level * 30 + 20}px`}}>
                    {isTreeRoot && (
                        <div className="toggle-tree" onClick={toggleShowRowTree}>
                            {rowTreeData.showChildren ? '-' : '+'}
                        </div>
                    )}
                </div>
            )}
            {CellView ? (
                <div
                    className="unitable-row-cell-value"
                    style={valueStyle}
                    onClick={isTreeCell ? null : clickToCell}
                >
                    <CellView {...cell} />
                </div>
            ) : (
                <div
                    className="unitable-row-cell-value"
                    style={valueStyle}
                    dangerouslySetInnerHTML={{__html: html}}
                    onClick={isTreeCell ? null : clickToCell}
                ></div>
            )}
            {isEdit && (
                <TableRowCellContentEditor {...props} stopEditor={stopEditor} />
            )}
        </React.Fragment>
    )
}

export default TableRowCellContent;
