/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {UTILS} from "../../common";

import './scss/table-paginator.scss';

const TablePaginator = props => {
    const {utils, connector} = props;
    const {sizes: {paginatorHeight}, tableHas, rowsRootNumber, params, options, onChangeComponentState} = connector;
    const {paginator: {rowsByPage = []}} = options;
    const {pageLength, totalLength} = params;
    const {
        onClickToPaginator_ShowLength = () => {},
        onClickToPaginator_RowsByPage = () => {},
        onClickToPaginator_GoToPage = () => {},
    } = onChangeComponentState;

    const pageNum = params.pageNum;

    const [_, setRefresh] = React.useState(0);
    const refresh = () => setRefresh(UTILS.random16());

    /* eslint-disable */
    React.useEffect(() => {
        connector.refresh.paginator = refresh;
    }, []);
    /* eslint-enable */

    if(!tableHas.paginator) return null;

    const getPagesNum = () => {
        const remains = totalLength % pageLength;
        return Math.floor(totalLength / pageLength) + (remains ? 1 : 0);
    }

    const onClickToPaginatorPage = pageNum => {
        const rowsFromStore = utils.storeGetPage({pageNum});

        if(!rowsFromStore) {
            onClickToPaginator_GoToPage(pageNum);
            return;

        }
        console.log('################### GET PAGE FROM STORE', pageNum)
        utils.refreshBodyWithNewRows({
            newRows: rowsFromStore,
            newPageNum: pageNum,
        });
    }

    const toFirstPage = () => onClickToPaginatorPage(0);
    const toPrevPage  = () => onClickToPaginatorPage(pageNum - 1);
    const toNextPage  = () => onClickToPaginatorPage(pageNum + 1);
    const toLastPage  = () => onClickToPaginatorPage(pagesNum - 1);

    const clickToRowsByPage = length => {
        if(!utils.storeRowsIsLoaded()) {
            onClickToPaginator_RowsByPage(length);
            return;
        }

        console.log('################### GET PAGE FROM STORE', 0)
        utils.refreshBodyWithNewRows({
            newRows: utils.storeGetPage({pageNum: 0, pageLength: length}),
            newPageLength: length,
            newPageNum: 0,
        });
    }

    const pagesNum = totalLength ? getPagesNum() : undefined;
    const commonClass = 'btn pager-control';
    const disabledFirstClass = pageNum ? '' : ' disabled';
    const disabledPreClass = disabledFirstClass;
    const disabledNextClass = !pagesNum || pageNum < (pagesNum-1) ? '' : ' disabled';
    const disabledLastClass = pagesNum && (pageNum < (pagesNum-1)) ? '' : ' disabled';

    return (
        <div
            className="unitable-paginator"
            style={utils.getHeightStyle(paginatorHeight)}
        >
            <div className="slick-pager">
                <span className="btn-group slick-pager-nav">
                    <a
                        className={commonClass + disabledFirstClass}
                        onClick={disabledFirstClass ? () => {} : toFirstPage}
                        title="На первую страницу"
                    >
                        <i className="icon-step-backward"></i>
                    </a>
                    <a
                        className={commonClass + disabledPreClass}
                        onClick={disabledPreClass ? () => {} : toPrevPage}
                        title="На предыдущую страницу"
                    >
                        <i className="icon-backward"></i>
                    </a>
                    <a
                        className={commonClass + disabledNextClass}
                        onClick={disabledNextClass ? () => {} : toNextPage}
                        title="На следующую страницу"
                    >
                        <i className="icon-forward"></i>
                    </a>
                    <a
                        className={commonClass + disabledLastClass}
                        onClick={disabledLastClass ? () => {} : toLastPage}
                        title="На последнюю страницу"
                    >
                        <i className="icon-step-forward"></i>
                    </a>
                </span>

                <div className="slick-pager-status">
                    Страница {pageNum + 1} из
                        <Undef num={pagesNum} onClickToShowInPaginator={onClickToPaginator_ShowLength} />
                        <div className="between"></div>
                    (строк: {rowsRootNumber} из
                        <Undef num={totalLength} onClickToShowInPaginator={onClickToPaginator_ShowLength} />
                    )
                </div>
                {rowsByPage.length && (
                    <span className="slick-pager-settings">Строк на странице:
                        <div className="btn-group" data-toggle="buttons-radio">
                            {rowsByPage.map((num, index) => {
                                return (
                                    <div
                                        key={`pag-index-${index}`}
                                        className={`btn${num === pageLength ? ' active' : ''} ${_}`}
                                        onClick={() => clickToRowsByPage(num)}
                                    >{num}</div>
                                )
                            })}
                        </div>
                    </span>
                )}
            </div>
        </div>
    )
}

const Undef = props => {
    const {num, onClickToShowInPaginator} = props;

    if(!isNaN(num)) return <div className="num">{num}</div>;

    return (
        <div
            className="undefined-number text-primary"
            onClick={onClickToShowInPaginator}
        >
            показать
        </div>
    )
}

export default TablePaginator;