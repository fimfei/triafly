import React from "react";

import './scss/list-picker.scss';
import callSetPicker from "../../components/SetPicker/callSetPicker";

function ListPicker(props) {
    const {
                                 //
        label = '',              // имя списка для идентификации
        list = [],               // список элементов одного из двух видов:
                                 //   1) Array текстовых значений
                                 //   2) Array объектов, в которых есть обязательное поле "label", и необязательные поля "selected" и "notAvailable"
                                 //
                                 // Если есть хоть один из двух нижележащих параметров, то во втором виде list поле "selected" не учитывается:
        selectedValue = '',      // значения выбранных элементов через запятую ИЛИ...
        selectedValues = [],     // Array значений выбранных элементов или одно значение
                                 //
        onChange = () => {},     // вызывается при смене состояния выбора
        isMultiSelect = false,   // признак множественного выбора
        hideSearchBar = false,   // панель поиска
        hideCountersBar = false, // панель счётчиков
        ItemViewName = false,    // вьюха строки
        extraClass = '',         // класс, добавляемый к корню
                                 //
    } = props;

    const componentRef = React.useRef(null);

    const componentCallback = data => {
        const {code, selectedList: selectedValues} = data;
        if(code !== 'item-select') return;

        onChange({
            inputType: 'select',
            label,
            list,
            selectedValues,
        });
    }

    const getSelected = () => {
        if(selectedValue) {
            return selectedValue.split(', ');
        }
        if(selectedValues) {
            if(Array.isArray(selectedValues)) {
                return selectedValues;
            }
            return [selectedValues];
        }
        return [];
    }

    const getOptions = () => {
        return {
            listName: label,
            request: null,
            singleChoiceOnly: !isMultiSelect,
            title: false,
            selectable: true,
            finalList: list.map(item => item.label ? item.label : item),
            unavailableItemsList: list.filter(item => item.notAvailable).map(item => item.label),
            highlightFound: true,
            selectedList: getSelected(),
            strHeight: 18,
//            callbackOnReadyComponentDOM,
            listBlockLength: list.length,
            hideSearchBar,
            hideCountersBar,
            ItemViewName,
        }
    }

    /* eslint-disable */
    React.useEffect(() => {
        const returnComponent = callSetPicker({
            componentPortalEl: componentRef.current,
            componentCallback,
            componentClasses: 'inline-set',
            options: getOptions(),
        })
/*
        const returnComponent = window.NetDB.namespace('react').createComponent({
            componentName: 'SetPicker',
            componentID: '',
            componentClasses: 'inline-set',
//            componentOnRemove,
            componentCloseWhenClickingOutsideOfIt: false,
            componentPortalEl: componentRef.current,
            componentCallback,
            options: getOptions(),
        });
*/

        return () => {
            returnComponent.removeComponent();
        }
    }, []);
    /* eslint-enable */

    return (
        <div
            className={`setpicker-component-root${extraClass ? ' ' + extraClass : ''}`}
            ref={componentRef}
        ></div>
    )
}

export default ListPicker;