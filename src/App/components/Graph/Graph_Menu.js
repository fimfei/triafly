import React from 'react';
import {useReactFlow} from 'reactflow';
import {useCurrentState} from "../../hooks";

import './scss/graph-menu.scss';

const Menu = props => {
    const {utils} = props;
    const {connector} = utils;
    const {fitView, options, edgesByIdCurrent, start, panelRef} = connector;
    const {showControls, additionalControls = null} = options;
    const {zoomIn, zoomOut} = useReactFlow();
    const {
        navigation, main, main_edgesLabelShow, main_nodesBodyShow, main_edgesOnTop,
        main_darge, main_power, main_add, nodes, nodes_edit, nodes_delete,
        edges, edges_delete, edges_reverse
    } = showControls;

    const [showLabels, setShowLabels] = React.useState(connector.showLinksLabels);
    const [showNodesBody, setNodesBody] = React.useState(connector.showNodesBody);
    const [edgesOnTop, setEdgesOnTop] = React.useState(connector.edgesOnTop);
    const [, refreshCurrent, setRefresh] = useCurrentState(0);
    const refreshMenu = () => setRefresh(refreshCurrent.current + 1);

    /* eslint-disable */
    React.useEffect(() => {
        const setPanelRefClass = () => panelRef.current.classList[connector.edgesOnTop ? 'add' : 'remove']('edges-on-top');

        connector.resetMenu = () => {
            setShowLabels(connector.showLinksLabels);
            setNodesBody(connector.showNodesBody);
            setEdgesOnTop(connector.edgesOnTop);
            setPanelRefClass();
        }
        connector.refreshMenu = refreshMenu;
        setPanelRefClass();
    }, []);
    /* eslint-enable */

    const clickOnDagreButton = () => {
        utils.dagreGraph();
        fitView();
    }

    const clickOnPowerGraphButton = () => utils.powerGraph();
    const clickOnShowEdgesButton = () => utils.setShowLinksLabels(!showLabels);
    const clickOnShowNodesBody = () => utils.setShowNodesBody(!showNodesBody);
    const clickOnEdgesOnTop = () => utils.setEdgesOnTop(!edgesOnTop);
    const clickOnAddStatus = () => utils.addNewNode();
    const deleteNode = () => utils.deleteNode();
    const renameNode = () => utils.renameNode();
    const deleteEdge = () => utils.deleteEdge();
    const reverseEdge = () => utils.reverseEdge();

    const zoom = func => () => func({duration: 300});

    const selectedEdge = connector.selectedEdge;
    const isStartLink = !!selectedEdge && edgesByIdCurrent.current[selectedEdge] && edgesByIdCurrent.current[selectedEdge].source === start;

    return (
        <React.Fragment>
            <div _="{_}" className="graph-menu position-absolute left-0 top-0 d-inline-flex bg-positive">
                <div className="d-flex g-1">
                    {navigation && (
                        <div className="tf_btn-group">
                            <button
                                className="tf_btn tf_btn-icon tf_btn-xs"
                                title="Увеличить масштаб"
                                onClick={zoom(zoomIn)}
                            >
                                <i className="fas fa-plus fa-fw"></i>
                            </button>
                            <button
                                className="tf_btn tf_btn-icon tf_btn-xs"
                                title="Уменьшить масштаб"
                                onClick={zoom(zoomOut)}
                            >
                                <i className="fas fa-minus fa-fw"></i>
                            </button>
                            <button
                                className="tf_btn tf_btn-icon tf_btn-xs"
                                title="По размеру области"
                                onClick={fitView}
                            >
                                <i className="fas fa-expand fa-fw"></i>
                            </button>
                        </div>
                    )}
                    {main && (
                        <div className="tf_btn-group">
                            {main_edgesLabelShow && (
                                <button
                                    className="tf_btn tf_btn-icon tf_btn-xs"
                                    title="Показывать метки рёбер"
                                    onClick={clickOnShowEdgesButton}
                                >
                                    <i className={`fas fa-eye${showLabels ? '' : '-slash'} fa-fw`}></i>
                                </button>
                            )}
                            {main_nodesBodyShow && (
                                <button
                                    className="tf_btn tf_btn-icon tf_btn-xs"
                                    title="Показывать тело вершин"
                                    onClick={clickOnShowNodesBody}
                                >
                                    <i className={`far fa-eye${showNodesBody ? '' : '-slash'} fa-fw`}></i>
                                </button>
                            )}
                            {main_edgesOnTop && (
                                <button
                                    className="tf_btn tf_btn-icon tf_btn-xs"
                                    title={edgesOnTop ? 'Рёбра сверху вершин' : 'Вершины сверху рёбер'}
                                    onClick={clickOnEdgesOnTop}
                                >
                                    <i className={`fas fa-arrow-${edgesOnTop ? 'up' : 'down'}`}></i>
                                </button>
                            )}
                            {main_darge && (
                                <button
                                    className="tf_btn tf_btn-icon tf_btn-xs"
                                    title="DARGE-распределение графа"
                                    onClick={clickOnDagreButton}
                                >
                                    <i className="fas fa-project-diagram fa-fw"></i>
                                </button>
                            )}
                            {main_power && (
                                <button
                                    className="tf_btn tf_btn-icon tf_btn-xs"
                                    title="POWER-распределение графа"
                                    onClick={clickOnPowerGraphButton}
                                >
                                    <i className="fas fa-bezier-curve fa-fw"></i>
                                </button>
                            )}
                            {main_add && (
                                <button
                                    className="tf_btn tf_btn-icon tf_btn-xs"
                                    title="Добавить новую вершину"
                                    onClick={clickOnAddStatus}
                                >
                                    <i className="fas fa-plus fa-fw"></i>
                                </button>
                            )}
                        </div>
                    )}
                    {!!connector.selectedNode && nodes && (
                        <div className="tf_btn-group">
                            {nodes_edit && (
                                <button
                                    className="tf_btn tf_btn-icon tf_btn-xs"
                                    title={`Переименовать вершмну "${connector.selectedNode}"`}
                                    onClick={renameNode}
                                >
                                    <i className="fas fa-pencil-alt fa-fw"></i>
                                </button>
                            )}
                            {nodes_delete && (
                                <button
                                    className="tf_btn tf_btn-icon tf_btn-xs"
                                    title={`Удалить вершину "${connector.selectedNode}"`}
                                    onClick={deleteNode}
                                >
                                    <i className="fas fa-trash fa-fw"></i>
                                </button>
                            )}
                        </div>
                    )}
                    {!!connector.selectedEdge && edges && (
                        <div className="tf_btn-group">
                            {edges_reverse && !isStartLink &&(
                                <button
                                    className="tf_btn tf_btn-icon tf_btn-xs"
                                    title={'Реверсировать ребро'}
                                    onClick={reverseEdge}
                                >
                                    <i className="fas fa-exchange-alt fa-fw"></i>
                                </button>
                            )}
                            {edges_delete && (
                                <button
                                    className="tf_btn tf_btn-icon tf_btn-xs"
                                    title={`Удалить ребро "${connector.selectedEdge}"`}
                                    onClick={deleteEdge}
                                >
                                    <i className="fas fa-trash fa-fw"></i>
                                </button>
                            )}
                       </div>
                    )}
                    {additionalControls && (
                        <AdditionalControls additionalControls={additionalControls} connector={connector} />
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

const AdditionalControls = props => {
    const {additionalControls, connector} = props;

    return (
        <React.Fragment>
            {additionalControls.map((controlsGroup, index) => {
                return (
                    <div className="tf_btn-group">
                        {controlsGroup.map((control, index) => {
                            const {buttonClasses = '', iconClasses = 'fas fa-question', component: IconComponent = null, title, callback = () => {}, ifSelect} = control;

                            if(
                                (ifSelect === 'node' && !connector.selectedNode) ||
                                (ifSelect === 'edge' && !connector.selectedEdge)
                            ) return null;

                            return (
                                <button
                                    className={`tf_btn tf_btn-icon tf_btn-xs ${buttonClasses}`}
                                    title={title}
                                    onClick={callback}
                                >
                                    {IconComponent ? (
                                        <IconComponent />
                                    ) : (
                                        <i className={iconClasses}></i>
                                    )}
                                </button>

                            )
                        })}
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default Menu;