/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Scrollbar} from "../Scrollbar";

const SetPickerSmartListBody = ({...props}) => {
    const {options, componentReturn} = props;
    const {strHeight} = options;

    const bodyRef = React.useRef(null);
    const [listHeight, setListHeight] = React.useState(0);

    const calcListHeight = () => {
        const heightPX = bodyRef.current.clientHeight;
        setListHeight(Math.floor(heightPX / strHeight));
    }

    React.useEffect(() => {
        componentReturn.onResize = calcListHeight;
        calcListHeight();
    }, []);

    return (
        <React.Fragment>
            <div ref={bodyRef} className="tf_smartlist-body">
                <Scrollbar {...props} listHeight={listHeight} />
            </div>
        </React.Fragment>
    );
}

export default SetPickerSmartListBody;
