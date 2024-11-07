import React from 'react';
import {UTILS} from "../../common";

import './scss/table-scrollbar-horizontal.scss';

const TableScrollbarHorizontal = props => {
    const {utils, connector} = props;
    const {sizes, refs: {rightParts}, tableHas} = connector;

    const [_, setRefresh] = React.useState(0);
    const refresh = () => setRefresh(UTILS.random16());

    const scrollbarWrapperRef = React.useRef(null);

    /* eslint-disable */
    React.useEffect(() => {
        connector.refresh.scrollbarHorizontal = refresh;
        connector.refs.scrollbarWrapperRef = scrollbarWrapperRef;
        setTimeout(refresh, 0);
    }, []);
    /* eslint-enable */

    const onScroll = e => {
        const scrollLeft = scrollbarWrapperRef.current.scrollLeft;
        for(let ref of rightParts) {
            ref.scrollLeft = scrollLeft;
        }
        utils.recalcHeaderRootsPadding();
    }

    const headerRight = connector.refs.headerRight;
    const scrollbarIsNeeded = headerRight ? headerRight.scrollWidth > headerRight.clientWidth : false;

    if(scrollbarIsNeeded !== tableHas.scrollbarHorizontal) {
        tableHas.scrollbarHorizontal = scrollbarIsNeeded;
        setTimeout(() => {
            connector.refresh.scrollbarVertical();
        }, 0)
    }

    if(!scrollbarIsNeeded) return null;

    const leftWidth = utils.getLeftPartRowWidth();
    const rightWidth = utils.getRightPartRowWidth();
    const scrollbarWrapperWith = headerRight.clientWidth;

    return (
        <div
            className="unitable-scrollbar-horizontal"
            style={utils.getHeightStyle(sizes.scrollbar)}
        >
            <div className="ush-left" style={utils.getWidthStyle(leftWidth)}></div>
            <div
                className="ush-body-wrapper"
                style={utils.getWidthStyle(scrollbarWrapperWith)}
                ref={scrollbarWrapperRef}
                onScroll={onScroll}
            >
                <div
                    className="ush-body-inner"
                    style={utils.getWidthStyle(rightWidth)}
                ></div>
            </div>
        </div>
    )
}

export default TableScrollbarHorizontal;