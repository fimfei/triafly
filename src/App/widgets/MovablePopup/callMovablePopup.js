import React from 'react';
import {createRoot} from 'react-dom/client';
import {MovablePopup} from "../";

/*
        const {removeComponent} = callMovablePopup({
            portal: 'body', // место в DOM-дереве, куда будет имплиментироваться компонента. Может быть как нодой, так и просто селектором
            ...
        })
*/

const callMovablePopup = props => {
    const {portal: externalPortal} = props;

    const appRoot = document.createElement('div');
    appRoot.className = 'movable-popup-root';
    const portal = externalPortal
        ? (
            typeof externalPortal === 'string'
                ? document.querySelector(externalPortal)
                : externalPortal
          )
        : document.querySelector('body');

    portal.appendChild(appRoot);

    const root = createRoot(appRoot);

    const removeComponent = () => {
        root.unmount();
        appRoot.remove();
    }

    root.render(
        <MovablePopup {...props} />
    );

    return {removeComponent}
};

export default callMovablePopup;