import React from 'react';

import './scss/chart-generator-fractions.scss';

const ChartGeneratorFractions = props => {
    const {connector, chart} = props;
    const {utils} = connector;

    if(!chart) return null;

    const fractions = utils.getFractions(chart);
    const {out, isInteger} = utils.getFractionsData(fractions);

    return (
        <div className="chart-generator-item fractions">
            <div className="wrapper">
                <div className="prefix"> const fractions = [</div>
                <div className="inner">
                    {out.map((items, index) => {
                        return (
                            <div
                                className={`items${isInteger[index] ? ' is-int' : ''}`}
                                key={`fraction-items-${index}`}
                            >
                                {items.map((item, itemIndex) => {

                                    return (
                                        <div
                                            key={`fraction-item-${index}-${itemIndex}`}
                                            className="item"
                                        >
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className="postfix">];</div>
            </div>
        </div>
    )
};

export default ChartGeneratorFractions;