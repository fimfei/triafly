# POPUPCOLORPICKER

Панель выбора цвета. Отрисовывает ячейку, при клике на которую всплвает панель выбора цвета

````
    <PopupColorPicker {...popupColorPickerProps} />
````

# ПАРАМЕТРЫ popupColorPickerProps

| Имя                | Тип               | Назначение                                                       |
|--------------------|-------------------|------------------------------------------------------------------|
| color              | Text              | начальное значение цвета ("#f00")                                |
| pickerType         | Text              | выбор вида панели: 'sketch' или 'compact'                        |
| onChange           | Function          | коллбэк, который вызывается при выборе цвета (в парамтре - цвет) |
| className          | Text              | кастомный класс обёртки пикера                                   |
| style              | Text              | кастомные стили обёртки пикера                                   |
| setTextColor       | Bool              | true - менять цвет текста ячейки ввода при выборе цвета          |
| setBackgroundColor | Bool              | true - менять цвет фона ячейки ввода при выборе цвета            |
| children           | Text or Component | содержимое поля ввода                                            |