import React from "react";
import {Utils, ElementsPickerHeader, ElementsPickerList} from "./";

import './scss/elements-picker.scss';

const ElementsPicker = props => {
    const {
//        list = [],                            // список элементов одного из двух видов:
//                                              //   1) Array текстовых значений
//                                              //   2) Array объектов, в которых есть обязательное поле "label"
//                                              //
//        selectedElements,                     // Array значений всех выбранных из list элементов
//                                              //
//        approvedElements,                     // необязательный параметр. Array значений тех элементов из list, которые являются "подтверждёнными"
//                                              // если === undefined, то все выбранные элементы будут жёлтыми
//                                              // если === [...], то только элементы из этого списка будут жёлтыми, остальные белыми
//                                              //
//        activeElement = '',                   // активный элемент
//                                              //
//        isMultiSelect = false,                // признак множественного выбора
//                                              //
//        selectTitle = '???',                  // заголовок кнопки активации выбора элементов
//                                              //
//        mainButtons,                          // кнопки основного меню
//        elementButtons,                       // кнопки элемента
//                                              //
//                                              // Элемент mainButtons или elementButtons:
//                                              // {
//                                              //     iconClass,  // иконка от Awesome Font
//                                              //     title,      // посказка
//                                              //     onClick,    // обработчик клика
//                                              // }
//        getComponentControlling = () => {},   // в неё вернём все функции управления состоянием компоненты
//        onChangeComponentState = {},          // сюда положим все обработчики событий
//                                              //
//                                              // обрабатываемые события:
//                                              // {
//                                              //     onItemSelect: label => {...},
//                                              //
//                                              // }
//                                              //
//        draggable = null,                     // какие элементы можно перетаскивать:
//                                              // 'all'           все
//                                              // 'approved'      подтверждённые
//                                              // 'not-approved'  не подтверждённые
//                                              //
          extraClass = '',                      // класс, который будет добавляться к корню
//                                              //
//        draggableElementClass = '',           // класс, который будет присваиваться перетаскиваемому DIV-у: <div class="...">label</div>
//                                              //
//        popupOptions = {},                    // параметры Popup-a, которые будут в него транслироваться
//        listPickerOptions = {},               // параметры ListPicker-a, которые будут в него транслироваться
//                                              //
    } = props;

    const utilsCurrent = React.useRef(new Utils(props));
    const utils = utilsCurrent.current;

    return (
        <div className={`elements-picker-panel adapters-panel${extraClass ? ' ' + extraClass : ''}`}>
            <div className="d-grid g-2 p-1">
                <ElementsPickerHeader utils={utils} />
            </div>
            <div className="source-active-table-list">
                <ElementsPickerList utils={utils} />
            </div>
        </div>
    )
}

export default ElementsPicker;
