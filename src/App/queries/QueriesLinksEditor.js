import {request} from "../api";
//
// Здесь будут запросы к серверу, которые использует только компонента LinksEditor
//

const log = console.debug;

class QueriesLinksEditor {
    updateLink(id, data) {
        log('QueriesLinksEditor --->\n   updateLink(id, data):', id, data);
        const formData  = new FormData();
        const objs_map  = {};

        formData.append('to_update', data.toUpdate);
        formData.append('to_create', data.toCreate);
        formData.append('to_delete', data.toDelete);
        formData.append('objs_map',  JSON.stringify(objs_map));
        formData.append('edit_obj',  id);

        log('formData:', formData);

        // url: `/x/obj-bulk/registry/relation/-869/?descriptors=-527,-867,-868,-872,-878,-879,-863,-880,-501,-865,-866,-553,-562`,

        return request.post({
            url: `/x/obj-bulk/registry/relation/${id}/?descriptors=${encodeURIComponent(data.descriptors)}`,
            form: formData,
            headers: {
                'Content-Type': 'multipart/form-data;',
            },
        });
    }
}

export default new QueriesLinksEditor;
