import React from 'react';
import {Utils, GraphRoot} from "./";

import './scss/graph.scss';

/*
    <Graph
        graphName="text"                          // уникальное имя графа для сохранения данных в localeStorage
        links={Array}                             // [{from: 'aaa', to: 'bbb', ....}, {...}, ...] - Array с описанием зависимостей
        states={Array}                            // [{label: 'aaa', ....}, {...}, ...] - Array всех статусов
        getComponentControlling={func}            // в неё вернём все функции управления состоянием компоненты
        onChangeComponentState={Obj}              // сюда положим все обработчики событий

        options={{                                // опции отображения
            graphView: {                               // въюха узла                                (default = NULL)
                components: {                         // компоненты вершины
                    navigator: null,                      // кликабельная часть вьюхи узла. По ней будем переключаться между узлами и добавлять рёбра
                    body: null,                           // некликабельная часть вюхи узла
                    link: null,                           // вюха связи
                    data: {},                             // любые данные, передаваемые во все три вьюхи
                },
                graphClasses: '',                         // классы обёртки всего графа                               (default = '')
                nodeClasses: '',                          // классы обёртки вьюхи узла                                (default = '')
                nodeTitle: '',                            // всплывающая подсказка узла                               (default = '')
                startNodeTitle: '',                       // всплывающая подсказка стартового узла                    (default = '')
            },

            // GRAPH

            startPositions: '',                       // стартовые позиции элементов графа брать не из localeStorage а отсюда (default = '')
            callbackOnGraphReady: () => {},           // будет вызван когда граф будет полностью построен                     (default = null)
            showNodeEnvironment: 'nodeLabel',         // показывать только входы/выходы узла id                               (default = '')
            isDroppable,                              // на граф можно дропать DnD элементы                                   (default = false)
            linksForStates: null,                     // еще один экземпляр links (полный) для вычисления статусов нод:
                                                      // firstStates, lastStates, unattainableStates,

            // NODES

            nodesNotDraggable: false,                 // узлы нельзя двигать                       (default = false)
            showNodeStatus: {                         // анализировать статусы                     (default = {})
                first: true,                              // стартовой вершины графа               (default = true)
                last: true,                               // конечной вершины графа                (default = true)
                unattainable: true,                       // недостижимой вершины графа            (default = true)
            },
            showNodesBodyInStart: false,              // показывать при старте body-часть ноды     (default = false)
            nodesNotConnectable: false,               // ноды нельзя коннектить между собой        (default = false)
            onClickToNode: () => {},                  // будет вызываться при клике на node        (default = NULL)

            // EDGES

            edgeType: 'bezier',                       // "vector" / "orthogonally" / "bezier"                     (default = "bezier")
            maxDistanceBetweenArrows: 20              // максимальное расстояние между входами/выходами стрелок   (default = 20)
            showEdgesLabelsInStart: false,            // показывать при старте лейблы связей                      (default = false)
            edgesOnTopInStart: false,                 // показывать при старте рёбра выше нод                     (default = false)
            edgesFromNodeCenter: false,               // связи тянуть из центра ноды                              (default = false)
            hideEdgeDirection: false,                 // скрывать стелочки на связях (связи без направлений)      (default = false)
            onlyOneEdgeBetweenTwoNodes: false,        // между двумя нодами может быть только одна связь          (default = false)
            managingConnectingLineStyles: {},         // сюда Graph положит органы управления стилями стрелок     (default = false)
            onClickToEdge: () => {},                  // будет вызываться при клике на edge                       (default = NULL)
            getIdForNewEdge: () => {},                // будет вызываться при создании связи между двумя
                                                      // существующими узлами. Должна возвращать id связи         (default = NULL)
            getValueForNewEdge: () => {},             // будет вызываться при создании связи между двумя
                                                      // существующими узлами. Должна возвращать начальное value  (default = NULL)
            onConnect: () => {},                      // вызывается при создании новой связи между двумя
                                                      // существующими узлами                                     (default = NULL)
            notConnectToPane: false,                  // не создавать новую связи от существующего
                                                      // узла при drop на чистое поле.                            (default = false)

            // CONTROLS

            hideControls: false,                      // скрыть левое меню полностью               (default = false)
            showControls: {                           // какие кнопки управления скрывать          (default = {})
                navigation: false,                        // три кнопки навигации                       (default = true)
                main: true,                               // все кнопки вторго блока:                   (default = true)
                  main_edgesLabelShow: true,              //    - скрыть/показать заголовки переходов   (default = true)
                  main_nodesBodyShow: true,               //    - скрыть/показать body-часть ноды       (default = true)
                  main_darge: true,                       //    - darge-распределение графа             (default = true)
                  main_power: false,                      //    - power-распределение графа             (default = false)
                  main_add: true,                         //    - добавить новый узел                   (default = true)
                  main_edgesOnTop: false,                 //    - рёбра сверху вершин                   (default = false)
                nodes: true,                              // все кнопки активного узла:                 (default = true)
                  nodes_edit: true,                       //    - переименовать узел                    (default = true)
                  nodes_delete: true,                     //    - удалить узел                          (default = true)
                edges: true,                              // все кнопки активной связи                  (default = true)
                  edges_delete: true,                     //    - удалить связь                         (default = true)
                  edges_reverse: true,                    //    - реверсировать связь                   (default = true)
            },
            additionalControls: [                         // Дополнительные блоки кнопок управления      (default = undefined)
                [                                           // следующий блок иконок
                    {
                        buttonClasses: '',                    // классы кнопки                              (default = '')
                        iconClasses: 'fas fa-trash',          // классы иконки...                           (default = 'fas fa-question')
                        component: null,                      // ...или готовая компонента типа <i>...</i>  (default = null)
                        title: 'текст',                       // всплывающая подсказка                      (default = '')
                        callback: () => null,                 // колбэк по клику                            (default = () => null)
                        ifSelect: 'node',                     // признак когда показывать иконку...
                                                              // ...(null / 'node / 'edge')                 (default = null)
                    },
                    ...

                ],
                [...],
                ...
            ],

            // BUTTONS

            buttonsPanel: [                           // Компонента панели управления (меню справа)
                {
                    text: 'Отмена',                       // надпись на кнопке                          (default = 'no-text')
                    title: 'Отменить все изменения',      // всплывающая подсказка                      (default = '')
                    type: 'regular',                      // тип кнопки ('regular', 'primary', 'error') (default = 'regular')
                    disabled: false,                      // кнопка заблокирована от нажатия            (default = false)
                    callback: () => null,                 // колбэк по клику                            (default = () => null)
                },
                ...
            ],
        }}
    />
 */

const Graph = ({...props}) => {
    const {
        graphName = '',
        links = [],
        states = [],
        getComponentControlling = () => null,
        onChangeComponentState = {},
        options = {},
        connectorStartingValues = {},
    } = props;

    const getUtilsData = () => ({
        graphName,
        links,
        states,
        getComponentControlling,
        onChangeComponentState,
        options,
        connectorStartingValues,
    });

    const utilsCurrent = React.useRef(new Utils(getUtilsData()));
    let utils = utilsCurrent.current;

    setTimeout(() => {
        console.log('Graph utils', utils)
    }, 0)

    return (
        <GraphRoot {...props} utils={utils} />
    )
}

export default Graph;