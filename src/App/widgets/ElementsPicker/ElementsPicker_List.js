import React from "react";
import {ElementsPickerListItem} from "./";
import UTILS from "../../common/utils";

import './scss/elements-picker-list.scss';

const ElementsPickerList = props => {
    const {utils} = props;
    const {connector} = utils;
    const {selectedElements} = connector;

    const [refresh, setRefresh] = React.useState(0);
    utils.refreshListCurrent.current = () => setRefresh(UTILS.random16());

    return (
        <div className="active-rels-list-container">
            <div className="source-active-rels-list d-grid g-1">
                {selectedElements.map((item, index) => {
                    return (
                        <ElementsPickerListItem
                            item={item}
                            refresh={refresh}
                            utils={utils}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ElementsPickerList;