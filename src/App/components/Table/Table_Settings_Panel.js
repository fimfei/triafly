import React from 'react';
import {TableSettingsPanelList, TableSettingsPanelParameters} from '.';

import './scss/table-settings-panel.scss';

const TableSettingsPanel = props => {
    const {utils, connector} = props;
    const {options: {editableSettings}} = connector;

    utils.distributeShowColumnsToHeader();

    let parametersPanelIsPresent = false;
    for(let i in editableSettings) {
        if(editableSettings[i]) {
            parametersPanelIsPresent = true;
            break;
        }
    }

    return (
        <div className="unitable-settings-panel">
            <TableSettingsPanelList {...props} />
            {parametersPanelIsPresent && (
                <TableSettingsPanelParameters {...props} />
            )}
        </div>
    )
}

export default TableSettingsPanel;