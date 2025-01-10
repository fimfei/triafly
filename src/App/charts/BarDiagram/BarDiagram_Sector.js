import React from 'react';
import {BarDiagramSectorItem, BarDiagramSectorText} from './';

import './scss/bar-diagram-sector.scss';

const BarDiagramSector = props => {
    const {connector, fraction, indicators, sectorIndex, sectorWidth, sectorItemsWidthPercent, barDiagramId} = props;

    let oldCurrPosition = 0;
    let currPosition = 0;

    return (
        <React.Fragment>
            {indicators.map((indicator, index) => {
                const {left, width, right} = sectorItemsWidthPercent[index];

                currPosition = oldCurrPosition;

                const itemLeft  = left * sectorWidth / 100;
                const itemWidth = width * sectorWidth / 100;
                const itemRight = right * sectorWidth / 100;

                oldCurrPosition = currPosition + itemLeft + itemWidth + itemRight;

                return (
                    <svg
                        key={`bar-diagram-sector-${index}`}
                        className={`bar-diagram-svg-sector`}
                        x={currPosition + itemLeft}
                        y={0}
                        width={itemWidth}
                        height="100%"
                        overflow="visible"
                    >
                        <BarDiagramSectorItem
                                key={`bar-diagram-sector-item-${sectorIndex}-${index}`}
                                connector={connector}
                                fraction={fraction}
                                indicator={indicator}
                                sectorIndex={sectorIndex}
                                indicatorIndex={index}
                                barDiagramId={barDiagramId}
                        />
                        <BarDiagramSectorText
                                key={`bar-diagram-sector-text-${sectorIndex}-${index}`}
                                connector={connector}
                                fraction={fraction}
                                indicator={indicator}
                                sectorIndex={sectorIndex}
                                indicatorIndex={index}
                                barDiagramId={barDiagramId}
                        />
                    </svg>
                )
            })}
        </React.Fragment>
    )
}

export default BarDiagramSector;