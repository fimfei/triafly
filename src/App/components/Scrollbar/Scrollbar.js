/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {ScrollbarScrollbar, ScrollbarContainer} from ".";
import {useCurrentState} from "../../hooks";

import './scss/scrollbar.scss';
//
// Scrollbar - компонента, реализующая прокрутку огромных списков в окне
// 
// На входе:
// 
// list             - выводимый список. Array, каждый элемент которого есть объект с обязательными полями:
//    id            - id элемента
//    label         - текстовое описание элемента, выводимое в окне списка
//    selected      - признак выбора элемента
//    level         - уровень элемента в дереве (0 - корневой элемент)
//
// currentList      - useCurrentState зеркало list-а
//
// strHeight        - установленная высота элемента списка в DOM-дереве
// resetScrollbar   - стейт, смена состояни которого должна приводить к прокрутке списка наверх
// ItemView         - въюха элемента списка
// 
// 
// 
// Компонента делит родительский DOM-элемент на 2 части:
//
// .smart-scrollbar - в ней организуется скроллбар, который при прокрутке подаёт сигналы, какой участок списка надо отображать
// .smart-list      - в ней выводится текущая часть списка (в зависимости от сигналов от скроллбара)
//
const Scrollbar = ({...props}) => {
    const {list, currentList, resetScrollbar, scrollData, strHeight} = props;
    // 
    // Переменные компоненты
    // 
    const smartListRef = React.useRef(null); // ref на .smart-list
    //
    // Мотор движка. Процедура вычисления отображаемой части спика в окне
    // 
    // На входе:
    // 
    // listHeight    - высота полного списка в px
    // wrapperHeight - высота окна вывода части списка в px
    // scroll        - значение прокрутки списка в %
    // 
    // На выходе:
    // 
    // subListFrom - индекс первой строки отображаемой части списка
    // subListTo   - индекс последней строки отображаемой части списка
    // subList     - Array - вырезанная часть списка
    // endOfScroll - процедура, которая буде вызываться при остановке скроллирования списка
    //
    const getSubList = data => {
        const {listHeight, wrapperHeight, scroll} = data;
        const freeSpace = listHeight - wrapperHeight;
        const fromPx = freeSpace / 100 * scroll;
        const toPx = fromPx + wrapperHeight;
        const subListFrom = Math.ceil(fromPx / strHeight);
        const subListTo = Math.ceil(toPx / strHeight);
        const subList = currentList.current.slice(subListFrom, subListTo + 1);
        return ({subListFrom, subListTo, subList});
    }
    // 
    // Основной стейт компоненты
    // 
    const [data, currentData, _setData] = useCurrentState({
        wrapperHeight: undefined,               // высота окна
        wrapperWidth: undefined,                // ширина окна
        scroll: 0,                              // текущее значение скролла (в %)
        listHeight: currentList.current.length * strHeight,    // высота листаемого списка
        upDownHeight: strHeight * 3,            // смещение списка при прокрутке колёсика мышки (в пикселях)
        subListFrom: 0,                         // индекс первого элемента subList в list
        subListTo: 0,                           // индекс последнего элемента subList в list
        subList: [],                            // вырезанный кусок из list
    }, true);

    const setData = obj => {
        const cd = currentData.current;
        if(obj.listHeight && obj.listHeight !== cd.listHeight && cd.scroll === 100) {
            obj.scroll = (cd.listHeight - cd.wrapperHeight + strHeight) * 100 / (obj.listHeight - cd.wrapperHeight);
        }
        _setData(obj);
        const subListData = getSubList(currentData.current);
        Object.assign(currentData.current, subListData);
    };

    const mouseOverTheSmartList = React.useRef(false);

    React.useEffect(() => {
        if(scrollData) {
            scrollData.current = currentData;
        }

        const setSizeData = () => {
            setData({
                wrapperWidth: smartListRef.current.clientWidth,
                wrapperHeight: smartListRef.current.clientHeight,
            });
        }

        setTimeout(() => {
            setSizeData();
        }, 0);

        smartListRef.current.onmouseover = () => {mouseOverTheSmartList.current = true};
        smartListRef.current.onmouseleave = () => {mouseOverTheSmartList.current = false};
    }, []);

    React.useEffect(() => {
        setData({scroll: 0});
    }, [resetScrollbar]);

    React.useEffect(() => {
        setData({
            listHeight: list.length * strHeight,
        });
    }, [list]);

    const onWheel = e => {
        const direction = e.deltaY > 0 ? 1 : -1;

        if (direction === -1 && data.scroll === 0) {
            // Не скроллить в минус
            return;
        }

        const listFreeSpacePx = data.listHeight - data.wrapperHeight;
        const deltaPersent = data.upDownHeight * 100 / listFreeSpacePx;
        const newScroll = Math.max(0, Math.min(100, data.scroll + deltaPersent * direction));

        setData({scroll: newScroll});
    }

    const wrapperHeight = smartListRef.current?.clientHeight;
    if(wrapperHeight && wrapperHeight !== currentData.current.wrapperHeight) {
        setData({
            wrapperWidth: smartListRef.current.clientWidth,
            wrapperHeight: smartListRef.current.clientHeight,
        });
    }

    return (
        <React.Fragment>
            <div
                className="tf_smartlist-items"
                onWheel={onWheel}
                ref={smartListRef}
            >
                <ScrollbarContainer
                    {...props}
                    list={data.subList}
                    subListFrom={data.subListFrom}
                    subListTo={data.subListTo}
                />
            </div>
            <ScrollbarScrollbar
                {...props}
                strHeight={strHeight}
                data={data}
                setData={setData}
                mouseOverTheSmartList={mouseOverTheSmartList.current}
            />
        </React.Fragment>
    )
}

export default Scrollbar;