import React from 'react';
import {useCurrentState} from "../../hooks";

import './scss/table-header-cell-menu-search-bar.scss';

const TableHeaderCellMenuSearchBar = props => {
    const {connector, cell, utils, setShowFilter} = props;
    const {header, sortCell, onChangeComponentState: {onChangeFilterOrSort = () => {}}} = connector;

    const [searchContext, searchContextCurrent, _setSearchContext] = useCurrentState('');
    const setSearchContext = text => {
        _setSearchContext(text);
        utils.refreshColumnsTree({data: text, cell, connectorIndex: 'searchContext', isObject: false});
    }

    const clickToFilter = () => {
        if(searchContextCurrent.current)
            cell._.searchContext = searchContextCurrent.current; else
            delete cell._.searchContext;

        const rowsFromStore = utils.storeGetPage({pageNum: 0});

        if(!rowsFromStore) {
            onChangeFilterOrSort({header, searchContext: connector.searchContext, sortCell});
            return;
        }

        console.log('################### GET PAGE FROM STORE', 0)
        utils.refreshBodyWithNewRows({
            newRows: rowsFromStore,
            newPageNum: 0,
            openAllLevels: true,
        });
    }

    const clickToCloseFilter = () => {
        setSearchContext(null);
        clickToFilter();
        setShowFilter(false);
    }

    return (
        <React.Fragment>
            <input
                className={`search-input`}
                type="text"
                value={searchContext}
                onChange={e => setSearchContext(e.target.value)}
                autoFocus={true}
            />
            {searchContext && (
                <i
                    className="search-button fas fa-filter"
                    title="Показать только найденные"
                    onClick={clickToFilter}
                ></i>
            )}
            <i
                className="cancel-search-button fas fa-times"
                title="Отменить поиск"
                onClick={clickToCloseFilter}
            ></i>
        </React.Fragment>
    )
}
export default TableHeaderCellMenuSearchBar;