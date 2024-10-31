import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './scss/table-settings-panel-order.scss';

const TableSettingsPanelOrder = props => {
    const {list: externalList, root, onChange} = props;

    const [list, selList] = React.useState(externalList);

    const moveListItem = React.useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = list[dragIndex]
            const hoverItem = list[hoverIndex]

            selList(list => {
                const newList = [...list];
                newList[dragIndex] = hoverItem;
                newList[hoverIndex] = dragItem;
                return newList;
            })
        },
        [list],
    );

    const onDrop = () => {
        onChange(list);
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="order-list" >
                <div className="order-root">{root}</div>
                <div className="order-items">
                    {list.map((item, index) => {
                        if(item.isLeft) return null;

                        return (
                            <ListItem
                                {...props}
                                {...item}
                                index={index}
                                moveListItem={moveListItem}
                                onDrop={onDrop}
                            />
                        )
                    })}
                </div>
            </div>
        </DndProvider>
    )
}

const ListItem = props => {
    const {value, index, moveListItem, onDrop} = props;

    const [{isDragging}, dragRef] = useDrag({
        type: 'item',
        item: {index},
        collect: monitor => {
            return {
                isDragging: monitor.isDragging(),
            }
        },
    })

    const [spec, dropRef] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            const dragIndex = item.index;
            const hoverIndex = index;
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
            const hoverActualX = monitor.getClientOffset().x - hoverBoundingRect.left;

            if (
                ((dragIndex < hoverIndex) && (hoverActualX < hoverMiddleX)) ||
                ((dragIndex > hoverIndex) && (hoverActualX > hoverMiddleX))
            ) return;

            moveListItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
        drop: () => onDrop(),
    })

    const ref = React.useRef(null);
    const dragDropRef = dragRef(dropRef(ref));

    return (
        <div
            className={`order-list-item`}
            ref={dragDropRef}
        >
            {value}
        </div>
    )
}

export default TableSettingsPanelOrder;