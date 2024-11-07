import React from 'react';
import {UTILS} from "../../common";
import {TableRow, TableScrollbarHorizontal, TableScrollbarVertical} from '.';

import './scss/table-body.scss';

const TableBody = props => {
    const {utils, connector} = props;
    const {rows} = connector;

    const refUnitableBody = React.useRef(null);
    const refUnitableBodyInner = React.useRef(null);
    const refUnitableRowsWrapper = React.useRef(null);

    const [_, setRefresh] = React.useState(0);
    const refresh = () => {
        refUnitableBodyInner.current.scrollTop = 0;
        setRefresh(UTILS.random16());
    }
    const refreshHard = () => {
        refUnitableBodyInner.current.scrollTop = 0;
        setRefresh(null);
        setTimeout(() => {
            setRefresh(UTILS.random16());
        }, 1000)
    }

    /* eslint-disable */
    React.useEffect(() => {
        connector.refs.unitableBody = refUnitableBody.current;
        connector.refs.unitableBodyInner = refUnitableBodyInner.current;
        connector.refs.unitableRowsWrapper = refUnitableRowsWrapper.current;

        connector.refresh.body = refresh;
        connector.refresh.bodyHard = refreshHard;
        window.addEventListener('resize', onResize);

        utils.recalcHeaderRootsPadding();

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);
    /* eslint-enable */

    const onWheel = e => {
        if(!connector.refs.scrollbarVertical || connector.editableCell) return;

        const scrollTop = refUnitableBodyInner.current.scrollTop + (e.deltaY > 0 ? 20 : -20);
        refUnitableBodyInner.current.scrollTop = scrollTop;
        connector.refs.scrollbarVertical.scrollTop = scrollTop;
    }

    const onResize = e => {
        connector.refresh.scrollbarHorizontal();
        connector.refresh.scrollbarVertical();
        utils.recalcHeaderRootsPadding();
    }

    const sliding = utils.getSliding();

    if(_ === null) return null;

    return (
        <div
            className="unitable-body"
            style={{maxHeight: utils.getBodyHeight()}}
            onWheel={onWheel}
            ref={refUnitableBody}
            onMouseLeave={() => utils.setHoveredCell(null, null)}
        >
            <div
                className="unitable-body-inner"
                ref={refUnitableBodyInner}
            >
                <div
                    className="unitable-rows-wrapper"
                    ref={refUnitableRowsWrapper}
                >
                    {rows.map((row, index) => {

                        return (
                            <TableRow key={`row-${index}`} {...props} row={row} rowIndex={index} sliding={sliding}/>
                        )
                    })}
                    <div style={{height: '20px', minHeight: '20px'}}></div>
                </div>
            </div>
            <div className="unitable-line bottom"></div>
            <div className="unitable-line right"></div>
            <div className="unitable-line left"></div>
            {_ && (
                <TableScrollbarHorizontal {...props} />
                <TableScrollbarVertical {...props} />
            )}
        </div>
    )
}

export default TableBody;