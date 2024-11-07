import React from 'react';
import {useCurrentState} from "../../hooks";


import './scss/table-cell-editor-string.scss';

const TableCellEditorString = props => {
    const {cell, startValue, onCellBlur, validator = null} = props;

    const [value, valueCurrent, setValue] = useCurrentState(startValue);
    const [error, errorCurrent, setError] = useCurrentState('');

    const inputRef = React.useRef(null);

    const onChangeValue = e => {
        const newValue = e.target.value;
        setValue(newValue);
        cell.value = newValue;
    }

    const onKeyUp = e => {
        if(e.code === 'Enter') stop();
        if(e.code === 'Escape') {
            setValue(startValue);
            cell.value = startValue;
            setTimeout(() => {
                checkValid(startValue);
                setTimeout(() => {
                    stop();
                }, 0)
            }, 0)
        }
    };

    /* eslint-disable */
    React.useEffect(() => {
        document.addEventListener('keydown', onKeyUp);
        return () => {
            document.removeEventListener('keydown', onKeyUp);
            console.log('--- TableCellEditorString')
        }
    }, []);
    /* eslint-enable */

    const stop = () => {}//onCellBlur();

    const checkValid = value => {
        if (validator) {
            const {valid, msg} = validator(value);
            const _error = valid ? '' : msg;
            if(valid) {
                delete cell._.invalidValueFormat;
            } else {
                cell._.invalidValueFormat = msg;
            }
            if (_error !== errorCurrent.current) {
                setError(_error);
            }
        }
    }
    checkValid(valueCurrent.current);

    console.log('+++ TableCellEditorString')

    return (
        <div className={`tce-string${errorCurrent.current ? ' invalid' : ''}`} ref={inputRef}>
            {errorCurrent.current && (
                <div className="tce-error">{errorCurrent.current}</div>
            )}
            <input
                type="text"
                value={valueCurrent.current}
                placeholder="..."
                onChange={onChangeValue}
                autoFocus={true}
                onBlur={stop}
            />
        </div>
    )
}

export default TableCellEditorString;
