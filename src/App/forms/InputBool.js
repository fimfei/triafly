import React from 'react';
import UTILS from "../common/utils";

import './scss/input-bool.scss';

const InputBool = ({...props}) => {
    const {label, value, onChange} = props;
    const id = String(UTILS.random16());

    const oldValueCurrent = React.useRef(!!value);
    const [checked, setChecked] = React.useState(!!value);

    if(!!value !== oldValueCurrent.current) {
        setChecked(!!value);
        oldValueCurrent.current = !!value;
    }

    const onChangeBool = () => {
        onChange({
            inputType: 'bool',
            value: !checked,
            label,
        });
        setChecked(!checked);
    }

    return (
        <div className="tf_form-check">
            <input
                className="tf_form-check-input"
                id={id}
                checked={checked}
                type="checkbox"
                onChange={onChangeBool}
            />
            <label
                className="tf_form-check-label"
                htmlFor="id"
            >
                {label}
            </label>
        </div>
    )
}

export default InputBool;