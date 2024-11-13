import React from "react";

import './scss/graph-buttons-panel.scss';

const ButtonsPanel = props => {
    const {buttons} = props;

    const classes = {
        'regular': '',
        'primary': ' tf_btn-primary',
        'error':   ' tf_btn-error',
    }

    return (
        <div className="graph-panel_control-panel control-panel position-absolute top-0 right-0 d-inline-flex g-1 bg-positive">
            {buttons.map((button, index) => {
                const {text = 'no-text', title = '', type = 'regular', callback = () => null, disabled = false} = button;
                const _class = classes[type] || '';

                return (
                    <button
                        key={`control-panel-${index}`}
                        className={`tf_btn tf_btn-xs${_class}`}
                        title={title}
                        onClick={() => callback()}
                        disabled={disabled}
                    >
                        {text}
                    </button>
                )
            })}
        </div>
    )
}

export default ButtonsPanel;