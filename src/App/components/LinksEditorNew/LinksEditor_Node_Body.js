import React from 'react';
import {useCurrentState} from "../../hooks";
import {TableOrFieldName} from "./";

import './scss/links-editor-node-body.scss';

const LinksEditor_Node_Body = props => {
    const {id, data} = props;
    const {utils} = data;
    const {connector} = utils;
    const {relations, editId, selectedId} = connector;
    const {fields: systemFields} = relations;
    const isSelected = id === selectedId;
    const isEditMode = id === editId;

    const fields = isEditMode ? utils.changesInTable.fields : systemFields[id];

    const [, refreshCurrent, setRefresh] = useCurrentState(0);
    const refreshBody = () => setRefresh(refreshCurrent.current + 1);

    const [editedFieldIndex, setEditedFieldIndex] = React.useState(null);
    const [, savingIsAvailableCurrent, setSavingIsAvailable] = useCurrentState(false);

    const iconTypeRefs = React.useRef({});

    /* eslint-disable */
    React.useEffect(() => {
        connector.refresh[id] = connector.refresh[id] || [];
        connector.refresh[id].push(refreshBody);
        return () => delete connector.refresh[id];
    }, []);
    /* eslint-enable */

    const onSaveChanges      = () => utils.tableEditor_onSaveChanges();
    const onCancelChanges    = () => utils.tableEditor_stopEditing();
    const onFieldChecked     = fieldIndex => () => utils.tableEditor_onFieldChecked(fieldIndex);
    const onFieldDelete      = fieldIndex => () => utils.tableEditor_onFieldDelete(fieldIndex);
    const onFieldTypeChange  = fieldIndex => () => utils.tableEditor_onFieldTypeChange(fieldIndex, iconTypeRefs.current[fieldIndex].current, refreshBody);


    const onFieldAdd= () => {
        utils.tableEditor_onFieldAdd(setEditedFieldIndex);
        setEditedFieldIndex(fields.length - 1);
    }

    const onFieldNameEdit = index => () => setEditedFieldIndex(index);

    const onChangeName = index => value => {
        const field = fields[index];
        field.name = value;
        if(field.isNew) field.firstName = value;
        setEditedFieldIndex(null);
    }

    const _savingIsAvailable = utils.tableEditor_checkSavingIsAvailable();
    if(_savingIsAvailable !== null && _savingIsAvailable !== savingIsAvailableCurrent.current) setSavingIsAvailable(_savingIsAvailable);

    return (
        <div className={`custom-node-body${isSelected ? ' selected' : ''}${isEditMode ? ' edit-mode' : ''}`}>
            {(fields || []).map((field, index) => {
                const {name, isActive, isRequired, fieldTypeId, isNew, isDeleted} = field;
                const iconClass = (connector.fieldTypes || [])[fieldTypeId]?.iconClass || null;
                if(!isActive && !isEditMode) return null;
                const isNameEdited = index === editedFieldIndex || !name?.length;
                let classes = isNameEdited ? ' is-name-edited' : '';
                classes += isNew ? ' is-new' : '';
                classes += isDeleted ? ' is-deleted' : '';

                iconTypeRefs.current[index] = {current: null};
                const iconTypeRef = iconTypeRefs.current[index];

                return (
                    <div className={`custom-node-body-field${classes}`}>
                        {isEditMode && (
                            <div className="field-checkbox">
                                <input
                                    className="is-active-checkbox tf_form-check-input"
                                    type="checkbox"
                                    checked={isActive}
                                    title="Отметьте поля для загрузки"
                                    onChange={onFieldChecked(index)}
                                />
                            </div>
                        )}
                        <div className="field-icon field-icon-type" ref={iconTypeRef} >
                            {iconClass && (
                                <i
                                    className={`fa-fw text-primary ${iconClass}`}
                                    onClick={isEditMode ? onFieldTypeChange(index) : null}
                                    title="Выбрать тип поля"
                                ></i>
                            )}
                        </div>
                        <div className={`field-name${isRequired ? ' is-required' : ''}`}  title="Поле таблицы">
                            <TableOrFieldName name={name} isEdited={isNameEdited} onChange={onChangeName(index)} />
                        </div>
                        {isEditMode && (
                            <div className="field-menu">
                                <div className="field-icon field-icon-edit">
                                    <i
                                        className="fas fa-pencil-alt"
                                        onClick={onFieldNameEdit(index)}
                                        title="Изменить имя поля"
                                    ></i>
                                </div>
                                <div className="field-icon field-icon-delete">
                                    <i
                                        className={`fas fa-trash${isDeleted ? '-restore' : ''}`}
                                        onClick={onFieldDelete(index)}
                                        title="Удалить поле"
                                    ></i>
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
            {isEditMode && (
                <React.Fragment>
                    <div className="field-icon add-field">
                        <i
                            className="fas fa-plus-square"
                            onClick={onFieldAdd}
                            title="Добавить еще одно поле"
                        ></i>
                    </div>
                    <div className="editor-table-buttons d-inline-flex g-1 bg-positive">
                        <button
                            className="tf_btn tf_btn-xs"
                            onClick={onCancelChanges}
                            title="Отменить изменения"
                        >
                            Отмена
                        </button>
                        <button
                            className={`tf_btn tf_btn-xs tf_btn-primary${savingIsAvailableCurrent.current ? '' : ' hidden'}`}
                            onClick={savingIsAvailableCurrent.current ? onSaveChanges : null}
                            title="Сохранить Изменения"
                        >
                            OK
                        </button>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default LinksEditor_Node_Body;