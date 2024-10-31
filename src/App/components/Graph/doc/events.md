# EVENTS

При построении графа можно через
объект [onChangeComponentState](GRAPH.md#onchangecomponentstate)
подписаться на события, которые происходят
внутри компоненты и каждому этому
событию назначить свой обработчик

Компонент графа позволяет подписаться на следующие события:

| Событие     | Когда происходит     |
|-------------|----------------------|
|[onDropNode](#ondropnode) | дропнут новый [узел](thesaurus.md#узел-графа) |
|[onGraphElementsDelete](#ongraphelementsdelete) | удалены несколько [узлов](thesaurus.md#узел-графа) и [связей](thesaurus.md#связь-графа) |
|[onLinkAdd](#onlinkadd) | добавлена новая [связь](thesaurus.md#связь-графа) |
|[onLinkAndNodeAdd](#onlinkandnodeadd) | добавлен новый [узел](thesaurus.md#узел-графа) со  [связью](thesaurus.md#связь-графа) |
|[onLinkReverse](#onlinkreverse) | [связь](thesaurus.md#связь-графа) инвертирована |
|[onLinkSelect](#onlinkselect) | выбрана активная [связь](thesaurus.md#связь-графа) |
|[onNodeAdd](#onnodeadd) | добавлен новый [узел](thesaurus.md#узел-графа) |
|[onNodeRename](#onnoderename) | [узел](thesaurus.md#узел-графа) переименован |
|[onNodeSelect](#onnodeselect) | выбран активный [узел](thesaurus.md#узел-графа) |


## onDropNode
Событие дропа на поле графа нового [узла](thesaurus.md#узел-графа)
````
onDropNode(label);
````
|ПРИНИМАЕМЫЙ ПАРАМЕТР|ЗНАЧЕНИЕ|
|---|---|
|**label**| **label** [узла](thesaurus.md#узел-графа) |
[В начало](#events)





## onGraphElementsDelete
Событие удаления из графа сразу несколькиз [узлов](thesaurus.md#узел-графа)
и нескольких [связей](thesaurus.md#связь-графа)
````
onGraphElementsDelete({deletedNodes, deletedLinks});
````
|ПРИНИМАЕМЫЙ ПАРАМЕТР|ЗНАЧЕНИЕ|
|---|---|
|**deletedNodes**| Array **label** удаляемых [узлов](thesaurus.md#узел-графа) |
|**deletedLinks**| Array элементов [links](GRAPH.md#links) удаляемых [связей](thesaurus.md#связь-графа) |
[В начало](#events)





## onLinkAdd
Событие создания новой [связи](thesaurus.md#связь-графа)
между двумя существующими [узлами](thesaurus.md#узел-графа)
````
onLinkAdd({from, to, id});
````
|ПРИНИМАЕМЫЙ ПАРАМЕТР|ЗНАЧЕНИЕ|
|---|---|
|**from**| **ID** [узла](thesaurus.md#узел-графа), из которого исходит созданая [связь](thesaurus.md#связь-графа) |
|**to**| **ID** [узла](thesaurus.md#узел-графа), в который ведёт созданная [связь](thesaurus.md#связь-графа) |
|**id**| **ID** [связи](thesaurus.md#связь-графа) |
[В начало](#events)





## onLinkAndNodeAdd
Событие добавления нового [узла](thesaurus.md#узел-графа) со  [связью](thesaurus.md#связь-графа)
````
onLinkAndNodeAdd({
                link: {
                    from,
                    to,
                    id
                },
                node,
            });
````
|ПРИНИМАЕМЫЙ ПАРАМЕТР|ЗНАЧЕНИЕ|
|---|---|
|**link**| данные по созданной связи |
|&emsp;**link.from**| &emsp;**ID** [узла](thesaurus.md#узел-графа), из которого ведёт созданная [связь](thesaurus.md#связь-графа) |
|&emsp;**link.to**| &emsp;**ID** [узла](thesaurus.md#узел-графа), в который ведёт созданная [связь](thesaurus.md#связь-графа) |
|&emsp;**link.id**| &emsp;**ID** [связи](thesaurus.md#связь-графа) |
|**node**| **ID** созданного [узла](thesaurus.md#узел-графа) |
[В начало](#events)





## onLinkReverse
Событие реверсирования направления [связи](thesaurus.md#связь-графа) между двумя
[узлами](thesaurus.md#узел-графа). То есть, когда в
описании [связи](thesaurus.md#связь-графа) местами меняются поля **from** и **to**
````
onLinkReverse({from, to, oldId, newId});
````
|ПРИНИМАЕМЫЙ ПАРАМЕТР|ЗНАЧЕНИЕ|
|---|---|
|**from**| **ID** [узла](thesaurus.md#узел-графа), из которого ведёт реверсированная [связь](thesaurus.md#связь-графа) |
|**to**| **ID** [узла](thesaurus.md#узел-графа), в который ведёт реверсированная [связь](thesaurus.md#связь-графа) |
|**oldId**| **ID** [связи](thesaurus.md#связь-графа) до реверсирования |
|**newId**| **ID** [связи](thesaurus.md#связь-графа) после реверсирования |
[В начало](#events)





## onLinkSelect
Событие выбора юзером активной [связи](thesaurus.md#связь-графа) графа
````
onLinkSelect({from, to, id});
````
|ПРИНИМАЕМЫЙ ПАРАМЕТР|ЗНАЧЕНИЕ|
|---|---|
|**from**| **ID** [узла](thesaurus.md#узел-графа), из которого ведёт реверсированная [связь](thesaurus.md#связь-графа) |
|**to**| **ID** [узла](thesaurus.md#узел-графа), в который ведёт реверсированная [связь](thesaurus.md#связь-графа) |
|**id**| **ID** [связи](thesaurus.md#связь-графа) |
[В начало](#events)





## onNodeAdd
Событие добавления нового [узла](thesaurus.md#узел-графа) графа
````
onNodeAdd(id);
````
|ПРИНИМАЕМЫЙ ПАРАМЕТР|ЗНАЧЕНИЕ|
|---|---|
|**id**| **ID** (**label**) нового [узла](thesaurus.md#узел-графа) |
[В начало](#events)





## onNodeRename
Собфтие переименования (смены **label**) [узла](thesaurus.md#узел-графа) графа
````
onNodeRename({oldValue, newValue});
````
|ПРИНИМАЕМЫЙ ПАРАМЕТР|ЗНАЧЕНИЕ|
|---|---|
|**oldValue**| старый **ID** (**label**) [узла](thesaurus.md#узел-графа) |
|**newValue**| новый **ID** (**label**) [узла](thesaurus.md#узел-графа) |
[В начало](#events)






## onNodeSelect
Событие выбора юзером активного [узла](thesaurus.md#узел-графа) графа
````
onNodeSelect(id);
````
|ПРИНИМАЕМЫЙ ПАРАМЕТР|ЗНАЧЕНИЕ|
|---|---|
|**id**| **ID** (**label**) [узла](thesaurus.md#узел-графа) |
[В начало](#events)




>
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
