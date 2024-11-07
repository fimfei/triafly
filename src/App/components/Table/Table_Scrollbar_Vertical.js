import React from 'react';
import {UTILS} from "../../common";

import './scss/table-scrollbar-vertical.scss';

const TableScrollbarVertical = props => {
    const {utils, connector} = props;
    const {sizes, tableHas, showRows} = connector;

    const scrollbarWrapperRef = React.useRef(null);

    const [_, setRefresh] = React.useState(0);
    const refresh = () => setRefresh(UTILS.random16());

    /* eslint-disable */
    React.useEffect(() => {
        connector.refresh.scrollbarVertical = refresh;
//        setTimeout(refresh, 50);
    }, []);
    /* eslint-enable */

    if(!connector.refs.unitableBodyInner) return null;

    let showRowsNumber = 0;
    for(let row of showRows) {
        if(row.show) showRowsNumber++;
    }

    const heightScrollbar = connector.refs.unitableBodyInner.getBoundingClientRect().height;
    const heightInnerList = showRowsNumber * sizes.rowsHeight + 20;
    const scrollbarIsNeeded = heightScrollbar < heightInnerList;

    if(scrollbarIsNeeded !== tableHas.scrollbarVertical) {
        tableHas.scrollbarVertical = scrollbarIsNeeded;
    }

    if(!scrollbarIsNeeded) {
        connector.refs.scrollbarVertical = null;
        return null;
    }
    if(!connector.refs.scrollbarVertical) {
        setTimeout(() => {
            connector.refs.scrollbarVertical = scrollbarWrapperRef.current;
        }, 0)
    }

    const onScroll = e => {
        const scrollTop = scrollbarWrapperRef.current.scrollTop;
        connector.refs.unitableBodyInner.scrollTop = scrollTop;
    }

    return (
        <div
            className="unitable-scrollbar-vertical"
            style={utils.getWidthStyle(sizes.scrollbar)}
        >
            <div className="usv-top" style={utils.getHeightStyle(sizes.headerHeight)}></div>
            <div
                className="usv-body-wrapper"
                ref={scrollbarWrapperRef}
                style={utils.getHeightStyle(heightScrollbar)}
                onScroll={onScroll}
            >
                <div
                    className="usv-body-inner"
                    style={utils.getHeightStyle(heightInnerList)}
                ></div>
            </div>
        </div>
    )
}

export default TableScrollbarVertical;