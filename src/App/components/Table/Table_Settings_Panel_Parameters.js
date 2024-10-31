import React from 'react';
import {ColorPicker} from "../../widgets";

import './scss/table-settings-panel-parameters.scss';

const TableSettingsPanelParameters = props => {
    const {utils, connector} = props;
    const {options: {editableSettings}, refresh: {header: refreshHeader, body: refreshBody}} = connector;

    const reSearch = () => {
        const rowsFromStore = utils.storeGetPage();

        if(!rowsFromStore) return;

        console.log('################### GET PAGE FROM STORE', 0)
        utils.refreshBodyWithNewRows({
            newRows: rowsFromStore,
            newPageNum: 0,
            openAllLevels: true,
        });
    }

    const data = [
        {blockName: 'ЦВЕТ ФОНА'                                                                                                                                  },
        {alias: 'bgrHeader',          address: 'background.header',          type: 'color',  title: 'шапки таблицы',                          refresh: refreshHeader,},
        {alias: 'bgrEvenRows',        address: 'background.evenRows',        type: 'color',  title: 'чётных строк',                           refresh: refreshBody,  },
        {alias: 'bgrOddRows',         address: 'background.oddRows',         type: 'color',  title: 'нечётных строк',                         refresh: refreshBody,  },
        {alias: 'bgrHover',           address: 'background.hovered',         type: 'color',  title: 'строка и столбец под курсором',          refresh: refreshBody,  },

        {blockName: 'ИЗМЕНЯТЬ РАЗМЕРЫ'                                                                                                                           },
        {alias: 'resizeHeaderHeight', address: 'resize.headerHeight',        type: 'bool',   title: 'высота шапки таблицы',                   refresh: refreshHeader,},
        {alias: 'resizeRowsHeight',   address: 'resize.rowsHeight',          type: 'bool',   title: 'высота строк',                           refresh: refreshBody,  },
        {alias: 'resizeColumnsWidth', address: 'resize.columnsWidth',        type: 'bool',   title: 'ширина столбцов',                        refresh: refreshHeader,},

        {blockName: 'СОСТАВ МЕНЮ ЯЧЕЕК ШАПКИ'                                                                                                                    },
        {alias: 'colHasHideIcon',     address: 'columnsMenu.hasHideIcon',    type: 'bool',   title: 'скрытие столбцов',                       refresh: refreshHeader,},
        {alias: 'colHasOrderIcon',    address: 'columnsMenu.hasOrderIcon',   type: 'bool',   title: 'смена порядка столбцов',                 refresh: refreshHeader,},
        {alias: 'colHasFormatIcon',   address: 'columnsMenu.hasFormatIcon',  type: 'bool',   title: 'форматирование столбцов',                refresh: refreshHeader,},
        {alias: 'colHasSearchIcon',   address: 'columnsMenu.hasSearchIcon',  type: 'bool',   title: 'поиск по столбцам',                      refresh: refreshHeader,},
        {alias: 'colHasSortIcon',     address: 'columnsMenu.hasSortIcon',    type: 'bool',   title: 'сортировка по столбцам',                 refresh: refreshHeader,},

        {blockName: 'РАЗНОЕ'                                                                                                                                     },
        {alias: 'showHints',          address: 'other.showHints',            type: 'bool',   title: 'подсказка для переполненых ячеек',       refresh: refreshBody,  },
        {alias: 'searchLogicAND',     address: 'other.searchLogicAND',       type: 'bool',   title: 'логическое "И" поиска',                  refresh: reSearch,     },
        {alias: 'isHovered',          address: 'other.highlightHovered',     type: 'bool',   title: 'выделать строку и столбец под курсором', refresh: refreshBody,  },
    ]

    const getOptionValue = address => utils.getValueByAddress(`options.${address}`);
    const setOptionValue = (address, value) => utils.setValueByAddress(`options.${address}`, value);

    let lastBlock;
    let showLastBlock = false;

    for(let item of data) {
        if(item.blockName) {
            if(lastBlock) {
                lastBlock.show = showLastBlock;
                showLastBlock = false;
            }
            lastBlock = item;
        } else {
            if(editableSettings[item.alias]) showLastBlock = true;
        }
    }
    lastBlock.show = showLastBlock;

    return (
        <div className="usp-parameters">
            {data.map(item => {
                if(item.blockName) return <div className={`usp-param-block-name${item.show ? '' : ' is-hide'}`}>{item.blockName}</div>
                return (
                    <Parameter
                        {...props}
                        item={item}
                        getOptionValue={getOptionValue}
                        setOptionValue={setOptionValue}
                    />
                )
            })}
        </div>
    )
}

const Parameter = props => {
    const {connector, item} = props;
    const {options: {editableSettings}} = connector;
    const {alias, type, title} = item;

    item.isDisable = !editableSettings[alias];

    return (
        <div className={`usp-param-item${item.isDisable ? ' is-disable' : ''}`}>
            {type === 'bool' && <ParameterCheckbox {...props} />}
            {type === 'color' && <ParameterColor {...props} />}
            {title}
        </div>
    )
}

const ParameterCheckbox = props => {
    const {utils, item, getOptionValue, setOptionValue} = props;
    const {address, isDisable, refresh} = item;

    const [checked, setChecked] = React.useState(getOptionValue(address));

    const clickToCheckbox = () => {
        setChecked(!checked);
        setOptionValue(address, !checked);
        if(refresh) refresh();
        utils.saveTableSettingsToLocaleStorage();
    }

    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={isDisable ? null : clickToCheckbox}
        />
    )
}

const ParameterColor = props => {
    const {utils, item, getOptionValue, setOptionValue} = props;
    const {address, isDisable, refresh} = item;

    const [color, setColor] = React.useState(getOptionValue(address) || '#fff');
    const [showPicker, setShowPicker] = React.useState(false);

    return (
        <div
            className="usp-param-item-color"
            style={{background: color}}
            onClick={isDisable ? null : () => setShowPicker(true)}
        >
            <div className="color-picker-wrapper">
                {showPicker && (
                    <ColorPicker
                        pickerType="sketch"
                        color={color}
                        onChange={color => {
                            setColor(color);
                            setOptionValue(address, color);
                            if(refresh) refresh();
                            utils.saveTableSettingsToLocaleStorage();
                        }}
                        onClickOutside={() => setShowPicker(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default TableSettingsPanelParameters;