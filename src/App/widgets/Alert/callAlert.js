import React from 'react';
import ReactDOM from 'react-dom/client';
import {Alert} from "./index";

const callAlert = props => {
    const appRoot = document.createElement('div');
    appRoot.className = 'alert-root';
    const portal = document.querySelector('html');
    portal.appendChild(appRoot);

    const root = ReactDOM.createRoot(appRoot);

    const removeComponent = () => {
        root.unmount();
        appRoot.remove();
    }


    root.render(
        <Alert {...props} removeComponent={removeComponent} />
    );

    return {
        removeComponent
    }
};

export default callAlert;