import React from 'react';
import {Graph} from "../Graph";
import {LinkEditor} from "./";
import UTILS from "../../common/utils";

const GraphOrLinkEditor = props => {
    const {graphProps, editorProps, setInfoComponentCurrent} = props;

    const [type, setType] = React.useState(null); // null / 'node-...' / 'edge-...'
    const oldType = React.useRef(null);

    const isNode = !!type && type.indexOf('node') === 0;
    const isEdge = !!type && type.indexOf('edge') === 0;

    setInfoComponentCurrent.current = type => {
        const _setType = type => {
            setType(type ? `${type}-${UTILS.random16()}` : type);
        }
        if(type && type === oldType.current) {
            setType(null);
            setTimeout(() => {
                _setType(type);
            }, 0);
            return;
        }
        oldType.current = type;
        _setType(type);
    }

    return (
        <React.Fragment>
            {isNode && (
                <Graph {...graphProps} />
            )}
            {isEdge && (
                <LinkEditor {...editorProps} />
            )}
            {!isNode && !isEdge && (
                <div className="nothing-selected">Ничего не выбрано</div>
            )}
        </React.Fragment>
    )
}

export default GraphOrLinkEditor;
