import React from 'react';
import {Utils} from '.';

import './scss/coordinates-panel.scss';

const CoordinatesPanel = props => {
    const {children, fractions, style = {}, minFractionWidth = 0, mainWindowOverflow = 'auto'} = props;

    const diagramWidth = minFractionWidth ? `${minFractionWidth * fractions.length}px` : 'unset';

    const svgRef = React.useRef(null)
    const [svgData, setSvgData] = React.useState(null);
    const [showScrollbar, setShowScrollbar] = React.useState(false);
    const id = React.useRef(`coordinates-panel-${Math.round(Math.random() * 100000)}`);

    const handleResize = () => setShowScrollbar(bodyInnerRef.current.offsetWidth > bodyWrapperRef.current.offsetWidth);

    React.useEffect(() => {
        const parentDiv = svgRef.current.parentElement;

        const changeSvgData = () => {
            setSvgData(parentDiv.getBoundingClientRect());
            handleResize();
        }
        const resizeObserver = new ResizeObserver((entries) => {
            if(entries.length) changeSvgData();
        });

        changeSvgData();
        resizeObserver.observe(parentDiv);

        return () => {
            resizeObserver.unobserve(parentDiv);
        };
    }, []);

    const utilsCurrent = React.useRef(new Utils(props));
    const utils = utilsCurrent.current;
    const bodyWrapperRef = React.useRef(null);
    const bodyInnerRef = React.useRef(null);
    const scaleXWrapperRef = React.useRef(null);
    const connector = utils.connector;

    const getData = () => {
        if(connector.data.children) return connector.data.children;
        utils.calcMaxValue();
        return utils.getChildrenData(children);
    }

    const childrenObj = React.useRef(getData());
    const {internalChildrenObj, externalChildren} = childrenObj.current;
    const {
        CoordinatesPanelScaleX,
        CoordinatesPanelScaleYLeft, CoordinatesPanelScaleYRight,
        diagrams,
        CoordinatesPanelGridX,
        CoordinatesPanelGridYLeft, CoordinatesPanelGridYRight,
        Heatmap,
        Candlestick,
    } = internalChildrenObj;

    const onScroll = e => {
        const scrollLeft = e.currentTarget.scrollLeft;
        bodyWrapperRef.current.scrollLeft = scrollLeft;
        scaleXWrapperRef.current.scrollLeft = scrollLeft;
    }

    const {scaleXHeight, scaleYLeftWidth = 0, scaleYRightWidth = 0} = connector.options;
    const mainWindowOverflowAlways = mainWindowOverflow === 'always';

    const childrenData = {connector, coordinatesPanelId: id.current, svgData}

    return (
        <div
            className={`coordinates-panel`}
            id={id.current}
            style={style}
        >
            <div className="coordinates-panel-top-group">
                <div className="coordinates-panel-scale-y-wrapper" style={{maxWidth: `${scaleYLeftWidth}px`, minWidth: `${scaleYLeftWidth}px`}}>
                    {CoordinatesPanelScaleYLeft && scaleYLeftWidth && React.cloneElement(CoordinatesPanelScaleYLeft[0], {connector})}
                </div>
                <div
                    ref={bodyWrapperRef}
                    className="coordinates-panel-body-wrapper"
                    style={{
                        overflow: showScrollbar || mainWindowOverflowAlways ? 'hidden' : 'visible',
                        minWidth: `calc(100% - ${scaleYLeftWidth + scaleYRightWidth}px)`,
                        maxWidth: `calc(100% - ${scaleYLeftWidth + scaleYRightWidth}px)`,
                    }}
                >
                    <div
                        ref={bodyInnerRef}
                        className="coordinates-panel-body-inner"
                        style={{minWidth: diagramWidth}}
                    >
                        {CoordinatesPanelGridX && <Children children={CoordinatesPanelGridX} data={childrenData}/>}
                        {CoordinatesPanelGridYLeft && <Children children={CoordinatesPanelGridYLeft} data={childrenData}/>}
                        {CoordinatesPanelGridYRight && <Children children={CoordinatesPanelGridYRight} data={childrenData}/>}

                        {Heatmap && <Children children={Heatmap} data={childrenData}/>}
                        {Candlestick && <Children children={Candlestick} data={childrenData}/>}
                        <svg
                            className="coordinates-panel-svg-root"
                            ref={svgRef}
                            width="100%"
                            height="100%"
                            overflow="visible"
                            style={diagrams?.length ? {} : {display: 'none'}}
                        >
                            {!!svgData && <Children children={diagrams} data={{connector, svgData}}/>}
                        </svg>
                    </div>
                </div>
                <div className="coordinates-panel-scale-y-wrapper" style={{maxWidth: `${scaleYRightWidth}px`, minWidth: `${scaleYRightWidth}px`}}>
                    {CoordinatesPanelScaleYRight && scaleYRightWidth && React.cloneElement(CoordinatesPanelScaleYRight[0], childrenData)}
                </div>
            </div>
            <div className="coordinates-panel-bottom-group" style={{maxHeight: `${scaleXHeight}px`, minHeight: `${scaleXHeight}px`}}>
                <div className="coordinates-panel-plug" style={{maxWidth: `${scaleYLeftWidth}px`, minWidth: `${scaleYLeftWidth}px`}}></div>
                <div className="coordinates-panel-scale-x-root">
                    <div
                        ref={scaleXWrapperRef}
                        className="coordinates-panel-scale-x-wrapper"
                        style={{
                            overflow: showScrollbar || mainWindowOverflowAlways ? 'hidden' : 'visible',
                        }}
                    >
                        <div
                            className="coordinates-panel-scale-x-inner"
                            style={{minWidth: diagramWidth}}
                        >
                            {CoordinatesPanelScaleX && scaleXHeight && React.cloneElement(CoordinatesPanelScaleX[0], childrenData)}
                        </div>
                    </div>
                    {showScrollbar && (
                        <div
                            className="coordinates-panel-scrollbar-wrapper"
                            onScroll={onScroll}
                        >
                            <div
                                className="coordinates-panel-scrollbar-inner"
                                style={{minWidth: diagramWidth}}
                            >
                            </div>
                        </div>
                    )}
                </div>
                <div className="coordinates-panel-plug" style={{maxWidth: `${scaleYRightWidth}px`, minWidth: `${scaleYRightWidth}px`}}></div>
            </div>
            {!!externalChildren.length && (
                <React.Fragment>
                    {React.Children.map(externalChildren, child => {
                        const data = typeof child.type === 'string' ? {} : {connector};
                        return React.cloneElement(child, data);
                    })}
                </React.Fragment>
            )}
        </div>
    )
}

const Children = props => {
    const {children, data} = props;

    return (
        <React.Fragment>
            {React.Children.map(children, child => {
                return React.cloneElement(child, data);
            })}
        </React.Fragment>
    )
}

export default CoordinatesPanel;