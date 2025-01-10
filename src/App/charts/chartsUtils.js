export const chartsUtils = {};

chartsUtils.splitStyles = styles => {
    const svgStyles = {};
    const htmlStyles = {};
    
    const svgProperties = [
        'fill', 'stroke',
        'stroke-width',      'strokeWidth',
        'stroke-dasharray',  'strokeDasharray',
        'stroke-linecap',    'strokeLinecap',
        'stroke-linejoin',   'strokeLinejoin',
        'text-anchor',       'textAnchor',
        'dominant-baseline', 'dominantBaseline',
        'cx', 'cy', 'r', 'x', 'y', 'd',
        'width', 'height', 'points', 'transform',
    ];
    
    for (const key in styles) {
        if(svgProperties.includes(key))
            svgStyles[key] = styles[key]; else
            htmlStyles[key] = styles[key];
    }
    return {svgStyles, htmlStyles};
}

chartsUtils.replaceValues = (fraction, text) => {
    if(typeof text !== "string") return text;

    const matches = text.match(/#\{[^}]+\}/g);
    if(!matches) return chartsUtils.getValueFromObject(fraction, text);

    const result = text.replace(/#\{([^}]+)\}/g, (match, addressText) => {
        return chartsUtils.getValueFromObject(fraction, addressText);
    });

    return result;
}

chartsUtils.getValueFromObject = (object, addressText) => {
    const errorText = `Ошибка адреса #{${addressText}} в объекте`;

    if(typeof addressText !== "string") return addressText;

    const address = addressText.split('.');
    let currentValue = object;

    for(let nextAddr of address) {
        if(currentValue[nextAddr] !== undefined) {
            currentValue = currentValue[nextAddr];
        } else {
            return addressText;
        }
    }

    return currentValue;
}

chartsUtils.toRadians = degrees => degrees * Math.PI / 180;
chartsUtils.round = num => Math.round(Number(num) * 10) / 10;

chartsUtils._getXY = props => {
    const {radius, startAngle, endAngle} = props;

    const angleStart = chartsUtils.toRadians(startAngle);
    const angleEnd   = chartsUtils.toRadians(endAngle);

    return {
        x1: chartsUtils.round(radius * Math.cos(angleStart)),
        y1: chartsUtils.round(radius * Math.sin(angleStart)),
        x2: chartsUtils.round(radius * Math.cos(angleEnd)),
        y2: chartsUtils.round(radius * Math.sin(angleEnd)),
    }
}

chartsUtils.getArcPath = props => {
    const {radius, startAngle, endAngle, centerX = 50, centerY = 50, controlPoints = false} = props;

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    const {x1, y1, x2, y2} = chartsUtils._getXY({radius, startAngle, endAngle})

    const startX = centerX + x1;
    const startY = centerY + y1;
    const endX = centerX + x2;
    const endY = centerY + y2;

    const path = [
        `M ${startX} ${startY}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
    ].join(' ');

    if(controlPoints) return {
        path,
        cxStart: startX + (centerX - startX) * 0.5,
        cyStart: startY + (centerY - startY) * 0.5,
        cxEnd: endX + (centerX - endX) * 0.5,
        cyEnd: endY + (centerY - endY) * 0.5,
        startX, startY, endX, endY,
    }
    return path;
}

chartsUtils.getSectorPath = props => {
    const {innerRadius, outerRadius, startAngle, endAngle, centerX = 50, centerY = 50,} = props;

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const {x1,      y1,      x2,      y2     } = chartsUtils._getXY({radius: outerRadius, startAngle, endAngle})
    const {x1: ix1, y1: iy1, x2: ix2, y2: iy2} = chartsUtils._getXY({radius: innerRadius, startAngle, endAngle})

    return [
        `M ${centerX + ix1} ${centerY + iy1}`,
        `L ${centerX + x1} ${centerY + y1}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${centerX + x2} ${centerY + y2}`,
        `L ${centerX + ix2} ${centerY + iy2}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${centerX + ix1} ${centerY + iy1}`,
        'Z',
    ].join(' ');
}
