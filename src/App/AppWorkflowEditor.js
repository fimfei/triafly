import React from 'react';
import {useCurrentState} from "./hooks";
import {DataUtils, Picker, WorkflowEditor} from './components/WorkflowEditor';

const log = console.log;

const AppWorkflowEditor = props => {
    const {options} = props;
    const {pfKeys}  = options;

    const [dataReady, setDataReady] = React.useState(false);

    const [links, linksCurrent, _setLinks] = useCurrentState(null);
    const [typeLabels, typeLabelsCurrent, setTypeLabels] = useCurrentState(null);
    const [selectedType, selectedTypeCurrent, setSelectedType] = useCurrentState(null);

    const setLinks = (type) => {
        log('AppWorkflowEditor -> setLinks type:', type);
        //
        // когда меняется links мы должны с нуля инициировать WorkflowEditor, так как в нём не предусмотрена
        // процедура деструкции или настройки на новый links (это очень дорогостоящий функционал да и ни к чему он). Поэтому при
        // смене links мы должны вначале полностью убить старый WorkflowEditor и затем посторить новый заново
        //
        setDataReady(false);

        setTimeout(() => {
            const links = dataUtils.getLinksByType(type);
            setSelectedType(type);
            _setLinks(links);
            setDataReady(true);
        }, 0)
    }

    const setData = ({ types, params }) => {
        log('AppWorkflowEditor -> setData:', types);

        const options = props.options;

        options.events     = dataUtils.events;
        options.roles      = dataUtils.roles;
        options.states     = dataUtils.states;
        options.parameters = params;

        const onSave = props.options.onSave;

        props.options.onSave = function(data) {
            log('***\n***\n   AppWorkflowEditor \n--->\n---> onSave data:', data);
            const {links} = data;
            const type = selectedTypeCurrent.current;
            log('AppWorkflowEditor ->  *** selectedType:', type);
            // run dataUtils.saveLinks;

            dataUtils.saveLinks(type, links).then((success) => {
                log('AppWorkflowEditor -> dataUtils.saveLinks done');
                log('------------------------------------ success:', success);
                data.success = success;

                return onSave(data);
            });
        }

        const defaultType = dataUtils.getDefaultTypeLabel();
        log('AppWorkflowEditor setData -> defaultType:', defaultType);

        setSelectedType(defaultType);
        _setLinks(dataUtils.getLinksByType(defaultType));
        setTypeLabels(types);
        setDataReady(true);
        log('AppWorkflowEditor -> >>> dataReady');
    }

    const dataUtils = new DataUtils({
        pfKeys,
        setData,
    });

    React.useEffect(() => {
        return () => {
            // Cleanup function to call dataUtils.destroy() when the component is unmounted
            dataUtils.destroy();
        };
    }, [dataUtils]);

    log('***\n***\n    dataUtils:', dataUtils);
    log('***\n    props.options:', props.options);

    props.options.links = linksCurrent.current;
    props.options.graphName = selectedTypeCurrent.current;

    let defaultType;

    if (dataReady) {
        defaultType = dataUtils.getDefaultTypeLabel();
    }

    return (
        <React.Fragment>
            {typeLabelsCurrent.current && (
                <Picker setLinks={setLinks} typeLabels={typeLabelsCurrent.current} type={defaultType} />
            )}
            {dataReady && (
                <WorkflowEditor {...props} />
            )}
        </React.Fragment>
    );
}

export default AppWorkflowEditor;
