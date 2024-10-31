import React from "react";
import UTILS from "../../common/utils";
import {callPopup} from "../../widgets";

import './scss/table-cell-editor-set.scss';

const TableCellEditorSet = props => {
    const {cell: {value}} = props;

    const ref = React.useRef(null);

    /* eslint-disable */
    React.useEffect(() => {
        callPopup({
            portal: ref.current,
            initiator: ref.current,
            children: <SetRoot
                {...props}
            />,
            notResize: true,
            autoSize: true,
            style: {background: 'beige'},
        });
    }, []);
    /* eslint-enable */

    return (
        <div className="tce-set-popup" ref={ref}></div>
    )
}

const SetRoot = props => {
    const {cell, isMultiSelect = false, setEditorHint, onCellBlur} = props;
    const {value, set = ['нет параметра "set"'], setValuePath = ''} = cell;

    const getSelected = value => {
        const out = {};
        const arr = value.split(', ');
        for(let sel of arr) {
            if(sel) out[sel] = true;
        }
        return out;
    }

    const selectedToString = selected => {
        const out = [];
        for(let index in selected) out.push(index);
        return out.join(', ');
    }

    const [selected, _setSelected] = React.useState(getSelected(value));
    const setSelected = selected => {
        saveSelected(selected);
        if(!isMultiSelect) onCellBlur();
        _setSelected(selected);
    }

    const saveSelected = selected => {
        cell.value = selectedToString(selected);
        cell.__ = {selected};
    }

    /* eslint-disable */
    React.useEffect(() => {
        setEditorHint(selectedToString(selected));
    }, [selected]);
    /* eslint-enable */


    return (
        <div className="tce-set-wrapper">
            <div className="tce-set">
                <div className="tce-set-inner">
                    {set.map((item, index) => {

                        return (
                            <SetItem
                                item={item}
                                setValuePath={setValuePath}
                                index={index}
                                isMultiSelect={isMultiSelect}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        )
                    })}
                </div>
            </div>
            {isMultiSelect && (
                <div className="p-1 rct-set-menu">
                    <button
                        className="tf_btn tf_btn-sm tf_btn-primary ok"
                        onClick={onCellBlur}
                    >
                        OK
                    </button>
                </div>
            )}
        </div>
    );
}

const SetItem = props => {
    const {item, setValuePath, isMultiSelect, selected, setSelected} = props;

    const checkRadioClass = isMultiSelect ? 'check' : 'radio';
    const checkRadioType = isMultiSelect ? 'checkbox' : 'radio';
    const label = typeof item === 'string' ? item : UTILS.getValueByPath(item, setValuePath);

    const onChange = () => {
        const out = isMultiSelect ? {...selected} : {};
        if(out[label]) {
            delete out[label];
        } else {
            out[label] = item;
        }
        setTimeout(() => {
            setSelected(out);
        }, 0)
    }

    return (
        <div className="tce-set-item">
            <div className={`tce-set-item-checkbox tf_form-${checkRadioClass}`}>
                <input
                    className={`tf_form-${checkRadioClass}-input`}
                    name="selectedGroup"
                    type={checkRadioType}
                    checked={!!selected[label]}
                    onChange={onChange}
                />
            </div>
            <div className="tce-set-item-value">{label}</div>
        </div>
    )
}
export default TableCellEditorSet;