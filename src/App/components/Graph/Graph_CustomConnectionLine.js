import {getStraightPath} from 'reactflow';

const CustomConnectionLine = ({...props}) => {
    const {fromX, fromY, toX, toY, connectionLineStyle} = props;

    const [edgePath] = getStraightPath({
        sourceX: fromX,
        sourceY: fromY,
        targetX: toX,
        targetY: toY,
    });

    return (
        <g>
            <path style={connectionLineStyle} fill="none" d={edgePath} connectionLineType="getStraightPath" />
            <circle cx={toX} cy={toY} fill="black" r={3} stroke="black" strokeWidth={1.5} />
        </g>
    );
}

export default CustomConnectionLine;