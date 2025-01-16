import React from 'react';
import {
    Chart,
    RingDiagram, RingDiagramWheel, RingDiagramSectorText, RingDiagramCircle, RingDiagramBackground,
    Legend,
} from '../';

import './scss/ring.scss'

const RING = () => {

    const chartControllingRef = React.useRef({})

    const plan = 40;
    const getDefect = num => plan - num;
    const getDefectPercent = num => Math.round((plan - num) * 100 / plan);

    const fractions = [
        {a: {b: {value: 21, color: '#f00', color1: '#f0f', realValue: 22, defect: getDefect(22), city: 'Новосибирск',  defectPercent: getDefectPercent(22)}}},
        {a: {b: {value: 33, color: '#080', color1: '#0aa', realValue: 26, defect: getDefect(26), city: 'Томск',        defectPercent: getDefectPercent(26)}}},
        {a: {b: {value: 44, color: '#00f', color1: '#880', realValue: 28, defect: getDefect(28), city: 'Кемерово',     defectPercent: getDefectPercent(28)}}},
        {a: {b: {value: 55, color: '#880', color1: '#00f', realValue: 40, defect: getDefect(40), city: 'Екатеринбург', defectPercent: getDefectPercent(40)}}},
        {a: {b: {value: 66, color: '#0aa', color1: '#080', realValue: 35, defect: getDefect(35), city: 'Питер',        defectPercent: getDefectPercent(35)}}},
        {a: {b: {value: 77, color: '#f0f', color1: '#f00', realValue: 48, defect: getDefect(48), city: 'Москва',       defectPercent: getDefectPercent(48)}}}
    ]

    const s1 = {valueKey: 'a.b.realValue',     colorKey: 'a.b.color',  format: '#{a.b.realValue}шт.',  }
    const s4 = {valueKey: 10,                  colorKey: 'a.b.color',  format: '#{a.b.defectPercent}%', style: {color: '#ff0'}, sectorStyle: {opacity: .7}}
    const s2 = {valueKey: 'a.b.defectPercent', colorKey: 'a.b.color1', format: '#{a.b.value}млн.',     }
    const s6 = {valueKey: 'a.b.defect',        colorKey: 'a.b.color1', format: '#{a.b.defectPercent}%', sectorStyle: {fill: 'url(#linearGradient)'} }

    const wheelData = {
        onClickToSector: data => console.log(data),
        toCalculateAnglesKey: 'a.b.value',
        sectorParts: [
            {valueKey: 'a.b.realValue', colorKey: 'a.b.color',  format: '#{a.b.realValue}шт.',  },
            {valueKey: 10,              colorKey: 'a.b.color',  format: '#{a.b.defectPercent}%', style: {color: '#ff0'}, sectorStyle: {opacity: .7}},
            {valueKey: 10,              colorKey: 'a.b.color',  format: '#{a.b.defectPercent}%', style: {color: '#0ff'}, sectorStyle: {opacity: .4}},
            {valueKey: 'a.b.defect',    colorKey: '#ddd',       format: '#{a.b.defectPercent}%',},
        ],
//        maximumValue: plan,
    };

    console.log('fractions', fractions)

    const ringDiagramData = {
        diagramSize: 380,
        outerRadius: 150,
        innerRadius: 40,
        sectorBorderColor: '#fff',
        sectorBorderWidth: 1,
//        sectorBorderAngleGap: 1,
        rotate: '-90',
        id: '___',
    };

    setTimeout(() => {
        console.log('chartControllingRef', chartControllingRef)
    }, 3000)

    const sectorText = {
        offsetPercent: 100,
        offsetNumber: 40,
        area: 'max',
        format: 'г.#{a.b.city}',
        colorKey: 'a.b.color',
        className: 'value-text',
        style: {color: '[COLOR]', fontWeight: 'normal', textShadow: 'none', boxShadow: '0px 0px 0px 1px [COLOR]'}
    };

    let wheelBig, wheelLittle, bigFractions, littleFractions;

    bigFractions = [
        {realValue: 117, color: '#f1da49', value: 100, text: 'ЦОС', legendName: 'ЦОС'},
        {realValue: 101, color: '#fbf88b', value: 100, text: 'АСП', legendName: 'Остальные'},
        {realValue: 91,  color: '#fbf88b', value: 100, text: 'ЭШП'},
        {realValue: 78,  color: '#fbf88b', value: 100, text: 'МП'},
        {realValue: 100, color: '#70e949', value: 100, text: 'ПКМ', legendName: 'ПКМ'},
    ]

    wheelBig = {
        onClickToSector: data => console.log(data),
        toCalculateAnglesKey: 'value',
        sectorParts: [
            {valueKey: 'realValue', colorKey: 'color',  format: '#{text} #{realValue}%', className: 'avia-big'},
        ],
        maximumValue: 100,
    };

    littleFractions = [
        {value: 10, color: '#595959', text: 'MC-21'},
        {value: 10, color: '#595959', text: 'SJ-100'},
        {value: 10, color: '#595959', text: 'ИЛ-76'},
    ]

    wheelLittle = {
        onClickToSector: data => console.log(data),
        toCalculateAnglesKey: 'value',
        sectorParts: [
            {valueKey: 'value', colorKey: 'color',  format: '#{text}', className: 'avia-little', offsetPercent: 70 },
        ],
        maximumValue: 10,
    };



    return (
        <div className="ring-root">
            <div className="ring-diagram-all-buttons">
                <div className="ring-diagram-buttons">
                    <div className="ring-diagram-button" onClick={() => chartControllingRef.current.ringDiagram.D1.rotate(45, 1000)}>+45 градусов</div>
                    <div className="ring-diagram-button" onClick={() => chartControllingRef.current.ringDiagram.D1.rotate(-45, 1000)}>-45 градусов</div>
                </div>
                <div className="ring-diagram-buttons">
                    <div className="ring-diagram-button" onClick={() => chartControllingRef.current.ringDiagram.D3.rotate(45, 1000)}>+45 градусов</div>
                    <div className="ring-diagram-button" onClick={() => chartControllingRef.current.ringDiagram.D3.rotate(-45, 1000)}>-45 градусов</div>
                </div>
                <div className="ring-diagram-buttons">
                    <div className="ring-diagram-button" onClick={() => chartControllingRef.current.ringDiagram.D4.rotate(45, 1000)}>+45 градусов</div>
                    <div className="ring-diagram-button" onClick={() => chartControllingRef.current.ringDiagram.D4.rotate(-45, 1000)}>-45 градусов</div>
                </div>
                <div className="ring-diagram-buttons">
                    <div className="ring-diagram-button" onClick={() => chartControllingRef.current.ringDiagram.D2.rotate(45, 1000)}>+45 градусов</div>
                    <div className="ring-diagram-button" onClick={() => chartControllingRef.current.ringDiagram.D2.rotate(-45, 1000)}>-45 градусов</div>
                </div>
            </div>

            <Chart fractions={fractions} chartControllingRef={chartControllingRef} className="big-chart">
                <RingDiagram {...ringDiagramData} chartControllingRef={chartControllingRef} sectorBorderWidth={0} innerRadius={0} id="D1" >
                    <RingDiagramBackground stroke="#aaa" strokeWidth={1} fill="#ffd" />
                    <RingDiagramWheel {...wheelData} />
                    <RingDiagramCircle radius="outerRadius" />
                    <RingDiagramSectorText {...sectorText} />
                </RingDiagram>
                <RingDiagram {...ringDiagramData} innerRadius={40} id="D3" sectorBorderAngleGap={2} sectorBorderColor="#ffd" sectorBorderWidth={4}>
                    <RingDiagramBackground stroke="#aaa" strokeWidth={1} fill="#ffd" />
                    <RingDiagramCircle innerRadius="innerRadius" outerRadius="outerRadius" stroke="#888" strokeWidth={0} fill="url(#linearGradient)" />
                    <RingDiagramWheel {...{...wheelData, sectorParts: [s1, s4, s2]}} />
                    <RingDiagramSectorText {...sectorText} style={{...sectorText.style, background: '[COLOR]', color: '#fff'}} />
                </RingDiagram>
                <RingDiagram {...ringDiagramData} innerRadius={100} id="D4" >
                    <RingDiagramBackground stroke="#aaa" strokeWidth={1} fill="#ffd" />
                    <RingDiagramWheel {...{...wheelData, sectorParts: [s1, s6]}} />
                    <RingDiagramCircle radius="innerRadius" stroke="#888" strokeWidth={1} />
                    <RingDiagramCircle radius="outerRadius" />
                    <RingDiagramSectorText {...sectorText} offsetPercent={0} offsetNumber={-40} style={{...sectorText.style, boxShadow: 'none', textDecoration: 'underline'}}/>
                </RingDiagram>
                <Legend className="big-legend" nameКey="a.b.city" colorKey="a.b.color" />
            </Chart>
            <Chart fractions={bigFractions} chartControllingRef={chartControllingRef} className="little-chart" >
                <RingDiagram{...ringDiagramData} id="D2" sectorBorderWidth={0} outerRadius={150} innerRadius={80} diagramSize={380} rotate={-90}>
                    <RingDiagramWheel {...wheelBig} />
                    <RingDiagramCircle radius="outerRadius" stroke="#f00" />
                    <RingDiagram
                        id="lit"
                        fractions={littleFractions}
                        outerRadius={50}
                        innerRadius={0}
                        diagramSize={100}
                        style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                        sectorBorderColor="#fff"
                        sectorBorderWidth={3}
                    >
                        <RingDiagramWheel  {...wheelLittle} />
                    </RingDiagram>
                </RingDiagram>
                <Legend className="little-legend" nameКey="legendName" colorKey="color" />
            </Chart>

        </div>
    )
}

export default RING;