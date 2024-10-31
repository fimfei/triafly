import dagre from 'dagre';
import {constants} from './';

const utils = {
    relations: {}, defaultEdgeOptions: {},
    linksCurrent: {current: []}, linksObjCurrent: {},
    nodesCurrent: {current: []}, nodesObjCurrent: {},
    edgesCurrent: {current: []}, edgesObjCurrent: {},
    setNodes: null, setEdges: null,
};

utils.arrayToObjById = (arr, outCurrent) => {
    outCurrent.current = {};

    for(let index in arr) {
        const item = arr[index];
        item.index = Number(index);
        outCurrent.current[item.id] = item;
    }
}

utils.linksToJSON = ({nodes, edges}) => {
    const out = [];

    for(let index in edges) {
        const edge = edges[index];
        if(edge.label) {
            out.push({
                source: nodes[edge.source]._data,
                target: nodes[edge.target]._data,
                link: edge.label,
            });
        }
    }
    return out;
}

utils.edgesToJSON = ({edges}) => {
    const out = [];

    for(let edge of edges) {
        const {id, index, label, source, target} = edge;
        out.push({id, index, label, source, target});
    }

    return out;
}

utils.checkRelationNameAndField = (relation) => {
    return !!utils.relations.fields[relation];
}

utils.systemLinksToLinks = ({externalLinks}) => {
    const initialLinks = [];
    const notValidated = [];
    let reg;
    let currentEdgeId = '';

    const addLink = (edgeId, source, target, label) => {
        for(let link of initialLinks) {
            if(link.id === edgeId) {
                link.label += constants.linksSeparator + label;
                return;
            }
        }

        initialLinks.push({
            source,
            target,
            label,
            id: edgeId,
        });
    }

    for(let str of externalLinks.split(constants.linksSeparator)) {
        //
        // вначале проверяем на полное соответствие структуры
        //
        reg = (' ' + str).match(constants.mainRegExp);
        if(reg?.length) {
            const [, , , , source, , , , , , target, , ] = reg;// eslint-disable-line

            let correct = true;
            correct = correct && utils.checkRelationNameAndField(target);
            correct = correct && utils.checkRelationNameAndField(source);

            if(correct) {
                currentEdgeId = utils.getEdgeId(source, target);
                addLink(currentEdgeId, source, target, str);
            } else {
                notValidated.push(str);
            }
        } else {
            reg = str.match(constants.twoTableNameRegExp);
            if(reg?.length) {
                //
                // Если в строке мы нашли два имени таблицы, значит предполагаем что это закоментированная связь
                // Перетащим ее наверх, чтобы она не осталась в списке нераспознанных связей предыдущей связи
                //
                currentEdgeId = '';
                notValidated.push(str);
            } else {
                if(currentEdgeId) {
                    addLink(currentEdgeId, null, null, str);
                } else {
                    notValidated.push(str);
                }
            }
        }
    }

    utils.notValidatedCurrent.current = notValidated;
    return {initialLinks};
}

utils.isJsonString = str => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

utils.linkToSystemLink = link => {
    const {source, target, sourceField, targetField} = link;
    const join = link[constants.joinName];
    const operand = link[constants.operandName];

    return `${join} ${source}.${sourceField} ${operand} ${target}.${targetField}`;
}

utils.valueToLabel = (multiValue, _source, _target) => {
    let error = false;
    const tableNames = Object.keys(utils.relations.fields);
    const labels = [];

    const field = (_value, values, tag, separator, compareRelationsName, anyCase) => {
        if(_value === undefined) return '';

        const value = anyCase ? _value.toLowerCase() : _value;
        let relationNameIsCorrect = true;

        if(compareRelationsName) {
            relationNameIsCorrect = value === _source || value === _target;

            if(!relationNameIsCorrect) {
                relationNameIsCorrect = value === _source || value === _target;
            }
        }

        const isError = !(values.includes(value) || (compareRelationsName && relationNameIsCorrect));
        const _tag = isError ? 'e' : tag;
        error ||= isError;
        return `<${_tag}>${_value}</${_tag}>${separator}`;
    }

    for(let value of multiValue.split(constants.linksSeparator)) {
        const reg = (' ' + value).match(constants.mainRegExp);

        if(reg?.length) {
            const [, join1, join2, join3, source, sourceField, operand, ,any, /*open*/, target, close1, targetField, close2] = reg; // eslint-disable-line

            const fieldsToArray = f => (f || []).map(item => item.name);

            const _fields = utils.relations.fields;
            const sourceFields = fieldsToArray(_fields[source]);
            const targetFields = fieldsToArray(_fields[target]);

            const out = field(join1,       constants.joins1,   'j', ' ', false, true )
                      + field(join2,       constants.joins2,   'j', ' ', false, true )
                      + field(join3,       constants.joins3,   'j', ' ', false, true )
                      + field(source,      tableNames,         'r', '.', true,  false)
                      + field(sourceField, sourceFields,       'f', ' ', false, false)
                      + field(operand,     constants.operands, 'o', ' ', false, false)
                      + field(any,         ['any'],            'j', '(', false, true )
                      + field(target,      tableNames,         'r', close1 ? ').' : '.', true,  false)
                      + field(targetField, targetFields,       'f', close2 ? ')'  : '' , false, false);

            labels.push(out);
        }
    }

    return {
        label: labels.join('<br />'),
        error: !!error,
    };
}

utils.linksToSystemLinks = links => {
    const outLinks = [];
    for(let link of links) outLinks.push(link.label);
    const out = utils.notValidatedCurrent.current.concat(outLinks);
    return out.join(constants.linksSeparator);
}

utils.getEdgeLinks = (links, source, target) => {
    const out = [];

    for(let indexInLinks in links) {
        const link = links[indexInLinks];

        if(link.source === source && link.target === target) {
            out.push({...link, indexInLinks: Number(indexInLinks)});
        }
    }
    return out;
}

utils.getNodesFromLinks = links => {
    const nodesId = {};
    const out = [];
    let x = 100;
    let y = 100;

    for(let link of links) {
        nodesId[link.source] = true;
        nodesId[link.target] = true;
    }

    for(let nodeId in nodesId) {
        out.push({
            id: nodeId,
            position: {x, y},
            dragHandle: '.custom-drag-handle',
            data: {
                label: nodeId,
                fields: utils.relations.fields[nodeId],
            },
            type: 'block',
            _data: {},
        });
//        x += 100;
//        y += 10;
    }

    return out;
}

utils.getEdgeId = (s, t) => {
    const min = s > t ? t : s;
    const max = s > t ? s : t;
    return `reactflow__edge-${min}-${max}`;
}

utils.getEdgesFromLinks = links => {
    const out = [];

    for(let link of links) {
        const {source, target, label: _label} = link;
        const id = utils.getEdgeId(source, target);
        const {label, error} = utils.valueToLabel(_label, source, target);
        out.push({...utils.defaultEdgeOptions, id, source, target, label, error});
    }

    return out;
}

utils.searchNearestHandles = connection => {
    const {source, target} = connection;
    const nodesObj = utils.nodesObjCurrent.current;

    const getHandles = node => {
        const {position: {x, y}, width, height} = node;
        const xc = x + width / 2;
        const yc = y + height / 2;

        return [
            {handle: 'top',    x: xc,        y: y         },
            {handle: 'bottom', x: xc,        y: y + height},
            {handle: 'left',   x: x,         y: yc        },
            {handle: 'right',  x: x + width, y: yc        },
        ]
    }
    const sourceHandles = getHandles(nodesObj[source]);
    const targetHandles = getHandles(nodesObj[target]);

    const getLength = (coord1, coord2) => {
        const l1 = coord1.x - coord2.x;
        const l2 = coord1.y - coord2.y;
        const l = Math.sqrt(l1 * l1 + l2 * l2);
        return Math.round(l);
    }

    let min = 10000000000000;
    const fromTo = {};
    for(let coord1 of sourceHandles) {
        for(let coord2 of targetHandles) {
            const length = getLength(coord1, coord2);
            if(length < min) {
                min = length;
                fromTo.source = coord1.handle;
                fromTo.target = coord2.handle;
            }
        }
    }
    connection.sourceHandle = fromTo.source;
    connection.targetHandle = fromTo.target;
    return fromTo;
}

utils.recalcNearestHandlesForNode = (id, edges) => {
    for(let edge of edges) {
        if(edge.source === id || edge.target === id) {
            utils.searchNearestHandles(edge);
        }
    }
}

utils.recalcNearestHandlesForAllEdges = edges => {
    for(let edge of edges) {
        utils.searchNearestHandles(edge);
    }
}

utils.connectionIsPresent = connection => {
    const source = connection.source;
    const target = connection.target;

    for(let edge of utils.edgesCurrent.current) {
        if(
            (edge.source === source && edge.target === target) ||
            (edge.source === target && edge.target === source)
        ) {
            return true;
        }
    }
    return false;
}

utils.removeLinksByEdgeId = id => {
    const linksCurrent = utils.linksCurrent;
    const out = [];

    for(let i in linksCurrent.current) {
        const source = linksCurrent.current[i].source;
        const target = linksCurrent.current[i].target;
        const id1 = `${source}-${target}`;
        const id2 = `${target}-${source}`;

        if(!~id.indexOf(id1) && !~id.indexOf(id2)) {
            out.push(linksCurrent.current[i]);
        }
    }
    linksCurrent.current = out;
}

utils.setNodesOptimalPositions_ = () => {
    const num = utils.nodesCurrent.current.length;

    const mainDegree = -90 + 360 / num / 3;
    const diameter = 100;
    const leftOffset = 200;
    const topOffset = 0;

    const deltaDegree = 360 / num;
    const radius = diameter / 2;
    const degreeToRadiansCoeff = Math.PI / 180;
    const center = {x: diameter / 2, y: diameter / 2};

    const getPointByDegree = degree => {
        return {
            x: Math.round(center.x + radius * Math.cos((mainDegree + degree) * degreeToRadiansCoeff)),
            y: Math.round(center.y + radius * Math.sin((mainDegree + degree) * degreeToRadiansCoeff)),
        }
    }

    for(let i in utils.nodesCurrent.current) {
        const node = utils.nodesCurrent.current[i];
        const {x, y} = getPointByDegree(Number(i) * deltaDegree);
        node.position = {
            x: x - (node.width / 2) + leftOffset,
            y: y - (node.height / 2) + topOffset,
        }
    }
}

utils.getNodeLinks = (data, edges) => {
    const nodeId = data.id;
    const out = {};

    for(let edge of edges) {
        if(edge.source === nodeId || edge.target === nodeId) {
            out[edge.id] = true;
        }
    }
    return out;
}

utils.getSelectedRelationId = () => {
    for(let id in utils.relations.statuses) {
        if(utils.relations.statuses[id]?.selected) return id;
    }
    return null;
}

utils.dagreGraph = () => {
    const g = new dagre.graphlib.Graph();

    g.setGraph({                        // ПО УМОЛЧАНИЮ     ЗА ЧТО ОТВЕЧАЕТ ПАРАМЕТР
        rankdir: 'LR',                  // TB               Направление для ранжирования узлов. Может быть TB, BT, LR или RL
        align: undefined,               // undefined        Выравнивание для ранговых узлов. Может быть UL, UR, DL или DR
        nodesep: 50,                    // 50               Количество пикселей, разделяющих узлы по горизонтали в макете.
        edgesep: 10,                    // 10               Количество пикселей, разделяющих края по горизонтали в макете.
        ranksep: 50,                    // 50               Количество пикселей между каждым рангом в макете
        marginx: 0,                     // 0                Количество пикселей, которые будут использоваться в качестве поля вокруг левой и правой части графика.
        marginy: 0,                     // 0                Количество пикселей, которые будут использоваться в качестве поля вокруг верхней и нижней части графика.
        acyclicer: undefined,           // undefined        Если установлено значение greedy, используется жадная эвристика для поиска набора дуг обратной связи для графика.
                                        //                  Набор дуг обратной связи — это набор ребер, которые можно удалить, чтобы сделать граф ацикличным.
        ranker: 'network-simple',       // network-simple   Тип алгоритма, присваивающего ранг каждому узлу входного графа.
                                        //                  Возможные значения: network-simplex, tight-tree или longest-path
    });

    g.setDefaultEdgeLabel(data => ({}));

    for(let node of utils.nodesCurrent.current) {
        g.setNode(
            node.id,
            {
                label: node.id,
                width: node.width,
                height: node.height
            }
        );
    }

    for(let edge of utils.edgesCurrent.current) {
        g.setEdge(edge.source, edge.target);
    }

    dagre.layout(g);

    for(let node of utils.nodesCurrent.current) {
        node.position = {
            x: Math.round(g._nodes[node.id].x),
            y: Math.round(g._nodes[node.id].y),
        }
    }

    utils.setNodes([...utils.nodesCurrent.current])
}

utils.getTablesPositions = () => {
    const positions = {};

    for(let node of utils.nodesCurrent.current) {
        positions[node.id] = {
            x: Math.round(node.position.x),
            y: Math.round(node.position.y),
        }
    }
    const out = JSON.stringify(positions);
    utils.positionsCurrent.current = out;
    return out;
}

utils.getSelectedTable = () => {
    const statuses = utils.relations.statuses;

    for(let id in statuses) {
        if(statuses[id].active && statuses[id].selected) {
            return id;
        }
    }
    return null;
}

utils.linksToVirtualJoinsText = () => {
    const out = [...utils.notValidatedCurrent.current];
    for(let i in utils.linksObjCurrent.current) {
        out.push(utils.linksObjCurrent.current[i].label);
    }
    return out.join(constants.linksSeparator);
}

utils.getLinksData = () => {
    const linksInServerFormat = utils.linksToSystemLinks(utils.linksCurrent.current);
    if(linksInServerFormat === false) {
        return null;
    }

    return {
        links: linksInServerFormat,
        scheme: {
            nodes: utils.nodesCurrent.current,
            edges: utils.edgesToJSON({edges: utils.edgesCurrent.current}),
        },
        positions: utils.getTablesPositions(),
    };
}


export default utils;
