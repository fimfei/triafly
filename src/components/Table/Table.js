import React from 'react';

const Table = props => {
    const {text} = props;

    return (
        <div className="unitable-wrapper" >
            T A B L E ({text})
        </div>
    )
}

export default Table;