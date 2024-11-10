import React from "react";
import {createRoot} from 'react-dom/client';
import {SetPicker} from './';

const callSetPicker = props => {
    const {componentPortalEl, componentCallback, componentClasses, options} = props;

    const appRoot = document.createElement('div');

    if(componentClasses) {
        appRoot.className = componentClasses;
    }

    const portal = (typeof(componentPortalEl) === 'string') ? document.querySelector(componentPortalEl) : componentPortalEl;
    portal.appendChild(appRoot);
    const root = createRoot(appRoot);

    const removeComponent = () => {
        root.unmount();
        appRoot.remove();
    }

    const componentReturn = {
        removeComponent,
    };

    const setPickerConnector = React.useRef({})

    root.render(
        <SetPicker
            options={options}
            componentCallback={componentCallback}
            componentReturn={componentReturn}
            setPickerConnector={setPickerConnector.current}
        />
    );

    return componentReturn;
}

export default callSetPicker;