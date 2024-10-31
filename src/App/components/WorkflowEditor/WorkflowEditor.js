import React from 'react';

import {FourPanels} from "../FourPanels";
import {Utils} from './';

import './scss/workflow-editor.scss';

const WorkflowEditor = ({...props}) => {
    const {options} = props;

    const setInfoComponentCurrent = React.useRef(() => {});

    const onClickToEdge = (props) => {
        console.log('click to edge', props)
        const {from, to, id} = props;
        editorProps.from = from;
        editorProps.to = to;
        editorProps.id = id;
        setInfoComponentCurrent.current('edge');
    }

    const onClickToNode = id => {
        setInfoComponentCurrent.current('node');
    }

    const utilsCurrent = React.useRef(new Utils({
        ...options,
        onClickToEdge,
        onClickToNode,
        setInfoPanelType: name => setInfoComponentCurrent.current(name),
    }));
    const utils = utilsCurrent.current;

    const editorProps = {
        id: 0,
        utils,
    };

    /* eslint-disable */
    React.useEffect(() => {
        setTimeout(() => {
            utils.connectorOfMain = utils.mainControlling.getConnector();
            utils.connectorOfList = utils.listControlling.getConnector();
        }, 0)
    }, []);
    /* eslint-enable */

    setTimeout(() => {
        console.log('WorkflowEditor utils', utils)
    }, 0)

    return (
        <div className="workflow-editor">
            <FourPanels
                idForLocalStorage="4panels"
                onPanelResize={utils.onPanelResize.bind(utils)}
                panels={{
                    left: {
                        top: {
                            component: 'WorkflowEditor:List',
                            props: {utils},
                        },
                        bottom: {},
                    },
                    right: {
                        top: {
                            component: 'WorkflowEditor:MainGraph',
                            props: utils.mainGraphProps,
                        },
                        bottom: {
                            component: 'WorkflowEditor:GraphOrLinkEditor',
                            props: {
                                utils,
                                graphProps: utils.infoGraphProps,
                                editorProps,
                                setInfoComponentCurrent,
                            }
                        }
                    },
                }}
            />
        </div>
    )
};

export default WorkflowEditor;