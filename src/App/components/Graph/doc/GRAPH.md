# ЗАПУСК

####
<Graph {...graphProps} />
####


# ПАРАМЕТРЫ

> graphProps = {\
&emsp;    [graphName](GRAPH.md#graphname): "text",\
&emsp;    [states](GRAPH.md#states): [...],\
&emsp;    [links](GRAPH.md#links): [...],\
&emsp;    [getComponentControlling](GRAPH.md#getcomponentcontrolling): () => {},\
&emsp;    [onChangeComponentState](GRAPH.md#onchangecomponentstate): {...},\
&emsp;    [options](GRAPH.md#options): {...},\
}


## graphName
Уникальное имя графа. Необходимо для сохранения настроек графа пользователем в **localeStorage**

## states
Array с описанием всех [узлов](thesaurus.md#узел-графа) графа.

````
states: [
    {label: 'country',   ...others...},
    {label: 'cities',    ...others...},
    {label: 'cpmpanies', ...others...},
    {label: 'city_type', ...others...},
]
````
### label
Обязательный параметр. Имя [узла](thesaurus.md#узел-графа), 
которое может выводится непосредственно на графе


<span style="display: flex; justify-content: center; align-items: center; width: 20px; height: 15px; color: white; font-size: 30px; background: blue; background: red; padding: 10px; 0; background-position: center; padding-bottom: 15px">⚠</span>
<span style="font-size: 16px; font-weight: bold;">
Используется как **ID** узла в графе, поэтому все **label** должны быть уникальными!
</span>
&emsp;\
&emsp;


![](img/image-2.png)

### others
В данные по [узлам](thesaurus.md#узел-графа) можно 
добавлять абсолютно любую информацию, которая может понадобиться
вызывающему граф коду при обработке каких-то событий. Эти данные не используются
компонентой и возвращаются неизменными во всех коллбэках

### Назначение states
Вы можете опустить этот параметр. В любом случае часть полного списка [узлов](thesaurus.md#узел-графа) компонента
получит из параметра **links** (см. ниже). **Полным списком** [узлов](thesaurus.md#узел-графа) будет список
полученный из **links** плюс список из **states**

Так зачем-же тогда нужен список [узлов](thesaurus.md#узел-графа) **states**?

В момент добавления нового [узла](thesaurus.md#узел-графа) на графе, компонента проверяет, какие
[узлы](thesaurus.md#узел-графа) из **полного списка** еще не задействованы в графе
и позволяет добавить только их. Поэтому, если списка **states**
не будет, вы не сможете добавить новый [узел](thesaurus.md#узел-графа) на граф

## links
Array с описанием [связей](thesaurus.md#связь-графа) между [узлами](thesaurus.md#узел-графа)

````
links: [
    {from: 'country',   to: 'cities',    value: 'text1', id: 1, ...others...},
    {from: 'country',   to: 'cpmpanies', value: 'text2', id: 2, ...others...},
    {from: 'cities',    to: 'cpmpanies', value: 'text3', id: 3, ...others...},
    {from: 'city_type', to: 'cities',    value: 'text4', id: 4, ...others...},
    {from: 'city_type', to: 'cpmpanies', value: 'text5', id: 5, ...others...},
]
````
### from
Обязательный. **ID** (label) исходящего [узла](thesaurus.md#узел-графа) [связи](thesaurus.md#связь-графа)
### to
Обязательный. **ID** (label) входящего [узла](thesaurus.md#узел-графа) [связи](thesaurus.md#связь-графа)
### value
Обязательный. Текст, который (возможно) будет выводиться поверх связи на графе
### id
Обязательный. уникальный для каждой записи
### others
В данные по [связям](thesaurus.md#связь-графа) можно добавлять
любую информацию, которая может понадобиться
вызывающему граф коду при обработке каких-то событий. Эти данные не используются
компонентой и возвращаются неизменными во всех коллбэках

## getComponentControlling
Эта функция, котороую вызовет компонента после её первоначальной отрисовки,
и в которую (в параметре) положит объект с набором функций, позволяющих управлять поведением
графа извне
````
const getComponentControlling = data => {
    console.log('UTILS controlling', data)
}
````
![](img/image.png)

Подробно о функциях контроллинга графа смотри в **[controlling](controlling.md)**

## onChangeComponentState
Набор обработчиков событий, происходящих в графе
````
onChangeComponentState: {
    onNodeSelect:          () => {},
    onGraphElementsDelete: () => {},
    onNodeAdd:             () => {},
    onNodeRename:          () => {},
    onLinkSelect:          () => {},
    onLinkReverse:         () => {},
    onLinkAdd:             () => {},
    onLinkAndNodeAdd:      () => {},
    onDropNode:            () => {},
}
````

Подробнее см. в **[events](events.md)**


## options
Параметры настройки внешнего вида и поведения графа. 
Описание смотри в **[options](options.md)**
>
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;
# МИНИМАЛИСТИЧЕСКИЙ ЗАПУСК

## App.jsx

````
import React from 'react';

import {Graph} from 'triafly-data-components';
import 'triafly-data-components/dist/style.css';

import './style.scss'

const App = () => {

    const links = [
        {
            "from": "companies",
            "to": "country",
            label: "companies => country",
            id: 1
        },
        {
            "from": "country",
            "to": "companies",
            label: "country => companies",
            id: 2
        },
        {
            "from": "country",
            "to": "cities",
            label: "country => cities",
            id: 3
        },
    ];

    const states = [
        {label: "country"},
        {label: "cities"},
        {label: "companies"},
        {label: "address"},
        {label: "any"},
    ];

    const Navigator = props => {
        return (
            <div className="test-navigator">{props.id}</div>
        )
    }

    const Body = props => {
        return (
            <div className="test-body">Body for {props.id}</div>
        )
    }

    const Link = props => {
        return (
            <div
                className="test-link"
                style={props.positionCSS}
            >
                {`ребро "${props.link.label}"`}
            </div>
        )
    }

    return (
        <Graph
            graphName="myGraph"
            links={links}
            states={states}
            options={{
                graphView: {
                    components: {
                        navigator: Navigator,
                        body: Body,
                        link: Link,
                    },
                },
            }}

        />
    )
}
````
## style.scss
````
.test-navigator {
    background: #ff0;
    padding: 5px 10px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
}

.test-body {
    background: #fff;
    padding: 10px;
    box-shadow: inset 0px 1px 0px 0px #888;
}

.test-link {
    border-radius: 2px;
    box-shadow: 0 0 0 1px #888;
    font-size: 12px;
    padding: 2px 5px;
    pointer-events: all;
    position: absolute;
    background: #575795;
    color: #fff;
}

.graph-node-wrapper {
    box-shadow: 0px 0px 4px 1px #000;
}
````

&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;\
&emsp;

