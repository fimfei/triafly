/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// 
// ScrollbarScrollbar - компонента, организующая прокрутку скроллбара,
// вычисляющая значения прокрутки и отдающая сигналы компоненте <ScrollbarContainer />
// для обеспечения отображения нучной части списка
// 
const ScrollbarScrollbar = ({...props}) => {
    const {data, setData, wheelTimeout, endOfScroll, mouseOverTheSmartList} = props;
    const {listHeight, wrapperHeight, scroll, subListFrom, subListTo, subList} = data;

    const innerHeight = Math.min(10000, listHeight);    // высота бегунка нативного скроллбара перестаёт уменьшаться после какого-то (10000px наверняка) размера
                                                              // поэтому иметь высоту псевдо-блока больше чем это значение смысла не имеет
    const wrapperRef = React.useRef(null);           // ref для .smart-scrollbar-wrapper
    const setDataBlocked = React.useRef(false);      // хитрая штука. Так как прокрутку мы можем менять двумя способами (кликом по скроллбару и колёсиком мышки)
                                                              // то нам нужен механизм блокировки обработки событий друг друга. Колёсико блокирует скроллбар, а
                                                              // скроллбар блокирует колёсико
    const wheelTimeoutId = React.useRef(0);          // Задержка на обработку прокрутки колёсика для отсеивания дребезга

    const forceTimeout = React.useRef(wheelTimeout);
    const scrollByKey = React.useRef(undefined);
    // 
    // Вспомогательные функции
    // 
    const scrollPercentToPx = scrollPercent => scrollPercent * (innerHeight - wrapperHeight) / 100; // вычисляем значение смещения в px на основе % скролла
    const scrollPxToPercent = scrollPx => scrollPx * 100 / (innerHeight - wrapperHeight);           // обратная операция
    // 
    // Отсеивает дребезг скролла. Как только скроллбар (или колёсико) успокоились, вызываем endOfScroll с установившимися значениями
    // 
    const checkEndOfScroll = () => {
        if(wheelTimeoutId.current) {
            clearTimeout(wheelTimeoutId.current);
        }
        wheelTimeoutId.current = setTimeout(() => {
            wheelTimeoutId.current = 0;
            endOfScroll({subListFrom, subListTo, subList});
        }, forceTimeout.current);
    }
    // 
    // Обработчик скролла
    // 
    const onScroll = e => {
        if(setDataBlocked.current) {
            setDataBlocked.current = false;
            checkEndOfScroll();
            return;
        }
        setDataBlocked.current = true;
        setData({scroll: scrollPxToPercent(e.target.scrollTop)})
        checkEndOfScroll();
    };
    
    const keyUp = e => {
        if(!scrollByKey.current) {
            return;
        }
        let delta = 0;
       
        switch(e.code) {
            case 'ArrowUp': delta = -1; break;
            case 'ArrowDown': delta = 1; break;
            default: return;
        }

        forceTimeout.current = 0;
        wrapperRef.current.scrollBy({top: delta});
        setTimeout(() => {
            forceTimeout.current = wheelTimeout;
        }, 10);
    }

    React.useEffect(() => {
        document.addEventListener('keyup', keyUp);
        return () => document.removeEventListener('keyup', keyUp);
    }, []);

    React.useEffect(() => {
        scrollByKey.current = mouseOverTheSmartList;
    }, [mouseOverTheSmartList]);
    // 
    // Хук, выполняемый только после смены состояния scroll
    // 
    React.useEffect(() => {
        if(setDataBlocked.current) {
            setDataBlocked.current = false;
            checkEndOfScroll();
            return;
        }
        const newScroll = scrollPercentToPx(scroll);
        if(wrapperRef.current.scrollTop !== newScroll) {
            setDataBlocked.current = true;
            wrapperRef.current.scrollTop = newScroll;
            checkEndOfScroll();
        }
    }, [scroll]);

    return (
        <div
            className="tf_smartscroll"
            onScroll={onScroll}
            ref={wrapperRef}
        >
            <div
                className="tf_smartscroll-wrapper"
                style={{height: `${innerHeight}px`}}
            >    
            </div>
        </div>
    )
}

export default ScrollbarScrollbar;