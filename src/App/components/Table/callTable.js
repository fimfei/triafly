import React from 'react';
import {createRoot} from 'react-dom/client';
import {Table} from "./";

const callTable = (tablePortalEl, tableProps) => {
    const tableRoot = document.createElement('div');
    tableRoot.className = 'call-unitable-wrapper';
    tablePortalEl.appendChild(tableRoot);

    const root = createRoot(tableRoot);

    const removeComponent = () => {
        root.unmount();
        tableRoot.remove();
    }

    root.render(
        <Table {...tableProps} removeComponent={removeComponent} />
    );

    return {
        removeComponent
    }
};

export default callTable;