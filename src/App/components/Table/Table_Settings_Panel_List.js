import React from 'react';
import UTILS from "../../common/utils";
import {Popup} from "../../widgets";
import {TableSettingsPanelOrder} from ".";

import './scss/table-settings-panel-list.scss';

const TableSettingsPanelList = props => {
    const {utils, connector} = props;
    const {header, orderTree, numberFixedLeftColumns} = connector;

    const [_, setRefresh] = React.useState(0);
    const refresh = () => setRefresh(UTILS.random16);

    const [orderLeft, orderRight] = utils.splitRowByLeftAndRight(orderTree, numberFixedLeftColumns);

    return (
        <div className="usp-list">
            <div className="usp-list-left">
                {orderLeft.map(item => {
                    const {i, ch} = item;
                    const cell = header[i];
                    const key = `panel-list-${cell._.ordinalIndex}`;

                    return (
                        <Branch key={key} {...props} cell={cell} parent={null} parentCh={orderTree} parentChildren={header} ch={ch} isLeft={true} />
                    )
                })}
            </div>
            <div className="usp-list-right">
                {orderRight.map(item => {
                    const {i, ch} = item;
                    const cell = header[i];
                    const key = `panel-list-${cell._.ordinalIndex}`;

                    return (
                        <Branch key={key} {...props} cell={cell} parent={null} parentCh={orderTree} ch={ch} parentChildren={header} isRight={true} refresh={refresh} />
                    )
                })}
            </div>
        </div>
    )
}

const Branch = props => {
    const {utils, cell, ch, parentCh, parentChildren, level = 0, isLeft, refresh} = props;
    const {value, children, _: {isEnd}} = cell;

    const [collapsed, setCollapsed] = React.useState(true);

    const toggleCollapsed = () => setCollapsed(!collapsed);
    const toggleShow = () => {
        utils.toggleCheckedCell(cell);
        utils.distributeHeaderToShowColumns();
        utils.refreshTableWidth();
        utils.saveTableSettingsToLocaleStorage();
        refresh();
    }

    const labelData = {...props, value, collapsed, toggleCollapsed, isEnd, toggleShow, isLeft, parentCh, parentChildren}

    return (
        <div className="branch">
            <BranchLabel {...labelData} />
            {!isEnd && (
                <div className={`branch-children${collapsed ? ' collapsed' : ''}`}>
                    {ch.map(item => {
                        const {i, ch: _ch} = item;
                        const _cell = children[i];
                        const key = `panel-list-${_cell._.ordinalIndex}`;

                        return (
                            <Branch key={key} {...props} parentChildren={children} cell={_cell} parent={cell} parentCh={ch} ch={_ch} level={level + 1}/>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

const BranchLabel = props => {
    const {utils, connector, cell, parent, value, collapsed, toggleCollapsed, isEnd, toggleShow, isLeft, parentCh, parentChildren, refresh} = props;

    const show = cell._.checked;

    const branchRef = React.useRef(null);
    const [showOrderPanel, setShowOrderPanel] = React.useState(false);

    const openOrderMenu = () => {
        const list = [];
        for(let item of parentCh) {
            const index = item.i;
            list.push({
                index,
                value: parentChildren[index].value,
                isLeft: !!parentChildren[index]._.isLeft,
            });
        }
        setShowOrderPanel({list});
    }

    const onChangeOrder = list => {
        const tmp = {};
        for(let item of parentCh) tmp[item.i] = item;
        for(let i in list) parentCh[i] = tmp[list[i].index];

        utils.orderTreeToOrderEnds();
        connector.refresh.headerAndBody();
        utils.saveTableSettingsToLocaleStorage()

        refresh();
    }

    return (
        <div
            className={`branch-label-wrapper ${isEnd ? 'is-end' : 'is-root'}${show ? ' is-show' : ' is-hide'}`}
            ref={branchRef}
        >
            <div className="branch-collapsed">
                {!isEnd && (
                    <i className={`fas fa-chevron-${collapsed ? 'up' : 'down'}`} onClick={toggleCollapsed}></i>
                )}
            </div>
            <div className="branch-show">
                <input
                    type="checkbox"
                    checked={show}
                    onChange={isLeft ? () => {} : toggleShow}
                />
            </div>
            <div className="branch-label">
                {value}
            </div>
            <div className="branch-order">
                {!isLeft && (
                    <i className={`fas fa-exchange-alt`} onClick={openOrderMenu}></i>
                )}
            </div>
            {showOrderPanel && (
                <Popup
                    initiator={branchRef.current}
                    id="unitable-order-panel"
                    minWidth="0"
                    minHeight="0"
                    onOutsideClick={() => setShowOrderPanel(false)}
                    notResize={true}
                    autoSize={true}
                >
                    <TableSettingsPanelOrder
                        {...props}
                        list={showOrderPanel.list}
                        root={parent?.value ? parent.value : 'ROOT'}
                        onChange={onChangeOrder}
                    />
                </Popup>
            )}
        </div>
    )
}

export default TableSettingsPanelList;