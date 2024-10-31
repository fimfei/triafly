import React from 'react';
import {ElementsPicker} from "../../widgets";

import './scss/list.scss';

const List = props => {
    const {utils} = props;
    const {states} = utils;

    /* eslint-disable */
    React.useEffect(() => {
        const start = utils.mainControlling.getStartingName();
        const list = utils.mainControlling.getNodesFromLinks().map(item => item.id).filter(item => item !== start);

        utils.listControlling.setSelectedElements(list);
        utils.listControlling.setApprovedElements(list);
        utils.listControlling.refreshList();
    }, []);
    /* eslint-enable */

    const mainButtons = [
        {
            iconClass: 'fas fa-fw fa-plus',
            title: 'Добавить вершину',
            onClick: item => console.log('Добавить вершину', item)
        },
    ];

    const elementButtons = [
        {
            iconClass: 'fas fa-cog fa-fw',
            title: 'Настроить вершину',
            onClick: item => console.log('Настроить вершину', item)
        },
        {
            iconClass: 'fas fa-trash fa-fw',
            title: 'Удалить вершину',
            onClick: item => console.log('Удалить вершину', item)
        },
    ];

    return (
        <React.Fragment>
            <ElementsPicker
                list={states}
                selectedValues={[]}
                isMultiSelect={true}
                selectTitle="Выбрать вершины"
                mainButtons={mainButtons}
                elementButtons={elementButtons}
                getComponentControlling={utils.listGetComponentControlling}
                onChangeComponentState={utils.listOnChangeComponentState}
                draggable="not-approved"
                draggableElementClass="draggable-workflow-element"
                extraClass="ROOT-extraClass"
                popupOptions={{
                    minHeight: 200,
                    minWidth: 350,
                }}
                listPickerOptions={{
                    hideCountersBar: false,
                }}
            />
        </React.Fragment>
    )
}

export default List;
