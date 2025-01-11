import React from 'react';
import {RingDiagramCircle, Utils, RingDiagramDefs, RingDiagramSectorValue} from '.';

import './scss/ring-diagram.scss';

const RingDiagram = props => {
    const {
        id = 'ringDiagramNotHaveID',
        chartControllingRef,
        fractions,
        children,
        style = {},
        diagramSize,
    } = props;

    React.useEffect(() => {
        if(!chartControllingRef) return;
        chartControllingRef.current.ringDiagram = chartControllingRef.current.ringDiagram || {};
        chartControllingRef.current.ringDiagram[id] = {
            rotate: utils.rotateDiagram.bind(utils),
        };
    }, []);

    const utilsCurrent = React.useRef(new Utils({...props, fractions}));
    const firstChildren = React.useRef(true);
    const utils = utilsCurrent.current;
    const svgRef = React.useRef(null);
    const connector = utils.connector;

    const svgComponents = ['RingDiagramBackground', 'RingDiagramCircle', 'RingDiagramWheel'];

    const getChildProps = child => {
        if(typeof child.type === 'string') return {};
        const {fractions: childFractions} = child.props;
        return {connector, chartControllingRef, fractions: childFractions || fractions};
    }

    const isSvgComponent = child => child.type.displayName && svgComponents.includes(child.type.displayName);

    return (
        <div
            className="ring-diagram"
            style={{
                ...style,
                width: `${diagramSize}px`,
                height: `${diagramSize}px`,
            }}
        >
            {React.Children.map(children, child => {
                if(isSvgComponent(child)) {
                    firstChildren.current = false;
                    return null;
                }
                if(!firstChildren.current) return null;
                return React.cloneElement(child, getChildProps(child));
            })}
            <svg width={diagramSize} height={diagramSize} ref={svgRef} >
                <RingDiagramDefs />
                {React.Children.map(children, child => {
                    firstChildren.current = true;
                    if(isSvgComponent(child)) return React.cloneElement(child, getChildProps(child));
                    return;
                })}
            </svg>

            <RingDiagramSectorValue connector={connector} />

            {React.Children.map(children, child => {
                if(isSvgComponent(child)) {
                    firstChildren.current = false;
                    return null;
                }
                if(firstChildren.current) return;
                return React.cloneElement(child, getChildProps(child));
            })}
        </div>
    )
}

export default RingDiagram;