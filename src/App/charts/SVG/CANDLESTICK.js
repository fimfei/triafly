import React from 'react';
import {
    Chart,
    CoordinatesPanel, CoordinatesPanelGridX, CoordinatesPanelGridYLeft, CoordinatesPanelGridYRight, CoordinatesPanelScaleX, CoordinatesPanelScaleYLeft, CoordinatesPanelScaleYRight,
    BarDiagram,
    GraphDiagram,
    Heatmap,
    Legend,
    Candlestick,
} from '../';

import './scss/candlestick.scss';

const CANDLESTICK = () => {

    function generateCandlestickData(numPoints, startPrice, volatility) {
        const data = [];
        let currentPrice = startPrice;

        const formatDate = isoString => {
            const date = new Date(isoString);
            const day = String(date.getDate()).padStart(2, '0'); // День
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц (нумерация с 0)
            const year = date.getFullYear(); // Год
            const hours = String(date.getHours()).padStart(2, '0'); // Часы
            const minutes = String(date.getMinutes()).padStart(2, '0'); // Минуты
            const seconds = String(date.getSeconds()).padStart(2, '0'); // Секунды

            return `${day}.${month}.${year} ${hours}:${minutes}`;
        }

        for (let i = 0; i < numPoints; i++) {
            const open = currentPrice;

            const high = open + Math.random() * volatility;
            const low = open - Math.random() * volatility;
            const close = low + Math.random() * (high - low);

            currentPrice = close;

            // Добавление данных в массив
            data.push({
                time: formatDate(new Date(Date.now() + i * 60000).toISOString()),
                open: Math.round(open * 100) / 100,
                high: Math.round(high * 100) / 100,
                low: Math.round(low * 100) / 100,
                close: Math.round(close * 100) / 100,
            });
        }

        return data;
    }

    const fractions = generateCandlestickData(50, 100, 10); // 10 точек, начальная цена 100, волатильность 10
    console.log('============ fractions ==========>', fractions)

    return (
        <div className="bar-root candlestick-test">
            <Chart fractions={fractions}>
                <CoordinatesPanel
                    scaleYLeft={{
                        valuesKey: 'low',
                        valuesMaxKey: 'high',
                        valuesMinKey: 'low',
                        maxValue: undefined,
                        minValue: undefined,
                        gridStepsNumber: 10,
                        decimalPlacesNumber: 1,
                    }}
                    minFractionWidth={10}
                    scaleTypeX="area"
                >
                    <CoordinatesPanelScaleX height={50} rowKey="time" dash={true} style={{fontWeight: 'bold'}} textRotate={-60} />
                    <CoordinatesPanelScaleYLeft width={70} dash={true} style={{color: '#00f'}} maxValue={90}/>

                    <CoordinatesPanelGridYLeft style={{background: '#00f', opacity: .5}} />
                    {/*
                    <CoordinatesPanelGridX style={{background: '#f88'}} />

                    */}
                    <Candlestick
                        linkToScale="left"
                        openKey="open"
                        closeKey="close"
                        lowKey="low"
                        highKey="high"
                        bullColor="#080"
                        bearColor="#f00"
                        style={{}}
                        className=""
                    />

                    <GraphDiagram
                        linkToScale="left"
                        indicators={[
                            {
                                valueKey: 'open',
                                color: '#f00',
                                lineSplinePercent: 50,
                            },
                            {
                                valueKey: 'close',
                                color: '#080',
                                lineSplinePercent: 50,
                            },
                        ]}
                    />

                </CoordinatesPanel>
            </Chart>
        </div>
    )
}

export default CANDLESTICK;