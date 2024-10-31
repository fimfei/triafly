import React from "react";
import {SideResizer} from "../SideResizer";
import {GraphOrLinkEditor, List} from "../WorkflowEditor";
import {Graph} from "../Graph";

import './scss/four-panels.scss';

/*
    panels: {
        left: {
            top: {
                component: componentName1,
                props: {...}
            },
            bottom: {
                component: componentName2,
                props: {...}
            },
        },
        right: {
            top: {
                component: componentName3,
                props: {...}
            },
            bottom: {
                component: componentName4,
                props: {...}
            },
        },
    }
*/

const FourPanels = props => {
    const {panels = {}, idForLocalStorage, onPanelResize = () => {}} = props;
    const {left = {}, right = {}} = panels;
    const {top: leftTop = {}, bottom: leftBottom = {}} = left;
    const {top: rightTop = {}, bottom: rightBottom = {}} = right;
    const {component: LeftTopComponentName = ''} = leftTop;
    const {component: leftBottomComponentName = ''} = leftBottom;
    const {component: rightTopComponentName = ''} = rightTop;
    const {component: rightBottomComponentName = ''} = rightBottom;

    const getComponent = name => {
        const components = {
            'WorkflowEditor:List'             : List,
            'WorkflowEditor:MainGraph'        : Graph,
            'WorkflowEditor:GraphOrLinkEditor': GraphOrLinkEditor,
        }
        return components[name] || (() => <div>aaaaaaaaaaa</div>);
    }

    const LeftTopComponent = getComponent(LeftTopComponentName);
    const LeftBottomComponent = getComponent(leftBottomComponentName);
    const RightTopComponent = getComponent(rightTopComponentName);
    const RightBottomComponent = getComponent(rightBottomComponentName);

    const data = {
        ...props,
        onPanelResize,
    }

    return (
        <div className="four-panels-all-panels">
            <div className="four-panels-left-panels">
                <VerticalPanels {...data} vertical={left} leftRight="left" TopComponent={LeftTopComponent} BottomComponent={LeftBottomComponent} />
                {panels?.right && (
                    <SideResizer
                        type="vertical"
                        width={10}
                        localStorageName={`resizer-${idForLocalStorage}-left`}
                        onChange={onPanelResize}
                    />
                )}
            </div>
            {panels?.right && (
                <div className="four-panels-right-panels">
                    <VerticalPanels {...data} vertical={right} leftRight="right" TopComponent={RightTopComponent} BottomComponent={RightBottomComponent} />
                </div>
            )}
        </div>
    )
}

const VerticalPanels = props => {
    const {idForLocalStorage, vertical, leftRight, onPanelResize, TopComponent, BottomComponent} = props;
    const {top = {}, bottom = {}} = vertical;

    const topProps = top.props || {};
    const bottomProps = bottom.props || {};

    return (
        <div className="four-panels-vertical-panels">
            {top.component && (
                <div className={`four-panels-top-panel${bottom.component ? '' : ' without-bottom'}`}>
                    <div className="four-panels-panel">
                        <TopComponent {...topProps} />
                    </div>
                    {bottom.component && (
                        <SideResizer
                            type="horizontal"
                            width={10}
                            localStorageName={`resizer-${idForLocalStorage}-${leftRight}-top`}
                            onChange={onPanelResize}
                        />
                    )}
                </div>
            )}
            {bottom.component && (
                <div className={`four-panels-panel four-panels-bottom-panel${top.component ? ' with-top' : ''}`}>
                    <BottomComponent {...bottomProps} />
                </div>
            )}
        </div>
    )
}

export default FourPanels;
