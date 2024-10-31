import {request} from "../api";
//
// Здесь будут запросы к серверу, которые использует только компонента WorkflowEditor
//
class QueriesWorkflowEditor {
    getNetdbSet(id) {
        return request.get({url: `/backbone/set/${id}`});
    }

    getRelationRegistry({ id, pageNum, pageSize }) {
        return request.get({url: `/x/relation/registry/${id}/view/compound/?pageNum=${pageNum}&pageSize=${pageSize}`});
    }
}

export default new QueriesWorkflowEditor;