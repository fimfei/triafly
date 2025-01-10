import React from 'react';
import {chartsUtils} from "../chartsUtils";
import {RingDiagramSectorTextItem} from ".";

import './scss/ring-diagram-sector-text.scss';

const RingDiagramSectorText = props => {
    const {connector, format = 'value', colorKey = 'color', className, style} = props;
    const {data, options, utils} = connector;
    const {innerRadius, outerRadius} = options;
    const {angles} = data;

    return (
        <div
            className={`ring-diagram-text${className ? ' ' + className : ''}`}
        >
            {angles.map((angle, index) => {
                const {from, to, fraction} = angle;

                const textData = {
                    ...props,
                    index,
                    startAngle: from,
                    endAngle: to,
                    color: chartsUtils.replaceValues(fraction, colorKey),
                    value: chartsUtils.replaceValues(fraction, format),
                    style,
                    innerRadius,
                    outerRadius,
                }

                return <RingDiagramSectorTextItem key={`item-real-text-${index}`} {...textData} />
            })}
        </div>
    )
}

export default RingDiagramSectorText

