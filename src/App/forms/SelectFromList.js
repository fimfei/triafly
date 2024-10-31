import React from 'react';
import {createPortal} from 'react-dom';
import {Popup, ListPicker} from "../widgets";

import './scss/select-from-list.scss';

const SelectFromList = ({...props}) => {
    const {label, value: startValue, onChange: externalOnChange, isMultiSelect = false, closePopupOnOutsideClick = false} = props;

    const lastChange = React.useRef(null);
    const inputRef = React.useRef(null);

    const [isOpen, _setIsOpen] = React.useState(false);
    const [value, setValue] = React.useState(startValue);
    const setIsOpen = data => {
        _setIsOpen(data);
        if(isMultiSelect && data === false && lastChange.current) {
            externalOnChange(lastChange.current);
            lastChange.current = null;
        }
    }

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    const onChange = data => {
        const {selectedValues} = data;
        setValue(selectedValues.join(', '));

        if(isMultiSelect) {
            lastChange.current = data;
        } else {
            externalOnChange(data);
            setIsOpen(false);
        }
    }

    const onOutsideClick = () => {
        setIsOpen(false);
    }

    const title = Array.isArray(value) ? value.join('\n') : value?.length ? value.split(', ').join('\n') : '';

    return (
        <div className="rct-input-from-list tf_form-select">
            {label && (
                <label className="tf_form-label">
                    {label}
                </label>
            )}
            <div
                className="tf_form-control"
                ref={inputRef}
                onClick={toggleOpen}
            >
                <div title={title}>
                    {value}
                </div>
                {isOpen ? (
                    <i className="fas fa-chevron-down" onClick={toggleOpen}></i>
                ) : (
                    <i className="fas fa-chevron-up" onClick={toggleOpen}></i>
                )}
            </div>
            {isOpen && createPortal(
                <Popup
                    initiator={inputRef.current}
                    id={label}
                    minWidth="200"
                    minHeight="100"
                    onOutsideClick={closePopupOnOutsideClick ? onOutsideClick : () => {}}
                >
                    <ListPicker
                        {...props}
                        onChange={onChange}
                        selectedValue={value}
                        hideSearchBar={true}
                        hideCountersBar={true}
                    />
                </Popup>,
                document.body
            )}
        </div>
    )
}

export default SelectFromList;