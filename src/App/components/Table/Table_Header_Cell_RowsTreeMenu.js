import React from 'react';

import './scss/table-header-cell-rows-tree-menu.scss';

const TableHeaderCellRowsTreeMenu = props => {
    const {utils, connector} = props;
    const {refresh: {row: refreshRow}, showRows} = connector;

    const getLevelsInfo = () => {
        const out = [];

        for(let index in showRows) {
            const {show, level} = showRows[index];
            out[level] = out[level] || {};
            if(show)
                out[level].show = true; else
                out[level].hide = true;
        }
        return out
    }

    const openAll = () => utils.setShowToAllRows(true);
    const closeAll = () => utils.setShowToAllRows(false);

    const openOne = () => {
        const info = getLevelsInfo();

        for(let level in info) {
            const item = info[level];

            if(item.hide) {
                for(let index in showRows) {
                    const row = showRows[index];

                    if(row.level === (Number(level) - 1) && !row.showChildren) {
                        row.showChildren = true;
                        refreshRow[index]();
                    }

                    if(row.level === Number(level) && !row.show) {
                        row.show = true;
                        refreshRow[index]();
                    }
                }
                return;
            }
        }
    }

    const closeOne = () => {
        const info = getLevelsInfo();

        for(let level = info.length - 1; level > 0; level--) {
            const item = info[level];

            if(item.show) {
                for(let index in showRows) {
                    const row = showRows[index];

                    if(row.level === (Number(level) - 1) && row.showChildren) {
                        row.showChildren = false;
                        refreshRow[index]();
                    }

                    if(row.level === Number(level) && row.show) {
                        row.show = false;
                        refreshRow[index]();
                    }
                }
                return;
            }
        }
    }

    return (
        <div className="rows-tree-menu">
            <div
                className="rtm-open rtm-all rtm-open-all"
                title="Развернуть всё"
                onClick={openAll}
            >+</div>
            <div
                className="rtm-open rtm-open-one"
                title="Развернуть один уровень"
                onClick={openOne}
            >+</div>
            <div
                className="rtm-close rtm-close-one"
                title="Свернуть один уровень"
                onClick={closeOne}
            >-</div>
            <div
                className="rtm-close rtm-all rtm-close-all"
                title="Свернуть всё"
                onClick={closeAll}
            >-</div>
        </div>
    )
}

export default TableHeaderCellRowsTreeMenu;