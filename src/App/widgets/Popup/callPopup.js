import React from 'react';
import {createRoot} from 'react-dom/client';
import {Popup} from "./index";

const callPopup = props => {
    const {portal: externalPortal} = props;

    const appRoot = document.createElement('div');
    appRoot.className = 'popup-root';
    const portal = externalPortal || document.querySelector('html');
    portal.appendChild(appRoot);

    const root = createRoot(appRoot);

    const removeComponent = () => {
        root.unmount();
        appRoot.remove();
    }

    root.render(
        <Popup {...props} removeComponent={removeComponent} />
    );

    return {
        removeComponent,
    }
};

export default callPopup;