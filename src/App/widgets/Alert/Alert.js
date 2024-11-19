/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './scss/alert.scss';

const Alert = props => {
    const {
        header = 'Предупреждение',
        text,
        buttons: _buttons,
        success = () => {},
        cancel = () => {},
        children,
        removeComponent,
    } = props;

    const typesClasses = {
        danger: 'btn btn-danger',
        cancel: 'btn btn-no',
    }

    const buttons = _buttons ? _buttons : [
        {text: 'Отмена', type: 'cancel', callback: cancel},
        {text: 'OK', type: 'danger', callback: success},
    ]

    const onClick = callback => () => {
        if(callback) callback();
        removeComponent();
    }

    return (
        <div className="rct-alert">
            <div className="prompter">
                <div className="modal prompter">
                    <div className="modal-header">
                        <h3><div dangerouslySetInnerHTML={{__html: header}}></div></h3>
                    </div>
                    <div className="modal-body">
                        {text && (
                            <div dangerouslySetInnerHTML={{__html: text}}></div>
                        )}
                        {children}
                    </div>
                    <div className="modal-footer">
                        {buttons.map((item, index) => {
                            const {text, type, callback} = item;

                            return (
                                <a
                                    key={`alert-button-${index}`}
                                    href="#"
                                    className={typesClasses[type]}
                                    onClick={onClick(callback)}
                                >
                                    {text}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Alert;