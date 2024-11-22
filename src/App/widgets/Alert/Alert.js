/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './scss/alert.scss';
import {Buttons} from "../index";

const Alert = props => {
    const {
        header = 'Предупреждение',
        text,
        buttons: _buttons,
        success = () => {},
        cancel = () => {},
        children,
    } = props;

    const buttons = _buttons ? _buttons : [
        {text: 'Отмена', type: 'cancel', callback: cancel},
        {text: 'OK', type: 'danger', callback: success},
    ]

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
                        {buttons?.length && (
                            <Buttons buttons={buttons} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Alert;