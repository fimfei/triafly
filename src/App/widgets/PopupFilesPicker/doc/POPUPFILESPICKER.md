# POPUPFILESPICKER

Панель выбора файла или группы файлов.
Отрисовывает ячейку, при клике на которую всплывает панель выбора файлов

````
    <PopupFilesPicker {...popupFilesPickerProps} />
````

# ПАРАМЕТРЫ popupFilesPickerProps

| Имя                                       | Тип      | Назначение                                           |
|-------------------------------------------|----------|------------------------------------------------------|
| [value](#value)                           | Text     | Начальное значение списка имён файлов                |
| isMultiple                                | Bool     | флаг выбора нескольких файлов                        |
| [onChange](#onchange)                     | Function | обработчик события изменения списка выбранных файлов |
| className                                 | Text     | кастомные классы обёртки компроненты                 |
| style                                     | Object   | кастомные стили обёртки компоненты                   |
| [maxHeightMultiList](#maxheightmultiList) | Number   | максимальная высота в px списка выбранных файлов     |


## value

Формат списка имён выбранных файлов:

**"file1, file2, ... fileN"**

где file - имена файлов, разделённые между собой запятой с пробелом

## onChange

При выборе фала(ов) в этот коллбэк будет передаваться следующая информация:

````
    onChange={data => {
        const {files, newFilesData, value} = data;
        ...
    }}    
````

| Параметр     | Тип    | Содержимое                                                                                            |
|--------------|--------|-------------------------------------------------------------------------------------------------------|
| files        | Array  | список текстовых значений с именами выбранных файлов                                                  |
| newFilesData | Object | каждый элемент этого объекта имеет ключом имя файла, а содержимым - объектом системного типа **File** |
| value        | Text   | То же что и files, только в одну строку с сепаратором **", "**                                        |


## maxHeightMultiList

В случае множественного вфбоа можно увидеть панель с перечнем выбранных файлов.

Так
как этот список может быть очень большим, при помощи **maxHeightMultiList** можно
ограничить максимальную высоту (в px)
этого списка.

По умолчанию **maxHeightMultiList** = **150**