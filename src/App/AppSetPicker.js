/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {toJS} from "mobx";
import {SetPicker} from './components/SetPicker';
import {CONFIG_SETPICKER} from "./components/SetPicker";
import {CONFIG_API} from "./api";
import {Store} from "./stores";
import {CONSTANTS_SETPICKER} from "./components/SetPicker";

function AppSetPicker(props) {
    const {componentReturn, options, appRoot} = props;
    const {listName, request, finalList} = options;
        
    React.useEffect(() => {
        const currentListName = CONSTANTS_SETPICKER.currentListName();
        appRoot.onmouseover = () => {
            if(Store.getState(currentListName) !== listName) {
                Store.setState(currentListName, listName);
            }
        }
    }, []);

    if(!listName || (!request && !finalList)) {
        console.error('SETPICKER -- Не задан один из обязательных параметров в options: listName, request');
        return null;
    }

    if(request) {
        const {url, pageLength} = request;
        if (!url) {
            console.error('SETPICKER -- Не задан один из обязательных параметров в request: url');
            return null;
        }
        if (pageLength) CONFIG_API.listBlockLength = pageLength;
    }

    const setpickerCommonStates = CONSTANTS_SETPICKER.commonStates();
    if(!toJS(Store.getState(setpickerCommonStates))) {
        Store.createStore(setpickerCommonStates, {...CONSTANTS_SETPICKER.initCommonStates})
    }
    
    const setpickerPagesData = CONSTANTS_SETPICKER.pagesData(listName);
    const setpickerStates = CONSTANTS_SETPICKER.states(listName);
    if(!toJS(Store.getState(setpickerPagesData))) {
        Store.createStore(setpickerPagesData, {})
        Store.createStore(setpickerStates, {...CONSTANTS_SETPICKER.initStates})
    }

    Store.setState(CONSTANTS_SETPICKER.currentListName(), listName);
    Store.updateState(CONSTANTS_SETPICKER.listNams(), {[listName]: true});

    const setPickerConnector = {};

    componentReturn.setPickerConnector = setPickerConnector;
    componentReturn.operationCodes = CONFIG_SETPICKER.operationCodes;

    return (
        <SetPicker
            {...props}
            setPickerConnector={setPickerConnector}
            componentReturn={componentReturn}
        />
    );
}

export default AppSetPicker;
