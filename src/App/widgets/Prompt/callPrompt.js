import React from 'react';
import ReactDOM from 'react-dom/client';
import {Prompt} from "./index";

const callPrompt = props => {
    const appRoot = document.createElement('div');
    appRoot.className = 'prompt-root';
    const portal = document.querySelector('html');
    portal.appendChild(appRoot);

    const root = ReactDOM.createRoot(appRoot);

    const removeComponent = () => {
        root.unmount();
        appRoot.remove();
    }


    root.render(
        <Prompt {...props} removeComponent={removeComponent} />
    );

    return {
        removeComponent
    }
};

export default callPrompt;