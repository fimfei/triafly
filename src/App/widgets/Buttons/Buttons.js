import React from 'react';


const Buttons = props => {
    const {buttons, removeComponent} = props


    const typesClasses = {
        danger: 'btn btn-danger',
        cancel: 'btn btn-no',
    }

    const onClick = callback => () => {
        if(callback) callback();
        if(removeComponent) removeComponent();
    }

    if(!buttons?.length) return null;

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Buttons;