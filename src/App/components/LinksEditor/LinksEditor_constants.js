const constants = {
    joinName: '_join_',
    operandName: '_operand_',
    defaultJoin: 'inner',
    linksSeparator: '\n',
    joins1: ['inner', 'left', 'right', 'full'],
    joins2: ['outer', 'join'],
    joins3: ['outer', 'join'],
    operands: ['=', '>', '<'],
    mainRegExp: /^\s*(\S+|)?\s*(\S+|)?\s*(\S+|)?\s+([a-zA-Z0-9А-Яа-я_]+)\.([a-zA-Z0-9А-Яа-я_]+|)\s+(\S)\s+((ANY|any)(\()|)([a-zA-Z0-9А-Яа-я_]+)(\)|)\.([a-zA-Z0-9А-Яа-я_]+|)(\)|)\s*(\/\*(.*)\*\/|\/\/(.*))?\s*$/,
    twoTableNameRegExp: /^.*\s+(\S+)\..*\s+(\S+)\..*$/,
    anyRegExp: /^(ANY|any)\((\w+)(\)|)$/,
};

export default constants;