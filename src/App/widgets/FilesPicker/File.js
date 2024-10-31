import React from 'react';

const File = props => {
    const {fileName, files, index, setFiles, filesDataCurrent} = props;

    const inputRef = React.useRef(null);

    const replaceFile = e => {
        const file = e.target.files[0];
        const fileName = file.name;

        filesDataCurrent.current[fileName] = file;

        const out = [...files];
        out[index] = fileName;
        setTimeout(() => {
            setFiles(out);
        }, 0)
    }

    const deleteFile = () => {
        const out = [...files];
        out.splice(index, 1);
        setTimeout(() => {
            setFiles(out);
        }, 0)
    }

    return (
        <div className={`rct-file${filesDataCurrent.current[fileName] ? ' is-new-file' : ''}`}>
            <div className="rct-file-name" title={fileName}>
                {fileName}
            </div>
            <input
                type='file'
                style={{display: 'none'}}
                ref={inputRef}
                onChange={replaceFile}
            />
            <i
                className="fas fa-sync-alt fa-fw"
                title="заменить на другой файл"
                onClick={() => inputRef.current.click()}
            ></i>
            <i
                className="fas fa-trash fa-fw"
                title="удалить файл из списка"
                onClick={deleteFile}
            ></i>
        </div>
    )
}

export default File;