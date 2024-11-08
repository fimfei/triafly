import React from 'react';
import {useCurrentState} from "../../hooks";
import {TableRowCellContentEditor} from "./";

import './scss/table-row-cell-content.scss';

const TableRowCellContent = props => {

    const [isEdit,  _setIsEdit] = React.useState(false);
    const aaa = React.useRef(Math.random())

    console.log('+++++++++ TableRowCellContent', isEdit, aaa.current)

    const onClick = () => {
        console.log('onClick')
        _setIsEdit(!isEdit)
    }

    return (
        <React.Fragment>
            <div
                className="unitable-row-cell-value"
                onClick={onClick}
            >aaa</div>
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
}

export default TableRowCellContent;
