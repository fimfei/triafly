
const root = window;

const COMMUNICATION = {
    Backbone: root.Backbone,
    views: root.NetDB.namespace('views'),
    utils: root.NetDB.namespace('utils'),
    assets: root.NetDB.namespace('assets'),
    widgets: root.NetDB.namespace('widgets'),
    slickUtils: root.NetdbSlickgrid.Utils(),
    interpolate: root.interpolate,
    api: root.NetDB.namespace('API')
};

COMMUNICATION.notify = ({isError, isSpinner, isUnclosable, text, delay}) => { // success info eroor 
    const notify = COMMUNICATION.utils.notify({
        type: isError ? 'error' : (isSpinner ? 'info' : 'success'),
        message: {text},
        closable: !isUnclosable,
        fadeOut: delay ? {delay} : {enabled: false},
    });
    return notify;
}

COMMUNICATION.prompt = ({text, buttons: _buttons, confirmFn}) => {
    const typesClasses = {
        error: 'tf_btn-error',
        primary: 'tf_btn-primary',
        cancel: 'tf_btn-transparent',
    }
    const buttons = _buttons.map(button => ({
        text: button.text,
        class: typesClasses[button.type],
        fn: button.fn,
    }));
    new COMMUNICATION.views.PromptsView().show({confirmFn, text, buttons});
}

COMMUNICATION.getFileMultiple = (el, options) => {
    return new COMMUNICATION.Backbone.FileMultiple(el, options);
}

COMMUNICATION.getPeriodpicker = (el, options) => {
    return new COMMUNICATION.assets.Periodpicker(el, options);
}

COMMUNICATION.getDatepicker = (el, options) => {
    return new COMMUNICATION.Backbone.Datetimepicker(el, options);
}

COMMUNICATION.getSetpicker = (el, options) => {
    return new COMMUNICATION.widgets.Setpicker(el, options);
}

COMMUNICATION.getPf = (value) => {
    return COMMUNICATION.api.predefined.pf(value);
}

COMMUNICATION.getDescriptor = (descr) => {
    return COMMUNICATION.api.descriptors.get(descr) || COMMUNICATION.api.descriptors.find(descr => descr.is_lineset_multiple()); //временное решение для получения
    // случайного показателя определенного типа
}

COMMUNICATION.datetimeToHuman = (...args) => {
    return COMMUNICATION.slickUtils.datetimeToHuman(...args);
}

COMMUNICATION.fileMultipleToHuman = (value) => {
    return COMMUNICATION.slickUtils.fileMultipleToHuman(value);
}

COMMUNICATION.prepareChangesToSave = (...args) => {
    COMMUNICATION.slickUtils.prepareChangesToSave(...args);
}

COMMUNICATION.keyCodes = COMMUNICATION.assets.keyCodes(true);

export default COMMUNICATION;
