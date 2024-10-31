import React from 'react';
import {UTILS} from "../../common";
import {callPopup, ColorPicker} from "../../widgets";

import './scss/table-header-cell-menu-formatter.scss';

const TableHeaderCellMenuFormatter = props => {
    const {cell, setShowFormatter, utils} = props;

    const [isActual, setIsActual] = React.useState(true);
    const [_, setRefresh] = React.useState(0);
    const refresh = () => {
        setIsActual(false);
        setRefresh(UTILS.random16());
    }

    const format = React.useRef(cell._.format || {});
    const {align = 'center', color = '#000', background = '#fff', wrap = false } = format.current;

    const [pickerColor, _setPickerColor] = React.useState(color);
    const setPickerColor = color => {
        _setPickerColor(color)
    }
    const [pickerBgrnd, setPickerBgrnd] = React.useState(background);

    const colorPickerRef = React.useRef(null);

    const selectAlign = align => {
        format.current.align = align;
        refresh();
    }
    const selectLeft     = () => selectAlign('left');
    const selectCenter   = () => selectAlign('center');
    const selectRight    = () => selectAlign('right');
    const selectWrap = () => {
        format.current.wrap = !wrap;
        refresh();
    }

    const closeFormatter = () => setShowFormatter(false);

    const doApplyOrTrash = format => {
        setIsActual(true);
        utils.refreshColumnsTree({data: format, cell, connectorIndex: 'format', isObject: true});
        setShowFormatter(false);
        utils.saveTableSettingsToLocaleStorage();
    }

    const doApply = () => {
        cell._.format = {...format.current};
        doApplyOrTrash(cell._.format);
    }

    const doTrash = () => {
        delete cell._.format;
        format.current = {};
        doApplyOrTrash(null);
    }

    const openPicker = (color, setColor, index) => {
        let removePopupFunction = () => {};
        const removePopup = () => removePopupFunction();

        const {removeComponent} = callPopup({
            initiator: colorPickerRef.current,
            id: '',
            minWidth: 0,
            minHeight: 0,
            onOutsideClick: removePopup,
            notResize: true,
            autoSize: true,
            children: <ColorPicker
                pickerType="sketch"
                color={color}
                onChange={color => {
                    setColor(color);
                    format.current[index] = color;
                    //removePopup();
                    refresh();
                }}
            />,
        })
        removePopupFunction = removeComponent;
    }
    const openColorPicker = () => openPicker(pickerColor, setPickerColor, 'color');
    const openBgrndPicker = () => openPicker(pickerBgrnd, setPickerBgrnd, 'background');

    const _left   = {_class: 'align-left',    title: 'влево',              onClick: selectLeft,      checked: align === 'left',            color: '#000', r:  0, };
    const _center = {_class: 'align-center',  title: 'по центру',          onClick: selectCenter,    checked: align === 'center',          color: '#000', r:  0, };
    const _right  = {_class: 'align-right',   title: 'вправо',             onClick: selectRight,     checked: align === 'right',           color: '#000', r:  5, };
    const _color  = {_class: 'pencil-alt',    title: 'цвет текста',        onClick: openColorPicker, checked: !!format.current.color,      color: '#000', r:  0, };
    const _bgrnd  = {_class: 'paint-roller',  title: 'цвет фона',          onClick: openBgrndPicker, checked: !!format.current.background, color: '#000', r:  5, };
    const _wrap   = {_class: 'align-justify', title: 'перенос по строкам', onClick: selectWrap,      checked: wrap,                        color: '#000', r: 10, };
    const _apply  = {_class: 'check',         title: 'применить',          onClick: doApply,         checked: isActual,                                   r:  0, };
    const _trash  = {_class: 'trash',         title: 'очистить',           onClick: doTrash,         checked: false,                                      r:  0, };
    const _close  = {_class: 'times',         title: 'закрыть панель',     onClick: closeFormatter,  checked: false,                                      r:  5, };

    const icons = [_left, _center, _right, _color, _bgrnd, _wrap, _apply, _trash, _close];

    _color.color = color;
    _color.background = background;
    _bgrnd.color = background;
    _bgrnd.background = color;

    return (
        <React.Fragment>
            {icons.map(icon => {
                return (
                    <FormatterIcon {...icon} _={_}/>
                )
            })}
            <div ref={colorPickerRef}></div>
        </React.Fragment>
    )
}

const FormatterIcon = props => {
    const {_class, onClick, checked, title, color, background, r} = props;

    const style = {'margin-right': `${r}px`};
    if(color) {
        style.color = color;
        style.background = background;
    }

    return (
        <i
            className={`format-icon fas fa-${_class}${checked ? ' checked' : ''}`}
            onClick={onClick ? onClick : () => {}}
            title={title}
            style={style}
        ></i>
    )
}
export default TableHeaderCellMenuFormatter;