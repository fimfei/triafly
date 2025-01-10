import React from 'react';

import './scss/ring-diagram-sector-text-item.scss';

const RingDiagramSectorTextItem = props => {
    const {connector, offsetPercent = 50, offsetNumber = 0, value, startAngle, endAngle, innerRadius, outerRadius, color, style = {}, className = ''} = props;
    const {data, utils} = connector;
    const {centerX, centerY} = data;

    const idCurrent = React.useRef(Math.round(Math.random() * 100000));
    const id = idCurrent.current;

    const getTextPosition = () => {
        const averageAngle = (endAngle + startAngle) / 2 + connector.totalAngle + connector.moveProgressAngle;
        const pointRadius = innerRadius + (offsetPercent / 100 * (outerRadius - innerRadius) + offsetNumber);
        const x = centerX + pointRadius * Math.cos(averageAngle * (Math.PI / 180));
        const y = centerY + pointRadius * Math.sin(averageAngle * (Math.PI / 180));
        return {x, y};
    }

    const [position, setPosition] = React.useState(getTextPosition());

    const setTextPosition = () => {
        const valuePos = getTextPosition();
        setPosition(valuePos);
    }

    React.useEffect(() => {
        connector.setTextPosition[id] = setTextPosition;
        setTextPosition();

        return () => {
            delete connector.setTextPosition[id];
        }
    }, []);

    return (
        <div
            className={`ring-diagram-text-item${className ? ' ' + className : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div
                className={`ring-diagram-value`}
                style={utils.getStyle({style, color})}
            >
                {value}
            </div>
        </div>
    )
}

export default RingDiagramSectorTextItem

