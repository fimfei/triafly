import React from 'react';
import {CONFIG_SETPICKER} from ".";
import UTILS from "../../common/utils";

const SetPickerItemViewName = ({...props}) => {
    const {actionsMode, item, searchContext, options, skeleton} = props;
    const {highlightFound} = options;
    const {id, label} = item;
    
    const noName = React.useRef(id && label === CONFIG_SETPICKER.newItemLabel);

    const calcLabelHtml = () => {
        return noName.current ? '' : (
            !id ? (
                CONFIG_SETPICKER.emptyText
            ) : (
                searchContext && highlightFound
                    ? UTILS.textWithSearchContext(label, searchContext || '')
                    : label
            )
        )
    }

    const labelHtml = React.useRef(calcLabelHtml());
    const isEditable = actionsMode === CONFIG_SETPICKER.actionModes.edit || actionsMode === CONFIG_SETPICKER.actionModes.addLine;

    return (
        <React.Fragment>
            <div
                className={`tf_smartitem-name${noName.current ? ' no-name' : ''}`}
                contentEditable={isEditable}
                dangerouslySetInnerHTML={{__html: labelHtml.current}}
                style={skeleton ? {backgroundImage: skeleton} : {}}
            >
            </div>
        </React.Fragment>
    )
}
export default SetPickerItemViewName;
