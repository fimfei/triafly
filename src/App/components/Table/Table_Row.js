import React from 'react';
import {UTILS} from "../../common";
import {TableRowCell} from '.';

import './scss/table-row.scss';

const TableRow = props => {
    const {utils, connector, row, rowIndex, sliding} = props;
    const {
        numberFixedLeftColumnsEnds,
        sizes: {rowsHeight},
        refs: {rightParts},
        orderEnds,
        options = {},
        showRows,
        tableHas: {rowsTree: tableHasRowsTree},
        data: {rowsByOrdinalIndex},
    } = connector;
    const {background: {evenRows = false, oddRows = false}, resize = false} = options;
    const rowTreeData = showRows[rowIndex];

    const refRightPart = React.useRef(null);
    const wrapperEl = React.useRef(null);
    const startPosition = React.useRef(null);

    const [_, setRefresh] = React.useState(0);
    const refresh = () => setRefresh(UTILS.random16());

    /* eslint-disable */
    React.useEffect(() => {
        rightParts.push(refRightPart.current);
        connector.refresh.row[rowIndex] = refresh;
    }, []);
    /* eslint-enable */

    const isEven = i => i % 2 === 0;

    const onMouseUp = () => {
        document.onmouseup = null;
        document.onmousemove = null;
        for(let refresh of connector.refresh.row) refresh();
        connector.refresh.scrollbarVertical();
        utils.saveTableSettingsToLocaleStorage();
    }

    const onMouseMove = e => {
        const {cursorY, wrapperHeight} = startPosition.current;
        const newHeight = Math.max(20, wrapperHeight + (e.clientY - cursorY));

        connector.sizes.rowsHeight = newHeight;
        refresh();
    }

    const onMouseDown = e => {
        startPosition.current = {
            cursorY: e.clientY,
            wrapperHeight: wrapperEl.current.getBoundingClientRect().height
        }
        document.onmouseup = onMouseUp;
        document.onmousemove = onMouseMove;
    }

    const [rowLeft, rowRight] = utils.splitRowByLeftAndRight(orderEnds, numberFixedLeftColumnsEnds);

    let style = {};
    let backgroundColor = null;

    const show = rowTreeData.show;

    if(!show) {
        style.display = 'none';
    } else {
        style = utils.getHeightStyle(rowsHeight);
        backgroundColor = isEven(rowTreeData.mainRootIndex) ? evenRows : oddRows;
        if(backgroundColor) style.background = backgroundColor;
    }

    const cellData = {rowTreeData, tableHasRowsTree, rowIndex};
    if(rowTreeData.isNotFind) cellData.isNotFind = true;
    const outOfScreen = !sliding[rowIndex];

    if(outOfScreen) {
        setTimeout(() => {
            sliding[rowIndex] = true;
            refresh();
        }, 0)
    }

    return (
        <div
            className={`unitable-row`}
            style={{...style, ...(rowsByOrdinalIndex[rowIndex].css || {})}}
            ref={wrapperEl}
        >

            {show && !outOfScreen && (
                <div className="unitable-row-left">
                    {rowLeft.map(originalIndex => {
                        const cell = row[originalIndex];
                        const key = `cell-${rowIndex}-${originalIndex}`;

                        return (
                            <TableRowCell key={key} {...props} cell={cell} cellIndex={originalIndex} {...cellData} />
                        )
                    })}
                </div>
            )}

            <div
                className="unitable-row-right"
                style={{width: `(100% - ${utils.getLeftPartRowWidth()}px`}}
                ref={refRightPart}
            >
                {show && !outOfScreen && (
                    <React.Fragment>
                        {rowRight.map(originalIndex => {
                            const cell = row[originalIndex];
                            const key = `cell-${rowIndex}-${originalIndex}`;

                            return (
                                <TableRowCell key={key} {...props} cell={cell} cellIndex={originalIndex} {...cellData} />
                            )
                        })}
                    </React.Fragment>
                )}
            </div>
            {show && !outOfScreen && resize.rowsHeight && (
                <div
                    className="unitable-line bottom row-resize"
                    onMouseDown={onMouseDown}
                ></div>
            )}
        </div>
    )
}

export default TableRow;