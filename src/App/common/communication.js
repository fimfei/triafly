
const root = window;

const COMMUNICATION = root?.NetdbSlickgrid?.Utils ? {
    Backbone: root.Backbone,
    views: root.NetDB.namespace('views'),
    utils: root.NetDB.namespace('utils'),
    assets: root.NetDB.namespace('assets'),
    widgets: root.NetDB.namespace('widgets'),
    slickUtils: root.NetdbSlickgrid.Utils(),
    interpolate: root.interpolate,
    api: root.NetDB.namespace('API')
} : {
    isAbsent: true
};

COMMUNICATION.notify = ({isError, isSpinner, isUnclosable, text, delay}) => {
    if(COMMUNICATION.isAbsent) return null;

    const notify = COMMUNICATION.utils.notify({
        type: isError ? 'error' : (isSpinner ? 'info' : 'success'),
        message: {text},
        closable: !isUnclosable,
        fadeOut: delay ? {delay} : {enabled: false},
    });
    return notify;
}

COMMUNICATION.prompt = ({text, buttons: _buttons, confirmFn}) => {
    if(COMMUNICATION.isAbsent) return null;

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
    if(COMMUNICATION.isAbsent) return null;

    return new COMMUNICATION.Backbone.FileMultiple(el, options);
}

COMMUNICATION.getPeriodpicker = (el, options) => {
    if(COMMUNICATION.isAbsent) return null;

    return new COMMUNICATION.assets.Periodpicker(el, options);
}

COMMUNICATION.getDatepicker = (el, options) => {
    if(COMMUNICATION.isAbsent) return null;

    return new COMMUNICATION.Backbone.Datetimepicker(el, options);
}

COMMUNICATION.getSetpicker = (el, options) => {
    if(COMMUNICATION.isAbsent) return null;

    return new COMMUNICATION.widgets.Setpicker(el, options);
}

COMMUNICATION.getPf = (value) => {
    if(COMMUNICATION.isAbsent) return null;

    return COMMUNICATION.api.predefined.pf(value);
}

COMMUNICATION.getDescriptor = (descr) => {
    if(COMMUNICATION.isAbsent) return null;

    return COMMUNICATION.api.descriptors.get(descr) || COMMUNICATION.api.descriptors.find(descr => descr.is_lineset_multiple()); //временное решение для получения
    // случайного показателя определенного типа
}

COMMUNICATION.datetimeToHuman = (...args) => {
    if(COMMUNICATION.isAbsent) return null;

    return COMMUNICATION.slickUtils.datetimeToHuman(...args);
}

COMMUNICATION.fileMultipleToHuman = (value) => {
    if(COMMUNICATION.isAbsent) return null;

    return COMMUNICATION.slickUtils.fileMultipleToHuman(value);
}

COMMUNICATION.prepareChangesToSave = (...args) => {
    if(COMMUNICATION.isAbsent) return null;

    COMMUNICATION.slickUtils.prepareChangesToSave(...args);
}

COMMUNICATION.keyCodes = COMMUNICATION.isAbsent ? null : COMMUNICATION.assets.keyCodes(true);

export default COMMUNICATION;
