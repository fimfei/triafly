/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {observer} from 'mobx-react';
import {Store} from '../../stores';
import {CONSTANTS_SETPICKER} from ".";

const SetPickerSpinner = ({...props}) => {
    const {listName} = props;
    
    const showSpinner = Store.getState(CONSTANTS_SETPICKER.stateSpinner(listName));

    return (
        <div
            className="spinner"
            style={{visibility: showSpinner ? 'visible' : 'hidden'}}
        ></div>
    );
}
export default observer(SetPickerSpinner);
