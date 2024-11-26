import React, { useState, useEffect } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import {ru} from 'date-fns/locale/ru';
import {UTILS as COMMON_UTILS} from '../../common';
import {UTILS} from './';

import 'react-datepicker/dist/react-datepicker.css';
import './scss/date-picker.scss';

const DateTimePicker = props => {
    const {
        value,                // начальное значение даты или даты/времени
        onChange = () => {},  // коллбэк при выборе новой даты
        className = '',       // кастомный класс обёртки компоненты
        withTime = false,     // формат "дата" или "дата, время"
        autoOpen = false,     // открывать сразу при построении
        isClearable = false,  // наличие иконки очистки поля
    } = props;

    const format = withTime ? COMMON_UTILS.formats.dateTime : COMMON_UTILS.formats.date;
    const validator = withTime ? COMMON_UTILS.validators.dateTime : COMMON_UTILS.validators.date;
    const isDateSelect = React.useRef(false);

    useEffect(() =>{
        if(autoOpen) calendar.setOpen(true);
    });


    let startDate;
    let calendar;

    if (validator(value)) {
        startDate = new Date(moment(value, format).format());
    } else {
        startDate = new Date();
    }
    const [date, setDate] = useState(startDate);

    return (
        <div className={`rct-date-picker${className ? ' ' + className : ''}`}>
            <DatePicker
                popperPlacement='top-end'
                dateFormat={withTime ? 'Pp' : 'P'}
                locale={ru}
                selected={date}
                onChange={date => {
                    setDate(date);
                    isDateSelect.current = true;
                    setTimeout(() => isDateSelect.current = false)
                    onChange(moment(date).format(format));
                }}
                onCalendarClose={() => {
                    if(!isDateSelect.current) onChange(null);
                }}
                showTimeInput={withTime}
                timeFormat="p"
                ref={(c) => calendar = c}
                renderCustomHeader={UTILS.renderCustomHeader}
                isClearable={isClearable}
            />
        </div>
    );
};

export default DateTimePicker;