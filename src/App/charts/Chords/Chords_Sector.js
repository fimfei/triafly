import React from 'react';
import {chartsUtils} from "../chartsUtils";

import './scss/chords-sector.scss';

const ChordsSector = props => {
    const {connector, angles, index, fontSize, selectedSector, setSelectedSector} = props;
    const {options, data} = connector;
    const {ringWidthPercent = 0} = options;
    const {from, to} = angles;

    const d = chartsUtils.getSectorPath({
        innerRadius: 50 - ringWidthPercent,
        outerRadius: 50,
        startAngle: from,
        endAngle: to,
    });

    const dText = chartsUtils.getArcPath({radius: 50, startAngle: from, endAngle: to});

    const onMouseEnter = () => {
        setSelectedSector(index);
    }

    const onMouseLeave = () => {
        setSelectedSector(null);
    }

    return (
        <React.Fragment>
            <defs>
                <clipPath id={`sector-clip-${index}`}>
                    <path d={d} />
                </clipPath>
                <path
                    id={`text-path-${index}`}
                    d={dText}
                    fill="transparent"
                />
            </defs>

            <circle
                className="chords-sector-circle"
                cx={50}
                cy={50}
                r={50}
                fill={data.colors[index]}
                clipPath={`url(#sector-clip-${index})`}
                opacity={.8}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
            <text
                className="chords-sector-text"
                fontSize={fontSize}
                dy={options.dyText}
                dominantBaseline="hanging"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <textPath
                    href={`#text-path-${index}`}
                    startOffset="50%"
                    textAnchor="middle"
                    opacity={.8}
                >
                    {data.labels[index]}
                </textPath>
            </text>
        </React.Fragment>
    )
}

export default ChordsSector;