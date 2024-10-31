import React from 'react';
import UTILS from "../../common/utils";
import {Utils, TableHeader, TableBody, TablePaginator, TableSettings} from '.';

import './scss/table.scss';

const Table = data => {
    const [props, setProps] = React.useState(null);
    const tablePortalElCurrent = React.useRef(null);

    /* eslint-disable */
    React.useEffect(() => {
        setProps(data);
    }, []);
    /* eslint-enable */

    const refresh = () => {
        setProps(null);
        setTimeout(() => {
            setProps(data);
        }, 0)
    }

    return (
        <div className="unitable-wrapper" ref={tablePortalElCurrent}>
            {props && <TableGo{...props} refreshTable={refresh} tablePortalElCurrent={tablePortalElCurrent}/>}
        </div>
    )
}

const TableGo = props => {
    const {tableId, tableClassName, options = {}} = props;
    const {showTableSettings = false} = options;

    const tableRootRef = React.useRef(null);
    const utilsCurrent = React.useRef(new Utils(props));
    const utils = utilsCurrent.current;

    /* eslint-disable */
    React.useEffect(() => {
        utils.connector.refs.unitable = tableRootRef.current;
        utils.storeRememberPage();
    }, []);
    /* eslint-enable */

    const data = {utils, connector: utils.connector}

    return (
        <div
            className="unitable"
            style={{'max-width': `${utils.getTotalRowWidth()}px`}}
            ref={tableRootRef}
        >
            <div
                id={tableId}
                className={`unitable-inner ${tableClassName}`}
            >
                <HeaderAndBody {...data} />
                <TablePaginator {...data} />
                {showTableSettings && (
                    <TableSettings {...data} />
                )}
            </div>
        </div>
    )
}

const HeaderAndBody = props => {
    const {connector} = props;

    const [_, setRefresh] = React.useState(1);
    const refresh = () => {
//        setRefresh(0);
//        setTimeout(() => {
            setRefresh(UTILS.random16);
//        }, 0)
    }

    /* eslint-disable */
    React.useEffect(() => {
        connector.refresh.headerAndBody = refresh;
    }, []);
    /* eslint-enable */

    if(!_) return null;

    return (
        <React.Fragment>
            <TableHeader {...props} />
            <TableBody {...props} />
        </React.Fragment>
    )
}

export default Table;