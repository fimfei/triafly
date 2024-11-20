import React from 'react';
import {CONFIG_SETPICKER} from ".";

const SetPickerSmartListHeaderCounts = ({...props}) => {
    const {
        utils,
        selected: {show, selectedList, searchSelectedList},
        showSelectedList,
        setShowSelectedList,
        pages,
        searchContext,
        setSearchContext,
        setSelected,
        options: {singleChoiceOnly},
        componentCallback,
        listName
    } = props;
    const {_mainOptions} = pages;

    utils.showSelectedListMode = false;
    const mainIndex = utils.getPagesIndex('', 0);
    const currIndex = utils.getPagesIndex(searchContext, 0);
    utils.showSelectedListMode = showSelectedList;

    const clickToTotalCount = () => {
        if(showSelectedList) {
            setShowSelectedList(false);
            return;
        }
        if(!_mainOptions?.totalCount) {
            utils.spinner(listName, true);
            const resetSpinner = () => utils.spinner(listName, false);
            const promise = utils.requestGetTotalCounter(props);
            if(promise?.then) {
                promise.then(resetSpinner);
            }
            return;
        }
    }

    const clickToGlobalTotalCount = () => {
        if(showSelectedList) {
            setShowSelectedList(false);
            setSearchContext('');
            return;
        }
        if(!_mainOptions[mainIndex]?.totalCount) {
            utils.requestGetGlobalTotalCounter(props);
            return;
        }
        setSearchContext('');
    }

    const unselect = () => {
        setSelected({selectedList: []});
        componentCallback({
            code: CONFIG_SETPICKER.operationCodes.unselectAll,
        });
    }

    const totalCountText = (_mainOptions && _mainOptions[currIndex]?.totalCount !== undefined)
        ? _mainOptions[currIndex]?.totalCount
        : (showSelectedList ? 'всех' : 'показать');

    const globalTotalCountText = (_mainOptions && _mainOptions[mainIndex]?.totalCount !== undefined)
        ? _mainOptions[mainIndex].totalCount
        : (showSelectedList ? 'всех' : 'показать');

    return (
        <React.Fragment>
            <div className="flex-grow-1">
                {!singleChoiceOnly && !!selectedList.length && (
                    <div className="tf_form-check">
                        <i
                            className="fa-times unselect-all"
                            onClick={unselect}
                        ></i>
                    </div>
                )}
            </div>
            <div className="lh-1 text-end" style={{visibility: show ? 'unset' : 'hidden'}}>
                <span className="text-nowrap">
                    {`выбрано `}
                    <span
                        className="text-primary"
                        tabIndex="1"
                        role="button"
                        style={{'font-weight': showSelectedList === 'search' ? 'bold' : ''}}
                        onClick={() => setShowSelectedList(true, true)}
                    >{searchSelectedList.length || 0}</span>
                    {` из `}
                    <span
                        className="text-primary"
                        tabIndex="1"
                        role="button"
                        style={{'font-weight': !showSelectedList ? 'bold' : ''}}
                        onClick={clickToTotalCount}
                    >{totalCountText}</span>
                    {searchContext && (
                        <React.Fragment>
                            {` (всего `}
                            <span
                                className="text-primary"
                                tabIndex="1"
                                role="button"
                                style={{'font-weight': showSelectedList === 'full' ? 'bold' : ''}}
                                onClick={() => setShowSelectedList(true, false)}
                            >{selectedList.length || 0}</span>
                            {` из `}
                            <span
                                className="text-primary"
                                tabIndex="1"
                                role="button"
                                onClick={clickToGlobalTotalCount}
                            >{globalTotalCountText}</span>
                            {`)`}
                        </React.Fragment>
                    )}
                </span>
            </div>
        </React.Fragment>
    )
}
export default SetPickerSmartListHeaderCounts;