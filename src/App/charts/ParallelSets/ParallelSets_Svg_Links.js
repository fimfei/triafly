import React from 'react';

import './scss/parallel-sets-svg-links.scss';

const ParallelSetsSvgLinks = props => {
    const {connector, selectedId} = props;
    const {utils, data} = connector;
    const {linksData} = data;

    return (
        <React.Fragment>
            {linksData.map((item, index) => {
                const {left: {fill}} = item;

                const opacity = selectedId ? (item.id[selectedId] ? .5 : .05) : .5;

                return (
                    <path
                        key={`parallel-path-${index}`}
                        d={utils.getLinkPath(item)}
                        fill={fill}
                        opacity={opacity}
                    />
                )
            })}
        </React.Fragment>
    )
}

export default ParallelSetsSvgLinks;