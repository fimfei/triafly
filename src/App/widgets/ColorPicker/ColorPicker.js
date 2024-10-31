import React from 'react';
import {CompactPicker, SketchPicker} from 'react-color';

import './scss/color-picker.scss';
import UTILS from "../../common/utils";

const ColorPicker = props => {
    const {
        pickerType = 'sketch',     // тип пикера "sketch" или "compact",
        color = '#fff',            // начальный цвет
        onChange = () => {},       // обработчик события смены цвета
        onClickOutside = () => {}, // обработчик события клика за пределами пикера
    } = props;

    const pickers = {
        sketch: ColorPickerSketch,
        compact: ColorPickerCompact,
    }

    const colorPickerRef = React.useRef(null);
    const Component = pickers[pickerType];

    UTILS.whenUserClickOutsideTheElement(colorPickerRef, onClickOutside);

    if(!Component) return null;

    return (
        <div className={`rct-color-picker rct-color-picker-${pickerType}`} ref={colorPickerRef}>
            <Component color={color} onChange={onChange} />
        </div>
    )
}

const ColorPickerCompact = props => {
    const {onChange} = props;

    return <CompactPicker onChangeComplete={color => onChange(color.hex)} />
}

const ColorPickerSketch = props => {
    const {color: firstColor, onChange} = props;

    const [color, setColor] = React.useState(firstColor);

    return (
        <SketchPicker
            color={color}
            onChangeComplete={color => onChange(color.hex)}
            onChange={color => setColor(color.hex)}
            disableAlpha={true}
        />
    )
}

export default ColorPicker;
