import {LinksEditor_Node_Navigator, LinksEditor_Node_Body, LinksEditor_Edge} from '../';
import {callPopup, callAlert, ListPicker} from '../../../widgets';

import {callTable} from "../../Table";

const _set1 = ["Исполнитель", "Контролёр", "Координатор сбора", "Ответственный за сбор", "Работник ДВКУР", "Редактор шаблона",
    "Руководитель ДВКУР", "[СУРиВК] Координатор по рискам ДО", "[СУРиВК] Отраслевой эксперт", "[СУРиВК] Работник ДВКУР (Куратор ДО)",
    "[СУРиВК] Работник ДВКУР (Куратор ПАО Интер РАО)", "[СУРиВК] Работник ДВКУР (Согласующий)"]

const _set2 = [
    [
        {
            "obj": -807,
            "db_value": "Исполнитель1",
            "editable": 0
        }
    ],
    [
        {
            "obj": -808,
            "db_value": "Контролёр",
            "editable": 0
        }
    ],
    [
        {
            "obj": 219608,
            "db_value": "Координатор сбора"
        }
    ],
    [
        {
            "obj": -809,
            "db_value": "Ответственный за сбор",
            "editable": 0
        }
    ],
    [
        {
            "obj": 134538,
            "db_value": "Работник ДВКУР"
        }
    ],
    [
        {
            "obj": -810,
            "db_value": "Редактор шаблона",
            "editable": 0
        }
    ],
    [
        {
            "obj": 332535,
            "db_value": "Руководитель ДВКУР"
        }
    ],
    [
        {
            "obj": 206210,
            "db_value": "[СУРиВК] Координатор по рискам ДО"
        }
    ],
    [
        {
            "obj": 282897,
            "db_value": "[СУРиВК] Отраслевой эксперт"
        }
    ],
    [
        {
            "obj": 238131,
            "db_value": "[СУРиВК] Работник ДВКУР (Куратор ДО)"
        }
    ],
    [
        {
            "obj": 447918,
            "db_value": "[СУРиВК] Работник ДВКУР (Куратор ПАО Интер РАО)"
        }
    ],
    [
        {
            "obj": 471349,
            "db_value": "[СУРиВК] Работник ДВКУР (Согласующий)"
        }
    ]
]

const headerSimple = [
    {value: 'Наименование'},
    {value: 'id'},
    {value: 'Страна происхождения'},
    {value: 'Какой-то очень длинный заголовок'},
    {value: 'Еще один столбец'},
    {value: 'Город'},
    {value: 'Улица'},
    {value: 'Наименование'},
    {value: 'id'},
    {value: 'Страна происхождения'},
    {value: 'Какой-то очень длинный заголовок'},
    {value: 'Еще один столбец'},
    {value: 'Город'},
    {value: 'Улица'},
    {value: 'Наименование'},
    {value: 'id'},
    {value: 'Страна происхождения'},
    {value: 'Какой-то очень длинный заголовок'},
    {value: 'Еще один столбец'},
    {value: 'Город'},
    {value: 'Улица'},
] 

const headerTree = [
    {value: 'Первый'},
    {value: 'Каспар'},
    {
        value: 'id',
        children: [
            {value: 'Движение 1'},
            {value: 'Выдать разрешение на экспорт 1', children: [
                {value: 'Европа'},
                {value: 'Азия'},
                {value: 'Китай'},
                {value: 'Америка'}
            ]},
            {value: 'Движение 2'}, {value: 'Выдать разрешение на экспорт 2', children: [{value: 'Европа'}, {value: 'Азия'}, {value: 'Китай'}, {value: 'Америка'}]},
        ]
    },
    {value: 'Страна происхождения', children: [{value: 'Европа'}, {value: 'Азия'}, {value: 'Китай'}, {value: 'Америка'}]},
    {value: 'Какой-то очень длинный заголовок',},
    {value: 'Еще один столбец', children: [{value: '1.1'}, {value: '1.2'}]},
    {value: 'Город', children: [{value: 'В Европе'}, {value: 'В России'}]},
    {value: 'Улица',},
]
const row1 = [];
const row2 = [];
const row3 = [{value: Math.random()}];
const row4 = [];
const row5 = [];
const row6 = [];

const children = [
    {row: row1},
    {row: row2},
    {row: row3},
    {row: row4, children: [{row: row4}, {row: row5}, {row: row6}, ]},
    {row: row5, children: [{row: row3, children: []}]},
]

const rowsSimple = [];
for(let i = 0; i < 100; i++) rowsSimple.push({row: []})
const rowsTree = []
for(let i = 0; i < 100; i++) rowsTree.push({row: [], children})

const rowsTest = [
    {
        row: [{value: 'aaa'}, {value: 'aaa'}, {value: 'aaa'}],
        children: [
            {
                row: [{value: 'bbb'}, {value: 'bbb'}, {value: 'bbb'}],
                children: [
                    {
                        row: [{value: 'ccc'}, {value: 'ccc'}, {value: 'ccc'}],
                    }, {
                        row: [{value: 'ddd'}, {value: 'ddd'}, {value: 'ddd'}],
                    }, {
                        row: [{value: 'eee'}, {value: 'eee'}, {value: 'eee'}],
                        children: [
                            {
                                row: [{value: 'bbb1'}, {value: 'bbb1'}, {value: 'bbb1'}],
                                children: [
                                    {
                                        row: [{value: 'ccc1'}, {value: 'ccc1'}, {value: 'ccc11'}],
                                    }, {
                                        row: [{value: 'ddd1'}, {value: 'ddd1'}, {value: 'ddd1'}],
                                    }, {
                                        row: [{value: 'eee1'}, {value: 'eee1'}, {value: 'eee1'}],
                                    },
                                ],
                            },
                        ]
                    },
                ],
            },
        ],
    },
]

const rows = JSON.parse(JSON.stringify(rowsSimple));
//const rows = JSON.parse(JSON.stringify(rowsTree));
//const header = headerSimple;
const header = headerTree;
let totalLength = 20;

class Utils {
    constructor(props) {
        const {componentReturn, options} = props;

        this.externalOptions = options;

        //
        // Местные функции, вызываемые внешним кодом
        //
        Object.assign(componentReturn, {
            redraw: this.redraw.bind(this),
            getLinksData: this.getLinksData.bind(this),
            onChangeLink: this.onChangeLink.bind(this),
            onChangeLinks: this.onChangeLinks.bind(this),
            onDeleteNode: this.onDeleteNode.bind(this),
            onDeleteLink: this.onDeleteLink.bind(this),
        });

        this.constants = {
            joinName: '_join_',
            operandName: '_operand_',
            defaultJoin: 'inner',
            linksSeparator: '\n',
            joins1: ['inner', 'left', 'right', 'full'],
            joins2: ['outer', 'join'],
            joins3: ['outer', 'join'],
            operands: ['=', '>', '<'],
            mainRegExp: /^\s*(\S+|)?\s*(\S+|)?\s*(\S+|)?\s+([a-zA-Z0-9А-Яа-я_]+)\.([a-zA-Z0-9А-Яа-я_]+|)\s+(\S)\s+((ANY|any)(\()|)([a-zA-Z0-9А-Яа-я_]+)(\)|)\.([a-zA-Z0-9А-Яа-я_]+|)(\)|)\s*(\/\*(.*)\*\/|\/\/(.*))?\s*$/,
            twoTableNameRegExp: /^.*\s+(\S+)\..*\s+(\S+)\..*$/,
            anyRegExp: /^(ANY|any)\((\w+)(\)|)$/,
            errorConnectingLineStyle: {stroke: '#f00'},
        };

        this.connector = {
            relations: this.externalOptions.relations,
            selectedId: null,
            editId: '',
            refresh: {},
            fieldTypes: options.fieldTypes || null,
        }

        this.connector.graph = {
            links: this.systemLinksToGraphLinks(this.externalOptions.links),
            states: Object.keys(this.externalOptions.relations.fields).map(label => ({label})),
        }

        this.init();
    }

    init() {
        this.getComponentControlling = data => {
            this.controlling = data;
            console.log('UTILS controlling', this.controlling)
        }

        this.onChangeComponentState = {
            onLinkSelect:          this.onSelect.bind(this),
            onNodeSelect:          this.onSelect.bind(this),
        }

        this.graphProps = {
            graphName: 'LINKS EDITOR',
            links: this.connector.graph.links,
            states: this.connector.graph.states,
            getComponentControlling: this.getComponentControlling,
            onChangeComponentState: this.onChangeComponentState,
            options: {
                graphView: {
                    components: {
                        navigator: LinksEditor_Node_Navigator,
                        body: LinksEditor_Node_Body,
                        link: LinksEditor_Edge,
                        data: {
                            utils: this,
                        }
                    },
                    graphClasses: 'links-editor-graph-wrapper',
                    nodeClasses: 'links-editor-graph-node-view',
                    nodeTitle: 'таблица "%label"',
                },
                isDroppable: true,
                showNodesBodyInStart: true,
                edgesOnTopInStart: false,
                maxDistanceBetweenArrows: 10,
                hideEdgeDirection: true,
                edgesFromNodeCenter: false,
                onlyOneEdgeBetweenTwoNodes: true,
                managingConnectingLineStyles: {},
                callbackOnGraphReady: this.onGraphReady.bind(this),
                startPositions: this.externalOptions.positions,
                onClickToEdge: this.onClickToEdge.bind(this),
                onClickToNode: this.onClickToNode.bind(this),
                getIdForNewEdge: this.getEdgeId.bind(this),
                getValueForNewEdge: ({from, to}) => `${from}._ = ${to}._`,
                onConnect: this.onConnect.bind(this),
                notConnectToPane: true,
                showControls: {
                    main_edgesOnTop: true,
                    main_add: false,
                    nodes: false,
                    edges: false,
                },
                additionalControls: [
                    [
                        {
                            buttonClasses: 'add-new-table-in',
                            component: () => {
                                return (
                                    <>
                                        <i className="fas fa-table fa-fw table-icon"></i>
                                        <i className="fas fa-plus-circle fa-fw plus-icon"></i>
                                    </>
                                )
                            },
                            title: 'Добавить новую таблицу',
                            callback: this.addNewTable.bind(this),
                        },
                        {
                            iconClasses: 'fas fa-trash',
                            title: 'Удалить текущую таблицу',
                            callback: this.deleteSelectedTable.bind(this),
                            ifSelect: 'node'
                        },
                    ],
                ],
                buttonsPanel: [
//                    {
//                        text: 'ТАБЛИЦА',
//                        type: 'regular',
//                        callback: this.onTable.bind(this),
//                    },
                    {
                        text: 'Текстовый редактор',
                        type: 'regular',
                        callback: this.onTextEditor.bind(this),
                    },
                    {
                        text: 'Отмена',
                        type: 'regular',
                        callback: this.onCancel.bind(this),
                    },
                    {
                        text: 'OK',
                        type: 'primary',
                        callback: this.onSave.bind(this),
                    },
                ],
            }
        };
        this.onTable();
    }

    onTable() {
        const portal = document.querySelector('#adapters-relation');
        portal.innerHTML = '';

        const getComponentControlling = data => {
            console.log('CONTROLLING', data)
            this.tableControlling = data;
        }

        const headerView = cell => {
            const {value, _: {isEnd, level, endIndex, rootIndex, ordinalIndex, isLeft, length}} = cell;
            const _value = isEnd ? value.toLowerCase() : value.toUpperCase();

            return <div
                style={{
                    width: 'calc(100% - 6px)',
                    height: 'calc(100% - 6px)',
                    background: isEnd ? '#ddc4c4' : '#c7c4dd',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: isEnd ? 'normal' : 'bold',
                }}
            >
                <i
                    className="search-button fas fa-bell"
                    title="Показать инфу"
                    style={{position: 'absolute', left: '4px', top: '4px', zIndex: 1}}
                    onClick={() => alert(`value: ${value}\nisEnd: ${isEnd}\nisLeft: ${!!isLeft}\nlevel: ${level}\nrootIndex: ${rootIndex}\nendIndex: ${endIndex}\nordinalIndex: ${ordinalIndex}\nlength: ${length}`)}
                ></i>
                {_value}
            </div>
        }

        const bodyView = cell => {
            const {value, _: {isTreeCell, isTreeRoot}} = cell;

            const style = {color: '#f00'};
            if(isTreeCell) style.background = '#ff0';

            return (
                <div style={style}>!!! {value}</div>
            )
        }

        const headerCellView = cell => {
            if(cell._.wrapperRefCurrent?.current) cell._.wrapperRefCurrent.current.style.background = '#ff0';
            return <div style={{transform: 'rotate(180deg)', color: '#f00',}}>{cell.value}</div>
        }

        const rowCellView = cell => {
            const {value} = cell;
            const style = {background: '#f00', color: '#fff'}
            if(cell._.wrapperRefCurrent?.current) cell._.wrapperRefCurrent.current.style.background = '#00f';

            return (
                <div style={style}>-{value}-</div>
            )
        }

        const columnView = cell => {
            const {value, _: {isTreeCell, isTreeRoot}} = cell;
            const style = {background: '#fff', color: '#00f', transform: 'rotate(-4deg)'}

            return (
                <div style={style}>...{value}</div>
            )
        }

        const customizer = [
            {
                css: {background: '#000', color: '#fff'},
                class: 'is-chili',
                condition: [
                    ['value contains Чили'],
                ]
            },
            {
                css: {background: 'red', color: '#fff'},
                class: 'is-persent',
                condition: [
                    ['value match \\d+\\,\\d+%'],
                ]
            },
        ];

        this.tableProps = {
            tableName: 'myTable',
            tableId: 'MY-TABLE',
            tableClassName: 'my-table',
            data: {
                header: header,
                rows: [],
                params: {
                    pageNum: 0,
                    pageLength: 20,
                    totalLength: 20,
                },
            },
            views: {
                columns: null, //To Do убрать после удаления тестовой таблицы Кирилла
            },
            commonForHeader: {
                view: null,
            },
            commonForBody: {
                view: null,
                isEditable: true,
                css: {},
//                customizer: customizer,
            },
            editors: {
                cellEditor: 'TableCellEditor', // 'internal' / 'TableCellEditor' / () => {}
            },
            options: {
                numberFixedLeftColumns: 0,
                tableHasRowsTree: false,
                showTableSettings: true,
                saveSettingsInLocaleStorage: false,
                editableSettings: {
                    bgrEvenRows: false,
                    bgrOddRows: false,
                    bgrHeader: false,
                    bgrHover: false,
                    resizeHeaderHeight: false,
                    resizeColumnsWidth: false,
                    resizeRowsHeight: false,
                    colHasHideIcon: false,
                    colHasOrderIcon: false,
                    colHasSearchIcon: false,
                    colHasFormatIcon: false,
                    colHasSortIcon: false,
                    showHints: false,
                    searchLogicAND: false,
                    isHovered: false,
                },
                background: {
                    evenRows: false,
                    oddRows: '#eee',
                    header: '#ddd',
                    hovered: '#ebf3fd',
                },
                resize: {
                    headerHeight: true,
                    columnsWidth: false,
                    rowsHeight: true,
                },
                initialSizes: {
                    headerHeight: 100,
                    columnsWidth: [],
                    rowsHeight: 30,
                },
                columnsMenu: {
                    hasHideIcon: false,
                    hasOrderIcon: false,
                    hasSearchIcon: false,
                    hasFormatIcon: false,
                    hasSortIcon: false,
                },
                paginator: {
                    rowsByPage: [25, 50, 100],
                },
                other: { 
                    showHints: true,
                    searchLogicAND: true,
                    highlightHovered: false,
                },
            },
            onChangeComponentState: {
                onClickToPaginator_ShowLength: this.onClickToPaginator_ShowLength.bind(this), // клик на пагинаторе по кнопке "показать"
                onClickToPaginator_RowsByPage: this.onClickToPaginator_RowsByPage.bind(this), // клик на пагинаторе по выбору количества строк на странице
                onClickToPaginator_GoToPage: this.onClickToPaginator_GoToPage.bind(this),     // клик на пагинаторе по кнопкам навигации начало/предыд/след/конец
                onChangeFilterOrSort: this.onChangeFilterOrSort.bind(this),                   // клик по фильтру поиска
                onChangeCell: this.onChangeCell.bind(this),                                   // содержимое ячейки изменилось
            },
            getComponentControlling,
        }

        const firstRows = this.getRows();
        this.tableProps.data.rows = firstRows;
        setTimeout(() => {
            this.rowsCopy = [...this.tableProps.data.rows]
        }, 100)

        // HEADER
        const customHeader = () => {
            this.tableProps.views.header = headerView;
            this.tableProps.data.header[2].children[1] = {
                ...this.tableProps.data.header[2].children[1],
                view: headerCellView,
                isEditable: true,
                css: {background: '#f00'},
            };
        }

        const customColumn = () => {
            this.tableProps.data.header[2].children[1].children[0] = {
                ...this.tableProps.data.header[2].children[1].children[0],
                columns: {
                    isEditable: false,
                    css: {background: '#0f0'},
                    view: columnView,
                },
            };
        }

        // РЕДАКТОР ЯЧЕЕК
        const fieldTypes = [
            {type: '+ bool',         id: '-40',   label: 'Да/Нет',                            editor: 'TableCellEditorBool'},
            {type: '+ string',       id: '-34',   label: 'Строка',                            editor: 'TableCellEditorString'},
            {type: '+ integer',      id: '-35',   label: 'Целое',                             editor: 'TableCellEditorInteger'},
            {type: '+ positive',     id: '-36',   label: 'Неотрицательное',                   editor: 'TableCellEditorPositive'},
            {type: '+ float',        id: '-37',   label: 'Число',                             editor: 'TableCellEditorFloat'},
            {type: '+ currency',     id: '-1100', label: 'Денежный',                          editor: 'TableCellEditorFloat'},
            {type: '+ date',         id: '-41',   label: 'Дата и время',                      editor: 'TableCellEditorDate'},
            {type: '+ period',       id: '-42',   label: 'Период',                            editor: 'TableCellEditorPeriod'},
            {type: '+ file',         id: '-43',   label: 'Файл',                              editor: 'TableCellEditorFile'},
            {type: '+ filemultiple', id: '-46',   label: 'Множественный файл',                editor: 'TableCellEditorFileMultiple'},
            {type: 'set',            id: '-38',   label: 'Справочник',                        editor: 'TableCellEditorSet'},
            {type: 'setmultiple',    id: '-44',   label: 'Множество значений из справочника', editor: 'TableCellEditorSetMultiple'},
        ]

        const customTypes = () => {
            const size = 20;
            const header = [];
            const rows = [];

            for(let i = 0; i < size; i++) rows.push({row: []});


            for (let i in fieldTypes) {
                const item = fieldTypes[i];

                header[i] = {value: `${item.label} (${item.id})`};

                for(let j = 0; j < size; j++) {
                    rows[j].row[i] = {
                        value: '',
                        fieldTypeId: Number(item.id),
                        set: _set2,
                        setValuePath: '0.db_value',
                    }
                }
            }
            this.tableProps.data.rows = rows;
            this.tableProps.data.header = header;
            console.log('header', header)
            console.log('rows', rows)
        }




/*
        customHeader()                                                                  // форматирование ячейки заголовка
        this.tableProps.data.rows[5].row = [
            {value: 'AAA'}, {value: 'AAA'}, {value: 'AAA'}, {value: 'AAA'}, {value: 'AAA'}, {value: 'AAA'},
            {value: 'AAA', view: rowCellView}
        ]; // форматирование одной ячейки тела таблицы

        customColumn()                                                                  // форматирование столбца
        this.tableProps.data.rows[3].css = {background: '#ff0'}                         // форматирование строки тела таблицы

        this.tableProps.commonForBody.customizer = customizer                           // customizer
*/
        customTypes()                                                                   // редактор всех типов данных







        const {removeComponent} = callTable(portal, this.tableProps);
        this.removeTable = removeComponent;
    }

    onChangeCell(props) {
        console.log('#######################', props)
    }

    onChangeFilterOrSort(props) {
        const newRows = this.getRows() // через запрос к бэку получаем новые строки
        console.log('################### GET PAGE FROM SERVER', 0, props)

        setTimeout(() => {
            this.tableControlling.refreshBodyWithNewRows({
                newRows,
                newPageNum: 0,
            });
        }, 300)

    }

    getRows(props = {}) {
        const {pageLength: _pageLength, pageNum} = props;

        let pageLength = _pageLength || this.tableProps.data.params.pageLength;

        if(pageNum !== undefined) {
            const lastPageNum = Math.ceil(totalLength / pageLength) - 1;
            if(pageNum === lastPageNum) {
                pageLength = totalLength % pageLength;
            }
        }

        let out = this.rowsCopy || rows
        out = out.slice(0, pageLength);
        out.sort(() => Math.random() - 0.5)

        return out;
    }

    onClickToPaginator_ShowLength() {
        setTimeout(() => {
            this.tableControlling.setTableTotalLength(totalLength);
        }, 300)
    }

    onClickToPaginator_RowsByPage(pageLength) {
        const newRows = this.getRows({pageLength}) // через запрос к бэку получаем новые строки
        console.log('################### GET PAGE FROM SERVER', 0)

        setTimeout(() => {
            this.tableControlling.refreshBodyWithNewRows({
                newRows,
                newPageLength: pageLength,
                newPageNum: 0,
            });
        }, 300)
    }

    onClickToPaginator_GoToPage(num) {
        const getNextRows = num => {
            console.log('################### GET PAGE FROM SERVER', num)
            const newRows = this.getRows({pageNum: num}) // через запрос к бэку получаем новые строки страницы num

            setTimeout(() => {
                this.tableControlling.refreshBodyWithNewRows({
                    newRows,
                    newPageNum: num,
                });
            }, 300)
        }

        if(isNaN(num)) {
            const totalRowsNumber = totalLength; // это типа мы получили от бэка общее число строк таблицы

            setTimeout(() => {
                this.tableControlling.setTableTotalLength(totalRowsNumber);

                const pageLength = this.tableProps.data.params.pageLength;
                const remains = totalRowsNumber % pageLength;
                const lastPageNum = Math.round(totalRowsNumber / pageLength) - (remains ? 0 : 1);

                getNextRows(lastPageNum);
            }, 0)

        } else {
            getNextRows(num);
        }
    }

    onTextEditor() {
        const linksInServerFormat = this.linksToSystemLinks(this.connector.graph.links);
        this.externalOptions.onTextEditor(linksInServerFormat);
    }

    onCancel() {
        this.externalOptions.onCancel();
    }

    onSave() {
        const linksData = this.getLinksData();
        this.externalOptions.onSave(linksData);
    }

    getEdgeId = ({from, to}) => {
        const min = from > to ? to : from;
        const max = from > to ? from : to;
        return `reactflow__edge-${min}-${max}`;
    }

    systemLinksToGraphLinks(_systemLinks)  {
        const systemLinks = _systemLinks || '';
        const graphLinks = [];
        const notValidated = [];
        let reg;
        let currentEdgeId = '';

        const addLink = (edgeId, from, to, label) => {
            for(let link of graphLinks) {
                if(link.id === edgeId) {
                    link.label += this.constants.linksSeparator + label;
                    return;
                }
            }

            graphLinks.push({
                from,
                to,
                label,
                id: edgeId,
            });
        }

        for(let str of systemLinks.split(this.constants.linksSeparator)) {
            //
            // вначале проверяем на полное соответствие структуры
            //
            reg = (' ' + str).match(this.constants.mainRegExp);
            if(reg?.length) {
                const [, , , , source, , , , , , target, , ] = reg;// eslint-disable-line

                let correct = true;
                correct = correct && !!this.connector.relations.fields[target];
                correct = correct && !!this.connector.relations.fields[source];

                if(correct) {
                    currentEdgeId = this.getEdgeId({from: source, to: target});
                    addLink(currentEdgeId, source, target, str)
                } else {
                    notValidated.push(str);
                }
            } else {
                reg = str.match(this.constants.twoTableNameRegExp);
                if(reg?.length) {
                    //
                    // Если в строке мы нашли два имени таблицы, значит предполагаем что это закоментированная связь
                    // Перетащим ее наверх, чтобы она не осталась в списке нераспознанных связей предыдущей связи
                    //
                    currentEdgeId = '';
                    notValidated.push(str);
                } else {
                    if(currentEdgeId) {
                        addLink(currentEdgeId, null, null, str);
                    } else {
                        notValidated.push(str);
                    }
                }
            }
        }
        this.connector.notValidatedStrings = notValidated;
        return graphLinks;
    }

    valueToLabel(_multiValue, _source, _target) {
        const multiValue = _multiValue || '';
        const constants = this.constants;
        const fields = this.connector.relations.fields;

        let error = false;
        const tableNames = Object.keys(fields);
        const labels = [];

        const field = (_value, values, tag, separator, compareRelationsName, anyCase) => {
            if(_value === undefined) return '';

            const value = anyCase ? _value.toLowerCase() : _value;
            let relationNameIsCorrect = true;

            if(compareRelationsName) {
                relationNameIsCorrect = value === _source || value === _target;

                if(!relationNameIsCorrect) {
                    relationNameIsCorrect = value === _source || value === _target;
                }
            }

            const isError = !(values.includes(value) || (compareRelationsName && relationNameIsCorrect));
            const _tag = isError ? 'e' : tag;
            error ||= isError;
            return `<${_tag}>${_value}</${_tag}>${separator}`;
        }

        for(let value of multiValue.split(constants.linksSeparator)) {
            const reg = (' ' + value).match(constants.mainRegExp);

            if(reg?.length) {
                const [, join1, join2, join3, source, sourceField, operand, ,any, /*open*/, target, close1, targetField, close2] = reg; // eslint-disable-line

                const fieldsToArray = f => (f || []).map(item => item.name);

                const sourceFields = fieldsToArray(fields[source]);
                const targetFields = fieldsToArray(fields[target]);

                const out =
                    field(join1,       constants.joins1,   'j', ' ', false, true )
                    + field(join2,       constants.joins2,   'j', ' ', false, true )
                    + field(join3,       constants.joins3,   'j', ' ', false, true )
                    + field(source,      tableNames,         'r', '.', true,  false)
                    + field(sourceField, sourceFields,       'f', ' ', false, false)
                    + field(operand,     constants.operands, 'o', ' ', false, false)
                    + field(any,         ['any'],            'j', '(', false, true )
                    + field(target,      tableNames,         'r', close1 ? ').' : '.', true,  false)
                    + field(targetField, targetFields,       'f', close2 ? ')'  : '' , false, false);

                labels.push(out);
            }
        }

        return {
            label: labels.join('<br />'),
            error: !!error,
        };
    }

    linksToSystemLinks(links) {
        const notValidatedStrings = this.connector.notValidatedStrings;
        const outLinks = [];
        for(let link of links) outLinks.push(link.label);
        for(let str of notValidatedStrings) outLinks.push(str);
        return outLinks.join(this.constants.linksSeparator);
    }

    onGraphReady() {
        this.graphIsReady = true;
        this.setAllConnectingLinesStyle();
    }

    callAfterGraphReady({func, params}) {
        if(this.graphIsReady) {
            func(params);
        } else {
            setTimeout(() => {
                this.callAfterGraphReady({func, params});
            }, 50);
        }
    }

    onClickToEdge({id, link, ref}) {
        const {source, target, label} = link;
        this.externalOptions.onEditLink({
            id,
            edgeRef: ref ? {current: ref} : null,
            source,
            target,
            virtualJoinsText: label,
        });
    }

    onClickToNode({id}) {
        this.externalOptions.onChangeSelectedRelation(id);
        const {relations: {statuses}} = this.connector;
        if(statuses[id]) {
            const originalName = statuses[id].originalName;
            this.externalOptions.onChangeSelectedRelation(originalName);
        }
    }

    onConnect(link) {
        const {from, to, value, id} = link;
        const linkIdInGraph = this.controlling.getEdgeId({from, to, id});
        this.externalOptions.onEditLink({
            id: linkIdInGraph,
            edgeRef: null,
            source: from,
            target: to,
            virtualJoinsText: value,
        });
    }

    /* **************************************************************************************** */
    /* *************************** componentReturnFunctions *********************************** */
    /* **************************************************************************************** */

    redraw(action, data) {
        if(action === 'activeRelationChange') {
            for(let id in this.connector.relations.statuses) {
                if(this.connector.relations.statuses[id]?.selected) {
                    const currentSelectedNode = this.controlling.getSelectedNode();
                    if(id === currentSelectedNode) return;
                    this.callAfterGraphReady({
                        func: this.controlling.clickToNode,
                        params: id,
                    });
                    return;
                }
            }
        }
        if(action === 'setFieldTypes') {
            this.connector.fieldTypes = data;
        }
        this.controlling.refreshGraph();
    }

    onChangeLinks({virtualJoinsText, virtualJoinsPositions}) {
        const graphLinks =this.systemLinksToGraphLinks(virtualJoinsText);
        const links = this.graphProps.links;

        if(virtualJoinsPositions) this.controlling.setPositionsToLocalStorage(virtualJoinsPositions);

        links.splice(0, links.length);
        for(let link of graphLinks) links.push(link);

        this.setAllConnectingLinesStyle(true);

        this.controlling.refreshGraph(true);
    }

    onChangeLink(data) {
        const {id, virtualJoinsText} = data;
        const edge = this.controlling.getEdgesById()[id];

        edge.data.link.label = virtualJoinsText;
        this.setAllConnectingLinesStyle(true);
        this.controlling.refreshEdge(id);
    }

    onDeleteLink(id) {
        this.controlling.deleteEdge(id, true);
    }

    onDeleteNode(id) {
        this.controlling.deleteNode(id, true);
    }

    getLinksData() {
        const links = this.linksToSystemLinks(this.connector.graph.links);
        const positions = this.controlling.getPositionsFromLocalStorage();
        return {links, positions};
    }

    onSelect(data) {
        const id = data?.id || data;

        if(id !== this.connector.editId) {
            this.setEditId('');
        }

        const oldSelectId = this.connector.selectedId;
        this.connector.selectedId = id;
        this.refreshElements(oldSelectId);
        this.refreshElements(id);
    }

    /* **************************************************************************************** */
    /* **************************************************************************************** */
    /* **************************************************************************************** */

    setConnectingLinesStyle({from, to, id, error, beforeRefreshGraph}) {
        const errorStyle = this.constants.errorConnectingLineStyle;
        const linkIdInGraph = this.controlling.getEdgeId({from, to, id});
        const managingConnectingLineStyle = this.graphProps.options.managingConnectingLineStyles[linkIdInGraph];

        if(!managingConnectingLineStyle) return;

        const {connectingLineStyleCurrent, setConnectingLineStyle} = managingConnectingLineStyle;
        const {current: graphStyle} = connectingLineStyleCurrent;

        if(beforeRefreshGraph) {
            connectingLineStyleCurrent.current = error ? errorStyle : {};
            return;
        }

        if((error && graphStyle === errorStyle) || (!error && graphStyle !== errorStyle)) return;
        setConnectingLineStyle(error ? errorStyle : {});
    }

    setAllConnectingLinesStyle(beforeRefreshGraph) {
        for(let link of this.graphProps.links) {
            const {from, to, label, id} = link;
            const {error} = this.valueToLabel(label, from, to);
            this.setConnectingLinesStyle({from, to, id, error, beforeRefreshGraph});
        }
    }

    onPanelResize() {
        this.controlling.fitView();
    }


    refreshElements(id) {
        const funcOrFuncArray = this.connector.refresh[id];
        if(!funcOrFuncArray) return;
        if(Array.isArray(funcOrFuncArray)) {
            for(let func of funcOrFuncArray) func();
            return;
        }
        funcOrFuncArray();
    }

    setEditId(id) {
        const oldEditId = this.connector.editId;
        this.connector.editId = id;

        if(id !== oldEditId) {
            if (id) {
                this.connector.selectedId = id;
                this.refreshElements(id);
            }
            if (oldEditId) {
                this.refreshElements(oldEditId);
            }
        }
    }

    addNewTable() {
        this.newTableNum = (this.newTableNum || 0) + 1;
        const {x, y, zoom} = this.controlling.getReactFlowInstance().getViewport();
        const tableName = `новая_таблица_${this.newTableNum}`;

        this.controlling.addAloneNode({
            label: tableName,
            position: {
                x: (0 - x + 20) / zoom,
                y: (0 - y + 60) / zoom,
            },
        });
        setTimeout(() => {
            this.controlling.clickToNode(tableName);
            this.tableEditor_startEditing(tableName);
            this.setIsEditedName(true);
        }, 150);
    }

    deleteSelectedTable(_id) {
        const id = typeof _id === 'string' ? _id : this.connector.selectedId;

        const success = () => {
            this.onDeleteNode(id);
        }

        callAlert({
            header: 'Предупреждение',
            text: `Вы уверены, что хотите удалить таблицу "${id}" из коннектора?`,
            buttons : [
                {text: 'Удалить', type: 'danger', callback: success},
                {text: 'Отмена', type: 'cancel', callback: null},
            ]
        });
    }

    /* **************************************************************************************** */
    /* *************************** TABLE EDITOR *********************************************** */
    /* **************************************************************************************** */

    tableEditor_startEditing(tableId) {
        const {relations: {fields}} = this.connector;

        this.changesInTable = {
            tableName: tableId,
            fields: JSON.parse(JSON.stringify(fields[tableId] || [])),
        };
        this.setEditId(tableId)
    }

    tableEditor_stopEditing() {
        this.setEditId('');
        this.changesInTable = null;
    }

    tableEditor_onTableDelete() {
        const tableId = this.connector.editId;
        this.deleteSelectedTable(tableId)
    }

    tableEditor_onSaveChanges() {
        const {editId: preTableId, relations: {fields}} = this.connector;
        const {fields: changesFields, tableName: changesTableId} = this.changesInTable;

        console.log('onSaveChanges ===========>', preTableId, '===>', changesTableId, '/', {fields: JSON.parse(JSON.stringify(fields)), changesFields: JSON.parse(JSON.stringify(changesFields))})

        //
        // Здесь мы получили изменения в таблице.
        // Их надо отправить на основной код, чтобы там были сделаны соответвующие запросы и изменения в базе
        // и все эти изменения были внесены в текущие данные
        //

        this.tableEditor_stopEditing();
    }

    tableEditor_onFieldChecked(fieldIndex) {
        const field = this.changesInTable.fields[fieldIndex];
        field.isActive = !field.isActive;
    }

    tableEditor_onFieldAdd() {
        const name = '';
        this.changesInTable.fields.push({
            name: name,
            firstName: name,
            isNew: true,
            isActive: false,
            isRequired: false,
            fieldTypeId: -34,
        });
    }

    tableEditor_onFieldDelete(fieldIndex) {
        const field = this.changesInTable.fields[fieldIndex];
        if(field.isDeleted) {
            delete field.isDeleted;
        } else {
            field.isDeleted = true;
        }
    }

    tableEditor_onFieldTypeChange(fieldIndex, ref, refreshBody) {
        const field = this.changesInTable.fields[fieldIndex];
        const currentFieldTypeId = String(field.fieldTypeId);
        const fieldTypes = this.connector.fieldTypes;
        const fieldTypesArr = Object.keys(fieldTypes).map(item => String(item));

        let removeFuncCurrent = {current: null};
        const removePopup = () => removeFuncCurrent.current();

        const {removeComponent} = callPopup({
            initiator: ref,
            minWidth: 200,
            minHeight: 100,
            extraClass: 'field-type-select-popup',
            onOutsideClick: removePopup,
            style: {overflow: 'hidden'},
            children: <ListPicker
                label="linksEditorFieldsTypes"
                list={fieldTypesArr}
                selectedValues={currentFieldTypeId}
                onChange={data => {
                    const {selectedValues} = data;
                    const newType = Number(selectedValues[0]);

                    removeFuncCurrent.current();
                    field.fieldTypeId = newType;
                    refreshBody();
                }}
                isMultiSelect={false}
                hideSearchBar={true}
                hideCountersBar={true}
                ItemViewName={props => {
                    const {item: {id}/*, checked: selected*/} = props;
                    const {title, iconClass} = fieldTypes[id]

                    return (
                        <>
                            <i className={`fa-fw text-primary ${iconClass}`}></i>
                            <div className="title" >{title}</div>
                        </>
                    )
                }}
            />
        });

        removeFuncCurrent.current = removeComponent;
    }

    tableEditor_checkSavingIsAvailable() {
        if(!this.changesInTable) return null;
        const {editId: preTableId, relations: {fields}} = this.connector;
        const {fields: changesFields, tableName: changesTableId} = this.changesInTable;

        if(changesTableId === preTableId && JSON.stringify(changesFields) === JSON.stringify(fields[preTableId])) return false;
        if(!changesTableId) return false;
        for(let field of changesFields) {
            if(!field.name) return false;
        }
        return true;
    }
}

export default Utils;