import React from 'react';
import {UTILS} from "../../common";
import {useCurrentState} from "../../hooks";
import {callPopup} from "../../widgets";
import {TableRowCellContent} from "./";

import './scss/table-row-cell.scss';

const TableRowCell = props => {
    const {utils, connector, cell, rowIndex, cellIndex, rowTreeData, tableHasRowsTree, isNotFind} = props;
    const {value, view: cellView = null} = cell;
    const {sizes: {columnsWidth}, options = {}, commonForBody = {}} = connector;
    const {view: cellsView = null, css: commonCSS = {}, customizer: commonCustomizer = []} = commonForBody;
    const {showHints = false, highlightHovered = false} = options.other || {};
    const {hovered: hoveredBackground = false} = options.background || {};

    const headerEndCell = connector.data.headerRootByEndIndex[cellIndex]?.cell || {};
    const css = headerEndCell._?.css || {};
    const columnCustomizer = headerEndCell._?.customizer;
    const customizer = (columnCustomizer?.length ? columnCustomizer : null) || (commonCustomizer?.length ? commonCustomizer : null);

    const columnView = headerEndCell._?.view;
    const CellView = cellView || columnView || cellsView;

    const [hover, hoverCurrent, _setHover] = useCurrentState(false);
    const setHover = data => {
        console.log('*** setHover', data)
        _setHover(data)
    }

    const [_, setRefresh] = React.useState(0);
    const refresh = () => setRefresh(UTILS.random16());

    /* eslint-disable */
    React.useEffect(() => {
        connector.refresh.column[cellIndex] = connector.refresh.column[cellIndex] || [];
        connector.refresh.column[cellIndex].push(refresh);
        setTimeout(refresh, 0);

        return () => console.log('------------ TableRowCell')
    }, []);
    /* eslint-enable */

    const cellRef = React.useRef(null);
    const testRef = React.useRef(null);
    const removePopupFunction = React.useRef(null);

    /* eslint-disable */
    React.useEffect(() => {
        console.log('*** HOVER ***')
        if(highlightHovered && hoverCurrent.current) utils.setHoveredCell(cellIndex, rowIndex);

        if(!showHints || !hoverCurrent.current || !testRef.current) return;

        const {width} = testRef.current.getBoundingClientRect();
        if(width <= columnsWidth[cellIndex]) return;

        const popupAnswer = {};

        setTimeout(() => {
            if(removePopupFunction.current) removePopupFunction.current();
            if(!hoverCurrent.current) return;

            setHover(false);

            const removePopup = () => removePopupFunction.current();

            const {removeComponent} = callPopup({
                initiator: cellRef.current,
                extraClass: 'table-hint',
                minWidth: columnsWidth[cellIndex],
                minHeight: 10,
                maxWidth: 400,
                onOutsideClick: removePopup,
                notResize: true,
                autoSize: true,
                children: <div dangerouslySetInnerHTML={{__html: value.replace(/, /g, '<br/>')}}></div>,
                answer: popupAnswer,
            })
            removePopupFunction.current = removeComponent;
            setTimeout(() => {
                const {randomClass, direction: {up, left}} = popupAnswer;

                const popupEl = document.querySelector(`.${randomClass}`);
                popupEl.classList.add(up ? 'up' : 'down');
                popupEl.classList.add(left ? 'left' : 'right');
            }, 0)
        }, 1000);
    }, [hover]);
    /* eslint-enable */

    if(!connector.showColumns[cellIndex]) return null;

    const onMouseEnter = () => {
        if(connector.editableCell?.cell) return;
        setHover(true);
    }

    const onMouseLeave = () => {
        if(connector.editableCell?.cell) return;
        setHover(false);
        if(removePopupFunction.current) removePopupFunction.current();
    }

    const toggleShowRowTree = () => {
        utils.toggleShowRowTree(rowIndex);
    }

    const style = utils.getWidthStyle(columnsWidth[cellIndex]);
    const isTreeCell = !cellIndex && tableHasRowsTree;
    const isTreeRoot = isTreeCell && rowTreeData.isRoot;
    const format = utils.getFormatByCellIndex(cellIndex) || {};

    const {align, color, background, wrap} = format;
    if(align === 'left' || align === 'right') style['text-align'] = align;
    if(color) style['color'] = color;
    if(background) style['background'] = background;
    const valueStyle = wrap ? {'white-space': 'normal'} : {};

    if(highlightHovered && ((connector.hovered?.row === rowIndex) || (connector.hovered?.column === cellIndex))) {
        style['background'] = hoveredBackground;
    }

    const searchContext = utils.getSearchContextByCellIndex(cellIndex);
    const {html, find} = (searchContext && value && !CellView && !isNotFind) ? UTILS.textWithSearchContext(String(value), searchContext, true) : {html: value};
    const cellData = {...props, isTreeCell, isTreeRoot, toggleShowRowTree, valueStyle, CellView, cellRef, html, refreshCell: refresh};

    const conditionalData = customizer?.length ? utils.getCustomizer({customizer, cell}) : {css: {}, class: ''};
    const {css: conditionalCss, class: conditionalClass} = conditionalData;
    let className = `unitable-row-cell${isTreeCell ? ' is-tree-cell' : ''}${isNotFind ? ' is-not-find' : ''}${find ? ' cell-with-search-context' : ''}`;
    if(conditionalClass) className += ' ' + conditionalClass;
    if(cell._?.invalidValueFormat) className += ' invalid-format';

    console.log('++++++++++++ TableRowCell')

    return (
        <div
            className={className}
            style={{...commonCSS, ...style, ...css, ...conditionalCss}}
            ref={cellRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <TableRowCellContent {...cellData} />
            {hover && (
                <div
                    className={`unitable-row-cell unitable-row-cell-test`}
                    ref={testRef}
                >
                    <TableRowCellContent {...cellData} />
                </div>
            )}
        </div>
    )
}

export default TableRowCell;