import React from 'react';
import {FourPanels} from "../FourPanels";
import {GraphOrLinkEditor, List} from "../WorkflowEditor";
import {Graph} from "../Graph";
import {Utils} from './';

import './scss/workflow-editor.scss';

const WorkflowEditor = ({...props}) => {
    const {options} = props;

    const setInfoComponentCurrent = React.useRef(() => {});

    const onClickToEdge = (props) => {
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


    return (
        <div className="workflow-editor">
            <FourPanels
                idForLocalStorage="4panels"
                onPanelResize={utils.onPanelResize.bind(utils)}
                panels={{
                    left: {
                        top: {
                            component: List,
                            props: {utils},
                        },
                        bottom: {},
                    },
                    right: {
                        top: {
                            component: Graph,
                            props: utils.mainGraphProps,
                        },
                        bottom: {
                            component: GraphOrLinkEditor,
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