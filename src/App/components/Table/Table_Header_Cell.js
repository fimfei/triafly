import React from 'react';
import {UTILS} from "../../common";
import {TableHeaderCellMenu, TableHeaderCellRowsTreeMenu} from ".";

import './scss/table-header-cell.scss';

const TableHeaderCell = props => {
    const {utils, connector, cell, cellIndex, isRight} = props;
    const {value, view: cellView = null, _: {level, isEnd, isEndOfLeftPart}} = cell;
    const {sizes: {columnsWidth, headerHeight}, headerMaxLevel, options = {}, tableHas: {rowsTree: tableHasRowsTree}, commonForHeader = {}} = connector;
    const {view: headerView = null} = commonForHeader;
    const {resize = {}, columnsMenu: {hasHideIcon = false, hasOrderIcon = false, hasFormatIcon = false, hasSearchIcon = false, hasSortIcon = false}} = options;

    const ExternalCellView = cellView || headerView;

    const isRoot = isNaN(cellIndex);
    const isRowsTreeMenu = tableHasRowsTree && !cellIndex;
    const heightPart = headerHeight / headerMaxLevel;

    const [_, setRefresh] = React.useState(0);
    const refresh = () => setRefresh(UTILS.random16());

    /* eslint-disable */
    React.useEffect(() => {
        const data = {
            refresh,
            ref: wrapperEl.current,
            cell,
        }

        connector.data.headerRoot.push(data);
        if(cell._?.endIndex) connector.data.headerRootByEndIndex[cell._.endIndex] = data;

        if(isRoot) {
            return;
        }

        connector.refresh.column[cellIndex] = connector.refresh.column[cellIndex] || [];
        connector.refresh.column[cellIndex].push(refresh);
        cell._.refresh = refresh;
        setTimeout(refresh, 0);
    }, []);
    /* eslint-enable */

    const wrapperEl = React.useRef(null);
    const startPosition = React.useRef(null);
    const onSortCurrent = React.useRef(() => {});

    const onMouseUp = e => {
        document.onmouseup = null;
        document.onmousemove = null;

        if(e.ctrlKey && !isRoot) {
            for(let index in connector.sizes.columnsWidth) connector.sizes.columnsWidth[index] = startPosition.current.newWidth;
            utils.refreshAllColumns();
        }

        utils.refreshTableWidth();
        utils.saveTableSettingsToLocaleStorage();
        utils.refreshHeaderRoots();
    }

    const onMouseMove = e => {
        const {cursorX, wrapperWidth} = startPosition.current;
        const newWidth = Math.max(20, wrapperWidth + (e.clientX - cursorX));

        startPosition.current.newWidth = newWidth;

        if(!isRoot) {
            connector.sizes.columnsWidth[cellIndex] = newWidth;
            utils.refreshColumn(cellIndex);
            return;
        }

        const percent = newWidth * 100 / wrapperWidth;

        for(let child of utils.getEndsByHeaderCell(cell)) {
            const {_: {endIndex: originalIndex}} = child;
            const w = startPosition.current.columnsWidth[originalIndex];
            columnsWidth[originalIndex] = Math.round(w / 100 * percent);
            utils.refreshColumn(originalIndex);
        }
    }

    const onMouseDown = e => {
        startPosition.current = {
            cursorX: e.clientX,
            wrapperWidth: wrapperEl.current.getBoundingClientRect().width,
            columnsWidth: [...columnsWidth],
        }
        document.onmouseup = onMouseUp;
        document.onmousemove = onMouseMove;
    }

    const showColumn = show => () => {
        if(isRoot) {
            for(let child of utils.getEndsByHeaderCell(cell)) {
                const {_: {endIndex: originalIndex}} = child;
                connector.showColumns[originalIndex] = show;
                utils.refreshColumn(originalIndex);
            }
        } else {
            connector.showColumns[cellIndex] = show;
            utils.refreshColumn(cellIndex);
        }
        utils.refreshTableWidth();
        utils.saveTableSettingsToLocaleStorage();
    }

    const isShow = isRoot || connector.showColumns[cellIndex];
    let style = isShow ? utils.getWidthStyle(columnsWidth[cellIndex]) : {};
    style.height = `${isEnd ? heightPart * (headerMaxLevel - level) : heightPart}px`;

    const {paddingLeft, paddingRight} = (isRight && isShow) ? utils.getHeaderRootsPadding(wrapperEl.current) : {paddingLeft: 0, paddingRight: 0};
    const cellMenuIsPresent = hasHideIcon || hasOrderIcon || hasSearchIcon || hasFormatIcon || hasSortIcon;

    if(wrapperEl.current) cell._.wrapperRefCurrent = wrapperEl;

    return (
        <div
            className={`unitable-header-cell index-${cellIndex}${isShow ? '' : ' is-hide'}${isEnd ? ' is-end' : ''}`}
            style={style}
            ref={wrapperEl}
        >
            {isShow ? (
            <React.Fragment>
                <div
                    className={`uhc-content${isEnd ? ' is-end' : ''}${isEndOfLeftPart ? ' is-end-of-left' : ''}`}
                    style={{
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                    }}
                >
                    {isRowsTreeMenu ? (
                        <React.Fragment>
                            <TableHeaderCellRowsTreeMenu {...props} />
                            <TableHeaderCellMenu {...props} onSortCurrent={onSortCurrent} />
                        </React.Fragment>
                    ) : (
                        <div className={`uhc-content-inner`}>
                            {ExternalCellView ? (
                                <ExternalCellView {...cell} />
                            ) : (
                                <React.Fragment>
                                    {value}
                                </React.Fragment>
                            )}
                            {cell._.sort && (
                                <i
                                    className={`uhc-content-sort fas fa-sort-${cell._.sort}`}
                                    onClick={() => onSortCurrent.current()}
                                ></i>
                            )}
                            <React.Fragment>
                                {cellMenuIsPresent && (
                                    <TableHeaderCellMenu{...props} showColumn={showColumn} onSortCurrent={onSortCurrent} />
                                )}
                            </React.Fragment>
                        </div>
                    )}
                </div>
                {resize.columnsWidth && (
                    <div
                        className="uhc-resizer"
                        onMouseDown={onMouseDown}
                    ></div>
                )}
            </React.Fragment>
            ) : (
                <div
                    className="uhc-bookmark"
                    title="Показать скрытую колонку"
                    onClick={showColumn(true)}
                ></div>
            )}
        </div>
    )
}

export default TableHeaderCell;