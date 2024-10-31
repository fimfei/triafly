import {toJS} from 'mobx';
import {request} from "../../../api";
import {Store} from '../../../stores';
import {CONSTANTS_SETPICKER} from "../";
import {CONFIG_API} from "../../../api";
import {CONFIG_SETPICKER} from "../";

class Utils {
    constructor({finalList}) {
        this.finalList = finalList || null;

        this.indexDetails = {
            zeroSearch: '<ALL>',
            selectedSearch: '<SELECTED ONLY>',
        };
        this.showSelectedListMode = false;
        this.error = {pageReadingError: '*** ОШИБКА ЧТЕНИЯ СТРАНИЦЫ ***'};
    }

    getFilterIndex(search) {
        return `search=${this.showSelectedListMode ? (this.indexDetails.selectedSearch) : (search || this.indexDetails.zeroSearch)}`;
    }

    getPagesIndex(search, id) {
        return `${this.getFilterIndex(search)} id=${id || 0}`;
    }

    getPageIndex(pagesIndex, num) {
        return `${pagesIndex} page=${num || 0}`;
    }

    spinner(listName, show) {
        const spinnerAddr = CONSTANTS_SETPICKER.stateSpinner(listName);
        const spinner = Store.getState(spinnerAddr);
        if (spinner !== show) {
            Store.setState(spinnerAddr, show);
        }
    };

    /*************************************************************************************************************** */
    /********************************************* STORE *********************************************************** */
    /*************************************************************************************************************** */

    storeSavePage({...props}) {
        const {
            listName, pagesIndex: _pagesIndex, pageIndex: _pageIndex,
            oldList, data, callbackForGetBlock
        } = props;
        const {data: dataFromServer, page, searchContext = ''} = data;

        const pagesIndex = _pagesIndex || this.getPagesIndex(searchContext, 0);
        const pageIndex = _pageIndex || this.getPageIndex(pagesIndex, page);
        const newList = oldList || {...toJS(Store.getState(CONSTANTS_SETPICKER.pagesData(listName)))};

        newList[pageIndex] = dataFromServer;
        newList._rootsOptions = newList._rootsOptions || {};
        newList._rootsOptions[pagesIndex] = newList._rootsOptions[pagesIndex] || {childrenItems: 0, pagesCounts: []};

        const _length = newList._rootsOptions[pagesIndex].childrenItems + dataFromServer.length;
        newList._rootsOptions[pagesIndex].childrenItems = _length;
        newList._rootsOptions[pagesIndex].pagesCounts.push(dataFromServer.length);

        newList._items = newList._items || {};
        for (let item of dataFromServer) {
            newList._items[item.id] = item.label;
        }

        if (!newList._mainOptions) {
            newList._mainOptions = {
                hasParent: false,
                totalItems: 0,
                pagesCounts: [],
            }
        }

        if (newList._mainOptions[pagesIndex] && page === 0) { // дублирование запроса с предыдущей (уже закрытой) сессии компоненты
            return;
        }

        newList._pagesOptions = newList._pagesOptions || {};
        newList._pagesOptions[pagesIndex] = {parentID: 0, page};

        const pageLevel = 0;

        newList._pagesIndexes = newList._pagesIndexes || {};
        newList._pagesIndexes[pagesIndex] = {searchContext, parentID: 0, pagesIndex, pageIndex, pageLevel};
        newList._pagesIndexes[pageIndex] = {searchContext, parentID: 0, page, pagesIndex, pageIndex, pageLevel};

        newList._change = {searchContext, parentID: 0, pagesIndex, pageIndex, page};
        if (!oldList) {
            Store.setState(CONSTANTS_SETPICKER.pagesData(listName), newList);
        }

        const counter = {
            childrenItems: _length,
            pagesCounts: newList._rootsOptions[pagesIndex].pagesCounts,
            totalItems: _length,
        }

        if (dataFromServer.length < CONFIG_API.listBlockLength || this.finalList) {
            counter.isFinalTotalCount = true;
            counter.totalCount = _length;
        }

        this.storeSaveCounters({...props, data: counter});

        if (callbackForGetBlock) {
            callbackForGetBlock();
        }
    };

    storeSaveCounters({...props}) {
        const {listName, searchContext = '', parentID, callbackForGetBlock, data} = props;
        const {totalItems, totalCount: _totalCount, childrenItems, pagesCounts, isFinalTotalCount} = data;

        const pagesIndex = this.getPagesIndex(searchContext, parentID);
        const newData = {...toJS(Store.getState(CONSTANTS_SETPICKER.pagesData(listName)))};

        const totalCount = _totalCount !== undefined ? _totalCount : newData._mainOptions[pagesIndex]?.totalCount;

        if (totalItems !== undefined) {
            const out = {totalItems, isFinalTotalCount: !!isFinalTotalCount, totalCount, pagesCounts};

            newData._mainOptions = {
                ...newData._mainOptions,
                ...out,
                [pagesIndex]: {...out},
            };
        }
        newData._rootsOptions[pagesIndex] = {
            childrenItems,
            pagesCounts,
        };
        newData._change.forceReBuild = true;

        Store.setState(CONSTANTS_SETPICKER.pagesData(listName), newData);

        if (callbackForGetBlock) {
            callbackForGetBlock();
        }
    };

    storeSaveTotalCounter({...props}) {
        const {listName, searchContext = '', parentID, data: totalCount} = props;
        const pagesIndex = this.getPagesIndex(searchContext, parentID);
        const newData = {...toJS(Store.getState(CONSTANTS_SETPICKER.pagesData(listName)))};

        newData._mainOptions.totalCount = totalCount;
        //newData._mainOptions.pagesCounts = pagesCounts;
        newData._mainOptions[pagesIndex].totalCount = totalCount;

        Store.setState(CONSTANTS_SETPICKER.pagesData(listName), newData);
    };

    storeSaveGlobalTotalCounter({...props}) {
        const {listName, searchContext = '', parentID, data: totalCount} = props;
        const pagesIndex = this.getPagesIndex('', parentID);
        const newData = {...toJS(Store.getState(CONSTANTS_SETPICKER.pagesData(listName)))};

        if (!searchContext) newData._mainOptions.totalCount = totalCount;
        newData._mainOptions[pagesIndex].totalCount = totalCount;

        Store.setState(CONSTANTS_SETPICKER.pagesData(listName), newData);
    };

    /*************************************************************************************************************** */
    /********************************************* REQUESTS ******************************************************** */
    /*************************************************************************************************************** */

    blockDataConverter = ({searchContext, page}) => _response => {
        const response = Array.isArray(_response) ? _response : [_response];
        const out = {
            data: response.map(item => {
                return {
                    id: item || CONFIG_SETPICKER.emptyId,
                    label: item,
                };
            }),
            searchContext: searchContext || '',
            page,
        };

        return out;
    }

    getSearchArr(list, search) {
        if (!search) return list;
        const context = search.toLowerCase();
        return list.filter(item => ~item.toLowerCase().indexOf(context));
    }

    requestGetPage(props) {
        const {request: _request, searchContext, page, callbackForGetBlock} = props;

        if (this.finalList) {
            const subList = this.getSearchArr(this.finalList, searchContext);
            const data = this.blockDataConverter({searchContext, page})(subList);
            this.storeSavePage({...props, data});
            return;
        }

        const {method = 'get', url, registryId, keys = {}} = _request;
        const {
            pageLength: keyPageLength = 'length',
            pageNum: keyPageNum = 'page_num',
            searchContext: keySearchContext = 'search',
        } = keys;

        const _url = registryId ? url.replace('<registryId>', registryId) : url;
        const _length = `?${keyPageLength}=${CONFIG_API.listBlockLength}`;
        const _page = `&${keyPageNum}=${page}`;
        const _search = !!searchContext ? `&${keySearchContext}=${searchContext}` : '';

        return request[method]({
            url: `${_url}${_length}${_page}${_search}`,
            dataConverter: this.blockDataConverter({searchContext, page}),
            success: data => {
                this.storeSavePage({...props, data});
            },
            error: data => {
                console.error(this.error.pageReadingError, 'requestGetPage', data)
                callbackForGetBlock();
            },
        });
    }

    requestGetTotalCounter(props) {
        const {request: _request, searchContext, callbackForGetBlock, counterRequest} = props;
        const {method = 'get', url, registryId, keys = {}} = _request;
        const {
            searchContext: keySearchContext = 'search',
            count: keyCount = 'count',
        } = keys;

        if (counterRequest.current[searchContext]) return;
        counterRequest.current[searchContext] = true;

        const _url = registryId ? url.replace('<registryId>', registryId) : url;
        const _count = `?${keyCount}=true`;
        const _search = !!searchContext ? `&${keySearchContext}=${searchContext}` : '';

        return request[method]({
            url: `${_url}${_count}${_search}`,
            success: data => {
                this.storeSaveTotalCounter({...props, data});
                counterRequest.current[searchContext] = false;
            },
            error: data => {
                console.error(this.error.pageReadingError, 'requestGetTotalCounter', data)
                callbackForGetBlock();
                counterRequest.current[searchContext] = false;
            },
        });
    }

    requestGetGlobalTotalCounter(props) {
        const {request: _request, callbackForGetBlock, counterRequest} = props;
        const {method = 'get', url, registryId, keys = {}} = _request;
        const {
            count: keyCount = 'count',
        } = keys;

        const searchContext = this.indexDetails.zeroSearch;
        if (counterRequest.current[searchContext]) return;
        counterRequest.current[searchContext] = true;

        const _url = registryId ? url.replace('<registryId>', registryId) : url;
        const _count = `?${keyCount}=true`;

        return request[method]({
            url: `${_url}${_count}`,
            success: data => {
                this.storeSaveGlobalTotalCounter({...props, data});
                counterRequest.current[searchContext] = false;
            },
            error: data => {
                console.error(this.error.pageReadingError, 'requestGetGlobalTotalCounter', data)
                callbackForGetBlock();
                counterRequest.current[searchContext] = false;
            },
        });
    }

    /*************************************************************************************************************** */
    /********************************************* SELECTED ******************************************************** */
    /*************************************************************************************************************** */

    goToSelectedListMode(props) {
        const {listName, list} = props
        const listLength = list.length;
        const newList = {...toJS(Store.getState(CONSTANTS_SETPICKER.pagesData(listName)))};
        const items = newList._items;
        const pagesIndex = this.getPagesIndex(null, 0);
        const pageIndex = this.getPageIndex(pagesIndex, 0);

        const out = [];
        for (let name of list) {
            out.push({
                id: name,
                label: items[name],
            });
        }
        newList[pageIndex] = out;

        newList._rootsOptions[pagesIndex] = {
            childrenItems: listLength,
            pagesCounts: [listLength],
        };
        const newMainOptions = {
            isFinalTotalCount: true,
            totalItems: listLength,
            totalCount: listLength,
        }

        const oldMainOptions = JSON.parse(JSON.stringify(newList._mainOptions));
        newList._mainOptions = {
            ...newList._mainOptions,
            ...newMainOptions,
            [pagesIndex]: {...newMainOptions},
            oldMainOptions,
        }

        Store.setState(CONSTANTS_SETPICKER.pagesData(listName), newList);
    }

    goFromSelectedListMode({listName}) {
        const newList = {...toJS(Store.getState(CONSTANTS_SETPICKER.pagesData(listName)))};
        newList._mainOptions = newList._mainOptions.oldMainOptions;
        Store.setState(CONSTANTS_SETPICKER.pagesData(listName), newList);
    }
}


export default Utils;