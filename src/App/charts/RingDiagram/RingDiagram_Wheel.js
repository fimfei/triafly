import React from 'react';
import {RingDiagramSector} from '.';

const RingDiagramWheel = props => {
    const {toCalculateAnglesKey = 'value', maximumValue = 0, sectorParts} = props;

    props.connector.utils.fractionsToAngles({toCalculateAnglesKey, maximumValue, sectorParts});

    const {connector, onClickToSector = () => {}} = props;
    const {data, options} = connector;
    const {innerRadius, outerRadius, sectorBorderWidth} = options;
    const {angles} = data;

    return (
        <React.Fragment>
            {angles.map((angle, index) => {
                const {from, to, color, parts} = angle;

                const ringData = {
                    index,
                    connector,
                    onClickToSector,
                    sectorBorderWidth: sectorBorderWidth === 'undefined' ? 1 : sectorBorderWidth,
                    fillColor: color,
                    startAngle: from,
                    endAngle: to,
                    innerRadius,
                    outerRadius,
                    isLastSector: angles.length === (index + 1),
                }

                return (
                    <React.Fragment key={`ring-diagram-${index}`}>
                        {parts.map((part, partIndex) => {
                            const {realInnerRadius, realOuterRadius, color, className, sectorStyle} = part;

                            if(realInnerRadius >= realOuterRadius) return null;

                            return (
                                <RingDiagramSector
                                    key={`ring-diagram-${index}-${partIndex}`}
                                    {...ringData}
                                    partIndex={partIndex}
                                    realInnerRadius={realInnerRadius}
                                    realOuterRadius={realOuterRadius}
                                    fillColor={color}
                                    className={className}
                                    style={sectorStyle}
                                />
                            )
                        })}
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

RingDiagramWheel.displayName = 'RingDiagramWheel';

export default RingDiagramWheel;