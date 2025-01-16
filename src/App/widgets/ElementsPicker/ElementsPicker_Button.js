import React from "react";

const ElementsPickerButton = props => {
    const {button, item, transparent} = props;
    const {iconClass, title, onClick} = button;

    const buttonRef = React.useRef(null);

    const onClickToIcon = onClick => e => {
        e.stopPropagation();
        onClick({item, buttonRef: buttonRef.current});
    }

    return (
        <button
            ref={buttonRef}
            className={`tf_btn tf_btn-xs tf_btn-icon${transparent ? ' tf_btn-transparent' : ''}`}
            title={title}
            onClick={onClickToIcon(onClick)}
        >
            <i className={iconClass}></i>
        </button>
    )
}

export default ElementsPickerButton;
