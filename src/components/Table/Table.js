//import React from 'react';

function Table(props) {
    console.log('TABLE!!!!!!!!!!')
}

export default Table;

/*
import React from 'react';

const Table = props => {
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

export default Table;
*/