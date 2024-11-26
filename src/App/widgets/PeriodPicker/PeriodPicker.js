import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import {ru} from 'date-fns/locale/ru';
import {UTILS as COMMON_UTILS} from '../../common';
import {UTILS} from "../DatePicker";

const PeriodPicker = props => {
    const {
        value,                  // начальное значение
        onClick = () => {},     // когда в пикере происходит очередной клик, но период еще не задан
        onChange = () => {},    // когда в пикере период выбран
        className = '',         // кастомный класс обёртки компоненты
        autoOpen = false,       // открывать сразу при построении
    } = props;

    const formatPeriodArray = periodArr => {
        return periodArr.map(date => {
            if (COMMON_UTILS.validators.date(date)) {
                return new Date(moment(date, COMMON_UTILS.formats.date).format());
            }
            return undefined;
        })
    }

    const periodArr = value.split(COMMON_UTILS.formats.datesSeparator);
    const formattedPeriodArr  = formatPeriodArray(periodArr);
    const [dateRange, setDateRange] = useState(formattedPeriodArr);
    const [startDate, endDate] = Array.isArray(dateRange) ? dateRange : formattedPeriodArr;
    let calendar;

    const _onChange = update => {
        setDateRange(update);

        if (!update[0] || !update[1]) {
            onClick();
            return;
        }

        const valueArr = update.map(date => moment(date).format(COMMON_UTILS.formats.date));
        onChange(valueArr.join(COMMON_UTILS.formats.datesSeparator));
    }

    useEffect(() =>{
        if(autoOpen) {
            calendar.setOpen(true);
        }
    });

    return (
        <div className={`rct-period-picker${className ? ' ' + className : ''}`}>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                dateFormat='dd.MM.yyyy'
                onChange={_onChange}
                isClearable={true}
                locale={ru}
                ref={c => calendar = c}
                renderCustomHeader={UTILS.renderCustomHeader}
            />
        </div>
    );
};

export default PeriodPicker;