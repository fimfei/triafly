import React from 'react';
import {createPortal} from 'react-dom';
import {Popup, ListPickerDeprecated} from '../../../widgets';

import './scss/workflow-editor-picker.scss';

const log = console.debug;

const Picker = ({...props}) => {
    const {setLinks, typeLabels, type} = props;

    const [selectedPanelIsOpen, setSelectedPanelIsOpen] = React.useState(false);
    const [selectedType, setSelectedType] = React.useState(type);

    log('Picker -> selectedType:', selectedType);

    const selectRef = React.useRef(null);

    const getLinksByTypeValue = selectedType => {
        log('Picker -> selectedType:', selectedType);

        setSelectedType(selectedType);
        setLinks(selectedType);
        setSelectedPanelIsOpen(false);
    }

    const onChange = data => getLinksByTypeValue(data.selectedValues.join(', '));

    return (
        <React.Fragment>
            <div
                className="workflow-editor-picker"
                ref={selectRef}
                onClick={() => setSelectedPanelIsOpen(!selectedPanelIsOpen)}
            >
                <span
                    className="tf_form-control bg-transparent fw-600 border-transparent text-truncate"
                >
                    Графический редактор:
                </span>
                <span>{selectedType}</span>
            </div>

            {selectedPanelIsOpen && createPortal(
                <Popup
                    initiator={selectRef.current}
                    id="select-workflow-type"
                    minWidth="200"
                    minHeight="100"
                    onOutsideClick={() => setSelectedPanelIsOpen(false)}
                    style={{overflow: 'hidden'}}
                >
                    <ListPickerDeprecated
                        label="select-workflow-type"
                        list={typeLabels || []}
                        selectedValue={selectedType}
                        onChange={onChange}
                        isMultipleSelect={false}
                        hideSearchBar={true}
                        hideCountersBar={true}
                    />
                </Popup>,
                document.body
            )}
        </React.Fragment>
    )
};

export default Picker;
