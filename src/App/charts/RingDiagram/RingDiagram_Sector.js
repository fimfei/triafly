import React from 'react';
import {RingDiagramSectorDefs} from '.';

import './scss/ring-diagram-sector.scss';

const RingDiagramSector = props => {
    const {connector, index, partIndex, isLastSector, fillColor, startAngle, endAngle, realInnerRadius, realOuterRadius, onClickToSector, className = '', style = {}} = props;
    const {options, data, utils} = connector;
    const {centerX, centerY, angles} = data;
    const {id: diagramId, fractions, sectorBorderColor = '#000', sectorBorderWidth = 0, sectorBorderAngleGap = 0} = options;
    const idCurrent = React.useRef(Math.round(Math.random() * 100000));
    const id = idCurrent.current;

    const path = React.useRef(utils.getSectorPath({
        innerRadius: realInnerRadius,
        outerRadius: realOuterRadius,
        startAngle,
        endAngle,
        angleGap: sectorBorderAngleGap,
    }));

    const clipRef = React.useRef(null);
    const pathRef = React.useRef(null);
    const startTimeRef = React.useRef(null);
    const totalAngle = React.useRef(0);

    const rotateSector = (rotationAngle, dur) => {
        if(!rotationAngle) return;

        const animate = (timestamp) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const elapsed = timestamp - startTimeRef.current;
            const progress = Math.min(elapsed / dur, 1);
            const currentAngle = totalAngle.current + rotationAngle * progress;
            if(isLastSector) connector.moveProgressAngle = rotationAngle * progress;

            if(pathRef.current) pathRef.current.setAttribute('transform', `rotate(${currentAngle}, ${centerX}, ${centerY})`);
            clipRef.current.setAttribute('transform', `rotate(${currentAngle}, ${centerX}, ${centerY})`);

            utils.setTextPosition();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                totalAngle.current = currentAngle;
                if(isLastSector) {
                    connector.totalAngle = currentAngle;
                    connector.moveProgressAngle = 0;
                }
                startTimeRef.current = null;
            }
        };
        requestAnimationFrame(animate);
    }

    React.useEffect(() => {
        connector.rotateSector[id] = rotateSector;

        return () => {
            delete connector.rotateSector[id];
        }
    }, []);

    const drag = React.useRef(null);

    const onMouseDown = e => {
        const svg = e.currentTarget.ownerSVGElement;
        drag.current = {svg, deg: getDeg(svg, e.clientX, e.clientY)}
    }

    const getDeg = (svg, x, y) => {
        const point = svg.createSVGPoint();
        point.x = x;
        point.y = y;
        const transformedPoint = point.matrixTransform(svg.getScreenCTM().inverse());
        const clickX = transformedPoint.x - centerX;
        const clickY = transformedPoint.y - centerY;
        const angleRad = Math.atan2(clickY, clickX);
        return (angleRad * 180) / Math.PI;
    }

    const onMouseMove = e => {
        if(!drag.current) return;
        if(drag.current.blocked) return;

        drag.current.blocked = true;
        setTimeout(() => {
            if(drag.current) drag.current.blocked = false;
        }, 20)

        const deg = getDeg(drag.current.svg, e.clientX, e.clientY);
        const delta = deg - drag.current.deg;
        drag.current.deg += delta;
        utils.rotateDiagram(delta, .001);
    }

    const onClick = () => {
        onClickToSector({
            diagramId,
            fractionIndex: index,
            fraction: fractions[index],
            partIndex,
            part: angles[index].parts[partIndex],
        });
    }

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!

    return (
        <g>
            <RingDiagramSectorDefs {...{connector, id, realOuterRadius, fillColor, path, clipRef}} />
            <circle
                className={`ring-diagram-sector${className ? ' ' + className : ''}`}
                style={utils.getStyle({style, color: fillColor})}
                cx={centerX}
                cy={centerY}
                r={realOuterRadius}
                fill={fillColor}
                clipPath={`url(#clip-${id})`}
                onClick={onClick}
                onMouseDown={onMouseDown}
                onMouseUp={() => drag.current = null}
                onMouseLeave={() => drag.current = null}
                onMouseMove={onMouseMove}
            />
            {sectorBorderWidth && (
                <path
                    ref={pathRef}
                    id={`path-${id}`}
                    d={path.current}
                    fill="none"
                    stroke={sectorBorderColor}
                    strokeWidth={sectorBorderWidth}
                />
            )}
        </g>

    );
};

export default RingDiagramSector;