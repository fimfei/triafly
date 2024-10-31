import React from "react";
//import {LinksEditor} from './components/LinksEditor';
import {LinksEditor} from './components/LinksEditorNew';

const AppLinksEditor = props => {
    return (
        <React.Fragment>
            <LinksEditor {...props}/>
        </React.Fragment>
    );
}

export default AppLinksEditor;
