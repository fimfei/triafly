import React from "react";

import './scss/corner.scss';

function Corner(props) {
    const {utils} = props;

    const cornerRefCurrent = React.useRef(null);

    utils.data.cornerRefCurrent = cornerRefCurrent;

    return (
        <div
            className={utils.positionToCornerClass()}
            ref={cornerRefCurrent}
            onMouseDown={utils.cornerStart.bind(utils)}
        ></div>
    )
}

export default Corner;