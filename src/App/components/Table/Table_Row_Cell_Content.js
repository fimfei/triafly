import React from 'react';
import {useCurrentState} from "../../hooks";
import {TableRowCellContentEditor} from "./";

import './scss/table-row-cell-content.scss';

const TableRowCellContent = props => {
    const {connector, utils, cellIndex, rowIndex, isTreeCell, isTreeRoot, rowTreeData, toggleShowRowTree, cell, valueStyle, CellView, cellRef, html, refreshCell,} = props;
    const {onChangeComponentState: {onChangeCell = () => {}}, rowsTree, commonForBody = {}} = connector;
    const {isEditable: isEditableCell} = cell;
    const {isEditable: isEditableCommon = false} = commonForBody;
    const [isEdit,  _setIsEdit] = React.useState(false);

    console.log('+++++++++ TableRowCellContent', isEdit, cell)

    return (
        <React.Fragment>
            <div
                className="unitable-row-cell-value"
                dangerouslySetInnerHTML={{__html: html}}
                onClick={() => {_setIsEdit(true)}}
            ></div>
            {/*
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
            */}
            {/*isEdit && (
                <TableRowCellContentEditor {...props} stopEditor={stopEditor} />
            )*/}
        </React.Fragment>
    )
};

export default TableRowCellContent;
