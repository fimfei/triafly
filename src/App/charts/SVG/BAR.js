import React from 'react';
import {
    Chart,
    CoordinatesPanel, CoordinatesPanelGridX, CoordinatesPanelGridYLeft, CoordinatesPanelGridYRight, CoordinatesPanelScaleX, CoordinatesPanelScaleYLeft, CoordinatesPanelScaleYRight,
    BarDiagram,
    GraphDiagram,
    Legend,
} from '../';


import './scss/bar.scss';

const BAR = () => {

    const chartControllingRef = React.useRef({})

    const x = 300;
    const y = 200;
    const fractions = [
        {a: {b: {text: 'НАЗ',          a: 574, b: 152 + x, c: 126 + y, d:  82, color: '#f00', e: 0.1, f: 82, f1: 67, i: ''}}},
        {a: {b: {text: 'КНААЗ',        a: 553, b:  99 + x, c: 308 + y, d: 110, color: '#f44', e: 0.2, f: 76, f1: 88, i: ''}}},
        {a: {b: {text: 'ЛАЗ',          a: 581, b: 125 + x, c: 142 + y, d: 114, color: '#f88', e: 0.3, f: 94, f1: 92, i: ''}}},
        {a: {b: {text: 'НАЗ Сокол',    a: 512, b:  93 + x, c:  82 + y, d:  88, color: '#fcc', e: 0.4, f: 58, f1: 67, i: ''}}},
        {a: {b: {text: 'КМЗ',          a: 444, b:  88 + x, c:  98 + y, d: 110, color: '#ff0', e: 0.2, f: 78, f1: 83, i: ''}}},
        {a: {b: {text: 'ИАЗ',          a: 508, b: 126 + x, c: 122 + y, d:  97, color: '#ff4', e: 0.8, f: 66, f1: 78, i: ''}}},
        {a: {b: {text: 'ФРС',          a: 504, b:  76 + x, c:  76 + y, d: 100, color: '#ff8', e: 0.4, f:108, f1: 65, i: ''}}},
        {a: {b: {text: 'КАЗ',          a: 495, b: 124 + x, c: 122 + y, d:  98, color: '#ffc', e: 0.9, f: 94, f1: 84, i: ''}}},
        {a: {b: {text: 'АК Казань',    a: 572, b: 132 + x, c: 129 + y, d:  97, color: '#0ff', e: 0.7, f: 67, f1: 63, i: ''}}},
        {a: {b: {text: 'АК Ульяновск', a: 486, b: 130 + x, c: 127 + y, d:  97, color: '#4ff', e: 0.0, f: 70, f1: 94, i: ''}}},
        {a: {b: {text: 'ТАНТК',        a: 542, b: 121 + x, c: 131 + y, d: 108, color: '#8ff', e: 0.5, f: 53, f1:112, i: ''}}},
        {a: {b: {text: 'Авиастар',     a: 599, b: 124 + x, c: 134 + y, d: 108, color: '#cff', e: 0.8, f: 67, f1: 99, i: ''}}},
    ]

    return (
        <div className="bar-root bar-test">
            <Chart fractions={fractions} chartControllingRef={chartControllingRef}>
                <CoordinatesPanel
                    scaleYLeft={{
                        valuesKey: 'a.b.a',
                        maxValue: 600,
                        minValue: 300,
                        gridStepsNumber: 10,
                        decimalPlacesNumber: 0,
                    }}
                    scaleYRight={{
                        valuesKey: 'a.b.f',
                        maxValue: 100,
                        minValue: 50,
                        gridStepsNumber: 10,
                        decimalPlacesNumber: 1,
                    }}
                    style={{}}
                    minFractionWidth={100}
                    scaleTypeX="area"        // 'line' / 'area'
                    mainWindowOverflow="auto"   // 'always' / 'auto'
                >
                    <CoordinatesPanelScaleX height={50} rowKey="a.b.text" dash={true} style={{fontWeight: 'bold'}} maxValue={700}/>
                    <CoordinatesPanelScaleYLeft width={70} /*format="[VALUE],000"*/ dash={true} style={{color: '#00f'}} maxValue={90}/>
                    <CoordinatesPanelScaleYRight width={100} format="[VALUE]%" dash={true} style={{color: '#080'}}/>

                    <CoordinatesPanelGridX style={{background: '#f88'}} />
                    {/*
                    <CoordinatesPanelGridYLeft style={{background: '#00f', opacity: .5}} />
                    <CoordinatesPanelGridYRight style={{background: '#080', opacity: .5}} />
                    */}
                    <BarDiagram
                        linkToScale="left"
                        indicators={[
//                            {textRotate:   0, multiplier:  1, widthPercent: '10 40 10', valueKey: 'a.b.a', format: '[VALUE]',  color: '#65aac3', type: 'oval', showValue: true, offsetPercent: 100, offsetNumber:  10, style: {}, valueStyle: {fontWeight: 'bold', fill: '[COLOR]'} },
                            {histogram: {portion: 5, gap: 1}, textRotate:   0, multiplier:  1, widthPercent: '10 60  5', valueKey: 'a.b.a', format: '[VALUE]',  color: '#65aac3', type: 'cylinder', showValue: true, offsetPercent: 100, offsetNumber:  10, style: {}, valueStyle: {fontWeight: 'bold', fill: '[COLOR]'} },
                            {textRotate: -90, multiplier:  1, widthPercent: ' 5 40  0', valueKey: 'a.b.b', format: '[VALUE]%', color: '#628ccf', type: 'oval',     showValue: true, offsetPercent:  50, offsetNumber:   0, style: {}, valueStyle: {fill: '#fff'} },
                            {textRotate:   0, multiplier:  1, widthPercent: ' 0 40 10', valueKey: 'a.b.c', format: '[VALUE]',  color: '#9fce63', type: 'oval',     showValue: true, offsetPercent:  50, offsetNumber:   0, style: {}, valueStyle: {fill: '#fff'} },
                        ]}
                    />

{/*
                    <BarDiagram
                        linkToScale="right"
                        indicators={[
//                            {textRotate:   0, multiplier: 1, widthPercent: ' 50 40 10', valueKey: 'a.b.f', format: '[VALUE]%',  color: '#9fce63', type: 'oval', showValue: true, offsetPercent:  50, offsetNumber:   0, style: style3, valueStyle: {fill: '#fff'} },
                        ]}
                    />
*/}

                    <GraphDiagram
                        linkToScale="right"
                        indicators={[
                            {
                                valueKey: 'a.b.f',
                                color: '#f00',
                                valueOffset: 0,
                                valueFormat: '[VALUE]%',
                                valueStyle: {fontSize: '10px', fontWeight: 'bold'},
                                showValue: true,
                                lineStyle: {},
                                lineSplinePercent: 50,           // коэффициент сглаживания 0 - 100
                                pointType: 'circle',             // circle / square / rhomb
                                pointSize: 30,
                                pointStyle: {},
                            },
                            {
                                valueKey: 'a.b.f1',
                                color: '#00f',
                                valueOffset: 20,
                                valueFormat: '[VALUE]%',
                                valueStyle: {fontWeight: 'bold'},
                                showValue: true,
                                lineStyle: {},
                                lineSplinePercent: 0,
                                pointType: 'rhomb',
                                pointSize: 14,
                                pointStyle: {},
                            },
                        ]}
                    />

                    <Legend
                        nameКey="c.text"
                        colorKey="c.color"
                        fractions={[
                            {c: {text: 'План на год',                  color: '#65aac3'}},
                            {c: {text: 'План накопительным итогом',    color: '#628ccf'}},
                            {c: {text: 'Факт накопительным итогом',    color: '#9fce63'}},
                            {c: {text: '% - Уровень выполнения плана'}},
                        ]}
                    />
                </CoordinatesPanel>
            </Chart>
        </div>
    )
}

export default BAR;