import React from 'react';
import {useCurrentState} from "../../hooks";
import {File} from './';

import './scss/files-picker.scss';

const FilesPicker = props => {
    const {
        className,                // кастомный класс обёртки компоненты
        value = '',               // на вход подаётся строка типа "file1.js, file2.js, ..." с сепаратором ", "
        isMultiple = false,       // признак множественного выбора файла
        onChange,                 // когда в пикере файлы выбраны
        maxHeightMultiList = 150, // максимальная высота в px списка файлов
    } = props;

    const filesStringToArray = list => {
        const out = list.split(', ');
        return out.length === 1 && !out[0] ? [] : out;
    }

    const [files, filesCurrent, setFiles] = useCurrentState(filesStringToArray(value));
    const filesDataCurrent = React.useRef({});
    const inputRef = React.useRef(null);
    const timeoutId = React.useRef(0);

    const onChoiceIsOver = () => {
        timeoutId.current = setTimeout(() => {
            timeoutId.current = 0;
        }, 100)
        onChange({
            value: filesCurrent.current.join(', '),
            files: filesCurrent.current,
            newFilesData: filesDataCurrent.current
        })
    }

    /* eslint-disable */
    React.useEffect(() => {
        if(!isMultiple || !files.length) {
            inputRef.current.click();
        }

        return () => {
            if(!timeoutId.current) onChoiceIsOver();
        }
    }, []);
    /* eslint-enable */

    const addFiles = e => {
        const newFiles = e.target.files;

        const out = isMultiple ? [...files] : [];

        if(!newFiles?.length) return;

        for(let newFile of newFiles) {
            const fileName = newFile.name;
            filesDataCurrent.current[fileName] = newFile;
            out.push(fileName);
        }

        setTimeout(() => {
            setFiles(out);
            if(!isMultiple) {
                onChoiceIsOver();
            }
        }, 0);
    }

    return (
        <React.Fragment>
            {isMultiple && (
                <div className={`rct-files-picker${className ? ' ' + className : ''}`}>
                    <div className="rct-files-wrapper" style={{maxHeight: `${maxHeightMultiList}px`}}>
                        <div className="rct-files">
                            {files.map((fileName, index) => {
                                return (
                                    <File
                                        key={`files-list-item-${index}`}
                                        fileName={fileName}
                                        index={index}
                                        files={files}
                                        setFiles={setFiles}
                                        filesDataCurrent={filesDataCurrent}
                                    />
                                )
                            })}
                            {!files.length && <div className="empty-files-list">Пока ничего не выбрано</div>}
                        </div>
                    </div>
                    <div className="p-1 rct-files-menu">
                        <button
                            className="tf_btn tf_btn-transparent tf_btn-sm tf_btn-icon add-file"
                            title="Добавить еще файлов"
                            onClick={() => inputRef.current.click()}
                        >
                            <i className="fas fa-plus fa-fw"></i>
                        </button>
                        <button
                            className="tf_btn tf_btn-sm tf_btn-primary ok"
                            onClick={onChoiceIsOver}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
            <input
                type='file'
                style={{display: 'none'}}
                ref={inputRef}
                onChange={addFiles}
                multiple={isMultiple}
            />
        </React.Fragment>
    );
};

export default FilesPicker;