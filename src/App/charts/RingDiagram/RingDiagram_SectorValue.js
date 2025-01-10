import React from 'react';
import {RingDiagramSectorTextItem} from ".";

const RingDiagramSectorValue = props => {
    const {connector} = props;
    const {angles} = connector.data;

    //const {connector, offsetPercent = 50, offsetNumber = 0, value, startAngle, endAngle, innerRadius, outerRadius, color, style = {}} = props;

    return (
        <React.Fragment>
            {angles.map((angle, index) => {
                const {parts, from, to} = angle;

                return (
                    <React.Fragment key={`ring-diagram-sector-value-${index}`}>
                        {parts.map((part, partIndex) => {
                            const {value, color, text, realInnerRadius, realOuterRadius, style = {}, className = '', offsetPercent = 50, offsetNumber = 0, area = 'real'} = part;

                            if(value <= 0) return null;
                            if(realInnerRadius >= realOuterRadius) return null;

                            return (
                                <RingDiagramSectorTextItem
                                    key={`ring-diagram-sector-value-${index}-${partIndex}`}
                                    connector={connector}
                                    offsetPercent={offsetPercent}
                                    offsetNumber={offsetNumber}
                                    area={area}
                                    value={text}
                                    startAngle={from}
                                    endAngle={to}
                                    innerRadius={realInnerRadius}
                                    outerRadius={realOuterRadius}
                                    color={color}
                                    style={style}
                                    className={className}
                                />
                            )
                        })}
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

export default RingDiagramSectorValue

