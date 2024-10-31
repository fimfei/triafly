import React from 'react';
import {SideResizer} from '../SideResizer';
import {Graph} from '../Graph';
import {Utils} from './';

import 'reactflow/dist/style.css';
import './scss/links-editor.scss';

const LinksEditor = props => {
    const utilsCurrent = React.useRef(new Utils(props));
    const utils = utilsCurrent.current;

    const onPanelResize = () => {
        utils.onPanelResize();
        console.log('LinksEditor utils', utils)
    }

    setTimeout(() => {
        console.log('LinksEditor utils', utils)
    }, 0)

    return (
        <div className="links-editor-wrapper">
            {true && (
                <Graph {...utils.graphProps} />
            )}
            <SideResizer
                type="horizontal"
                width={10}
                localStorageName={`resizer-links-editor`}
                onChange={onPanelResize}
            />
        </div>
    )
}

export default LinksEditor;