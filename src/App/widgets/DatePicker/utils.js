import React from 'react';
import {getMonth, getYear} from 'date-fns';

const utils = {};

utils.range = (start, size, step) => {
    let arr = Array.from(Array(size));
    step = step === undefined ? 1 : step;
    return arr.map((el, i) => {
        let d = step;
        if (typeof step === 'function') {
            d = step(i, start, size);
        }
        return start + i * d;
    });
};

utils.renderCustomHeader = props => {
    const {date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled} = props;
    const years = utils.range(1990, getYear(new Date()) + 1, 1);
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    return (
        <div
            style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <button
                className="date-arrow-style"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
            >
                {"<"}
            </button>
            <select
                className="date-select-style"
                value={getYear(date)}
                onChange={({ target: { value } }) =>
                    changeYear(value)
                }
            >
                {years.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                className="date-select-style"
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                }
            >
                {months.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <button
                className="date-arrow-style"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
            >
                {">"}
            </button>
        </div>
    );
};

export default utils;
