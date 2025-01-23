import React from 'react';
import {Utils, TreeMapItem} from "./";
import {chartsUtils} from "../chartsUtils";

import './scss/tree-map.scss';

const TreeMap = props => {
    const utilsCurrent = React.useRef(new Utils(props));
    const utils = utilsCurrent.current;
    const connector = utils.connector;

    const scheme = React.useRef('');
    const id = React.useRef(0);

    const [parts, _setParts] = React.useState(null);
    const setParts = data => {
        const _scheme = utils.getScheme(data);
        if(_scheme !== scheme.current) id.current++;
        scheme.current = _scheme;
        _setParts(data);
    }
    const wrapperRef = React.useRef(null);
    const showOnePart = React.useRef(false);

    const refreshItems = () => {
        setTimeout(() => {
            for(let id in connector.refreshItems) {
                connector.refreshItems[id]();
            }
        }, 0)
    }

    const onResize = () => {
        setParts(utils.getTreeMap());
        refreshItems();
    }

    React.useEffect(() => {
        connector.data.wrapperRef = wrapperRef;
        setParts(utils.getTreeMap());

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const onClick = part => () => {
        if(showOnePart.current) {
            showOnePart.current = false;
            onResize();
            refreshItems();
            return;
        }
        const {width, height} = wrapperRef.current.getBoundingClientRect();
        const _part = {
            ...part,
            left: 0,
            top: 0,
            width, height,
        };
        showOnePart.current = true;
        setParts([_part]);
        refreshItems();
    }

    console.log('connector', connector)

    return (
        <div className={`tree-map-wrapper${connector.options.className ? ' ' + connector.options.className : ''}`} ref={wrapperRef}>
            {parts && parts.map((part, index) => {
                const {left, top, width, height, color} = part;

                return (
                    <div
                        key={`tree-map-part-${id.current}-${index}`}
                        className="tree-map-part"
                        style={{
                            left: `${left}px`,
                            top: `${top}px`,
                            width: `${width}px`,
                            height: `${height}px`,
                            background: color,
                        }}
                        onClick={onClick(part)}
                    >
                        <TreeMapItem
                            connector={connector}
                            part={part}
                            index={index}
                            color={connector.options.autoColor ? chartsUtils.getTextColor(color) : null}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default TreeMap;