import React from 'react';
import {useCurrentState} from "../../hooks";

import './scss/links-editor-node-navigator.scss';

const LinksEditor_Node_Navigator = props => {
    const {id, data} = props;
    const {utils} = data;
    const {connector} = utils;
    const {editId, selectedId} = connector;
    const isSelected = id === selectedId;
    const isEditMode = id === editId;

    const [_, refreshCurrent, setRefresh] = useCurrentState(0);
    const refreshNavigator = () => setRefresh(refreshCurrent.current + 1);

    const [isEditedName, setIsEditedName] = React.useState(false);
    utils.setIsEditedName = setIsEditedName;

    /* eslint-disable */
    React.useEffect(() => {
        connector.refresh[id] = connector.refresh[id] || [];
        connector.refresh[id].push(refreshNavigator);
        return () => delete connector.refresh[id];
    }, []);
    /* eslint-enable */

    const onEdit = () => utils.tableEditor_startEditing(id);

    const onChangeName = value => {
        utils.changesInTable.tableName = value;
        setIsEditedName(false);
    }

    const name = isEditMode ? utils.changesInTable.tableName : id;

    return (
        <div
            _={_}
            className={`custom-node-navigator${isSelected ? ' selected' : ''}${isEditMode ? ' edit-mode' : ''}${isEditedName ? ' edit-name' : ''}`}
        >
            <div className="navigator-name">
                <TableOrFieldName name={name} isEdited={isEditedName} onChange={onChangeName}/>
            </div>
            {isSelected && !isEditMode && <EditButton onEdit={onEdit} />}
            {isSelected &&  isEditMode && <EditMode utils={utils} id={id} setIsEditedName={setIsEditedName} />}
        </div>
    )
}

const EditButton = ({onEdit}) => {
    return (
        <div className="field-menu">
            <div className="field-icon field-icon-edit" onClick={onEdit}>
                <i
                    className="fas fa-cog"
                    title="Настройки таблицы"
                ></i>
            </div>
        </div>
    )
}

const EditMode = ({utils, id, setIsEditedName}) => {
    const searchClass = utils.graphProps.options.graphView.nodeClasses;
    const editClass = 'is-edit';

    const menuEl = React.useRef(null);

    /* eslint-disable */
    React.useEffect(() => {
        let parentEl = menuEl.current;

        while(parentEl.classList && !parentEl.classList.contains(searchClass)) parentEl = parentEl.parentNode;

        if(parentEl.classList) {
            parentEl.classList.add(editClass);
            return () => parentEl.classList.remove(editClass);
        }
    }, []);
    /* eslint-enable */

    return (
        <div
            className="field-menu edit-mode"
            ref={menuEl}
        >
            <div className="field-icon field-icon-edit">
                <i
                    className="fas fa-pencil-alt"
                    onClick={() => setIsEditedName(true)}
                    title="Изменить имя таблицы"
                ></i>
            </div>
            <div className="field-icon field-icon-delete">
                <i
                    className="fas fa-trash"
                    onClick={() => utils.tableEditor_onTableDelete({id})}
                    title="Удалить таблицу"
                ></i>
            </div>
        </div>
    )
}

export const TableOrFieldName = props => {
    const {name, isEdited, onChange} = props;

    const [value, setValue] = React.useState(name);

    const oldIsEdited = React.useRef(isEdited);
    if(isEdited && !oldIsEdited.current) setValue(name);
    oldIsEdited.current = isEdited;

    const onChangeValue = e => {
        e.stopPropagation();
        e.preventDefault();

        const value = e.target.value;
        setValue(value.replace(/\s/g, '_'));
    }

    const onBlur = () => {
        onChange(value);
    }


    return (
        <React.Fragment>
            {name}
            {(isEdited || !value) && (
                <input
                    className="edited-value"
                    type="text"
                    value={value}
                    placeholder="Введите имя..."
                    onChange={onChangeValue}
                    autoFocus={true}
                    onClick={onChangeValue}
                    onBlur={onBlur}
                />
            )}
        </React.Fragment>
    )
}

export default LinksEditor_Node_Navigator;