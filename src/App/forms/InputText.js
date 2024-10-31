import React from 'react';

import './scss/input-text.scss';
import UTILS from "../common/utils";

const InputText = ({...props}) => {
    const {label, value: _value = '', onChange, placeholder = ''} = props;
    const id = String(UTILS.random16());

    const oldValueCurrent = React.useRef(_value);
    const [value, setValue] = React.useState(_value);

    if(_value !== oldValueCurrent.current) {
        setValue(_value);
        oldValueCurrent.current = _value;
    }

    const onChangeValue = e => {
        const value = e.target.value;
        setValue(value);
    }

    const onBlur = () => {
        if(!onChange) return;
        onChange({
            inputType: 'text',
            value,
            label,
        });
    }

    const onKeyDown = e => {
        if(e.code === 'Enter') onBlur();
    }

    return (
        <div className="tf_form-input">
            {label && (
                <label
                    htmlFor={id}
                    className="tf_form-label"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                className="tf_form-control"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChangeValue}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

export default InputText;