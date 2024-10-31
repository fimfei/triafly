import React from 'react';
import {Popup} from "../../widgets";
import {TableSettingsPanel} from '.';

import './scss/table-settings.scss';

const TableSettings = props => {
    const {connector} = props;

    const [isShow, setIsShow] = React.useState(false);
    const settingsRef = React.useRef(null);

    /* eslint-disable */
    React.useEffect(() => {
        connector.refs.settings = settingsRef.current;
    }, []);
    /* eslint-enable */

    const toggleShow = () => setIsShow(!isShow);

    return (
        <div
            className="unitable-settings"
            ref={settingsRef}
        >
            <i
                className="unitable-settings-icon fas fa-cog"
                title="Настройки таблицы"
                onClick={toggleShow}
            ></i>
            {isShow && (
                <Popup
                    initiator={settingsRef.current}
                    id="unitable"
                    maxHeight="50%"
                    onOutsideClick={toggleShow}
                    notResize={true}
                    autoSize={true}
                >
                    <TableSettingsPanel {...props} />
                </Popup>
            )}
        </div>
    )
}

export default TableSettings;