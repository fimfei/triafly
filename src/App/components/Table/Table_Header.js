import React from 'react';
import {TableHeaderCell} from '.';
import UTILS from "../../common/utils";

import './scss/table-header.scss';

const TableHeader = props => {
    const {utils, connector} = props;
    const {header, sizes: {headerHeight}, refs: {rightParts}, orderTree, numberFixedLeftColumns, options = {}} = connector;
    const {background: {header: headerBackground = false}, resize = false} = options;

    const refRightPart = React.useRef(null);
    const wrapperEl = React.useRef(null);
    const startPosition = React.useRef(null);

    const [_, setRefresh] = React.useState(0);
    const refresh = () => setRefresh(UTILS.random16());

    /* eslint-disable */
    React.useEffect(() => {
        rightParts.push(refRightPart.current);
        connector.refs.headerRight = refRightPart.current;
        connector.refresh.header = refresh;
    }, []);
    /* eslint-enable */

    const onMouseUp = () => {
        document.onmouseup = null;
        document.onmousemove = null;
        utils.refreshTableWidth();

        const bodyHeight = utils.getBodyHeight();
        connector.refs.unitableBody.style['max-height'] = bodyHeight;

        utils.saveTableSettingsToLocaleStorage();
    }

    const onMouseMove = e => {
        const {cursorY, wrapperHeight} = startPosition.current;
        const newHeight = Math.max(20, wrapperHeight + (e.clientY - cursorY));

        connector.sizes.headerHeight = newHeight;
        refresh();
    }

    const onMouseDown = e => {
        startPosition.current = {
            cursorY: e.clientY,
            wrapperHeight: wrapperEl.current.getBoundingClientRect().height
        }
        document.onmouseup = onMouseUp;
        document.onmousemove = onMouseMove;
    }

    const [orderLeft, orderRight] = utils.splitRowByLeftAndRight(orderTree, numberFixedLeftColumns);
    const style = utils.getHeightStyle(headerHeight);
    if(headerBackground) style.background = headerBackground;

    return (
        <div
            className="unitable-header"
            style={style}
            ref={wrapperEl}
        >
            <div className="unitable-header-left">
                {orderLeft.map(item => {
                    const {i, ch} = item;
                    const cell = header[i];
                    const key = `header-cell-${cell._.ordinalIndex}`;

                    return (
                        <RootCells key={key} {...props} parent={null} cell={cell} ch={ch} isLeft={true} />
                    )
                })}
            </div>
            <div
                className="unitable-header-right"
                style={{width: `(100% - ${utils.getLeftPartRowWidth()}px`}}
                ref={refRightPart}
            >
                {orderRight.map(item => {
                    const {i, ch} = item;
                    const cell = header[i];
                    const key = `header-cell-${cell._.ordinalIndex}`;

                    return (
                        <RootCells key={key} {...props} cell={cell} parent={null} parentCh={orderTree} parentChildren={header} ch={ch} isRight={true} />
                    )
                })}
            </div>
            <div className="unitable-line left"></div>
            <div className="unitable-line right"></div>
            <div className="unitable-line top"></div>
            {resize.headerHeight && (
                <div
                    className="unitable-line bottom header-resize"
                    onMouseDown={onMouseDown}
                ></div>
            )}
        </div>
    )
}

const RootCells = props => {
    const {cell, ch} = props;
    const {children, _: {isEnd, endIndex}} = cell;

    if(isEnd) return  <TableHeaderCell {...props} cell={cell} cellIndex={endIndex} />

    return (
        <div className="unitable-header-root">
            <TableHeaderCell {...props} cell={cell} cellIndex="root" />

            <div className="unitable-header-children">
                {ch.map(item => {
                    const {i, ch: _ch} = item;
                    const _cell = children[i];
                    const key = `header-cell-${_cell._.ordinalIndex}`;

                    return (
                        <RootCells key={key} {...props} cell={_cell} parent={cell} parentCh={ch} parentChildren={children} ch={_ch} />
                    )
                })}
        </div>

        </div>
    )
}

export default TableHeader;