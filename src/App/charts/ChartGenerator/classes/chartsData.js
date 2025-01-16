import React from 'react';

export const chartsData = {
    chords: [
        {key: 'fractions',               value: 'fractions',   type: 'link',   comment: 'массив данных, на основе которого строится чарт', notParameter: true},
        {key: 'dataKey',                 value: 'values',      type: 'string', comment: 'ключ элемента массива fractions, по которому лежат массивы с данными'},
        {key: 'colorKey',                value: 'color',       type: 'string', comment: 'ключ элемента массива fractions, по которому лежит цвет элемента'},
        {key: 'labelKey',                value: 'org',         type: 'string', comment: 'ключ элемента массива fractions, по которому лежит название элемента'},
        {key: 'className',               value: 'my-class',    type: 'string', comment: 'дополнительные кастомные классы чарта'},
        {key: 'sectorBorderAngleGap',    value: 1,             type: 'number', comment: 'задаёт отклонение начального и конечного углов сектора в градусах', from: 0, to: 10, step: .1},
        {key: 'ringWidthPercent',        value: 6,             type: 'number', from: 1,    to: 99,  step:  1, comment: 'толщина кольца в процентах от диаметра круга'},
        {key: 'rotate',                  value: -90,           type: 'number', from: -180, to: 180, step: 10, comment: 'угол поворота кольца'},
        {key: 'dyText',                  value: 1,             type: 'number', from: 0,    to: 10,  step:  1, comment: 'смещение текста по направлению к центру относительно внешнего круга'},
        {key: 'fontSize',                value: 14,            type: 'number', from: 4,    to: 20,  step:  1, comment: 'размер текста в пикселях'},
        {key: 'optimizeShortLinksFirst', value: true,          type: 'bool',   comment: 'флаг последовательности оптимизации расположения хорд'},
        {key: 'oneDirectionalChords',    value: false,         type: 'bool',   comment: 'флаг, определяющий способ отображения хорд'},
    ],
    parallel: [
        {key: 'fractions',             value: 'fractions',                                   type: 'link',   comment: 'массив данных, на основе которого строится чарт', notParameter: true},
        {key: 'rightItems',            value: ['Газпром', 'Роснефть', 'Сбербанк', 'Яндекс'], type: 'array',  comment: 'массив с метками правой колонки графика'},
        {key: 'leftItemsKey',          value: 'year',                                        type: 'string', comment: 'ключ элемента массива fractions, по которому лежат метки левой колонки графика'},
        {key: 'dataKey',               value: 'values',                                      type: 'string', comment: 'Ключ элемента массива fractions, по которому лежат значения, соответствующие очередному элементу левой колонки и элементам правкой колонки графика'},
        {key: 'colorKey',              value: 'color',                                       type: 'string', comment: 'ключ элемента массива fractions, по которому лежат цвета элементов левой колонки'},
        {key: 'verticalMarginPercent', value: 2,                                             type: 'number', from: 0, to: 10, step: .5, comment: 'значение зазора между элементами колонок, выраженное в процентах от общей высоты графика'},
        {key: 'rectWidthPercent',      value: 10,                                            type: 'number', from: 1, to: 30, step:  1, comment: 'значение ширины графической части колонок (прямоугольников) в процентах от общей ширины графика'},
        {key: 'minHeightPercent',      value: .2,                                            type: 'number', from: 0, to: 3,  step: .1, comment: 'минимальная высота графической части колонок'},
    ],
    heatmap: [],
}