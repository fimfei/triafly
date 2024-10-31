/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import moment from 'moment';

const UTILS = {
    addHideClassIf: requirement => requirement ? ' d-none' : '',
    addActiveClassIf: requirement => requirement ? ' active' : '',
    random16: () => Math.floor(Math.random() * 1e16),
};

UTILS.whenUserClickOutsideTheElement = (ref, callback) => {
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};

UTILS.getValueByPath = (data, path) => {
    let addr = data;
    const pathPoints = path.split('.');

    for(let point of pathPoints) {
        addr = addr[point];
        if(addr === undefined) return null;
    }
    return addr;
}

UTILS.monoArray = (size, value) => {
    const arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(value);
    }
    return arr;
};

UTILS.parseParams = props => {
    //
    // на выходе должен быть объект {show, silent}
    //
    // Разберём разные варианты входных параметров:
    //
    // props === false
    //
    if (props === false) {
        return {show: false};
    }
    //
    // props === undefined
    //
    if (!props) {
        return {show: true, silent: false};
    }
    //
    // props = {...}
    //
    const {show, silent} = props;
    return {
        show: show === undefined ? true : show,
        silent: silent === undefined ? false : silent,
    }
};

UTILS.textWithSearchContext = (text, searchContext, withFlag) => {
    const getArr = () => {
        if (!searchContext || !text) {
            return [text];
        }
        const from = text.toUpperCase().indexOf(searchContext.toUpperCase());
        if (!~from) {
            return [text];
        }
        const to = from + searchContext.length;

        return [
            text.slice(0, from),
            text.slice(from, to),
            text.slice(to),
        ];
    }

    const arr = getArr();
    let out = '';

    out += !!arr[0] ? arr[0] : '';
    out += !!arr[1] ? `<search>${arr[1]}</search>` : '';
    out += !!arr[2] ? `${arr[2]}` : '';

    if(withFlag) return {html: out, find: !!arr[1]}
    return out;
};

UTILS.getParamsToString = params => {
    let out = '';
    let nextParam = false;

    if (!params) {
        return '';
    }

    for (let name in params) {
        const param = params[name];

        if (param !== null && param !== undefined) {
            out += `${nextParam ? '&' : '?'}${name}=${param}`;
            nextParam = true;
        }
    }
    return out;
};

UTILS.idArrayIncrease = (arr, _add) => {
    const add = Array.isArray(_add) ? _add : [_add];
    return arr.concat(add);
};

UTILS.idArrayDecrease = (arr, _sub) => {
    const sub = Array.isArray(_sub) ? _sub : [_sub];
    return arr.filter(item => !sub.includes(item));
};

UTILS.formats = {
    date: 'DD.MM.YYYY',
    dateTime: 'DD.MM.YYYY, hh:mm',
    datesSeparator: ' - ',
};

UTILS.checkingInput = {
    float:    value => /[-\d\.]/.test(value),
    int:      value => /[-\d]/.test(value),
    positive: value => /\d/.test(value),
};

UTILS.validators = {
    float:    value => !(value && isNaN(value)),
    int:      value => !(isNaN(value) || (!(parseInt(value) === parseFloat(value)) && value != '')),
    positive: value => !isNaN(value) && value >= 0,
    date:     value => moment(value, UTILS.formats.date).isValid(),
    dateTime:     value => moment(value, UTILS.formats.dateTime).isValid(),
};

export default UTILS;