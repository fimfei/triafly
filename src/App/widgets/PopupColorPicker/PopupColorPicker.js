import React from 'react';

import {Popup, ColorPicker} from 'triafly';
import 'triafly/dist/style.css';

const PopupColorPicker = props => {
    const {
        color: startColor = '#fff',
        pickerType = 'sketch',
        onChange = () => {},
        className = '',
        style: externalStyle = {},
        setTextColor = false,
        setBackgroundColor = false,
        children = '',
    } = props;

    const[color, setColor] = React.useState(startColor);
    const[show, setShow] = React.useState(false);

    const initiatorRef = React.useRef(null);

    const popupSize = {
        sketch: {width: 230, height: 200},
        compact: {width: 250, height: 95},
    }

    const onClickOutside = () => {
        setShow(false);
        console.log('onClickOutside')
    }

    const onClick = () => {
        setShow(true);
    }

    const onChangeColor = color => {
        console.log('onChangeColor', color)
        setColor(color);
        onChange(color);
    }

    const style = {...externalStyle};
    if(setTextColor) style.color = color;
    if(setBackgroundColor) style.backgroundColor = color;

    const {width, height} = popupSize[pickerType];

    return (
        <div
            ref={initiatorRef}
            className={`popup-color-picker${className ? ' ' + className : ''}`}
            onClick={onClick}
            style={style}
        >
            {children}
            {show && (
                <Popup
                    initiator={initiatorRef.current}
                    children={<ColorPicker
                        color={color}
                        pickerType={pickerType}
                        onChange={onChangeColor}
                        onClickOutside={onClickOutside}
                    />}
                    id="popup-color-picker-id"
                    minWidth={width}
                    maxWidth={width}
                    minHeight={height}
                    maxHeight={height}
                    style={{
                        boxShadow: 'none',
                        background: 'transparent'
                    }}
                    notResize={true}
                    verticalOffset={5}
                />
            )}
        </div>
    )
}

export default PopupColorPicker;