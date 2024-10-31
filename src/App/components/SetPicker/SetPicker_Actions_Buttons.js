import React from 'react';
import {UTILS} from '../../common';
import {CONFIG_SETPICKER} from '.';

const SetPickerActionsButtons = ({...props}) => {
    const {actionsMode, setActionsMode, options} = props;
    const {componentContent} = options;

    const {search, addLine, edit} = CONFIG_SETPICKER.actionModes;

    const buttons = React.useRef([
        {name: search,  className: 'b-search',   icon: 'fa-search', title: 'Поиск по справочнику',              activeIf: [search]},
//        {name: addLine, className: 'b-addLine',  icon: 'fa-plus',   title: 'Добавить строку в верхний уровень', activeIf: [addLine], showIf: [addLine, edit]},
//        {name: edit,    className: 'b-editlist', icon: 'fa-pen',    title: 'Режим редактирования',              activeIf: [addLine, edit]},
    ]);

    const buttonIsShow = name => !componentContent?.actions || UTILS.parseParams(componentContent?.actions[name]).show;

    const clickToButton = name => () => {
        let newMode = name;

        switch(`${actionsMode}->${name}`) {
            case `${addLine}->${edit}`:    newMode = null; break;
            case `${addLine}->${addLine}`: newMode = edit; break;
            default: break;
        }
        setActionsMode(newMode);
    }

    return (
        <div className="d-flex g-1">
            {buttons.current.map((button, index) => {
                const {name, activeIf, showIf, className, title, icon} = button;
                const isActive = activeIf.includes(actionsMode);
                const isShow = buttonIsShow(name) && (!showIf || showIf.includes(actionsMode));

                if(!isShow) {
                    return null;
                }

                return (
                    <button
                        index={index}
                        className={`tf_btn tf_btn-xs tf_btn-transparent tf_btn-icon ${className}${UTILS.addActiveClassIf(isActive)}`}
                        title={title}
                        onClick={clickToButton(name)}
                    >
                        <i className={`fas fa-fw ${icon}`}></i>
                    </button>
                );
            })}
        </div>
    );
}
export default SetPickerActionsButtons;
