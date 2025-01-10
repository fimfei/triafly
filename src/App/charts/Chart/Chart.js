import React from 'react';

import './scss/chart.scss';

const Chart = props => {
    const {
        fractions = [],
        chartControllingRef,
        children,
        className = '',
    } = props;

    const getChildProps = child => {
        if(typeof child.type === 'string') return {};
        const {fractions: childFractions} = child.props;
        return {chartControllingRef, fractions: childFractions || fractions};
    }

    return (
        <div className={`chart-root${className ? ' ' + className : ''}`} >
                {React.Children.map(children, child => {
                    return React.cloneElement(child, getChildProps(child));
                })}
        </div>
    )
}

export default Chart;