import React from 'react';
import {SetPickerSmartListHeaderCounts, SetPickerSpinner} from ".";
import {UTILS} from "../../common";

const SetPickerSmartListHeader = ({...props}) => {
    const {options} = props;
    const {componentContent, hideCountersBar} = options;

    if(hideCountersBar) return <div className="tf_smartlist-header tf_smartlist-header-hidden"></div>;

    return (
        <div className="tf_smartlist-header">
            <div className="d-flex g-2 align-items-end p-1 overflow-hidden">
                {UTILS.parseParams(componentContent?.header?.counts).show && (
                    <SetPickerSmartListHeaderCounts {...props} />
                )}
            </div>
            <SetPickerSpinner {...props} />
        </div>
    );
}
export default SetPickerSmartListHeader;