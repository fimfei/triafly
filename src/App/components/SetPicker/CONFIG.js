//
// Основные настройки для всех компонентов
//
const CONFIG_SETPICKER = {
    lineHeight: 23,                    // высота строки списка по умолчанию в pх
    wheelTimeout: 200,                 // задержка (ms) на запрос к серверу при прокрутке странцы (дребезг скролла)
    searchTimeout: 500,                // задержка (ms) на запрос к серверу при изменении контекста поиска
    newItemLabel: ' ',                 // label нового элемента до тех пор пока его не поменял юзер
    emptyText: '',                     // текст, выводимый в строке, когда она еще не подгружена с сервера и загрузка еще не началась
    emptyId: '',                       // id для пустой строки
    loadingText: 'Загрузка...',        // текст, выводимый в строке во время её загрузки с сервера
    actionModes: {                     // кнопки из Actions
        search: 'search',                  // искать
        addLine: 'addLine',                // добавить строку
        edit: 'edit',                      // редактировать
    },
    operationCodes: {
        // коды операций из Actions
        actionsAddNewLine:            'actions-add-new-line',            // Добавить строку
        actionsRenameLine:            'actions-rename-line',             // Переименовываем строку
        actionsChangeSelectedLevels:  'actions-change-selected-levels',  // Чекаем по выбору уровня

        // коды операций из меню строки
        itemMenuSelectAllLevels:   'item-menu-select-all-levels',   // Выделить все уровни
        itemMenuSelectChild:       'item-menu-select-child',        // Выделить дочерние
        itemMenuRaiseLevel:        'item-menu-raise-level',         // Повысить уровень
        itemMenuLowerLevel:        'item-menu-lower-level',         // Понизить уровень
        itemMenuAddChild:          'item-menu-add-child',           // Добавить дочерний
        itemMenuDeleteWithLevels:  'item-menu-delete-with-levels',  // Удалить с уровнями
        itemMenuDelete:            'item-menu-delete',              // Удалить

        // коды операций над строкой
        itemSelect:                'item-select',                   // Чекнуть строку
        unselectell:               'unselect-all',                  // погасить всё

        // коды операций по смене фильтров
        changeSearchContext:       'change-search-context',         // Смена контекста поиска
        changeSearchFilter:        'change-search-filter',          // Смена фильтра
    },
    url: (set_id, elem_id) => ({
//            getSearchConstraints:   `/rspa/set/${set_id}/filter_by/`,
        getBlock:               `/rspa/set/${set_id}/page2/`,
        getCounters:            `/rspa/set/${set_id}/counters2/`,
        addNewItem:             `/rspa/set/${set_id}/elements/`,
        renameItem:             `/rspa/set/${set_id}/elements/${elem_id}/`,
        deleteItem:             `/rspa/set/${set_id}/elements/${elem_id}/`,
        constraints:            `/rspa/set/${set_id}/constraints/`,
    })
};
export default CONFIG_SETPICKER;
