import React from 'react';
import {useReactFlow} from 'reactflow';
import {utils} from './';

import './scss/menu.scss';

const Menu = ({...props}) => {
    const {
        setShowLinksLabels,
        showLinksLabelsCurrent,
        fitView,
    } = props;

    const {zoomIn, zoomOut} = useReactFlow();

    const clickOnLinksButton = () => setShowLinksLabels(!showLinksLabelsCurrent.current);

    const clickOnDagreButton = () => {
        utils.dagreGraph();
        setTimeout(() => {
            fitView('clickOnDagreButton');
        }, 0);
    }

    const zoom = func => () => func({duration: 300});

    return (
        <div className="position-absolute left-0 top-0 d-inline-flex bg-positive">
            <div className="d-flex g-1">
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
                        onClick={() => fitView('fit')}
                    >
                        <i className="fas fa-expand fa-fw"></i>
                    </button>
                </div>
                <div className="tf_btn-group">
                    <button
                        className="tf_btn tf_btn-icon tf_btn-xs"
                        title="Показывать связи"
                        onClick={clickOnLinksButton}
                    >
                        <i className={`fas fa-eye${showLinksLabelsCurrent.current ? '' : '-slash'} fa-fw`}></i>
                    </button>
                    <button
                        className="tf_btn tf_btn-icon tf_btn-xs"
                        title="Распределить по области"
                        onClick={clickOnDagreButton}
                    >
                        <i className="fas fa-arrows-alt fa-fw"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Menu;