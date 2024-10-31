const CONSTANTS_SETPICKER = {
    widgetName: 'setpicker',                      // имя хранилища данных виджета setPicker
    dataName: {                                   // наименования полей в хранилище
        sessionOptions:    '_sessionOptions',
        mainOptions:       '_mainOptions',
        pagesOptions:      '_pagesOptions',
        rootsOptions:      '_rootsOptions',
//        searchConstraints: '_searchConstraints',
        pagesIndexes:      '_pagesIndexes',
    },
    initStates: {
        spinner: false,
        spinner2: false,
    },
    initCommonStates: {
        currentListName: undefined,
        listNames: {},
    },
};

/////////////////////////////////// ТЕКУЩАЯ КОПИЯ ВИДЖЕТА ///////////////////////////////////

// адрес данных загруженных страниц
CONSTANTS_SETPICKER.pagesData = listName => `${CONSTANTS_SETPICKER.widgetName}-pagesData-${listName}`;
// адрес данных конкретной старницы в загруженных страницах
CONSTANTS_SETPICKER.pageData = (listName, pageIndex, index) => `${CONSTANTS_SETPICKER.pagesData(listName)}.${pageIndex}.${index}`;
// адрес _sessionOptions
CONSTANTS_SETPICKER.sessionOptionsIndex = listName => `${CONSTANTS_SETPICKER.pagesData(listName)}.${CONSTANTS_SETPICKER.dataName.sessionOptions}`;
// адрес _rootsOptions
CONSTANTS_SETPICKER.rootsOptionsIndex = listName => `${CONSTANTS_SETPICKER.pagesData(listName)}.${CONSTANTS_SETPICKER.dataName.rootsOptions}`;
// адрес _rootsOptions
//CONSTANTS_SETPICKER.searchConstraintsIndex = listName => `${CONSTANTS_SETPICKER.pagesData(listName)}.${CONSTANTS_SETPICKER.dataName.searchConstraints}`;

// адрес стейтов
CONSTANTS_SETPICKER.states = listName => `${CONSTANTS_SETPICKER.widgetName}-states-${listName}`;
// адрес определённого состояния
CONSTANTS_SETPICKER.state = (listName, stateName) => `${CONSTANTS_SETPICKER.states(listName)}.${stateName}`;
// адрес состояния спиннера
CONSTANTS_SETPICKER.stateSpinner = listName => `${CONSTANTS_SETPICKER.states(listName)}.spinner`;
CONSTANTS_SETPICKER.stateSpinner2 = listName => `${CONSTANTS_SETPICKER.states(listName)}.spinner2`;

/////////////////////////////////// ОБЩИЕ ДАННЫЕ ДЛЯ ВСЕХ КОПИЙ ВИДЖЕТА ///////////////////////////////////

// адрес стейтов
CONSTANTS_SETPICKER.commonStates = () => `${CONSTANTS_SETPICKER.widgetName}-commonStates`;
// адрес текущей копии сетпикера
CONSTANTS_SETPICKER.currentListName = () => `${CONSTANTS_SETPICKER.commonStates()}.currentListName`;
// адрес списка копий сетпикера
CONSTANTS_SETPICKER.listNams = () => `${CONSTANTS_SETPICKER.commonStates()}.listNames`;

export default CONSTANTS_SETPICKER;
