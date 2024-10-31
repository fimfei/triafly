import React from "react";
import {ElementsPickerButton} from "./";

import './scss/elements-picker-list_item.scss';

function ElementsPickerListItem(props) {
    const {utils, item} = props;
    const {label} = item;
    const {connector} = utils;
    const {elementButtons, activeElement, approvedElementsByLabel, draggable, draggableElementClass = ''} = connector;

    const isApproved = approvedElementsByLabel === undefined ? true : !!approvedElementsByLabel[label];
    const isDraggable = !!draggable && (
            draggable === 'all' ||
            (draggable === 'approved' && isApproved) ||
            (draggable === 'not-approved' && !isApproved)
        )

    const onClickToItem = e => {
        utils.clickToItem(item.label);
    }

    let classes = label === activeElement ? ' is-active' : '';
    classes += isApproved ? ' approved' : ' not-approved';

    const onDragStart = e => {
        if(!isDraggable) return;
        e.dataTransfer.clearData();
        e.dataTransfer.setData('application/reactflow', JSON.stringify(item));

        const elem = document.createElement('div');
        elem.id = 'drag-ghost';
        if(draggableElementClass) elem.classList.add(draggableElementClass);
        elem.innerHTML = `<div>${label}</div>`;
        elem.style.position = 'absolute';
        elem.style.top = '-1000px';
        document.body.appendChild(elem);
        e.dataTransfer.setDragImage(elem, 0, 0);

        setTimeout(() => {
            elem.remove();
        }, 100)
    };

    return (
        <div
            className="list-element"
            onClick={onClickToItem}
            draggable={isDraggable}
            onDragStart={onDragStart}
        >
            <div className={`relation-compact${classes}`}>
                <div className="flex-grow-1 pl-1 fs-sm">{item.label}</div>

                <div className="d-flex align-items-center">
                    {elementButtons.map((button, index) => {
                        return (
                            <ElementsPickerButton button={button} item={item} transparent={true} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ElementsPickerListItem;