/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {CONFIG_SETPICKER} from ".";
import UTILS from "../../common/utils";

const SetPickerActionsPanelSearch = ({...props}) => {
    const {actionsMode, searchContext, setSearchContext} = props;

    const [value, setValue] = React.useState(searchContext);
    const timeoutId = React.useRef(null);
    const inputRef = React.useRef(null);

    const onChangeValue = e => {
        const newValue = e.target.value;
        setValue(newValue);

        if(timeoutId.current) {
            clearTimeout(timeoutId.current);
        }
        timeoutId.current = setTimeout(() => {
            timeoutId.current = null;
            setSearchContext(newValue);
        }, CONFIG_SETPICKER.searchTimeout);
    }

    const clearSearchContext = () => {
        setValue('');
        setSearchContext('');
    }

    React.useEffect(() => {
        if(actionsMode !== CONFIG_SETPICKER.actionModes.search) {
            return;
        }
        inputRef.current.focus();
    }, [actionsMode]);

    React.useEffect(() => {
        if(searchContext !== value) {
            setValue(searchContext);
        }
    }, [searchContext]);

    return (
        <div className={`c-search tf_input-group flex-grow-1${UTILS.addHideClassIf(actionsMode !== CONFIG_SETPICKER.actionModes.search)}`}>
            <input
                className="tf_form-control tf_form-control-xs tf_form-control-secondary"
                type="text"
                value={value}
                placeholder="Поиск..."
                onChange={onChangeValue}
                autoFocus={true}
                ref={inputRef}
            />
            <button
                className="tf_btn tf_btn-xs tf_btn-secondary tf_btn-icon"
                title="Очистить"
                onClick={clearSearchContext}
            >
                <i className="fas fa-backspace fa-fw"></i>
            </button>
        </div>
    );

}
export default SetPickerActionsPanelSearch;
