import React from 'react';
import {
    SetPickerActionsButtons,
    SetPickerActionsPanelSearch,
} from '.';

const SetPickerActions = ({...props}) => {
    const {options, showSelectedList} = props;
    const {title, componentContent, hideCountersBar} = options;

    const showButtons = !(componentContent?.actions === false);
    const showTitle = !!title;

    if(!showButtons && !showTitle) {
        return null;
    }

    return (
        <div className={`clearfix inline-set-header set-picker-actions${showSelectedList ? ' is-hidden' : ''}`}>
            <div className="search-wrapper">
                {showButtons && !hideCountersBar && (
                    <React.Fragment>
                        <SetPickerActionsPanelSearch {...props} />
                    </React.Fragment>
                )}
                <div className="d-flex justify-content-between">
                    <div>{title}</div>
                    {showButtons && <SetPickerActionsButtons {...props} />}
                </div>
            </div>
        </div>
    );
}
export default SetPickerActions;
