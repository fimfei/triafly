import React from 'react';

import './scss/control-panel.scss';

const ControlPanel = ({...props}) => {
    const {onSave, onCancel, onTextEditor} = props;

    return (
        <div class="control-panel position-absolute top-0 right-0 d-inline-flex g-1 bg-positive">
            <button class="tf_btn tf_btn-xs" onClick={onTextEditor}>Текстовый редактор</button>
            <button class="tf_btn tf_btn-xs" onClick={onCancel}>Отмена</button>
            <button class="tf_btn tf_btn-xs tf_btn-primary" onClick={onSave}>OK</button>
        </div>
    );
}

export default ControlPanel;