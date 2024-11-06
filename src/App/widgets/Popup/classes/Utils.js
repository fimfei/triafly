class Utils {

    constructor({props}) {
        this.props = {...props, answer: props?.answer ? props.answer : {}};
        this.position = {};
        this.localeStorageName = 'popup_sizes';
        const popupSizes = localStorage.getItem(this.localeStorageName);
        this.popupSizes = popupSizes ? JSON.parse(popupSizes) : {};
        this.getPosition();
    }

    getPosition() {
        const {initiator, minWidth, minHeight, id, autoSize, fitToParent} = this.props;
        const {width, height, left, right, top, bottom} = initiator.getBoundingClientRect();
        let {width: oldWidth, height: oldHeight} = this.position;

        if(!oldWidth && this.popupSizes[id]) {
            oldWidth = this.popupSizes[id].width;
            oldHeight = this.popupSizes[id].height;
        }

        const rightSpase = window.innerWidth - left;
        const bottomSpace = window.innerHeight - bottom;

        let popupWidth = oldWidth ? oldWidth : Math.max(width, minWidth);
        let popupHeight = oldHeight ? oldHeight : Math.max(height, minHeight);

        if(autoSize && this.data?.popupRefCurrent?.current) {
            const {width: _width, height: _height} = this.data.popupRefCurrent.current.getBoundingClientRect();
            popupWidth = _width;
            popupHeight = _height;
        }

        const downDirection = bottomSpace > popupHeight + 20;
        const rightDirection = rightSpase > popupWidth + 20;

        this.props.answer.direction = {
            down: downDirection,
            up: !downDirection,
            right: rightDirection,
            left: !rightDirection,
        };

        this.position = {
            downDirection,
            rightDirection,
            left: fitToParent ? left : (rightDirection ? left : right - popupWidth),
            top: fitToParent ? top : (downDirection ? bottom : top - popupHeight),
            width: fitToParent ? width : popupWidth,
            height: fitToParent ? height : popupHeight,
        }
        return this.position
    }

    getVal(size) {
        return isNaN(size) ? size : `${size}px`;
    }

    positionToPopupCSS() {
        const {minWidth, minHeight, maxWidth, maxHeight, autoSize} = this.props;
        const {left, top, width, height} = this.position;

        const out = {
            'left': this.getVal(left),
            'top': this.getVal(top),
            'min-width': this.getVal(minWidth),
            'min-height': this.getVal(minHeight),
        }
        if(!autoSize) {
            out.width = this.getVal(width);
            out.height= this.getVal(height);
        }
        if(maxWidth) out['max-width'] = this.getVal(maxWidth);
        if(maxHeight) out['max-height'] = this.getVal(maxHeight);
        return out;
    }

    positionToCornerClass() {
        const {downDirection, rightDirection} = this.position;
        return `rct-popup-corner ${downDirection ? 'bottom' : 'top'}-${rightDirection ? 'right' : 'left'}`;
    }

    recalcPosition() {
        const {popupRefCurrent, cornerRefCurrent} = this.data;

        this.position = this.getPosition();
        const css = this.positionToPopupCSS();
        for (let style in css) {
            const styleValue = css[style];
            popupRefCurrent.current.style[style] = styleValue;
        }
        if(!cornerRefCurrent?.current) return;
        cornerRefCurrent.current.className = this.positionToCornerClass();
    }

    checkElementScroll() {
        const {initiator} = this.props;
        if (!initiator) {
            return () => {
            };
        }

//        const {popupRefCurrent, cornerRefCurrent} = this.data;
        let parentEl = initiator.parentElement;
        let scrolls = [];

        const scrollListener = () => {
            this.recalcPosition();
        }

        while (parentEl?.tagName) {
            const scroll = {
                parentEl,
            };
            scroll.scrollListener = scrollListener;
            parentEl.addEventListener('scroll', scrollListener);
            scrolls.push(scroll);

            parentEl = parentEl.parentElement;
        }

        return () => {
            for (let item of scrolls) {
                item.parentEl.removeEventListener('scroll', item.scrollListener);
            }
        }
    }

    cornerStart(e) {
        const {popupRefCurrent} = this.data;

        const {width, height, left, top} = this.position;

        this.cornerStartPosition = {
            cursorX: e.clientX,
            cursorY: e.clientY,
            popupWidth: width,
            popupHeight: height,
            popupLeft: left,
            popupTop: top,
        }
        popupRefCurrent.current.classList.add('move');
        document.onmouseup = this.cornerStop.bind(this);
        document.onmousemove = this.cornerMove.bind(this);
        document.getElementsByTagName('body')[0].style['user-select'] = 'none';
    }

    cornerMove(e) {
        const {popupRefCurrent} = this.data;
        const {minWidth, minHeight} = this.props;
        const {cursorX, cursorY, popupWidth, popupHeight, popupLeft, popupTop} = this.cornerStartPosition;
        const {downDirection, rightDirection} = this.position;

        const maxDeltaX = popupWidth - minWidth;
        const maxDeltaY = popupHeight - minHeight;
        let deltaX = e.clientX - cursorX;
        let deltaY = e.clientY - cursorY;

        if(rightDirection && deltaX < 0 && deltaX < (maxDeltaX * -1)) deltaX = maxDeltaX * -1;
        if(!rightDirection && deltaX > 0 && deltaX > maxDeltaX) deltaX = maxDeltaX;
        if(downDirection && deltaY < 0 && deltaY < (maxDeltaY * -1)) deltaY = maxDeltaY * -1;
        if(!downDirection && deltaY > 0 && deltaY > maxDeltaY) deltaY = maxDeltaY;

        this.position = {
            ...this.position,
            left: rightDirection ? popupLeft : popupLeft + deltaX,
            top: downDirection ? popupTop : popupTop + deltaY,
            width: rightDirection ? popupWidth + deltaX : popupWidth - deltaX,
            height: downDirection ? popupHeight + deltaY : popupHeight - deltaY,
        };

        const css = this.positionToPopupCSS();
        for (let style in css) {
            const styleValue = css[style];
            popupRefCurrent.current.style[style] = styleValue;
        }
    }

    cornerStop() {
        const {popupRefCurrent} = this.data;
        const {id} = this.props;
        document.onmouseup = null;
        document.onmousemove = null;
        popupRefCurrent.current.classList.remove('move');
        document.getElementsByTagName('body')[0].style['user-select'] = '';
        this.recalcPosition();
        if(id) {
            const {width, height} = this.position;
            this.popupSizes[id] = {width, height};
            localStorage.setItem(this.localeStorageName, JSON.stringify(this.popupSizes));
        }
    }
}

export default Utils;