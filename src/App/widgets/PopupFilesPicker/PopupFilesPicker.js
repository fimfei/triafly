import React from 'react';
import {Popup, FilesPicker} from '../';

import './scss/popup-files-picker.scss'

const PopupFilesPicker = props => {
    const {value: startValue = '', className = '', isMultiple = false, onChange, maxHeightMultiList = 150, style = {}} = props;

    const [value, setValue] = React.useState(startValue);
    const [show, setShow] = React.useState(false);

    const initiatorRef = React.useRef(null);

    return (
        <div className={`popup-files-picker ${className}`} style={style}>
            <div
                className="popup-files-picker-value"
                onClick={() => setShow(true)}
                ref={initiatorRef}
            >{value}</div>
            {show && (
                <Popup
                    initiator={initiatorRef.current}
                    id="popup-files-picker-id"
                    style={{
                        boxShadow: 'none',
                        background: 'transparent'
                    }}
                    notResize={true}
                    autoSize={true}
                    verticalOffset={1}
                    onOutsideClick={() => setShow(false)}
                >
                    <FilesPicker
                        value={value}
                        isMultiple={isMultiple}
                        onChange={data => {
                            setValue(data.value);
                            onChange(data);
                            setShow(false);
                        }}
                        maxHeightMultiList={maxHeightMultiList}
                    />
                </Popup>
            )}
        </div>
    )
}

export default PopupFilesPicker