import React from "react";

const useCurrentState = (initValue, dataIsObj) => {
    const currentValue = React.useRef(initValue);
    const [value, setValue_] = React.useState(initValue);

    const setValue = newValue => {
        const rebuildValue = dataIsObj ? {...currentValue.current, ...newValue} : newValue;
        currentValue.current = rebuildValue;
        setValue_(rebuildValue);
    }
    return [value, currentValue, setValue];
}
export default useCurrentState;
