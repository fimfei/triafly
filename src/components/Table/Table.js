import React from 'react';

import React from 'react';

export const Table = props => {
    const {text} = props;

    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        setInterval(() => {
            setCount(count + 1);
        } , 1000)
    }, []);

    return (
        <div className="unitable-wrapper" >
            T A B L E ({text} {count})
        </div>
    )
}
