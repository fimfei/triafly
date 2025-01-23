import React from 'react';
import {RING, BAR, HEAT, CANDLESTICK, PARALLEL, CHORDS, RADAR, GENERATOR, TREEMAP} from './';

import './scss/svg.scss'

const SVG = () => {

    const getType = () => {
        const type = localStorage.getItem('chartType');
        return type || 'ring';
    }

    const [type, _setType] = React.useState(getType());
    const setType = type => {
        localStorage.setItem('chartType', type);
        _setType(type);
    }

    return (
        <React.Fragment>
            <div className="svg-root">
                <div className="svg-item" onClick={() => setType('ring')}>Круговая</div>
                <div className="svg-item" onClick={() => setType('bar')}>Столбчатая и график</div>
                <div className="svg-item" onClick={() => setType('candle')}>Японские свечи</div>
                <div className="svg-item" onClick={() => setType('heat')}>Тепловая карта</div>
                <div className="svg-item" onClick={() => setType('parallel')}>Параллельные наборы</div>
                <div className="svg-item" onClick={() => setType('chords')}>Хорды</div>
                <div className="svg-item" onClick={() => setType('radar')}>Радар</div>
                <div className="svg-item" onClick={() => setType('treemap')}>Карта дерева</div>
                <div className="svg-item" onClick={() => setType('generator')}>Генератор</div>
            </div>
            {type === 'bar' && <BAR />}
            {type === 'heat' && <HEAT />}
            {type === 'ring' && <RING />}
            {type === 'candle' && <CANDLESTICK />}
            {type === 'parallel' && <PARALLEL />}
            {type === 'chords' && <CHORDS />}
            {type === 'radar' && <RADAR />}
            {type === 'treemap' && <TREEMAP />}
            {type === 'generator' && <GENERATOR />}
        </React.Fragment>
    )
}

export default SVG;