import React from 'react';


const Buttons = props => {
    const {buttons} = props


    const typesClasses = {
        danger: 'btn btn-danger',
        cancel: 'btn btn-no',
    }

    if(!buttons?.length) return null;

    return (
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
    )
}

export default Buttons;