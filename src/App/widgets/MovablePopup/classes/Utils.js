import React from "react";

class Utils {
    constructor(props) {
        const {
            initiator = null,
            className = '',
            minWidth = 100,
            minHeight = 100,
            resizable = false,
            movable = false,
            headerText = 'Заголовок',
            onQuestion = null,
            onClose = () => {},
        } = props;

        this.connector = {
            utils: this,
            options: {...props},
            data: {initiator, className, minWidth, minHeight, resizable, movable, onQuestion, onClose, headerText},
        };
    }

    headerStart(e) {
        this.moveObject = 'header';
        this.moveStart(e);
    }

    cornerStart(e) {
        this.moveObject = 'corner';
        this.moveStart(e);
    }

    moveStart(e) {
        const {wrapperRef} = this.connector.data;
        const {width, height, left, top} = wrapperRef.current.getBoundingClientRect();

        this.moveStartPosition = {
            cursorX: e.clientX,
            cursorY: e.clientY,
            popupWidth: width,
            popupHeight: height,
            popupLeft: left,
            popupTop: top,
        }

        wrapperRef.current.classList.add('move');
        document.onmouseup = this.moveStop.bind(this);
        document.onmousemove = this.moveMove.bind(this);
        document.getElementsByTagName('body')[0].style['user-select'] = 'none';
    }

    moveMove(e) {
        const {setSize, setPosition} = this.connector.data;
        const {cursorX, cursorY, popupWidth, popupHeight, popupLeft, popupTop} = this.moveStartPosition;

        if(this.moveObject === 'corner') {
            const width = Math.min(window.innerWidth - popupLeft, popupWidth + (e.clientX - cursorX));
            const height = Math.min(window.innerHeight - popupTop, popupHeight + (e.clientY - cursorY));
            setSize({width, height})
        } else {
            let left = popupLeft + (e.clientX - cursorX);
            let top = popupTop + (e.clientY - cursorY);
            left = Math.max(left, 0);
            top = Math.max(top, 0);
            left = Math.min(left, window.innerWidth - popupWidth);
            top = Math.min(top, window.innerHeight - popupHeight);
            setPosition({left, top})
        }
    }

    moveStop() {
        const {wrapperRef} = this.connector.data;
        document.onmouseup = null;
        document.onmousemove = null;
        wrapperRef.current.classList.remove('move');
        document.getElementsByTagName('body')[0].style['user-select'] = '';
    }

    setStartPosition() {
        const {wrapperRef, setPosition, initiator} = this.connector.data;

        if(initiator) {
            const el = typeof initiator === 'string'
                ? document.querySelector(initiator)
                : initiator;

            const {left, top, height} = el.getBoundingClientRect();

            setPosition({
                left: left,
                top: top + height + 3,
            })
        } else {
            const {width, height} = wrapperRef.current.getBoundingClientRect();

            setPosition({
                left: (window.innerWidth - width) / 2,
                top: (window.innerHeight - height) / 2,
            })
        }
    }
}

export default Utils;