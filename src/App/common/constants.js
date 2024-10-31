const CONSTANTS = {};

CONSTANTS.fieldTypes = {
    string:       {id: '-34',   label: 'Строка',                            editor: 'TableCellEditorString'},
    integer:      {id: '-35',   label: 'Целое',                             editor: 'TableCellEditorInteger'},
    positive:     {id: '-36',   label: 'Неотрицательное',                   editor: 'TableCellEditorPositive'},
    float:        {id: '-37',   label: 'Число',                             editor: 'TableCellEditorFloat'},
    set:          {id: '-38',   label: 'Справочник',                        editor: 'TableCellEditorSet'},
    bool:         {id: '-40',   label: 'Да/Нет',                            editor: 'TableCellEditorBool'},
    date:         {id: '-41',   label: 'Дата и время',                      editor: 'TableCellEditorDate'},
    period:       {id: '-42',   label: 'Период',                            editor: 'TableCellEditorPeriod'},
    file:         {id: '-43',   label: 'Файл',                              editor: 'TableCellEditorFile'},
    setmultiple:  {id: '-44',   label: 'Множество значений из справочника', editor: 'TableCellEditorSetMultiple'},
    filemultiple: {id: '-46',   label: 'Множественный файл',                editor: 'TableCellEditorFileMultiple'},
    currency:     {id: '-1100', label: 'Денежный',                          editor: 'TableCellEditorFloat'},
};

CONSTANTS.fieldTypesById = (() => {
    return Object.entries(CONSTANTS.fieldTypes).reduce((accumulator, value) => {
        accumulator[value[1].id]= {type: value[0], label: value[1].label, editor: value[1].editor};
        return accumulator;
    }, {});
})(); // {-34: {type: 'string', label: 'Строка', editor: 'TableCellEditorString'}...}

CONSTANTS.booleanItems = [
    {
        serverValue: true,
        name: 'Да'
    },
    {
        serverValue: false,
        name: 'Нет'
    },
];

export default CONSTANTS;