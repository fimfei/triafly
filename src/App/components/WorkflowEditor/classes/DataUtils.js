import {queriesLinksEditor, queriesWorkflowEditor} from "../../../queries";

const log = console.debug;

class DataUtils {
    constructor({pfKeys, setData}) {
        if (DataUtils.instance) {
            log('DataUtils -> instance:', DataUtils.instance);
            return DataUtils.instance;
        }

        DataUtils.instance = this;

        this.pfKeys = pfKeys;
        this.setData = setData;
        this.lastSelectedTypeStorageKey = 'lastSelectedType';

        this.init();
    }

    destroy() {
        log('DataUtils -> destroy');
        DataUtils.instance = null;
    }

    init() {
        log('DataUtils -> load data');

        Promise.all([
            this.getCollectTypes(),
            this.getRoles(),
            this.getEvents(),
            this.getStates(),
            this.getWorkflowRegistry(),
        ]).then(() => {
            log('***\n DataUtils -> load data done:', this);
            const params = this.makeParams();
            const types  = this.collectTypeLabels;

            this.parseRegistry();

            this.setData({
                params,
                types,
            });
        });
    }

    getEvents() {
        const {eventSetId, name} = this.pfKeys;

        if (!eventSetId) return;

        return queriesWorkflowEditor.getNetdbSet(eventSetId)
            .then(events => {
                log('DataUtils ->  *** events:', events);

                this.events = events.map((e) => {
                    return {
                        id:    e.id,
                        label: e[name],
                    };
                });
            });
    }

    getCollectTypes() {
        const {name, typeSetId} = this.pfKeys;

        if (!typeSetId) return;

        return queriesWorkflowEditor.getNetdbSet(typeSetId)
            .then(types => {
                log('DataUtils ->  *** types:', types);
                this.collectTypes = types;

                const labels = types.map(type => {
                    return {
                        id   : type.id,
                        label: type[name],
                    }});

                log('DataUtils ->   *** labels:', labels);

                this.collectTypeLabels = labels;
            });
    }

    getDefaultTypeLabel() {
        const lastSelectedType = localStorage.getItem(this.lastSelectedTypeStorageKey);
        log('DataUtils ->  getDefaultTypeLabel lastSelectedType:', lastSelectedType);

        return lastSelectedType || this.getFirstTypeLabel();
    }

    getFirstTypeLabel() {
        return this.collectTypeLabels[0].label;
    }

    getLinksByType(type) {
        log('DataUtils -> getLinksByType:', type);
        //
        // links - Array описания всех переходов между состояниями
        // обязательными являются только поля "from", "to" и "id", всё остальное будет возвращаться в колбэках
        // id должен быть уникальным, хоть текст, хоть число - всё равно
        //
        // только эта таблица модифицируется редактором
        //
        if (typeof type !== 'string') return;

        this.saveSelectedType(type);

        let byType = this.registryByType[type];
        log(' ** byType:', byType);

        if (!byType) {
            // Если нет ссылок по выбранному типу вернуть первый
            byType = this.registryByType[this.getFirstTypeLabel()];
        }

        const editorFormat = byType.map((row) => {
            const {cells} = row;

            // FIXME done with parameters from .linkParams

            const data = {
                attach:   cells.find(c => c.name === 'Обязательно прикладывать файлы')?.value,
                bbb:      cells.find(c => c.name === 'Показатель утверждения')?.value,
                ссс:      cells.find(c => c.name === 'Значение утверждения')?.value,
                comment:  cells.find(c => c.name === 'Комментарий обязателен?')?.value,
                editable: cells.find(c => c.name === 'Можно редактировать данные')?.value,
                event:    cells.find(c => c.name === 'Тип события')?.value,
                from:     cells.find(c => c.name === 'Предыдущий статус')?.value || 0,
                id:       row.id,
                to:       cells.find(c => c.name === 'Новый статус')?.value,
                value:    cells.find(c => c.name === 'Значение события')?.value,
                role:     cells.find(c => c.name === 'Роль сбора')?.value,
                sees:     cells.find(c => c.name === 'Видит в текущих')?.value,
                status:   cells.find(c => c.name === 'Статус события')?.value,
            };

            return data;
        });

        log(' ** editorFormat:', editorFormat);

        return editorFormat;
    }

    getRoles() {
        //
        // roles - Array названий ролей пользователя
        // редактором не модифицируется
        //
        const {name, roleSetId} = this.pfKeys;

        if (!roleSetId) return;

        return queriesWorkflowEditor.getNetdbSet(roleSetId)
            .then(roles => {
                log('DataUtils ->  *** roles:', roles);
                const parsedRoles = roles.map(role => {
                    return {
                        label: role[name],
                        id: role.id,
                    };
                });
                log('DataUtils ->  *** parsedRoles:', parsedRoles);

                this.roles = parsedRoles;
            });
    }

    getStates() {
        //
        // states - Array всех состояний системы.
        // обязательным является только поле "label"
        // редактором не модифицируется
        //
        const {name, stateSetId} = this.pfKeys;

        if (!stateSetId) return;

        return queriesWorkflowEditor.getNetdbSet(stateSetId)
            .then(states => {
                log(' *** states:', states);

                const parsedStates = states.map(state => {
                    return {
                        id:    state.id,
                        label: state[name],
                    }
                });
                log(' *** parsedStates:', parsedStates);

                this.states = parsedStates;
            });
    }

    getWorkflowRegistryAllPages(resolveRegistry) {
        log('DataUtils -> ** getWorkflowRegistryAllPages');

        const this_    = this;
        const id       = this.pfKeys.workflow;
        const pageNum  = 1;
        const pageSize = 100;

        const getWorkflowRegistryPage = (pageNum, pageSize) => {
            log('DataUtils -> ** getWorkflowRegistryPage pageNum, pageSize:', pageNum, pageSize);

            return queriesWorkflowEditor.getRelationRegistry({ id, pageNum, pageSize })
                .then(wf => {
                    log(' *** getWorkflowRegistryPage wf:', wf);
                    this_.updateWorkflowRegistry(wf);

                    const dataLength = wf.data.reportData.data.length;
                    log(' *** getWorkflowRegistryPage dataLength:', dataLength);

                    if (dataLength < pageSize) {
                        resolveRegistry();
                    } else {
                        pageNum++;

                        getWorkflowRegistryPage(pageNum, pageSize);
                    }
                });
        }

        getWorkflowRegistryPage(pageNum, pageSize);
    }

    getWorkflowRegistry(pageNum = 1) {
        log('DataUtils -> ** getRegistry');

        return new Promise((resolve) => {

            this.getWorkflowRegistryAllPages(resolve);
        });
    }

    makeParams() {
        //
        // parameters - Array всех редактируемых параметров перехода из одного сосотояния в другое
        //
        //     label         - название параметра (название столбца в табличном виде). Обязательное поле
        //     alias         - название индекса в links, по которому лежит текущее значение. Обязательное поле
        //     list          - признак того, что этот параметр редактируется выбором из указанного списка
        //                     Может быть двух типов:
        //                     1) ['A', 'B', 'C', 'D']
        //                     2) [{label: 'aaa', ...}, {label: 'bbb', ...}, ...]
        //     isMultiSelect - признак множественного выбора. Работает только в паре с list. По умолчанию === false
        //     isText        - признак того, что этот параметр редактируется как текстовое поле
        //     placeholder   - placeholder для поля ввода. Работает только в паре с isText.
        //     isBool        - признак того, что этот параметр редактируется как булево значение
        //
        // редактором не модифицируется
        //

        // FIXME done with parameters
        const parameters = [
            {label: 'Предыдущий статус',               alias: 'from',     list  : this.states,                                     },
            {label: 'Новый статус',                    alias: 'to',       list  : this.states,                                     },
            {label: 'Тип события',                     alias: 'event',    list  : this.events,                                     },
            {label: 'Значение события',                alias: 'value',    isText: true,   placeholder: 'Введите значение события', },
            {label: 'Статус события',                  alias: 'status',   list  : this.states,                                     },
            {label: 'Роль сбора',                      alias: 'role',     list  : this.roles,                                      },
            // {label: 'Уведомляемые роли',               alias: 'roles',    list  : this.roles,    isMultiSelect: true,              },
            // {label: 'Шаблон уведомления',              alias: 'aaa',      list  : ['A', 'B', 'C', 'D'],                            },
            {label: 'Показатель утверждения',          alias: 'bbb',      list  : [111, 222, 333, 444],                            },
            {label: 'Значение утверждения',            alias: 'ссс',      list  : [{label: 1}, {label: 2}, {label: 3}, {label: 4}],},
            {label: 'Видит в текущих',                 alias: 'sees',     isBool: true,                                            },
            {label: 'Можно редактировать данные',      alias: 'editable', isBool: true,                                            },
            {label: 'Обязательно прикладывать файлы',  alias: 'attach',   isBool: true,                                            },
            {label: 'Комментарий обязателен?',         alias: 'comment',  isBool: true,                                            },
        ];

        this.linkParams = parameters.map(p => p);
        this.linkParams.push({
            label: 'Тип сбора', alias: 'type', list: this.collectTypeLabels,
        });

        const linkParamsObject = this.linkParamsObject = {};

        parameters.forEach(p => {
            linkParamsObject[p.label] = p.alias;
        })

        return parameters;
    }

    parseChanges(type, links) {
        log('DataUtils -> parseChanges type:', type);
        log('DataUtils -> *** links:', links);
        const linksByType = this.registryByType[type];
        const form = [];
        const deleteForm = [];
        const dataUtils = this;

        log('DataUtils -> ** linksByType:', linksByType);

        function compareLinks(newLink, oldLink) {
            // return true if links are different
            // false if it's are identical

            log('DataUtils -> *** compareLinks newLink:', newLink);
            log('DataUtils -> *** *** oldLink:', oldLink);

            const oldLinkData = dataUtils.parseLink(oldLink);
            log('DataUtils -> *** compareLinks oldLinkData:', oldLinkData);

            let hasChanges = false;

            for (const key in newLink) {
                if ((!oldLinkData[key] && newLink[key]) ||
                    (oldLinkData[key] !== newLink[key]))
                {
                    log(` **** oldLinkData[${key}]:`, oldLinkData[key]);
                    log(` **** newLink[${key}]:`, newLink[key]);

                    hasChanges = true;

                    if (key === 'from' && (newLink[key] === 'START')) {
                        hasChanges = false;
                    }
                }
            }

            return hasChanges;
        }

        links.forEach(link => {
            if (!link.id) {
                log('new link:', link);
            }

            if (!link.value) {
                // Сохранение без "Значение события" - то же самое что и удаление
                link.value = '0';
            }

            const oldLink = linksByType.find(({id}) => id === link.id);
            log('oldLink:', oldLink);

            if (oldLink) {
                const wasChanged = compareLinks(link, oldLink);

                log('wasChanged:', wasChanged);

                if (wasChanged) {
                    const updatedLink = this.toServerLink(link, oldLink, type);

                    log('updatedLink:', updatedLink);

                    form.push(updatedLink);
                }
            } else {
                log('New link added');
                // Create new link form
                log('New link type:', type);
                log('New link:', link);

                const sampleLink = linksByType[0];
                log('sampleLink:', sampleLink);

                const createLink = this.toServerLink(link, sampleLink, type);
                createLink.id = null; // для создания новых ссылок
                log('createLink:', createLink);

                form.push(createLink);
            }
        });

        if (linksByType.length > links.length) {
            linksByType.forEach(link => {
                const match = links.find(({id}) => id === link.id);

                if (!match) {
                    deleteForm.push(link.id);
                }
            });
        }

        log('DataUtils -> parseChanges -> form:', form);
        log(' ************************ -> deleteForm:', deleteForm);

        const updateForm = this.prepareForm(form, deleteForm);

        const {workflow} = this.pfKeys;

        return {
            workflow,
            updateForm,
            hasChanges: updateForm.hasChanges,
        };
    }

    parseLink(link) {
        log('DataUtils -----> parseLink link:', link);

        const params = this.linkParamsObject;
        const editorFormat = {
            id: link.id,
        };
        const {cells} = link;

        cells.forEach((c) => {
            if (params[c.name] && c.value) {
                editorFormat[params[c.name]] = c.value;
            }
        });

        log('DataUtils -----> parseLink editorFormat:', editorFormat);

        return editorFormat;
    }

    parseRegistry() {
        const workflowRegistry = this.workflowRegistry;
        log('DataUtils -> ** workflowRegistry:', workflowRegistry);

        const sourceRows    = workflowRegistry.data.reportData.data;
        const sourceHeaders = workflowRegistry.headers.colHeader[0];
        const linkRows = [];
        const this_ = this;

        const getValue = (dbValue, name) => {
            if (!dbValue) return;

            const param = this_.linkParams.find(({ label }) => label === name);

            if (param?.list) {
                return param.list.find(({ id }) => id === dbValue)?.label;
            }

            return dbValue;
        }

        log(' ** sourceRows:', sourceRows);
        log(' ** sourceHeaders:', sourceHeaders);

        sourceRows.forEach((row) => {
            const linkRow = {
                id: row[0].obj,
                cells: [],
            };

            row.forEach((col, i) => {
                const c = {};

                c.name  = sourceHeaders[i].name;
                c.value = getValue(col.db_value, c.name);
                c.id    = col.db_value;

                linkRow.cells.push(c);
            });

            linkRows.push(linkRow);
        });

        log('linkRows:', linkRows);
        this.registry = linkRows;

        this.splitRegistryRowsByType();
    }

    prepareForm(form, deleteForm = []) {
        log('DataUtils -> prepareForm:', form);
        const updateForm = [];
        const createForm = [];
        const descriptors = this.workflowRegistry.headers.descriptors_list;
        log('DataUtils -> ** descriptors:', descriptors);

        const descriptorsList = descriptors.map(d => d[0]);
        log('DataUtils -> ** descriptorsList:', descriptorsList);

        form.forEach((link) => {
            log('DataUtils -> ** link:', link);
            const data = [];
            data[0] = link.id;
            data[1] = [];

            link.cells.forEach((cell, i) => {
                if (descriptors[i]) {
                    data[1][i] = {
                        descr: descriptors[i][0],
                        value: cell.id || cell.value || null,
                    };
                }
            });

            if (data[0]) {
                updateForm.push(data);
            } else {
                createForm.push(data);
            }

        });

        log('DataUtils -> ** createForm:', createForm);
        log('DataUtils -> ** updateForm:', updateForm);
        log('DataUtils -> ** deleteForm:', deleteForm);

        const hasChanges = !!(createForm.length || updateForm.length || deleteForm.length);

        return {
            descriptors: descriptorsList,
            toUpdate:    JSON.stringify(updateForm),
            toCreate:    JSON.stringify(createForm),
            toDelete:    JSON.stringify(deleteForm),
            hasChanges,
        };
    }

    saveSelectedType(value) {
        localStorage.setItem(this.lastSelectedTypeStorageKey, value);
    }

    saveLinks(type, links) {
        log('DataUtils -> saveLinks type:', type);
        log(' *** links:', links);

        log(' *** workflowRegistry:', this.workflowRegistry);
        log(' *** parsed registry:', this.registry);
        // update workflowRegistry
        // then send to api/save

        const dataForUpdate = this.parseChanges(type, links);

        log(' *** dataForUpdate:', dataForUpdate);

        const {workflow, updateForm} = dataForUpdate;

        if (dataForUpdate.hasChanges) {
            return new Promise((resolve) => {
                queriesLinksEditor.updateLink(workflow, updateForm)
                    .then((response) => {
                        log('response:', response);
                        let success = false;

                        if (response.response.status === 200) {
                            log('SUCCESS');
                            success = true;
                        } else if (response.response.status === 400) {
                            log('FAILED');
                        }

                        resolve(success);
                    });
            });
        } else {
            log('***\n DataUtils -> saveLinks\n No changes to save');
            return Promise.resolve();
        }
    }

    splitRegistryRowsByType() {
        const separated = {};

        this.registry.forEach(row => {
            const type = row.cells.find(item => item.name === 'Тип сбора').value;
            if (!separated[type]) {
                separated[type] = [];
            }
            separated[type].push(row);
        });

        this.registryByType = separated;
        log('this.registryByType:', this.registryByType);

        return separated;
    }

    toServerLink(link, oldLink, type) {
        log('toServerLink:', type, link);
        log('toServerLink oldLink:', oldLink);

        const serverLink = {
            id: link.id,
            cells: [],
        }

        log('serverLink:', serverLink);

        oldLink.cells.forEach((cell) => {

            const param = this.linkParams.find(({label}) => label === cell.name);

            if (param) {
                const {alias, label, list} = param;
                let id;
                let value = link[alias];
    
                id = list?.find(({label}) => label === link[alias])?.id;

                if (alias === 'type' && !id) {
                    value = type;
                    id = this.collectTypeLabels.find(({label}) => label === value)?.id;
                    log(`---> id:`, id);
                }

                serverLink.cells.push({
                    name: label,
                    value,
                    id,
                });
            } else {
                log('No param:', cell.name);
            }
        });

        log('--->\n   serverLink:', serverLink);

        return serverLink;
    }

    updateWorkflowRegistry(wf) {
        log('updateWorkflowRegistry:', wf);

        if (!this.workflowRegistry) {
            this.workflowRegistry = wf;
        } else {
            const data    = this.workflowRegistry.data.reportData.data;
            const newData = wf.data.reportData.data;
            this.workflowRegistry.data.reportData.data = [...data, ...newData];
        }
    }
}

export default DataUtils;
