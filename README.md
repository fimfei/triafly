# triafly-data-components

## Введение

На данном этапе из пакета доступно подключение следующих сущностей:

- **Table** - React-компонента универсальной таблицы
- **callTable** - функция для вызова универсальной таблицы из нативного js 
- **Graph** - React-компонента универсального графа

Все эти сущности требуют подключения встроенного CSS

## Подключение

### package.json

    npm i triafly-data-components --save

## Table (jsx)

    import {Table} from 'triafly-data-components';
    import 'triafly-data-components/dist/style.css';

## callTable (js)

    import {callTable} from 'triafly-data-components';
    import 'triafly-data-components/dist/style.css';

## Graph (jsx)

    import {Graph} from 'triafly-data-components';
    import 'triafly-data-components/dist/style.css';

## Синхронизация обновлений пакета

Структура npm-пакета была сделана таким образом, чтобы
не приходилось делать много движений при выпуске очередной версии пакета

Достигается это тем, что в папке **./src** пакета лежит папка **App**

    ./src/App

которая
абсолютно идентична папке **App** в модуле **netdb-rspa** продукта **triafly**

    .../netdb-rspa/netdb_rspa/src/App

После очередного обновления модуля **netdb-rspa** (в процессе разработки)
можно просто скопировать **App** из него в **npm-пакет** и запустить пересборку

[Документация по использованию Table и callTable](src/App/components/Table/doc/TABLE.md#ЗАПУСК)

[Документация по использованию Graph](src/App/components/Graph/doc/GRAPH.md#ЗАПУСК)

