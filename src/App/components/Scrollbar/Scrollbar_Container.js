import React from 'react';

const ScrollbarContainer = ({...props}) => {
    const count = React.useRef(0);
    count.current++;

    const odd = count.current % 2 === 0;

    return (
        <React.Fragment>
            {odd ? (
                <ScrollbarContainerOdd {...props} />
            ) : (
                <ScrollbarContainerEven {...props} />
            )}
        </React.Fragment>
    )
}

const ScrollbarContainerOdd = ({...props}) => {
    return <ScrollbarContainerAll {...props} />
}

const ScrollbarContainerEven = ({...props}) => {
    return <ScrollbarContainerAll {...props} />
}

const ScrollbarContainerAll = ({...props}) => {
    const {list, ItemView, subListFrom} = props;

    return (
        <React.Fragment>
            {list.map((item, index) => {
                return (
                    <ItemView
                        key={`scrlbr-${index}`}
                        {...props}
                        item={item}
                        subListFrom={subListFrom}
                        index={index}
                    />
                )
            })}
        </React.Fragment>
    )
}

export default ScrollbarContainer;