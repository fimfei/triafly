import React from 'react';
import {callPopup} from "../../widgets";
import {TableSettingsPanelOrder, TableHeaderCellMenuFormatter, TableHeaderCellMenuSearchBar} from ".";

import './scss/table-header-cell-menu.scss';

const TableHeaderCellMenu = props => {
    const {utils, connector, parentCh, parentChildren, parent, showColumn, isRight, cell, onSortCurrent} = props;
    const {header, searchContext, onChangeComponentState: {onChangeFilterOrSort = () => {}}, options = {}} = connector;
    const {columnsMenu: {hasHideIcon = false, hasOrderIcon = false, hasFormatIcon = false, hasSearchIcon = false, hasSortIcon = false}} = options;

    const orderPanelInitiator = React.useRef(null);
    const formatPanelInitiator = React.useRef(null);

    const [showFilter, setShowFilter] = React.useState(false);
    const [showFormatter, setShowFormatter] = React.useState(false);

    const openOrderPanel = () => {
        const list = [];

        for(let item of parentCh) {
            const index = item.i;
            list.push({
                index,
                value: parentChildren[index].value,
                isLeft: !!parentChildren[index]._.isLeft,
            });
        }

        let removePopupFunction = () => {};
        const removePopup = () => removePopupFunction();

        const {removeComponent} = callPopup({
            initiator: orderPanelInitiator.current,
            id: 'unitable-order-panel',
            minWidth: 0,
            minHeight: 0,
            onOutsideClick: removePopup,
            notResize: true,
            autoSize: true,
            children: <TableSettingsPanelOrder
                {...props}
                list={list}
                root={parent?.value ? parent.value : 'ROOT'}
                onChange={
                    list => {
                        const tmp = {};
                        for(let item of parentCh) tmp[item.i] = item;
                        for(let i in list) parentCh[i] = tmp[list[i].index];
                        utils.orderTreeToOrderEnds();
                        connector.refresh.headerAndBody();
                        utils.saveTableSettingsToLocaleStorage();
                    }
                }
            />,
        })
        removePopupFunction = removeComponent;
    }

    const onSort = () => {
        if(cell._.sort) {
            if(cell._.sort === 'down') {
                cell._.sort = 'up';
            } else {
                delete cell._.sort;
                connector.sortCell = null;
            }
        } else {
            if(connector.sortCell?._?.sort) {
                delete connector.sortCell._.sort;
                connector.sortCell._.refresh();
            }
            cell._.sort = 'down';
        }
        if(cell._.sort) connector.sortCell = cell;
        cell._.refresh();

        const rowsFromStore = utils.storeGetPage({pageNum: 0});
        if(!rowsFromStore) {
            onChangeFilterOrSort({header, searchContext, sortCell: connector.sortCell});
            return;
        }

//        console.log('################### GET PAGE FROM STORE', 0)
        utils.refreshBodyWithNewRows({
            newRows: rowsFromStore,
            newPageNum: 0,
        });
    }

    onSortCurrent.current = onSort;

    return (
        <React.Fragment>
            {cell._?.format && (
                <div className="uhc-format-label"></div>
            )}
            <div className={`uhc-menu${showFilter ? ' show-search-bar' : ''}${showFormatter ? ' show-formatter' : ''}`}>
                {(showFilter || showFormatter) ? (
                    <React.Fragment>
                        {showFilter ? (
                            <TableHeaderCellMenuSearchBar {...props} setShowFilter={setShowFilter} />
                        ) : (
                            <TableHeaderCellMenuFormatter {...props} setShowFormatter={setShowFormatter} />
                        )}
                    </React.Fragment>
                ) : (
                    <div className={`uhc-menu-inner`}>
                        {hasSortIcon && cell._.isEnd && (
                            <i
                                className={`sort-button fas fa-sort-amount-${cell._.sort === 'up' ? 'up' : 'down'}-alt${cell._.sort ? ' is-present' : ''}`}
                                title="Сортировка по столбцу"
                                onClick={onSort}
                            ></i>
                        )}
                        {hasSearchIcon && (
                            <i
                                className="search-button fas fa-search"
                                title="Поиск по столбцу"
                                onClick={() => setShowFilter(true)}
                            ></i>
                        )}
                        {hasHideIcon && isRight && (
                            <i
                                className="show-column-button fas fa-eye"
                                title="Скрыть столбец"
                                onClick={showColumn(false)}
                            ></i>
                        )}
                        {hasOrderIcon && isRight && (
                            <i
                                className="order-column-button fas fa-exchange-alt"
                                title="Порядок столбцов"
                                onClick={openOrderPanel}
                                ref={orderPanelInitiator}
                            ></i>
                        )}
                        {hasFormatIcon && (
                            <React.Fragment>
                                <i
                                    className="format-button fas fa-paragraph"
                                    title="Форматирование столбца"
                                    onClick={() => setShowFormatter(true)}
                                ></i>
                                <div ref={formatPanelInitiator}></div>
                            </React.Fragment>
                        )}
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default TableHeaderCellMenu;