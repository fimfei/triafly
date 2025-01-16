import React from 'react';

import './scss/chart-generator-code.scss';

const ChartGeneratorCode = props => {
    const {connector, chart} = props;
    const {utils} = connector;

    if(!chart) return null;

    const componentInfo = utils.getCode(chart);
    const data = utils.getChartFullData(chart);

    console.log('____________>', data)

    return (
        <div className="chart-generator-item code">
            <div className="wrapper">
                <div className="inner">
                    <div className="code-prefix">{`<${componentInfo.name}`}</div>
                    <div className="code-wrapper">
                        <div className="code-wrapper-parameters">
                            {data.map((item, index) => {
                                let value = item.value;
                                if(item.type === 'bool') value = item.type ? 'true' : 'false';
                                if(item.type === 'array') value = utils.jsonStringify(item.value);

                                return (
                                    <div
                                        key={`code-item-${index}`}
                                        className={`code-item ${item.type}`}
                                    >
                                        <div className="key">{item.key}</div>
                                        <div className="value">{value}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="code-wrapper-comments">
                            {data.map((item, index) => {

                                return (
                                    <div
                                        key={`code-comment-${index}`}
                                        className={`code-item ${item.type}`}
                                    >
                                        {`// ${item.comment}`}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="code-postfix">/></div>
                </div>
            </div>
        </div>
    )
};

export default ChartGeneratorCode;