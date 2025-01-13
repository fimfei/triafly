import React from 'react';
import {ChordsSector, ChordsLink} from ".";
import {Utils, SectorInfo} from ".";

import './scss/chords.scss';

const Chords = props => {
    const {dyText = 0, className = '', fontSize: externalFontSize = 16} = props;
    const utilsCurrent = React.useRef(new Utils(props));
    const utils = utilsCurrent.current;
    const connector = utils.connector;

    const [fontSize, setFontSize] = React.useState(externalFontSize);
    const [selectedSector, setSelectedSector] = React.useState(null);
    const innerRef = React.useRef(null);

    React.useEffect(() => {
        const classes = className ? `.${className.replace(/\s+/g, " ").trim().replace(/ /g, '.')}` : '';
        const selector = `.chords-wrapper${classes} svg`;

        const handleResize = () => {
            const svgElement = document.querySelector(selector);
            const svgWidth = svgElement.clientWidth;
            const svgHeight = svgElement.clientHeight;
            const scaleFactor = Math.min(svgWidth / 100, svgHeight / 100);
            setFontSize(externalFontSize / scaleFactor);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log('connector', connector)

    return (
        <div className={`chords-wrapper${className ? ' ' + className : ''}`}>
            <div className="chords-inner" ref={innerRef}>
                <svg className="parallel-sets-svg-root" width="100%" height="100%" viewBox="0 0 100 100">
                    {connector.data.sectorsAngles.map((angles, index) => {
                        return (
                            <React.Fragment key={`circle-sector-${index}`}>
                                <ChordsSector
                                    connector={connector}
                                    angles={angles}
                                    index={index}
                                    fontSize={fontSize}
                                    selectedSector={selectedSector}
                                    setSelectedSector={setSelectedSector}
                                />
                            </React.Fragment>
                        )
                    })}
                    {connector.data.links.map((link, index) => {

                        return (
                            <React.Fragment key={`circle-link-${index}`}>
                                <ChordsLink
                                    connector={connector}
                                    link={link}
                                    selectedSector={selectedSector}
                                />
                            </React.Fragment>
                        )
                    })}
                </svg>
                {selectedSector !== null && (
                    <SectorInfo
                        connector={connector}
                        selectedSector={selectedSector}
                        inner={innerRef.current.getBoundingClientRect()}
                    />
                )}
            </div>
        </div>
    )
}

export default Chords;