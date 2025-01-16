class Utils {
    constructor(props) {
        const {
            list = [],
            selectedElements,
            approvedElements,
            activeElement = '',
            isMultiSelect,
            selectTitle,
            mainButtons = [],
            elementButtons = [],
            getComponentControlling = () => {},
            onChangeComponentState = {},
            draggable,
            draggableElementClass,
            popupOptions = {},
            listPickerOptions = {},
        } = props;

        this.connector = {
            isMultiSelect: !!isMultiSelect,
            selectTitle,
            mainButtons,
            elementButtons,
            activeElement,
            draggable,
            draggableElementClass,
            popupOptions,
            listPickerOptions,
        }

        this.setListToConnector(list);
        this.setSelectedElementsToConnector(selectedElements);
        this.setApprovedElementsToConnector(approvedElements);

        getComponentControlling({
            clickToItem: this.clickToItem.bind(this),
            setSelectedElements: this.setSelectedElementsToConnector.bind(this),
            setApprovedElements: this.setApprovedElementsToConnector.bind(this),
            refreshList: this.refreshList.bind(this),
            getConnector: (() => this.connector).bind(this),
//            getSelectedElements: (() => this.connector.selectedElements).bind(this),
            addNewElement: this.addNewElement.bind(this),
            deleteElements: this.deleteElements.bind(this),
            renameElement: this.renameElement.bind(this),
            onDropElementToApproved: this.onDropElementToApproved.bind(this),
        });

        this.onChangeComponentState = {
            onItemSelect: () => {}, // клик по элементу списка
            ...(onChangeComponentState || {}),
        };
    }

    onDropElementToApproved(label) {
        const {listByLabel, approvedElements, approvedElementsByLabel} = this.connector;
        const item = listByLabel[label];
        approvedElements.push(item);
        approvedElementsByLabel[label] = item;
        this.connector.activeElement = label;
        this.refreshList();
    }

    addNewElement({label, originalItem, approved}) {
        const {list, listByLabel, selectedElements, selectedElementsByLabel, approvedElements = [], approvedElementsByLabel = {}} = this.connector;
        const isNew = !listByLabel[label];
        const fullElement = {label, originalItem, isNew};

        if(isNew) {
            list.push(fullElement);
            this.connector.list = this.sort(list);
            listByLabel[label] = fullElement;
        }

        if(!selectedElements[label]) {
            selectedElements.push(fullElement);
            this.connector.selectedElements = this.sort(selectedElements);
            selectedElementsByLabel[label] = fullElement;
        }

        if(approved) {
            approvedElements.push(fullElement);
            approvedElementsByLabel[label] = fullElement;
            this.connector.approvedElements = approvedElements;
            this.connector.approvedElementsByLabel = approvedElementsByLabel;
        }
    }

    renameElement({label, toLabel}) {
        const {listByLabel, selectedElementsByLabel, approvedElementsByLabel} = this.connector;

        const rename = objByLabel => {
            if(objByLabel && objByLabel[label]) {
                objByLabel[label].label = toLabel;
                objByLabel[label].isRenamedFrom = label;
                objByLabel[toLabel] = objByLabel[label];
                delete objByLabel[label];
            }
        }

        rename(listByLabel);
        rename(selectedElementsByLabel);
        rename(approvedElementsByLabel);
    }

    deleteElements({labels, notDeleteFromList = false, notDeleteFromSelected = false, notDeleteFromApproved = false}) {
        let {list, listByLabel, selectedElements, selectedElementsByLabel, approvedElements = [], approvedElementsByLabel = {}} = this.connector;

        const deleteElement = label => {
            if(listByLabel[label] && !notDeleteFromList) {
                list = list.filter(item => item.label !== label);
                delete listByLabel[label];
            }

            if(selectedElementsByLabel[label] && !notDeleteFromSelected) {
                selectedElements = selectedElements.filter(item => item.label !== label);
                delete selectedElementsByLabel[label];
            }

            if(approvedElementsByLabel[label] && !notDeleteFromApproved) {
                approvedElements = approvedElements.filter(item => item.label !== label);
                delete approvedElementsByLabel[label];
            }
        }

        for(let label of labels) {
            deleteElement(label);
        }
        this.connector.list = list;
        this.connector.selectedElements = selectedElements;
        this.connector.approvedElements = approvedElements;
    }

    sort(list) {
        return list.sort((a, b) => a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1)
    }

    refreshList() {
        this.refreshListCurrent.current();
    }

    clickToItem(label) {
        const {activeElement, approvedElementsByLabel} = this.connector;
        if(label === activeElement) return;

        this.connector.activeElement = label;
        const value = approvedElementsByLabel === undefined ? label : (approvedElementsByLabel[label] ? label : null);
        this.onChangeComponentState.onItemSelect(value);

        this.refreshList();
    }

    setSelectedElementsToConnector(elements) {
        this.getElementsByList(elements, 'selectedElements', 'selectedElementsByLabel', [], {});
    }

    setApprovedElementsToConnector(elements) {
        this.getElementsByList(elements, 'approvedElements', 'approvedElementsByLabel', undefined, undefined);
    }

    getElementsByList(els, listName, listByLabelName, ifUndefinedList, ifUndefinedListByLabel) {
        let elements = [];
        let elementsByLabel = {};

        if(els === undefined) {
            elements = ifUndefinedList;
            elementsByLabel = ifUndefinedListByLabel;
        } else {
            if (typeof els === 'string') {
                elements = [els];
            } else {
                elements = els;
            }

            elements = elements.filter(label => this.connector.listByLabel[label]);
            elements = elements.map(label => this.connector.listByLabel[label]);
            elements = this.sort(elements);

            for(let item of elements) {
                elementsByLabel[item.label] = item;
            }
        }

        this.connector[listName] = elements;
        this.connector[listByLabelName] = elementsByLabel;
    }

    setListToConnector(_list) {
        const list = (typeof _list === 'string') ? [_list] : _list;
        const out = [];
        const outByLabel = {};

        for(let item of list) {
            out.push({
                label: typeof item === 'string' ? item : item.label,
                originalItem: item,
                isOriginal: true,
            });
        }

        for(let item of out) outByLabel[item.label] = item;

        this.connector.list = out;
        this.connector.listByLabel = outByLabel;
    }

    refreshListCurrent = {
        current: () => {}, // заменится в ElementsPicker_List
    }
}

export default Utils;