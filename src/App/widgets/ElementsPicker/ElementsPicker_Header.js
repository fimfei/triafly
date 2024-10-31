import React from "react";
import {createPortal} from 'react-dom';
import {ElementsPickerButton} from "./index";
import {Popup} from "../Popup";
import {ListPicker} from "../ListPicker";

import './scss/elements-picker-header.scss';

const ElementsPickerHeader = props => {
    const {utils} = props;
    const {connector} = utils;
    const {mainButtons, selectTitle, list, listByLabel, selectedElements, popupOptions, listPickerOptions} = connector;

    const [showPicker, setShowPicker] = React.useState(false);
    const initiatorRef = React.useRef(null);

    const getList = () => list.map(item => ({label: item.label}));
    const getSelectedList = () => selectedElements.map(item => item.label);

    const onChange = props => {
        const {selectedValues} = props;

        const selected = selectedValues.map(label => listByLabel[label]);

        const selectedByLabel = {};
        for(let item of selectedElements) {
            selectedByLabel[item.label] = item;
        }

        connector.selectedElements = utils.sort(selected);
        connector.selectedElementsByLabel = selectedByLabel;
        utils.refreshList();
    }

    const _popupOptions = {
        initiator: initiatorRef.current,
        id: 'workflow-popup',
        minWidth: 200,
        minHeight: 100,
        onOutsideClick: () => setShowPicker(false),
        ...popupOptions,
    }

    const _listPickerOptions = {
        label: 'elementsPicker',
        list: getList(),
        selectedValues: getSelectedList(),
        onChange,
        isMultiSelect: true,
        hideSearchBar: true,
        hideCountersBar: true,
        ...listPickerOptions,
    }

    return (
        <div className="tf_btn-group">
            <div className="tf_drop-focus flex-grow-1">
                <button
                    className="tf_btn tf_btn-xs tf_btn-drop w-100 select-tables select-tables-narrow"
                    onClick={() => setShowPicker(!showPicker)}
                    ref={initiatorRef}
                >
                    {selectTitle}
                </button>
                {showPicker && createPortal(
                    <Popup {..._popupOptions} >
                        <ListPicker {..._listPickerOptions} />
                    </Popup>,
                    document.body
                )}
            </div>
            <React.Fragment>
                {mainButtons.map((button, index) => {
                    return (
                        <ElementsPickerButton button={button} item={null} />
                    )
                })}
            </React.Fragment>
        </div>
    )
}

export default ElementsPickerHeader;