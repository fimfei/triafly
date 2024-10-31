class PowerGraph {
    constructor(data) {
        const {nodesCurrent, edgesCurrent, setNodes, setEdges, callback} = data;

        this.stepPercent = 1;
        this.springLength = 220;
        this.springRatio = 40;
        this.coulombsLength = 1200;
        this.coulombsRatio = 40;
        this.stopDelta = 0.1;

        this.nodesCurrent = nodesCurrent;
        this.edgesCurrent = edgesCurrent;
        this.setNodes = setNodes;
        this.setEdges = setEdges;
        this.callback = callback;
        
        this.buildSheme();
        this.nextStep();
    }

    buildSheme() {
        this.scheme = {};
        this.allNodes = {};

        for(let node of this.nodesCurrent.current) {
            const nodeId = node.id
            this.allNodes[nodeId] = node.position;

            const item = {
                links: {},
            };

            this.scheme[nodeId] = item;

            for(let edge of this.edgesCurrent.current) {
                if(edge.source === nodeId || edge.target === nodeId) {
                    const neighbor = edge.source === nodeId ? edge.target : edge.source;
                    item.links[neighbor] = true;
                }
            }
        }
    }

    nextStep() {
        const oldAllNodes = this.allNodes;
        const nodesPowers = {};

        for(let fromNodeId in oldAllNodes) {
            const {x: fromX, y: fromY} = oldAllNodes[fromNodeId];

            for(let toNodeId in oldAllNodes) {
                if(fromNodeId !== toNodeId) {
                    const {x: toX, y: toY} = oldAllNodes[toNodeId];
                    nodesPowers[fromNodeId] = nodesPowers[fromNodeId] || {};
                    const link = !!this.scheme[fromNodeId].links[toNodeId];
                    nodesPowers[fromNodeId][toNodeId] = this.getPowers({fromNodeId, toNodeId, link, fromX, fromY, toX, toY})
                }
            }
        }

        const theEnd = this.getTotalPowers(nodesPowers);
        this.setNewCoordinates();
        if(!theEnd) {
            setTimeout(() => {
                this.nextStep();
            }, 0);
        } else {
            if(this.callback) this.callback();
        }
    }

    setNewCoordinates() {
        const newNodes = [...this.nodesCurrent.current]

        for(let node of newNodes) {
            node.position.x = Math.round(node.position.x + this.totalPowers[node.id].x / 100 * this.stepPercent);
            node.position.y = Math.round(node.position.y + this.totalPowers[node.id].y / 100 * this.stepPercent);
        }
        this.setNodes(newNodes);
    }

    getTotalPowers(nodesPowers) {
        const out = {};
        let theEnd = !!this.totalPowers;
        let max = 0;

        for(let nodeId in nodesPowers) {
            const totalPower = {x: 0, y: 0};

            for(let i in nodesPowers[nodeId]) {
                const to = nodesPowers[nodeId][i];

                for(let power in to) {
                    const {x, y} = to[power];

                    totalPower.x += x; //Math.round(x);
                    totalPower.y += y; //Math.round(y);
                }
            }
            out[nodeId] = totalPower;

            if(theEnd) {
                const deltaX = Math.abs(totalPower.x - this.totalPowers[nodeId].x);
                const deltaY = Math.abs(totalPower.y - this.totalPowers[nodeId].y);

                if(deltaX > this.stopDelta || deltaY > this.stopDelta) {
                    theEnd = false;
                }
                max = Math.max(max, deltaX, deltaY);
            }
        }
        this.totalPowers = out;
        return theEnd;
    }

    getPowers ({...props}) {
        const powers = {};
        powers.spring = this.getSpringPower(props);
        powers.coulombs = this.getCoulombsPower(props);
        return powers;
    }

    getLength({fromX, fromY, toX, toY}) {
        const vX = toX - fromX;
        const vY = toY - fromY;
        const length = Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2));
        return {vX, vY, length};
    }

    getSpringPower({...props}) {
        if(!props.link) return {x: 0, y: 0};

        const {vX, vY, length} = this.getLength(props);
        const excess = length - this.springLength;
        const percent = excess * 100 / length;

        return {
            x: vX * percent / 100 * this.springRatio,
            y: vY * percent / 100 * this.springRatio,
        }
    }

    getCoulombsPower ({...props}) {
        const {fromNodeId, toNodeId, link} = props;
        const withoutPower = {x: 0, y: 0};

        if(link) return withoutPower;
        const inOneGroup = this.fromOneGroup(fromNodeId, toNodeId);
        if(!inOneGroup) return withoutPower;
        
        const {vX, vY, length} = this.getLength(props);
        const power = this.coulombsLength / length;
        const percent = power * 100 / length;

        return {
            x: vX * percent / 100 * this.coulombsRatio * -1,
            y: vY * percent / 100 * this.coulombsRatio * -1,
        }
    }

    fromOneGroup(fromNodeId, toNodeId) {
        let inOneGroup = false;
        const viewed = {};

        const nextChild = currId => {
            if(viewed[currId]) return;
            viewed[currId] = true;

            if(currId === fromNodeId) return;
            if(currId === toNodeId) inOneGroup = true;
            if(inOneGroup) return;
            viewed[currId] = true;
            
            for(let id in this.scheme[currId].links) nextChild(id);
        }

        for(let id in this.scheme[fromNodeId].links) nextChild(id);
        return inOneGroup;
    }
}

export default PowerGraph;
