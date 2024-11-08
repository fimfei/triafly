import {toJS} from "mobx";
import {Store} from "../../../stores";
import {UTILS, CONSTANTS} from "../../../common";

class Utils {
    constructor(props) {
        const {
            tablePortalElCurrent,
            tableName = '',
            data,
            commonForHeader = {},
            commonForBody = {},
            editors = {},
            options = {},
            onChangeComponentState = {},
            getComponentControlling = () => {},
            refreshTable,
        } = props;
        const {numberFixedLeftColumns = 0, tableHasRowsTree = false} = options;
        const {header, rows: rowsTree, params = {}} = data;

        this.rowsByOrdinalIndex = {};
        const {rows, rowsMaxLevel, rowsRootNumber} = this.rowsTreeToRows(rowsTree);

        this.tableName = tableName;
        this.header = header;

        this.numberFixedLeftColumns = numberFixedLeftColumns;
        this.setHeaderInfo(header);
        this.numberFixedLeftColumnsEnds = this.getNumberFixedLeftColumns(header, numberFixedLeftColumns);

        if(!params.totalLength && rowsTree.length < params.pageLength) params.totalLength = rowsTree.length;

        const initialSizes = options.initialSizes || {};

        this.connector = {
            options,
            params,
            commonForHeader,
            commonForBody,
            editors,
            onChangeComponentState,
            tableHas: {
                paginator: rows.length !== params.totalLength,
                scrollbarHorizontal: false,
                scrollbarVertical: false,
                rowsTree: tableHasRowsTree,
            },
            header,
            rows: this.correctionRowsLength(rows, this.headerLength),
            rowsTree,
            rowsRootNumber,
            rowsMaxLevel,
            headerMaxLevel: this.headerMaxLevel,
            headerLength: this.headerLength,
            showPageNum: 0,
            numberFixedLeftColumns: this.numberFixedLeftColumns,
            numberFixedLeftColumnsEnds: this.numberFixedLeftColumnsEnds,

            searchContext: UTILS.monoArray(this.headerLength, null),
            format: UTILS.monoArray(this.headerLength, null),

            sortCell: null,
            editableCell: null,
            sizes: {
                columnsWidth: this.getColumnsWidth({tablePortalElCurrent, initialSizes}),
                headerHeight: initialSizes.headerHeight ? initialSizes.headerHeight : this.headerMaxLevel * 45,
                rowsHeight: initialSizes.rowsHeight ? initialSizes.rowsHeight : 25,
                paginatorHeight: 40,
                scrollbar: 18,
            },
            refs: {
                tablePortalElCurrent,
                unitableBody: null,
                body: null,
                rightParts: [],
                headerRight: null,
                unitable: null,
                scrollbarVertical: null,
                settings: null,
            },
            hovered: {
                column: null,
                row: null,
            },
            data: {
                headerRoot: [],
                headerRootByEndIndex: {},
                rowsByOrdinalIndex: this.rowsByOrdinalIndex,
            },
            refresh: {
                table: refreshTable,
                headerAndBody: () => {},
                header: () => {},
                body: () => {},
                scrollbarHorizontal: () => {},
                scrollbarVertical: () => {},
                paginator: () => {},
                column: [],
                row: [],
            },
            showColumns: UTILS.monoArray(this.headerLength, true),
            showRows: this.showRows,
            orderTree: this.buildTreeOrder(),
            orderEnds: [],
        }

        this.restoreTableSettingsFromLocaleStorage();
        this.orderTreeToOrderEnds();

        setTimeout(() => {
            this.setControlling(getComponentControlling);
        }, 0);
        console.log('--- Utils --->', this)
    }

    getColumnsWidth({tablePortalElCurrent = null, initialSizes = {}}) {
        const defaultWidth = 100;

        console.log('tablePortalElCurrent.current', tablePortalElCurrent.current)
        let portalWidth = tablePortalElCurrent.current?.getBoundingClientRect ? tablePortalElCurrent.current.getBoundingClientRect().width : null;
        if(portalWidth) {
            const portalStyle = tablePortalElCurrent.current.currentStyle || window.getComputedStyle(tablePortalElCurrent.current);
            const portalPadding =
                Number(portalStyle.paddingLeft.replace('px', '')) +
                Number(portalStyle.paddingRight.replace('px', ''));
            portalWidth -= portalPadding;
        }

        if(!portalWidth && !initialSizes?.columnsWidth) {
            return UTILS.monoArray(this.headerLength, defaultWidth);
        }

        if(!initialSizes.columnsWidth) {
            const width = Math.floor(portalWidth / this.headerLength);
            return UTILS.monoArray(this.headerLength, width);
        }

        const columnsWidth = initialSizes.columnsWidth;

        const getPX = text => {
            const sizePercent = text.split('%');
            if(sizePercent.length === 2) {
                return portalWidth ? Math.floor(portalWidth /100 * Number(sizePercent[0])) : defaultWidth;
            }

            const sizePx = text.split('px');
            return Number(sizePx[0]);
        }

        if(Array.isArray(columnsWidth)) {
            const out = [];
            let undefCount = 0;
            let totalWidth = 0;

            for(let i = 0; i < this.headerLength; i++) {
                if(columnsWidth[i]) {
                    const width = getPX(String(columnsWidth[i]));
                    out[i] = width;
                    totalWidth += width;
                } else {
                    out[i] = '*';
                    undefCount++;
                }
            }

            if(undefCount) {
                const remainsTotal = portalWidth ? portalWidth - totalWidth : defaultWidth * undefCount;
                const remainsWidth = remainsTotal / undefCount;

                for(let i in out) {
                    if(out[i] === '*') out[i] = remainsWidth;
                }
            }

            return out;
        } else {
            return UTILS.monoArray(this.headerLength, getPX(String(columnsWidth)));
        }
    }

    setControlling(getComponentControlling) {
        const controlling = {
            setTableTotalLength: this.setTableTotalLength.bind(this),
            refreshBodyWithNewRows: this.refreshBodyWithNewRows.bind(this),
            refreshPaginator: this.connector.refresh.paginator.bind(this),
            refreshTable: this.refreshTable.bind(this),
        }

        getComponentControlling(controlling);
    }

    refreshTable() {
        Store.setState(`unitable.${this.tableName}`, {});
        this.connector.refresh.table();
    }

    refreshBodyWithNewRows(props) {
        const {params} = this.connector;
        const {newRows, newPageLength, newPageNum, openAllLevels} = props;
        const {rows, rowsMaxLevel, rowsRootNumber} = this.rowsTreeToRows(newRows, openAllLevels);

        this.connector.rowsTree = newRows;
        this.connector.rows = this.correctionRowsLength(rows, this.headerLength);
        this.connector.rowsRootNumber = rowsRootNumber;
        this.connector.rowsMaxLevel = rowsMaxLevel;
        if(newPageLength) params.pageLength = newPageLength;
        if(!isNaN(newPageNum)) params.pageNum = newPageNum;

        if(!params.totalLength && newRows.length < params.pageLength) {
            this.setTableTotalLength(params.pageNum * params.pageLength + newRows.length);
        }

        if(!openAllLevels) this.setShowToAllRows(false);

        this.connector.refresh.body();
        this.connector.refresh.paginator();

        this.storeRememberPage();
    }

    getSliding() {
        const {sizes: {rowsHeight, headerHeight, paginatorHeight}, refs, showRows} = this.connector;

        const inner = refs?.unitableBodyInner;

        const getInnerHeight = () => {
            const documentHeight = document.getElementsByTagName('body')[0].getBoundingClientRect().height;
            return documentHeight - headerHeight - paginatorHeight;
        }

        const scrollTop = inner ? inner.scrollTop : 0;
        const innerHeight = inner ? inner.getBoundingClientRect().height : getInnerHeight();
        const from = Math.round(scrollTop / rowsHeight);
        const to = Math.round((scrollTop + innerHeight) / rowsHeight);

        const sliding = [];
        let visualIndex = 0;

        for(let row of showRows) {
            if(row.show) {
                sliding.push(visualIndex >= from && visualIndex <= to);
                visualIndex++;
            } else {
                sliding.push(true);
            }
        }

        return sliding;
    }

    setTableTotalLength(length) {
        const {params, refresh} = this.connector;

        params.totalLength = length;
        refresh.paginator();
    }

    setShowToAllRows(value) {
        const {refresh: {body: refreshBody}, showRows} = this.connector;

        for(let index in showRows) {
            const item = showRows[index];
            item.showChildren = value;
            if(item.level) item.show = value;
//            refreshRow[index]();
        }
        refreshBody();
    }

    rowsTreeToRows(rowsTree, openAllLevels) {
        const rows = [];
        const showRows = [];
        let mainRootIndex = 0;
        let rowsMaxLevel = 0;
        let myIndex = 0;
        let ordinalIndex = 0;

        const nextBranch = (branch, level, parentChildren, parentIndex) => {
            for(let item of branch) {
                const {row, children, _} = item;
                const isRoot = !!children?.length;

                rows.push(row);
                this.rowsByOrdinalIndex[ordinalIndex] = item;
                const ch = [];


                const el = {
                    show: openAllLevels ? true : !level,
                    mainRootIndex: mainRootIndex,
                    level,
                    isRoot,
                    showChildren: !!openAllLevels,
                    children: ch,
                    parentChildren,
                    parentIndex,
                    ordinalIndex,
                }
                if(_?.isNotFind) el.isNotFind = true;
                showRows.push(el);

                ordinalIndex++;
                myIndex++;

                rowsMaxLevel = Math.max(rowsMaxLevel, level);
                if(parentChildren) parentChildren.push(showRows.length - 1);

                if(isRoot) {
                    nextBranch(children, level + 1, ch, myIndex);
                }
                if(!level) mainRootIndex++;
            }
        }
        nextBranch(this.rootsToUp(rowsTree), 0);

        if(this.connector) {
            this.connector.showRows = showRows;
        }
        this.showRows = showRows;
        return {rows, rowsMaxLevel, rowsRootNumber: rowsTree.length};
    }

    rootsToUp(rowsTree) {
        const sort = rows => {
            rows.sort((a, b) => {
                const aChildren = !!a.children?.length;
                const bChildren = !!b.children?.length;
                if(aChildren && !bChildren) return -1;
                if(!aChildren && bChildren) return 1;
                return 0;
            })
            for(let row of rows) {
                if(row.children?.length) {
                    sort(row.children);
                }
            }
        }

        sort(rowsTree);
        return rowsTree;
    }

    toggleShowRowTree(rowIndex) {
        const {showRows, refresh: {row: refreshRow}, refs: {rightParts: rightPartsRefs, scrollbarWrapperRef}, refresh} = this.connector;
        const scrollLeft = scrollbarWrapperRef.current?.scrollLeft || 0;
        const show = !showRows[rowIndex].showChildren;

        const setChildrenShow = index => {
            const rowData = showRows[index];

            rowData.showChildren = show;
            for(let childIndex of rowData.children) {
                const childrenData = showRows[childIndex];

                childrenData.show = show;
                refreshRow[childIndex]();

                setTimeout(() => {
                    rightPartsRefs[childIndex + 1].scrollLeft = scrollLeft; // +1 потому что на нулевом месте лежит правая часть хидера
                }, 10)

                if(!show && childrenData.children?.length) { // если выключаем, то всех потомков
                    setChildrenShow(childIndex);
                }
            }
        }
        setChildrenShow(rowIndex);

        setTimeout(() => {
            refresh.scrollbarVertical();
        }, 0)
    }

    toggleCheckedCell(cell) {
        if(cell._.isEndOfLeftPart) return;

        const checked = !cell._.checked;

        const setChecked = cell => {
            cell._.checked = checked;
            if(!cell._.isEnd) {
                for(let child of cell.children) setChecked(child);
            }
        }
        setChecked(cell);
        this.checkParentCheckedInHeader();
    }

    checkParentCheckedInHeader() {
        const testChecked = cell => {
            if(cell._.isEnd) {
                return cell._.checked;
            }

            let checked = false;
            for(let child of cell.children) {
                checked = testChecked(child) || checked;
            }
            cell._.checked = checked;
            return checked;
        }
        for(let root of this.connector.header) {
            if(!root._.isEndOfLeftPart) testChecked(root);
        }
    }

    distributeShowColumnsToHeader() {
        const {showColumns, header} = this.connector;

        const testChecked = cell => {
            if(cell._.isEnd) {
                cell._.checked = showColumns[cell._.endIndex];
                return;
            }
            for(let child of cell.children) testChecked(child);
        }
        for(let root of header) {
            if(!root._.isEndOfLeftPart) testChecked(root);
        }
        this.checkParentCheckedInHeader();
    }

    distributeHeaderToShowColumns() {
        const {showColumns, header, data: {headerRoot}} = this.connector;

        const testChecked = cell => {
            const {_: {checked: checkedInHeader, isEnd, endIndex}} = cell;

            if(isEnd) {
                const checkedInShowColumns = showColumns[endIndex];
                if(checkedInHeader === checkedInShowColumns) return;
                showColumns[endIndex] = checkedInHeader;
                this.refreshColumn(endIndex);
                return;
            }
            for(let child of cell.children) testChecked(child);
        }
        for(let root of header) {
            if(!root._.isEndOfLeftPart) testChecked(root);
        }
        setTimeout(() => {
            for(let root of headerRoot) root.refresh();
        }, 0)
    }

    buildTreeOrder() {
        let originalEndsIndex = 0;

        const getChildren = children => {
            const out = [];

            for (let i in children) {
                const cell = children[i];
                const item = {
                    i: Number(i),
                };
                if (cell.children?.length) {
                    item.ch = getChildren(cell.children);
                } else {
                    item.orig = originalEndsIndex;
                    originalEndsIndex++;
                }
                out.push(item);
            }
            return out;
        }
        return getChildren(this.header);
    }

    getNumberFixedLeftColumns(header, num) {
        let out = 0;
        for(let i = 0; i < num; i++) out += header[i]._.length;
        return out;
    }

    setHeaderInfo(header) {
        let headerLength = 0;
        let maxLevel = 1;
        let endIndex = 0;
        let ordinalIndex = 0;
        this.headerCellsByCellIndex = {};

        const getItemLength = ({item, rootIndex, level, parent, isLeft, isEditable, css, view, customizer}) => {
            let out = 0;
            if(level > maxLevel) maxLevel = level;

            if(item.children?.length) {
                for(let i in item.children) {
                    const child = item.children[i];
                    let childIsEditable = isEditable;
                    let childCss = css;
                    let childView = view;
                    let childCustomizer = customizer;
                    if(child.columns) {
                        childIsEditable = child.columns.isEditable     === undefined ? isEditable     : child.columns.isEditable;
                        childCss        = child.columns.css            === undefined ? css            : {...css, ...child.columns.css};
                        childView       = child.columns.view           === undefined ? view           : child.columns.view;
                        childCustomizer      = child.columns.customizer === undefined ? customizer : child.columns.customizer;
                    }

                    out += getItemLength({
                        item: child,
                        rootIndex,
                        level: level + 1,
                        parent: item, isLeft,
                        isEditable: childIsEditable,
                        css: childCss,
                        view: childView,
                        customizer: childCustomizer,
                    });
                }
                item._ = {
                    level,
                    length: out,
                    isEnd: false,
                    parent,
                    checked: true,
                    isLeft,
                    ordinalIndex,
                    isEditable,
                    css,
                    view,
                    customizer,
                }
                ordinalIndex++;
                return out;
            }
            headerLength++;

            item._ = {
                level,
                length: 1,
                isEnd: true,
                rootIndex,
                endIndex,
                checked: true,
                parent,
                isLeft,
                ordinalIndex,
                isEditable,
                css,
                view,
                customizer,
            }
            this.headerCellsByCellIndex[endIndex] = item;
            ordinalIndex++;
            endIndex++;

            return 1;
        }

        for(let rootIndex in header) {
            getItemLength({
                item: header[rootIndex],
                rootIndex: Number(rootIndex),
                level: 0,
                parent: null,
                isLeft: rootIndex < this.numberFixedLeftColumns,
                isEditable: header[rootIndex].columns?.isEditable,
                css: header[rootIndex].columns?.css || {},
                view: header[rootIndex].columns?.view || null,
                customizer: header[rootIndex].columns?.customizer || null,
            });
        }

        if(this.numberFixedLeftColumns) {
            const setEndOfLeft = item => {
                item._.isEndOfLeftPart = true;
                if(item.children?.length) return item.children[item.children.length - 1];
                return null;
            }

            let item = header[this.numberFixedLeftColumns - 1];
            while(item) {
                item = setEndOfLeft(item);
            }
        }

        this.headerLength = headerLength;
        this.headerMaxLevel = maxLevel + 1;
    }

    orderTreeToOrderEnds() {
        const {orderTree} = this.connector;
        const out = [];

        const checkChildren = tree => {
            for(let item of tree) {
                if(item.ch) {
                    checkChildren(item.ch);
                } else {
                    out.push(item.orig);
                }
            }
        }
        checkChildren(orderTree);
        this.connector.orderEnds = out;
    }

    recalcHeaderRootsPadding() {
        const {data: {headerRoot}, refs: {headerRight}} = this.connector;
        const {left: startView, right: endView} = headerRight.getBoundingClientRect();

        for (let root of headerRoot) {
            const {ref, refresh} = root;
            const {left, right} = ref.getBoundingClientRect();
            if(
                (left < startView && right > startView) ||
                (left < endView || right > endView)
            ) refresh();
        }
    }

    getHeaderRootsPadding(ref) {
        let paddingLeft = 0;
        let paddingRight = 0;
        const minWidth = 200;

        if(!ref) return {paddingLeft, paddingRight};

        const {refs: {headerRight}} = this.connector;

        const {left, right} = ref.getBoundingClientRect();
        const {left: startView, right: endView} = headerRight.getBoundingClientRect();
        const windowWidth = right - left;
        const maxPadding = windowWidth - minWidth;

        if(left < startView && right > startView) paddingLeft = Math.min(maxPadding, startView - left);
        if(left < endView && right > endView) paddingRight = Math.min(maxPadding, right - endView);

        return {paddingLeft, paddingRight};
    }

    getEndsByHeaderCell(cell) {
        const out = [];

        const getEnds = cell => {
            if(cell._.isEnd) {
                out.push(cell);
                return;
            }
            if(!cell.children?.length) return;

            for(let _cell of cell.children) getEnds(_cell);
        }

        getEnds(cell);
        return out;
    }

    refreshHeaderRoots() {
        const {data: {headerRoot}} = this.connector;
        for (let root of headerRoot) root.refresh();
    }

    refreshTableWidth() {
        setTimeout(() => {
            this.connector.refresh.scrollbarHorizontal();
            this.connector.refresh.scrollbarVertical();
            this.recalcHeaderRootsPadding();
            this.connector.refs.unitable.style[`maxWidth`] = `${this.getTotalRowWidth()}px`;
        }, 0);
    }

    saveTableSettingsToLocaleStorage() {
        const {sizes: _sizes, showColumns, orderTree, orderEnds, header, options} = this.connector;
        const {saveSettingsInLocaleStorage, background, resize, initialSizes, columns, editableSettings, other} = options;
        
        if(!saveSettingsInLocaleStorage) return;

        const sizes = JSON.parse(JSON.stringify(_sizes));
        if(initialSizes?.columnsWidth && !resize?.columnsWidth && !editableSettings?.resizeColumnsWidth) {
            delete sizes.columnsWidth;
        }

        const getTableFormat = () => {
            const out = [];

            const next = children => {
                for(let cell of children) {
                    if(cell.children?.length) {
                        next(cell.children);
                    }
                    out.push(cell._.format || null);
                }
            }
            next(header);
            return out;
        }

        const oldData = JSON.parse(localStorage.getItem('unitables_data') || '{}');
        const savedData = ({
            ...oldData,
            [this.tableName]: {
                sizes,
                showColumns,
                orderTree,
                orderEnds,
                format: getTableFormat(),
                options: {background, resize, columns, other},
            }
        });
        localStorage.setItem('unitables_data', JSON.stringify(savedData));
    }

    restoreTableSettingsFromLocaleStorage() {
        const {header, options: {saveSettingsInLocaleStorage}} = this.connector;

        if(!saveSettingsInLocaleStorage) return;

        const totalData = JSON.parse(localStorage.getItem('unitables_data') || '{}');
        const data = totalData[this.tableName];
        if(!data) return;

        const setTableFormat = format => {
            let ordinalIndex = 0;

            const next = children => {
                for(let cell of children) {
                    if(cell.children?.length) {
                        next(cell.children);
                    }
                    if(format[ordinalIndex]) {
                        cell._.format = format[ordinalIndex];
                        setTimeout(() => {
                            this.refreshColumnsTree({
                                data: cell._.format,
                                cell,
                                connectorIndex: 'format',
                                isObject: true
                            });
                        }, 0)
                    }
                    ordinalIndex++;
                }
            }
            next(header);
        }

        for(let key in data) {
            if(key === 'format') {
                setTableFormat(data[key]);
            } else {
                if(key === 'options') {
                    for(let optionKey in data.options) {
                        this.connector.options[optionKey] = data.options[optionKey];
                    }
                } else {
                    this.connector[key] = data[key];
                }
            }
        }
        this.orderTreeToOrderEnds();
    }

    refreshColumn(num) {
        for(let func of this.connector.refresh.column[num]) func();
    }

    refreshAllColumns() {
        for(let column of this.connector.refresh.column) {
            for (let func of column) func();
        }
    }

    correctionRowsLength(rows, length) {
        const out = [];
        const text = 'Правительство Венесуэлы решило отозвать весь дипломатический персонал из Аргентины, Доминиканской Республики, Коста-Рики, Панамы, Перу, Уругвая и Чили, власти которых раскритиковали результаты прошедших президентских выборов. Согласно бюллетеню Национального избирательного совета, опубликованному после обработки 80% протоколов, действующего лидера Николаса Мадуро поддержали 5 150 092 избирателя (51,2% проголосовавших). Глава Аргентины Хавьер Милей не признал победу Мадуро на выборах в Венесуэле.';

        const getRandomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if(!rows?.length) return out;

        const rowCorrection = row => {
            const addCount = length - row.length;
            for(let i = 0; i < addCount; i++) {
                const from = getRandomInt(0, 400)
                const length = getRandomInt(3, 90)
                row.push({
                    value: text.slice(from, from + length),
//                    isEditable: true,
                });
            }
            return row.slice(0, length);
        }

        for(let row of rows) out.push({...rowCorrection(row)})
        return out;
    }

    splitRowByLeftAndRight(row, num) {
        return [
            row.slice(0, num),
            row.slice(num),
        ]
    }

    getBodyHeight() {
        const {
            sizes: {headerHeight, paginatorHeight},
            tableHas: {paginator: hasPaginator}
        } = this.connector;
        const additionalHeight = headerHeight + /*(hasScrollbar ? scrollbarHeight : 0) + */(hasPaginator ? paginatorHeight : 0);
        return `calc(100% - ${additionalHeight}px)`;
    }

    getHeightStyle = height => {
        const _height = isNaN(height) ? height : `${height}px`;
        return {height: _height, minHeight: _height, maxHeight: _height};
    }

    getWidthStyle = width => {
        const _width = isNaN(width) ? width : `${width}px`;
        return {width: _width, minWidth: _width, maxWidth: _width};
    }

    getLeftPartRowWidth() {
        const {numberFixedLeftColumnsEnds, sizes: {columnsWidth}, showColumns} = this.connector;
        let out = 0;

        for(let i = 0; i < numberFixedLeftColumnsEnds; i++) {
            if(showColumns[i]) {
                out += columnsWidth[i];
            }
        }
        return out;
    }

    getRightPartRowWidth() {
        const {numberFixedLeftColumnsEnds, sizes: {columnsWidth}, showColumns} = this.connector;
        let out = 0;

        for(let i = numberFixedLeftColumnsEnds; i < columnsWidth.length; i++) {
            if(showColumns[i]) {
                out += columnsWidth[i];
            }
        }
        return out;
    }

    getTotalRowWidth() {
        const {sizes: {columnsWidth}, showColumns} = this.connector;
        let out = 0;

        for(let i in columnsWidth) {
            if(showColumns[i]) {
                out += columnsWidth[i];
            }
        }
        return out;
    }

    refreshColumnsTree({data, cell, connectorIndex, isObject}) {
        const arr = this.connector[connectorIndex];
        const refreshList = [];

        const getChildren = children => {
            for(let item of children) {
                if(item.children?.length) {
                    getChildren(item.children);
                } else {
                    refreshList.push(item._.endIndex);
                }
            }
        }

        if(isNaN(cell._.endIndex))
            getChildren(cell.children); else
            refreshList[0] = cell._.endIndex;

        cell._[connectorIndex] = data;

        for(let cellIndex of refreshList) {
            arr[cellIndex] = this.recalcDataByCellIndex(cellIndex, connectorIndex, isObject);
            this.refreshColumn(cellIndex);
        }
    }

    recalcDataByCellIndex(cellIndex, connectorIndex, isObject) {
        let cell = this.headerCellsByCellIndex[cellIndex];
        let data = cell._[connectorIndex] || null;

        const concat = (_old, _new) => {
            const out = {..._old};

            for(let index in _new) {
                if(!out[index]) out[index] = _new[index];
            }
            return out;
        }

        while(cell?._.parent && (!data || isObject)) {
            cell = cell._.parent;
            if(cell._[connectorIndex]) {
                data = isObject ? concat(data, cell._[connectorIndex]) : cell._[connectorIndex];
            }
        }
        return data;
    }

    getSearchContextByCellIndex(cellIndex) {
        return this.connector.searchContext[cellIndex];
    }

    getFormatByCellIndex(cellIndex) {
        return this.connector.format[cellIndex];
    }

    storeGetPagesId() {
        const {params: {pageLength}} = this.connector;
        return `unitable.${this.tableName}.pages.length ${pageLength}`;
    }

    storeGetPageId(pNum) {
        const {params: {pageNum}, sortCell, searchContext} = this.connector;

        for(let search of searchContext) {
            if(search) return null;
        }
        if(sortCell) return null;
        return `${this.storeGetPagesId()}.${!isNaN(pNum) ? pNum : pageNum}`;
    }

    storeGetAnyPageId(pNum) {
        const {params: {pageNum, pageLength}, sortCell, searchContext, options: {other: {searchLogicAND}}} = this.connector;
        let out = `unitable.${this.tableName}.anyPages.length=${pageLength}`;
        let searchType = '';

        for(let i in searchContext) {
            if(searchContext[i]){
                out += `&search${i}=${searchContext[i]}`;
                searchType = `&searchType=${searchLogicAND ? 'AND' : 'OR'}`;
            }
        }
        out += searchType;

        if(sortCell) {
            const {_: {ordinalIndex, sort}} = sortCell;
            out += `&sort${ordinalIndex}=${sort}`;
        }

        return out + `.${!isNaN(pNum) ? pNum : pageNum}`;
    }

    storeGetAnyRowsId(props) {
        const {withoutSort} = props || {};
        const {sortCell, searchContext, options: {other: {searchLogicAND}}} = this.connector;
        let out = ``;
        let searchType = '';

        for(let i in searchContext) {
            if(searchContext[i]) {
                if(out) out += '&';
                out += `search${i}=${searchContext[i]}`;
                searchType = `&searchType=${searchLogicAND ? 'AND' : 'OR'}`;
            }
        }
        out += searchType;

        if(sortCell && !withoutSort) {
            const {_: {ordinalIndex, sort}} = sortCell;
            if(out) out += '&';
            out += `sort${ordinalIndex}=${sort}`;
        }

        return out ? `unitable.${this.tableName}.anyRows.${out}` : this.storeGetRowsId();
    }

    storeGetRowsId()            { return `unitable.${this.tableName}.rows`;              };
    storeGetPages()             { return this.storeGet(this.storeGetPagesId());          };
    storeRowsIsLoaded()         { return !!this.storeGetRows();                          };
    storeGetRows()              { return this.storeGet(this.storeGetRowsId());           };
    storeSetRows(rows)          { Store.setState(this.storeGetRowsId(), [...rows]); };

    storeGet(id) {
        const data = toJS(Store.getState(id));
        if(Array.isArray(data)) return [...data];
        if(!!data && typeof(data) === 'object') return {...data};
        return data;
    }

    storeGetTotalRowsByDownloadedPages() {
        let count = 0;
        const pages = this.storeGet(this.storeGetPagesId());
        for(let index in pages) count += pages[index].length;
        return count;
    }

    storeRememberPage() {
        const {params: {totalLength}} = this.connector;

        if(this.storeRowsIsLoaded()) return; // уже построили полую таблицу

        const pageId = this.storeGetPageId();

        if(!pageId) { // есть котекст поиска или сортировка
            const anyPageId = this.storeGetAnyPageId();
            if(!this.storeGet(anyPageId)) {
                Store.setState(anyPageId, [...this.connector.rowsTree]);
            }
            return;
        }

        if(this.storeGetPage()) return; // эта страница уже есть

        Store.setState(pageId, [...this.connector.rowsTree]);

        if(!totalLength) return; // если еще не знаем общую длину
        if(this.storeGetTotalRowsByDownloadedPages() !== totalLength) return; // если еще не все страницы подгружены

        const pages = this.storeGetPages();
        this.storeSetRows([].concat(...Object.values(pages)))
    }

    storeGetPage(props) {
        console.log('store', toJS(Store.getStore()))
        console.log('connector', this.connector)
        const {pageNum: _pageNum} = props || {};
        const {params} = this.connector;
        let pageId = null;
        let rows = null;

        const pageNum = !isNaN(_pageNum) ? _pageNum : params.pageNum;

        if(this.storeRowsIsLoaded()) {
            return this.storeGetPageFromRows(props);
        }

        pageId = this.storeGetPageId(pageNum);
        if(!pageId) pageId = this.storeGetAnyPageId(pageNum);

        rows = this.storeGet(pageId);
        return rows;
    }

    storeGetPageFromRows(props) {
        const {pageLength: _pageLength, pageNum: _pageNum, } = props || {};
        const {params} = this.connector;

        const pageLength = _pageLength || params.pageLength;
        const pageNum = !isNaN(_pageNum) ? _pageNum : params.pageNum;

        const rowsOrAnyRowsId = this.storeGetAnyRowsId();

        let rows = this.storeGet(rowsOrAnyRowsId);
        if(!rows) {
            rows = this.storeCreateAndRememberAnyRows(rowsOrAnyRowsId);
        }

        this.connector.params.totalLength = rows.length;
        this.connector.refresh.paginator();

        return rows.slice(pageLength * pageNum, pageLength * (pageNum + 1));
    }

    storeCreateAndRememberAnyRows(id) {
        const {sortCell, searchContext} = this.connector;
        let rows = [];

        // сначала фильтры
        const idWithoutSort = this.storeGetAnyRowsId({withoutSort: true});
        rows = this.storeGet(idWithoutSort);
        if(!rows) {
            rows = this.storeGetRows();
            rows = this.storeRowsToFilteredRows(rows, searchContext);
            Store.setState(idWithoutSort, [...rows]);
        }

        // потом сортировка
        rows = this.storeRowsToSortedRows(rows, sortCell);

        Store.setState(id, [...rows]);
        return rows;
    }

    storeRowsToFilteredRows(rows, searchContext) {
        const searchLogicAND = this.connector.options?.other?.searchLogicAND;
        const out = [];

        const search = [];
        for(let index in searchContext) {
            if(searchContext[index]) {
                search.push({
                    index: Number(index),
                    text: searchContext[index].toLowerCase()
                });
            }
        }
        if(!search.length) return rows;

        const compare = row => {
            for(let s of search) {
                const find = ~String(row[s.index].value).toLowerCase().indexOf(s.text);
                if(searchLogicAND && !find) return false;
                if(!searchLogicAND && find) return true;
            }
            return searchLogicAND ? true : false;
        }

        const checkRow = ({row, to, level}) => {
            const root = {children: [], row: row.row};

            if(row.children?.length) {
                for(let child of row.children) {
                    checkRow({row: child, to: root.children, level: level + 1});
                }
            }

            const find = compare(root.row);
            if(root.children.length || find) {
                to.push(root);

                if(!find) root._ = {isNotFind: true};
            }
        }

        for(let row of rows) {
            checkRow({row: row, to: out, level: 0});
        }

        return out;
    }

    storeRowsToSortedRows(rows, sortCell) {
        if(!sortCell?._?.sort) return rows;

        const {_: {ordinalIndex, sort: _direction}} = sortCell || {};
        const direction = _direction === 'up' ? -1 : 1;
        const runCollator = new Intl.Collator('ru');

        const convert = cell => String(cell.row[ordinalIndex].value).toLowerCase().replace(/^\s+/, '');
        const sortFunc = (a, b) => runCollator.compare(convert(a), convert(b)) * direction;

        const sort = arr => {
            arr.sort(sortFunc);
            for(let item of arr) {
                if(item.children?.length) {
                    sort(item.children);
                }
            }
        }

        sort(rows);
        return rows
    }

    getValueByAddress = address => {
        let value = this.connector;
        const offsets = address.split('.');

        for(let offset of offsets) value = value[offset];
        return value;
    }

    setValueByAddress = (address, value) => {
        let addr = this.connector;
        const offsets = address.split('.');

        for(let i in offsets) {
            if(Number(i) === (offsets.length - 1)) {
                addr[offsets[i]] = value;
            } else {
                addr = addr[offsets[i]];
            }
        }
    }

    setHoveredCell = (column, row) => {
        const {hovered, refresh: {row: refreshRow, column: refreshCol}} = this.connector;
        const {column: oldHoveredColumn, row: oldHoveredRow} = hovered;

        const _refreshColumn = index => {
            if(index !== null && Array.isArray(refreshCol)) this.refreshColumn(index);
        }

        const _refreshRow = index => {
            if(index !== null && refreshRow && refreshRow[index]) refreshRow[index]();
        }

        this.connector.hovered = {column, row};
        if(column !== oldHoveredColumn) {
            _refreshColumn(oldHoveredColumn);
            _refreshColumn(column);
        }
        if(row !== oldHoveredRow) {
            _refreshRow(oldHoveredRow);
            _refreshRow(row);
        }
    }

    setEditableCell(props) {
        if(this.connector.editableCell) {
            console.log('*********** setEditableCell -> stopEditor')
            this.connector.editableCell.stopEditor();
        }
        this.connector.editableCell = props;
    }

    getCustomizer({customizer: rules, cell}) {
        let out = {css: {}, class: ''};

        for(let rule of rules) {
            const {css, class: _class, condition} = rule;

            for(let OR of condition) {
                let isSuccess = true;

                for(let AND of OR) {
                    const match = AND.match(/(\S+)\s+(\S+)\s+(.*)/);
                    if(match) {
                        const [field, operand, _text] = match.slice(1);
                        const text = _text.replace(/^\s+/, '');
                        isSuccess = isSuccess && this.checkCondition({field, operand, text, cell});
                    } else {
                        const match = AND.match(/(\S+)\s+(.*)/);
                        if(match) {
                            const [field, operand] = match.slice(1);
                            isSuccess = isSuccess && this.checkCondition({field, operand, text: null, cell});
                        } else {
                            this.customizerError(`неверный формат "${AND}"`);
                            return out;
                        }
                    }

                }
                if(isSuccess) {
                    out.css = {...out.css, ...css};
                    out.class += (out.class ? ' ' : '') + _class;
                }
            }
        }

        return out;
    }

    checkCondition({field, operand: _operand, text, cell}) {
        const value = cell[field];
        const matchNOT = _operand.match(/not\((\S+)\)/);
        const operand = matchNOT ? matchNOT[1] : _operand;
        const NOT = !!matchNOT;
        let result;

        switch(operand) {
            case 'match':       result = value?.match   ? !!value.match(RegExp(text)) : false; break;
            case 'contains':    result = value?.indexOf ? !!~value.indexOf(text)      : false; break;
            case 'isNumber':    result = !isNaN(value);                                        break;
            case 'isUndefined': result = value === undefined;                                  break;
            case 'isTrue':      result = !!value;                                              break;
            case 'isFalse':     result = !value;                                               break;
            case '==':          result = value == text;                                        break;
            case '!=':          result = value != text;                                        break;
            case '>':           result = value > text;                                         break;
            case '<':           result = value < text;                                         break;
            case '>=':          result = value >= text;                                        break;
            case '<=':          result = value <= text;                                        break;

            default: {
                this.customizerError(`неизвестный операнд "${operand}"`);
                return false;
            }
        }
        return NOT ? !result : result;
    }

    customizerError(text) {
        if(!this.errorTexts) {
            this.errorTexts = {};
        }
        if(!this.errorTexts[text]) {
            console.error(`ОШИБКА В ОПИСАНИИ УСЛОВНОГО ФОРМАТИРОВАНИЯ -- ${text}`);
            this.errorTexts[text] = true;
            setTimeout(() => {
                this.errorTexts = {};
            }, 1000);
        }
    }
}

export default Utils;