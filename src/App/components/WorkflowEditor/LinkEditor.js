import React from 'react';
import {InputBool, InputNumber, InputText, SelectFromList} from "../../forms";

import './scss/link-editor.scss';

const LinkEditor = props => {
    const {id, utils} = props;
    const {options, links} = utils;
    const {parameters} = options;

    const statesCurrent = React.useRef(utils.getNodesStatesFromMainGraph())
    const {firstStates, lastStates, unattainableStates, start} = statesCurrent.current;

    let link = null;

    for(let item of links) {
        if(utils.getEdgeId(item) === id) {
            link = item;
            break;
        }
    }

    if(!link) return null;

    const {from, to} = link;

    const max = 5; // 6 параметров в колонке

    const onChangeParameter = data => {
        const {selectedValues, value, parameter} = data;
        const {list, alias} = parameter;
        let val;

        if(!!list) {
            val = selectedValues.join(', ');
        } else {
            val = value;
        }

        link[alias] = val;

        if(alias === 'from' || alias === 'to') utils.changeNodeByEdge(link);
    }

    const getStatesClass = id => {
        let out = '';
        out += firstStates[id] ? ' is-first' : '';
        out += lastStates[id] ? ' is-last' : '';
        out += unattainableStates[id] ? ' is-unattainable' : '';
        out += id === start ? ' is-start' : '';
        return out;
    }

    const clickToState = id => () => {
        utils.mainControlling.clickToNode(id);
    }

    utils.calcAvailableStates();

    return (
        <React.Fragment>
            <div className="parameters-editor-header">
                Параметры перехода от вершины
                <div
                    className={`custom-node-wrapper${getStatesClass(from)}`}
                    onClick={clickToState(from)}
                >
                    <div className="custom-node-label">{from}</div>
                </div>
                к вершине
                <div
                    className={`custom-node-wrapper${getStatesClass(to)}`}
                    onClick={clickToState(to)}
                >
                    <div className="custom-node-label">{to}</div>
                </div>
            </div>
            <div className="parameters-editor">
                <div className="parameters-editor-block">
                    {parameters.map((parameter, index) => {
                        if(index > max) return null;
                        const disable = !index && from === start;
                        return <Parameter parameter={parameter} onChangeParameter={onChangeParameter} disable={disable} link={link} />
                    })}
                </div>
                <div className="parameters-editor-block">
                    {parameters.map((parameter, index) => {
                        if(index <= max) return null;
                        return <Parameter parameter={parameter} onChangeParameter={onChangeParameter} link={link} />
                    })}
                </div>
            </div>
        </React.Fragment>
    )
};

const Parameter = props => {
    const {parameter, onChangeParameter, disable, link} = props;
    const {alias, label, list, isText, isNumber, isBool, placeholder, isMultiSelect} = parameter;

    const Null = () => <div>НЕИЗВЕСТНЫЙ ТИП ВИДЖЕТА</div>;

    const Widget = isText ? InputText : (isBool ? InputBool : (isNumber ? InputNumber : (list ? SelectFromList : Null)))

    const onChange = data => {
        const {selectedValues, value} = data;
        onChangeParameter({selectedValues, value, parameter})
    }

    const data = {
        label,
        value: link[alias],
        onChange,
        placeholder,
        isMultiSelect,
        list,
        closePopupOnOutsideClick: true,
    };

    return (
        <div className={`parameter-wrapper${disable ? ' disable' : ''}`}>
            <Widget {...data} />
        </div>
    )
}

export default LinkEditor;
