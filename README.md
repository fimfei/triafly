# Подключение пакета

    npm i triafly-data-components --save

# Состав пакета
## Компоненты

| **Компонента**                  | Назначение            | Область<br/>применения | Документация                                                        |
|-----------------------------|------------------------|------------------------|--------------------------------------------------------------------|
| **Table**<br/>**callTable** | Универсальная таблица  | jsx<br/>js             | [Table<br/>callTable](src/App/components/Table/doc/TABLE.md#table) |
| **Graph**                   | Редактор графов        | jsx                    | [Graph](src/App/components/Graph/doc/GRAPH.md#graph)               |

## Виджеты

| **Виджет**                    | Назначение                                 | Область<br/>применения | Документация                                                        |
|-----------------------------|-------------------------------------------------------------------|------------------------|------------------------------------------------------------------------------------------------|
| **Popup**<br/>**callPopup** | Всплывающая панель с кастомным содержимым                         | jsx<br/>js                                                                 | [Popup<br/>callPopup](src/App/widgets/Popup/doc/POPUP.md#popup)                            |
| **Alert**<br/>**callAlert** | Окно с сообщением                                                 | jsx<br/>js                                                                 | [Alert<br/>callAlert](src/App/widgets/Alert/doc/ALERT.md#alert)                            |
| **ListPicker**              | Одиночный или множественный выбор из списка                       | jsx                                                                        | [ListPicker](src/App/widgets/ListPicker/doc/LISTPICKER.md#listpicker)                      |
| **PopupListPicker**         | Всплывающая панель одиночного или множественного выбора из списка | jsx                                                                        | [PopupListPicker](src/App/widgets/PopupListPicker/doc/POPUPLISTPICKER.md#popuplistpicker)  |
| **DatePicker**              | Панель выбора даты                                                | jsx                                                                        | [DatePicker](src/App/widgets/DatePicker/doc/DATEPICKER.md#datepicker)                     |
| **PeriodPicker**            | Панель выбора периода                                             | jsx                    | [PeriodPicker](src/App/widgets/PeriodPicker/doc/PERIODPICKER.md#periodpicker)                 |
| **ColorPicker**             | Стационарная панель выбора цвета                                  | jsx                    | [ColorPicker](src/App/widgets/ColorPicker/doc/COLORPICKER.md#colorpicker)                     |
| **PopupColorPicker**        | Всплывающая панель выбора цвета                                   | jsx                    | [PopupColorPicker](src/App/widgets/PopupColorPicker/doc/POPUPCOLORPICKER.md#popupcolorpicker) |
| **PopupFilesPicker**        | Панель выбора одного или нескольких файлов                        | jsx                    | [PopupFilesPicker](src/App/widgets/PopupFilesPicker/doc/POPUPFILESPICKER.md#popupfilespicker)  |

## Чарты

| **Чарт**             | Назначение                    | Документация                                                                |
|----------------------|-------------------------------|-----------------------------------------------------------------------------|
| **BarDiagram**       | Столбчатая диаграмма          | [BarDiagram](src/App/charts/BarDiagram/doc/BARDIAGRAM.md)                   |
| **Candlestick**      | Японские свечи                | [Candlestick](src/App/charts/Candlestick/doc/CANDLESTICK.md)                |
| **Chart**            | Обёртка для нескольких чартов | [Chart](src/App/charts/Chart/doc/CHART.md)                                  |
| **Chords**           | Хорды                         | [Chords](src/App/charts/Chords/doc/CHORDS.md)                               |
| **CoordinatesPanel** | Система координат             | [CoordinatesPanel](src/App/charts/CoordinatesPanel/doc/COORDINATESPANEL.md) |
| **GraphDiagram**     | График                        | [GraphDiagram](src/App/charts/GraphDiagram/doc/GRAPHDIAGRAM.md)             |
| **Heatmap**          | Тепловая карта                | [Heatmap](src/App/charts/Heatmap/doc/HEATMAP.md)                            |
| **Legend**           | Легенда                       | [Legend](src/App/charts/Legend/doc/LEGEND.md)                               |
| **ParallelSets**     | Параллельные наборы           | [ParallelSets](src/App/charts/ParallelSets/doc/PARALLELSETS.md)             |
| **RingDiagram**      | Круговая диаграмма            | [RingDiagram](src/App/charts/RingDiagram/doc/RINGDIAGRAM.md)                |



# Синхронизация обновлений пакета

Структура npm-пакета была сделана таким образом, чтобы
не приходилось делать много движений при выпуске очередной версии пакета

Достигается это тем, что в папке **./src** пакета лежит папка **App**

    ./src/App

которая
абсолютно идентична папке **App** в модуле **netdb-rspa** продукта **triafly**

    .../netdb-rspa/netdb_rspa/src/App

После очередного обновления модуля **netdb-rspa** (в процессе разработки)
можно просто скопировать **App** из него в **npm-пакет** и запустить пересборку



