import React from 'react';

import './scss/tree-map-item.scss';

const TreeMapItem = props => {
    const {connector, part, color, index} = props;
    const {utils, options: {showValues}} = connector;

    const [parts, setParts] = React.useState(null);
    const itemRef = React.useRef(null);
    const idRef = React.useRef(Math.random());
    const id = idRef.current

    const refreshItem = () => {
        setParts(utils.getTreeMap({
            items: part.items,
            ref: itemRef.current,
            totalSum: part.sum,
        }));
    }

    React.useEffect(() => {
        connector.refreshItems[id] = refreshItem;
        refreshItem();
        return () => delete connector.refreshItems[id];
    }, []);

    return (
        <div className="tree-map-items" ref={itemRef}>
            {parts && parts.map((part, i) => {

                return (
                    <React.Fragment key={`tree-map-part-${index}-${i}`}>
                        <TreeMapItemLabel
                            {...part}
                            parts={parts}
                            showValues={showValues}
                            color={color}
                        />
                    </React.Fragment>
                )
            })}
        </div>
    )
}

const TreeMapItemLabel = props => {
    const {left, top, width, height, label, color, parts, sum, showValues} = props;

    const [isHorizontal, setIsHorizontal] = React.useState(true);
    const [isLow, setIsLow] = React.useState(false);
    const [isNarrow, setIsNarrow] = React.useState(false);
    const testRef = React.useRef(null);
    const itemRef = React.useRef(null);

    const checkHorizontal = () => {
        const {width: textWidth} = testRef.current.getBoundingClientRect();
        const {height: itemHeight, width: itemWidth} = itemRef.current.getBoundingClientRect();
        setIsHorizontal(textWidth < width || width > height);
        setIsLow(itemHeight < 40);
        setIsNarrow(itemWidth < 40);
    }

    React.useEffect(() => {checkHorizontal();}, []);
    React.useEffect(() => {checkHorizontal();}, [parts]);

    const style = {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
    }

    if(props.color) {
        style.color = props.color;
        style.boxShadow = `inset 0px 0px 0px 1px ${props.color}`;
    }

    return (
        <div
            className="tree-map-part-item"
            ref={itemRef}
            style={style}
        >
            <div className={`item-show ${isHorizontal ? 'horizontal' : 'vertical'} ${isLow ? 'is-low' : 'is-high'} ${isNarrow ? 'is-narrow' : 'is-wide'}`}>
                <div className="item-show-label">{props.label}</div>
                {showValues && (
                    <div className="item-show-value">{props.sum}</div>
                )}
            </div>
            <div className="item-test" ref={testRef}>{props.label}</div>
        </div>
    )
}

export default TreeMapItem;