import React from 'react';
import {Utils, RadarSvg, RadarText} from "./";

import './scss/radar.scss';

const Radar = props => {
    const utilsCurrent = React.useRef(new Utils(props));
    const utils = utilsCurrent.current;
    const connector = utils.connector;


    const [pixel, setPixel] = React.useState(0);
    const radarWrapperRef = React.useRef(null);
    console.log('connector', connector)

    React.useEffect(() => {
        connector.data = {...connector.data, setPixel, radarWrapperRef};

        window.addEventListener('resize', utils.handleResize.bind(connector.utils));
        utils.handleResize();
        return () => window.removeEventListener('resize', utils.handleResize);
    }, []);

    return (
        <div
            className="radar-wrapper"
            ref={radarWrapperRef}
        >
            <RadarSvg connector={connector} pixel={pixel} />
            <RadarText connector={connector} pixel={pixel} />
        </div>
    )
}

export default Radar;