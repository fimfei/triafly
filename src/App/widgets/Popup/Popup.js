import React from "react";
import {Corner, Utils} from "./index";
import UTILS from "../../common/utils";

import './scss/popup.scss';

function Popup(props) {
    const {
        children,                    // содержимое, которое будет располагаться внутри попапа (реактовская компонента, которой обёрнут <Popup>)
        initiator,                   // кнопка или поле, клик по которой привёл к открытию попапа (для вычисления координат)
//      id,                          // любое имя, под которым в localeStorage будут сохраняться размеры попапа. Если нет, то размеры не сохраняются
        style = {},                  // кастомные стили корня попапа
        minWidth,                    // минимальная ширина попапа
        minHeight,                   // минимальная высота попапа
        maxWidth,                    // максимальная ширина попапа
        maxHeight,                   // максимальная высота попапа
//      fitToParent,                 // встроить в родительский элемент по высоте и шиоине
        extraClass = '',             // дополнительные классы попапа
        onOutsideClick = () => {},   // колбэк, который вызывается при клике за пределами попапа
        notResize = false,           // запрет ресайза и сохранения размеров в localeStorage
//      autoSize = false,            // не задавать размеры попапа
        answer = {},                 // сюда компонента положит всякие разные данные о себе
//      verticalOffset = {},         // смещение попапа по высоте
    } = props;

    const utilsCurrent = React.useRef(new Utils({props}));
    const utils = utilsCurrent.current;

    const popupRefCurrent = React.useRef(null);
    const randomClass = React.useRef(`id${UTILS.random16()}`);

    answer.randomClass = randomClass.current;
    answer.popupRefCurrent = popupRefCurrent;

    const checkOutsideClick = e => {
        if(
            e.target?.parentElement &&
            popupRefCurrent.current &&
            !popupRefCurrent.current.contains(e.target)
        ) onOutsideClick();
    }

    /* eslint-disable */
    React.useEffect(() => {
        const removeCheckElementScroll = utils.checkElementScroll(initiator);
        if(onOutsideClick) {
            setTimeout(() => {
                document.addEventListener('click', checkOutsideClick);
            }, 0);
        }

        utils.recalcPosition();

        return () => {
            removeCheckElementScroll();
            if(onOutsideClick) document.removeEventListener('click', checkOutsideClick);
        }
    }, []);
    /* eslint-enable */

    utils.data = {
        popupRefCurrent,
    }

    return (
        <div
            className={`rct-popup ${randomClass.current} ${extraClass}`}
            style={{
                minWidth:  minWidth  ? utils.getVal(minWidth)  : 'unset',
                minHeight: minHeight ? utils.getVal(minHeight) : 'unset',
                maxWidth:  maxWidth  ? utils.getVal(maxWidth)  : 'unset',
                maxHeight: maxHeight ? utils.getVal(maxHeight) : 'unset',
                ...style
            }}
            ref={popupRefCurrent}
        >
            {children}
            {!notResize && (
                <Corner utils={utils} />
            )}
        </div>
    )
}

export default Popup;