/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import {reaction, toJS} from 'mobx';
import {useCurrentState} from '../../hooks';
import {SetPickerActions, SetPickerSmartList, SetPickerItemView, Utils, CONFIG_SETPICKER} from '.';
import {CONFIG_API} from '../../api';
import {Store} from '../../stores';
import {UTILS} from '../../common';
import {CONSTANTS_SETPICKER} from ".";

import './scss/set-picker.scss';

const SetPicker = ({...props}) => {
    const {
        options,
        setPickerConnector,
        removeComponent,
        componentCallback,
        componentReturn,
    } = props;
    const {
        listName,                                          // произвольное уникальное имя списка без пробелов('reportsList', ''... - см. store.js)
        request,                                           // параметры запроса на сервер
        finalList,                                         // если список берётся не с бэка по частям а подаётся тут полностью
        unavailableItemsList = [],                         // array значений некликабельных элементов
        singleChoiceOnly = true,                           // checkbox / radio-button
        title = false,                                     // заголовок панели выбора (false - нет заголовка)
        selectable = true,                                 // возможность выбора
        selectedList: externalSelectedList = [],           // список id заселекченых элементов
        strHeight = CONFIG_SETPICKER.lineHeight,           // высота строки списка в pх
        callbackOnReadyComponentDOM,                       // колбэк, вызываемый после первого рендеринга
        listBlockLength,                                   // длина блока списков для пагинации
        hideSearchBar,                                     // скрывать строку контекстного поиска
        hideCountersBar,                                   // скрывать строку со счётчиками
        ItemViewName,                                      // внешняя вьюха имени в строке
    } = options;

    if(!listName) console.error('!!! ВНИМАНИЕ !!! Не назначено уникальное имя списка для сетпикера - возможна путаница в данных!!!');

    const utilsCurrent = React.useRef(new Utils({finalList}));
    const utils = utilsCurrent.current;

    if(listBlockLength) CONFIG_API.listBlockLength = listBlockLength;

    const operationCodes = CONFIG_SETPICKER.operationCodes;

    const pages = React.useRef(toJS(Store.getState(CONSTANTS_SETPICKER.pagesData(listName))));     // страницы (блоки) и доп.информация, полученные с сервера
    console.log('--------- PAGES ------>', pages)
    const changeTimeoutId = React.useRef(null);            // id таймаута смены состояния list
    const requestedPages = React.useRef({});               // pageIndex осуществляемых в данный момент запросов на сервер
    const scrollData = React.useRef({});                   // current стейта скроллбара

    const counterRequest = React.useRef({});               // флаги отправки запроса на получение каунтеров

    const [showSelectedList, _setShowSelectedList] = React.useState(undefined);  // показывать список заселекченых элементов
    const setShowSelectedList = (onOff, withSearch)  => {
        utils.showSelectedListMode = onOff ? (withSearch ? 'search' : 'full') : false;
        if(onOff) {
            const list = withSearch ? currentSelected.current.searchSelectedList : currentSelected.current.selectedList;
            utils.goToSelectedListMode({listName, list});
        } else {
            utils.goFromSelectedListMode({listName});
        }
        _setShowSelectedList(utils.showSelectedListMode);
    }

    const [resetScrollbar, setResetScrollbar] = React.useState(0);          // любая смена значения resetScrollbar приведёт к прокрутке наверх
    const resetScroll = () => setResetScrollbar(resetScrollbar + 1);        // автоматизация смены resetScrollbar

    const [list, currentList, setList] = useCurrentState([]);                           // Итоговый спиок, подаваемый в компоненту скроллбар
    const [actionsMode, _setActionsMode] = React.useState(null);                                // выбранная кнопка из actions (search/addLine/edit)
    const setActionsMode = mode => _setActionsMode(mode === actionsMode ? null : mode);         // выбор кнопки

    const blocksLoading = React.useRef(0);
    const blockLoadingStart = () => {
        blocksLoading.current++;
        utils.spinner(listName, true);
    }

    const blockLoadingStop = () => {
        blocksLoading.current = Math.max(blocksLoading.current - 1, 0);
        if(!blocksLoading.current) {
            utils.spinner(listName, false);
        }
    }

    const [searchContext, currentSearchContext, _setSearchContext] = useCurrentState(undefined); // контекст поиска

    const getSearchSelectedList = list => {
        if(!currentSearchContext?.current) return list;
        const context = currentSearchContext.current.toLowerCase();
        return list.filter(item => ~item.toLowerCase().indexOf(context));
    }
    const [selected, currentSelected, _setSelected] = useCurrentState({
        selectedList: externalSelectedList,        // array с id заселекченых элементов
        searchSelectedList: getSearchSelectedList(externalSelectedList),
        show: !!pages?.current?._mainOptions,
    });
    const selectedIds = React.useRef(null); //

    const showSelectedCounts = () => _setSelected({...currentSelected.current, show: true});
    const hideSelectedCounts = () => _setSelected({...currentSelected.current, show: false});

    const setSelectedTimeoutId = React.useRef(0);
    const setSelected = _selected => {
        const selected = _selected || currentSelected.current;
        const {selectedList} = selected;
        
        const newSelected = {
            selectedList,
            searchSelectedList: getSearchSelectedList(selectedList),
            show: selected.show === undefined ? currentSelected.current.show : selected.show,
        };

        currentSelected.current = newSelected;

        if(setSelectedTimeoutId.current) {
            clearTimeout(setSelectedTimeoutId.current);
        }
        setSelectedTimeoutId.current = setTimeout(() => {
            setSelectedTimeoutId.current = 0;
            _setSelected(newSelected);
        }, 0);
    }

    const setSearchContext = data => {
        _setSearchContext(data);
        componentCallback({
            code: CONFIG_SETPICKER.operationCodes.changeSearchContext,
            value: data,
        });
        setSelected();
    }

    const checkUnloadedPages = () => {
        setTimeout(() => {
            endOfScroll({subList: scrollData.current.current.subList});
        }, 10);
    }

    const _componentCallback = data => {
        componentCallback({
            ...data,
            common: {
                searchContext: currentSearchContext.current,
                pages: pages.current,
            },
        });
    }

    const onClickToLineCheckbox = (item, checked) => {
        const {id} = item;
           
        if(!selectable) return;
     
        const isSelected = singleChoiceOnly ? true : checked;
        let {selectedList} = selected;

        if(singleChoiceOnly) {
            selectedList = [id];
        } else {
            selectedList = isSelected
                ? UTILS.idArrayIncrease(selectedList, id)
                : UTILS.idArrayDecrease(selectedList, id);
        }

        setSelected({selectedList});

        _componentCallback({
            code: operationCodes.itemSelect,
            item: {...item, id},
            isSelected,
            selectedList,
        });
    }

    const getBlock = ({...props}) => {
        const {page, trace} = props;

        if(isNaN(page)) {
            console.error(`getBlock error --- page = ${page} (trace: ${trace})`)
            return;
        }
        
        const pagesIndex = utils.getPagesIndex(currentSearchContext.current);
        const pageIndex = utils.getPageIndex(pagesIndex, page);

        if(requestedPages[pageIndex]) {
            return;
        }
        requestedPages[pageIndex] = CONFIG_SETPICKER.loadingText;
        blockLoadingStart();

        const resetRequestedPage = () => requestedPages[pageIndex] = null;

        const promise = utils.requestGetPage({
            listName,                                    // имя списка данных ('reportsList', ...)
            request,                                     // параметры запроса на сервер
            searchContext: currentSearchContext.current, // контекст поиска ('*' - все)
            page,                                        // индекс загружаемой страницы
            pages: pages.current,
            callbackForGetBlock: () => {
                blockLoadingStop();
                showSelectedCounts();
            },
        });

        if(promise?.then) {
            promise.then(resetRequestedPage);
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            if(currentSearchContext.current) {
                setActionsMode(CONFIG_SETPICKER.actionModes.search);
            }
        }, 0)
        //
        // Следим за сменой содержимого хранилища
        //
        const removeReaction = reaction(
            () => Store.getState(CONSTANTS_SETPICKER.pagesData(listName)),
            _data => {
                const data = toJS(_data);
                const currentPages = pages.current;
                const newPageIndex = data._change.pageIndex;

                pages.current = data;

                if(currentPages[newPageIndex] && !data._change.forceReBuild) {
                    return;
                }

                if(changeTimeoutId.current) { // если подчитываем несколько блоков, не делаем лишнего пересчёта конечного списка
                    clearTimeout(changeTimeoutId.current);
                }
                changeTimeoutId.current = setTimeout(() => {
                    changeTimeoutId.current = null;
                    reBuildList();
                    setSelected();
                    checkUnloadedPages();
                }, 0);
            }
        )
        startNewList('[]');
        setSelected();
        showSelectedCounts();

        setPickerConnector.setSelected = arr => setSelected({selectedList: arr, show: currentSelected.current.show});
        setPickerConnector.showSpinner = onOff => {
            utils.spinner(listName, onOff);
            if(!onOff) {
                showSelectedCounts();
            }
        }

        setPickerConnector.selectedInfo = data => {
            selectedIds.current = data;
            setSelected();
            showSelectedCounts();
        }

        componentReturn.getMainStates = () => ({
            searchContext: currentSearchContext.current,
        });

        if(callbackOnReadyComponentDOM) {
            callbackOnReadyComponentDOM();
        }

        return () => {
            removeReaction();
        }
    }, []);

    const startNewList = () => {
        const pagesIndex = utils.getPagesIndex(currentSearchContext.current, 0);
        const pageIndex = utils.getPageIndex(pagesIndex, 0);
        //
        // Если уже подгружен нулевой блок корневого списка...
        //
        if(pages.current[pageIndex]) {
            //
            // ...то строим list
            //
            reBuildList();
        } else {
            //
            // ...иначе делаем запрос на сервер на самый первый блок в списке
            //
            getBlock({
                page: 0,
                trace: 'startNewList',
            });
        }
    }

    const onChangeSearh = search => {
        resetScroll();
        setList([{i: 0, p: 0, l: 0}]);
        startNewList('onChangeSearh');
        if(search) {
            const sessionOptionsIndex = CONSTANTS_SETPICKER.sessionOptionsIndex(listName);
            Store.updateState(sessionOptionsIndex, search);
        }

        const pagesIndex = utils.getPagesIndex(search.searchContext, 0);
        const _mainOptions = pages.current?._mainOptions;
        if(_mainOptions && _mainOptions[pagesIndex]) {
            const newList = {...toJS(Store.getState(CONSTANTS_SETPICKER.pagesData(listName)))};
            newList._mainOptions = {
                ..._mainOptions,
                totalCount: undefined,
                ..._mainOptions[pagesIndex],
            }
            Store.setState(CONSTANTS_SETPICKER.pagesData(listName), newList);
        }
    }

    React.useEffect(() => {
        if(searchContext === undefined) {
            const sessionOptionsIndex = CONSTANTS_SETPICKER.sessionOptionsIndex(listName);
            const prevSessionData = toJS(Store.getState(sessionOptionsIndex));
            setSearchContext(prevSessionData?.searchContext || '');
            return;
        }
        onChangeSearh({searchContext});
    }, [searchContext]);

    React.useEffect(() => {
        if(showSelectedList === undefined) return;
        resetScroll();
        reBuildList();
    }, [showSelectedList]);

    const buildParentID = ({parentID: _parentID}) => {
        const parentID = _parentID || 0;
        const pagesIndex = utils.getPagesIndex(currentSearchContext.current);
        const rootOptions = pages.current._rootsOptions[pagesIndex];
        const childrenElements = rootOptions ? rootOptions.childrenItems : 0;

        const childrenPages = rootOptions.pagesCounts.length;

        let out = [];

        for(let page = 0; page < childrenPages; page++) {
            const pageIndex = utils.getPageIndex(pagesIndex, page);
            const pageItems = pages.current[pageIndex];

            if(pageItems?.length) {
                for(let index in pageItems) {
                    const item = pageItems[index];
                    out.push({
                        ...item,
                        pagesIndex,
                        pageIndex,
                        page,
                        index: Number(index),
                        searchContext: currentSearchContext.current,
                    });
                }
            } else {
                const length = Math.min(childrenElements - CONFIG_API.listBlockLength * page, CONFIG_API.listBlockLength);
                for(let i = 0; i < length; i++) {
                    out.push({i: parentID, p: page}); // жёсткие сокращения ради экономии памяти
                }
            }
        }

        return out;
    }

    const reBuildList = () => {
        const rootContent = buildParentID({parentID: 0});
        setList(rootContent);
    }

    const endOfScroll = ({subListTo, subList}) => {
        const getPageIndex = (context, parent, page) => {
            const pagesIndex = utils.getPagesIndex(context, parent);
            return utils.getPageIndex(pagesIndex, page);
        }

        const searchContext = currentSearchContext.current;
        let prePageIndex = getPageIndex(searchContext, 0, 0);

        for(let item of subList) {
            if(!item.id) {
                const {i: parentID, p: page} = item;
                const pageIndex = getPageIndex(searchContext, parentID, page);

                if(pageIndex !== prePageIndex) {
                    getBlock({
                        parentID,
                        page,
                        trace: 'endOfScroll-1',
                    });
                }
                prePageIndex = pageIndex;
            }
        }

        const {_mainOptions} = toJS(Store.getState(CONSTANTS_SETPICKER.pagesData(listName)));
        if(subListTo && !_mainOptions?.isFinalTotalCount && subListTo >= _mainOptions?.totalItems) {
            getBlock({
                parentID: 0,
                page: subList[subList.length - 1].page + 1,
                trace: 'endOfScroll-2',
            });
        }
    }
/*
    console.log('======================================>', {
        pages: pages.current,
        currentList: currentList.current, 
        list,
        props,
        requestedPages: requestedPages.current,
        scrollData: scrollData.current,
        counterRequest: counterRequest.current,
        selectedIds: selectedIds.current,
        currentSelected: currentSelected.current,
    })
*/
    const componentData = {
        ...props,

        utils,

        ItemView: SetPickerItemView,
        listName, endOfScroll, setSearchContext, onClickToLineCheckbox, options,
        list, currentList, strHeight, resetScrollbar, scrollData, request, counterRequest,
        showSelectedCounts, hideSelectedCounts,
        componentCallback:  _componentCallback,
        loadingText:        CONFIG_SETPICKER.loadingText,
        wheelTimeout:       CONFIG_SETPICKER.wheelTimeout,
        searchTimeout:      CONFIG_SETPICKER.searchTimeout,
        pages:              pages.current,
        searchContext:      currentSearchContext.current,
        selected,           setSelected,
        actionsMode,        setActionsMode,
        showSelectedList,   setShowSelectedList,
    };

    return (
        <React.Fragment>
            {!hideSearchBar && (
                <SetPickerActions   {...componentData} />
            )}
            <SetPickerSmartList {...componentData} />
        </React.Fragment>
    );
};

export default SetPicker;
