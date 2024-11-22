import React from "react";
import {createPortal} from "react-dom";
import {Popup, ListPicker, Buttons} from "../index.js";

import './scss/popup-list-picker.scss'

function PopupListPicker(props) {

    const {
        popupInitiator: initiator,                       // кнопка или поле, клик по которой привёл к открытию попапа (для вычисления координат)
        popupName: id,                                   // любое имя, под которым в localeStorage будут сохраняться размеры попапа. Если нет, то размеры не сохраняются
        popupStyle: style = {},                          // кастомные стили корня попапа
        popupMinWidth: minWidth,                         // минимальная ширина попапа
        popupMinHeight: minHeight,                       // минимальная высота попапа
        popupMaxWidth: maxWidth,                         // максимальная ширина попапа
        popupMaxHeight: maxHeight,                       // максимальная высота попапа
        popupExtraClass: extraClass = '',                // дополнительные классы попапа
        popupOnOutsideClick: onOutsideClick = () => {},  // колбэк, который вызывается при клике за пределами попапа
        popupNotResize: notResize = false,               // запрет ресайза и сохранения размеров в localeStorage
        popupAutoSize: autoSize = false,                 // не задавать размеры попапа

        list = [],                                       // список элементов одного из двух видов:
                                                            //   1) Array текстовых значений
                                                            //   2) Array объектов, в которых есть обязательное поле "label", и необязательные поля "selected" и "notAvailable"
                                                            //
                                                            // Если есть хоть один из двух нижележащих параметров, то во втором виде list поле "selected" не учитывается:
        listSelectedValue: selectedValue = '',           // значения выбранных элементов через запятую ИЛИ...
        listSelectedValues: selectedValues = [],         // Array значений выбранных элементов или одно значение
        listOnChange: onChange = () => {},               // вызывается при смене состояния выбора
        listIsMultiSelect: isMultiSelect = false,        // признак множественного выбора
        listHideSearchBar: hideSearchBar = false,        // панель поиска
        listHideCountersBar: hideCountersBar = false,    // панель счётчиков
        listItemView: ItemView = false,                  // вьюха строки

        buttons,
    } = props;

    const popupProps = {initiator, id, style, minWidth, minHeight, maxWidth, maxHeight, extraClass, onOutsideClick, notResize, autoSize};
    const listPickerProps = {list, selectedValue, selectedValues, onChange, isMultiSelect, hideSearchBar, hideCountersBar, ItemView};

    return createPortal(
        <Popup
            {...popupProps}
        >
            <div className="lp-wrapper">
                <div className="lp-list-picker">
                    <ListPicker
                        {...listPickerProps}
                        label="popupListPicker"
                    />
                </div>
                <div className="lp-buttons">
                    {buttons?.length && (
                        <Buttons buttons={buttons} />
                    )}
                </div>
            </div>
        </Popup>,
        document.body
    )

}

export default PopupListPicker;