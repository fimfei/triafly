import React from "react";
import {Utils} from "./";

import './scss/movable-popup.scss';

/*
    <MovablePopup
        initiator={initiatorRef.current}                 // если есть инициатор, но попап выведется под ним, если нет - по центру экрана...
        initiator=".abc"                                 // ... может быть как нодой, так и просто селектором

        className="aaa bbb ccc"                          // кастомные классы обёртки
        minWidth={50}                                    // минимально допустимая ширина
        minHeight={50}                                   // минимально допустимая высота
        resizable={true}                                 // признак изменяемого размеры попапа (по умолчанию false)
        movable={true}                                   // признак перемещаемого попапа (по умолчанию false)
        headerText="Это заголовок попапа"                // текст заголовка
        onQuestion={() => {console.log('onQuestion()')}} // если есть этот колбэк, то знак вопроса будет отрисовываться
        onClose={() => {console.log('onClose()')}}       // колбэк при нахатии на крестик
    >
        ...
    </MovablePopup>
*/

function MovablePopup(props) {
    const {children} = props;
    const utilsCurrent = React.useRef(new Utils(props));
    const utils = utilsCurrent.current;
    const connector = utils.connector;

    const [size, setSize] = React.useState(null);
    const [position, setPosition] = React.useState({left: 0, top: 0});

    const wrapperRef = React.useRef(null);
    const cornerRef = React.useRef(null);
    const headerRef = React.useRef(null);

    React.useEffect(() => {
        connector.data = {...connector.data, wrapperRef, cornerRef, headerRef, setSize, setPosition};
        utils.setStartPosition();
    }, []);

    const {className, resizable, movable, headerText, onQuestion, onClose} = connector.data;

    return (
        <div
            className={`movable-popup ${resizable ? 'resizable' : 'not-resizable'} ${movable ? 'movable' : 'not-movable'} ${className}`}
            ref={wrapperRef}
            style={{
                left: `${position.left}px`,
                top: `${position.top}px`,
                width: size ? `${size.width}px` : 'unset',
                height: size ? `${size.height}px` : 'unset',
                minWidth: `${connector.data.minWidth}px`,
                minHeight: `${connector.data.minHeight}px`,
            }}
        >
            <div
                className={`movable-popup-header`}
                ref={headerRef}
                onMouseDown={movable ? utils.headerStart.bind(utils) : () => {}}
            >
                <div className="movable-popup-header-text">{headerText}</div>
                {onQuestion && (
                    <div
                        className="movable-popup-header-question"
                        onClick={onQuestion}
                    >?</div>
                )}
                <div
                    className="field-icon field-icon-delete movable-popup-header-close"
                    onClick={onClose}
                >
                    <i className={`fas fa-times`}></i>
                </div>
            </div>
            <div className="movable-popup-body">
                {children}
            </div>
            {!!resizable && (
                <div
                    className={`movable-popup-corner`}
                    ref={cornerRef}
                    onMouseDown={utils.cornerStart.bind(utils)}
                ></div>
            )}
        </div>
    )
}

export default MovablePopup;