import React from 'react';

import './scss/side-resizer.scss';

const SideResizer = ({...props}) => {
    const {type, width, localStorageName, onChange} = props;
    const isVertical = type === 'vertical';

    const resizerEl = React.useRef(null);
    const wrapperEl = React.useRef(null);
    const startPosition = React.useRef(null);
    const [style, setStyle] = React.useState({
        position: 'absolute',
        visibility: 'hidden',
    });

    /* eslint-disable */
    React.useEffect(() => {
        setStyle({
            position:   'absolute',
            width:      isVertical ? `${width}px` : `100%`,
            height:     isVertical ? `100%` : `${width}px`,
            left:       isVertical ? 'unset' : '0px',
            bottom:     isVertical ? 'unset' : `-${width}px`,
            right:      isVertical ? `-${width}px` : 'unset',
            top:        isVertical ? '0px' : 'unset',
        });
        wrapperEl.current = resizerEl.current.parentNode;
        if(localStorageName) {
            const size = localStorage.getItem(localStorageName);
            if(size) {
                const dim = isVertical ? 'width' : 'height';
                wrapperEl.current.style[`min-${dim}`] = `${size}px`;
                wrapperEl.current.style[`max-${dim}`] = `${size}px`;
                wrapperEl.current.style[`${dim}`] = `${size}px`;
            };
        }
    }, []);
    /* eslint-enable */

    const onMouseDown = e => {
        const position = wrapperEl.current.getBoundingClientRect();
        startPosition.current = {
            cursorX: e.clientX,
            cursorY: e.clientY,
            wrapperWidth: position.width,
            wrapperHeight: position.height,
        }
        resizerEl.current.classList.add('move');
        document.onmouseup = onMouseUp;
        document.onmousemove = onMouseMove;
    }

    const onMouseUp = e => {
        document.onmouseup = null;
        document.onmousemove = null;
        resizerEl.current.classList.remove('move');
        if(localStorageName) {
            const size = wrapperEl.current.getBoundingClientRect();
            localStorage.setItem(localStorageName, size[isVertical ? 'width' : 'height']);
        }
        if(onChange) {
            onChange();
        }
    }

    const onMouseMove = e => {
        const {cursorX, cursorY, wrapperWidth, wrapperHeight} = startPosition.current;
        const newWidth = wrapperWidth + (e.clientX - cursorX);
        const newHeight = wrapperHeight + (e.clientY - cursorY);

        const setSize = (dim, val) => {
            wrapperEl.current.style[`min-${dim}`] = `${val}px`;
            wrapperEl.current.style[`max-${dim}`] = `${val}px`;           
            wrapperEl.current.style[`${dim}`] = `${val}px`;
        }

        setSize(isVertical ? 'width' : 'height', isVertical ? newWidth : newHeight);
    }

    return (
        <div
            className={`side-resizer ${isVertical ? 'vertical' : 'horizontal'}`}
            onMouseDown={onMouseDown}
            style={style}
            ref={resizerEl}
        ></div>
    )
};

export default SideResizer;