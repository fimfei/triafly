import React from 'react';
import {SetPickerSmartListHeader, SetPickerSmartListBody} from ".";

const SetPickerSmartList = ({...props}) => {
    const {options} = props;
    const {componentContent, hideSearchBar} = options;

    return (
        <div className={`tf_smartwindow-body${hideSearchBar ? ' without-searchbar' : ''}`}>
            <div className="tf_smartlist">
                {!(componentContent?.header === false) && (
                    <SetPickerSmartListHeader    {...props} />
                )}
                <SetPickerSmartListBody  {...props} />
            </div>
        </div>
    );

}
export default SetPickerSmartList;
