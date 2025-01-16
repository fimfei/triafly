import React from 'react';
import {
    Chart,
    CoordinatesPanel, CoordinatesPanelGridX, CoordinatesPanelGridYLeft, CoordinatesPanelGridYRight, CoordinatesPanelScaleX, CoordinatesPanelScaleYLeft, CoordinatesPanelScaleYRight,
    BarDiagram,
    GraphDiagram,
    Heatmap,
    Legend,
} from '../';

import './scss/heat.scss';

const HEAT = () => {

    const chartControllingRef = React.useRef({})

    const avgTemps = {
        1: -10,  // Январь
        2: -8,   // Февраль
        3: -2,   // Март
        4: 7,    // Апрель
        5: 15,   // Май
        6: 20,   // Июнь
        7: 22,   // Июль
        8: 20,   // Август
        9: 14,   // Сентябрь
        10: 6,   // Октябрь
        11: -3,  // Ноябрь
        12: -10  // Декабрь
    };

    const getRandomTemperature = avgTemp => {
        const fluctuation = Math.random() * 10 - 5;
        return parseFloat((avgTemp + fluctuation).toFixed(1));
    }

    const startYear = 2000;
    const endYear = 2014;
    const years = endYear - startYear + 1;
    const months = 12;

    const t = Array.from({ length: years }, () => Array.from({ length: months }, () => 0));

    for (let year = startYear; year <= endYear; year++) {
        for (let month = 1; month <= months; month++) {
            const avgTemp = avgTemps[month];
            const temp = getRandomTemperature(avgTemp);
            t[year - startYear][month - 1] = temp;
        }
    }


    const fractions = [
        {a: {b: {year: 2000, t: t[0]  }}},
        {a: {b: {year: 2001, t: t[1]  }}},
        {a: {b: {year: 2002, t: t[2]  }}},
        {a: {b: {year: 2003, t: t[3]  }}},
        {a: {b: {year: 2004, t: t[4]  }}},
        {a: {b: {year: 2005, t: t[5]  }}},
        {a: {b: {year: 2006, t: t[6]  }}},
        {a: {b: {year: 2007, t: t[7]  }}},
        {a: {b: {year: 2008, t: t[8]  }}},
        {a: {b: {year: 2009, t: t[9]  }}},
        {a: {b: {year: 2010, t: t[10] }}},
        {a: {b: {year: 2011, t: t[11] }}},
        {a: {b: {year: 2012, t: t[12] }}},
        {a: {b: {year: 2013, t: t[13] }}},
        {a: {b: {year: 2014, t: t[14] }}},
    ]
    console.log('=>', fractions)

    return (
        <div className="bar-root heat-test">
            <Chart fractions={fractions} chartControllingRef={chartControllingRef}>
                <CoordinatesPanel
                    scaleYLeft={{
                        fixValues: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                        scaleType: 'area',
                    }}
                    minFractionWidth={30}
                    scaleTypeX="area"
                >
                    <CoordinatesPanelScaleX height={50} rowKey="a.b.year" dash={true} style={{fontWeight: 'bold'}} maxValue={700}/>
                    <CoordinatesPanelScaleYLeft width={70} dash={true} style={{color: '#00f'}} maxValue={90}/>

                    <CoordinatesPanelScaleYRight width={70} dash={true} style={{color: '#00f'}} maxValue={90}/>
                    <CoordinatesPanelGridX style={{background: '#f88'}} />
                    <CoordinatesPanelGridYLeft style={{background: '#00f', opacity: .5}} />

                    <Heatmap
                        linkToScale="left"
                        valuesArrayKey="a.b.t"
                        temperature={['#008', '#88f', '#0f0', '#ff0', '#f00']}

                        style={{}}
                        className=""
                        temperaturePanel={{
                            show: true,
                            type: 'horizontal',  // 'vertical' / 'horizontal'
                            style: {},
                        }}
                        smooth="extra-both" // "none" / "vertical" / "horizontal" / "both" / "super-both" / "extra-both"
                    />
                </CoordinatesPanel>
            </Chart>
        </div>
    )
}

export default HEAT;