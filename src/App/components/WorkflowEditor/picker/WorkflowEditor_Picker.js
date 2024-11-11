import React          from 'react';                        // Вначале все импорты из node_modules
import {createPortal} from 'react-dom';
import {Popup, ListPickerDeprecated} from '../../../widgets';       // Затем все импорты из внешних компонентов
// Потом импорты из текущей компоненты

import './scss/workflow-editor-picker.scss';               // В конце через пробельную строку импорт SCSS

const log = console.debug;

const Picker = ({...props}) => {
    // >>> раскрутка props всегда первой строкой компоненты, а не в середине текста
    const {setLinks, typeLabels, type} = props;

    // >>> После раскрутки пропсов далее идут (по возможности) все стейты:
    const [selectedPanelIsOpen, setSelectedPanelIsOpen] = React.useState(false);
    const [selectedType, setSelectedType] = React.useState(type);

    log('Picker -> selectedType:', selectedType);

    // >>> далее все useRef-ы
    const selectRef = React.useRef(null);

    // >>> далее все useEffect-ы
    React.useEffect(() => {
        // e.g. setDefault();
    }, []);
    // Если в useEffect вторым параметром идёт пустой Array,
    // то значит он будет выполняться только один раз после первого рендеринга

    // >>> а потом уже пошёл код
    const getLinksByTypeValue = selectedType => {
        log('Picker -> selectedType:', selectedType);

        setSelectedType(selectedType);
        setLinks(selectedType);
        setSelectedPanelIsOpen(false);
    }

    const onChange = data => getLinksByTypeValue(data.selectedValues.join(', '));
    //
    // Хоть Андрей и настаивал любую функцию оборачивать скобками, мне больше нравится подход Лёхи - если функция
    // из одной простой понятной строки, то скобки только утяжеляют прочтение. На твоё усмотрение, но я бы сделал так...
    //

    return (
        <React.Fragment>
            <div
                className="workflow-editor-picker"
                ref={selectRef}
                onClick={() => setSelectedPanelIsOpen(!selectedPanelIsOpen)}
            >
                <span
                    className="tf_form-control bg-transparent fw-600 border-transparent text-truncate"
                >
                    Графический редактор:
                </span>
                <span>{selectedType}</span>
            </div>

            {selectedPanelIsOpen && createPortal(
                <Popup
                    initiator={selectRef.current}
                    id="select-workflow-type"
                    minWidth="200"
                    minHeight="100"
                    onOutsideClick={() => setSelectedPanelIsOpen(false)}
                >
                    <ListPickerDeprecated
                        label="select-workflow-type"
                        list={typeLabels || []}
                        selectedValue={selectedType}
                        onChange={onChange}
                        isMultipleSelect={false}
                        hideSearchBar={true}
                        hideCountersBar={true}
                    />
                </Popup>,
                document.body
            )}
        </React.Fragment>
    )
};

export default Picker;
