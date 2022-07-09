import _ from 'lodash';

const symbols = {
  unchanged: ' ',
  removed: '-',
  added: '+',
};

const setIndent = (num, str = ' ') => str.repeat(num * 4 - 2);

const makeString = (value, num = 1) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = _.keys(value);
  const result = keys.map((key) => {
    const nestedKey = value[key];
    return `${setIndent(num + 1)}  ${key}: ${makeString(nestedKey, num + 1)}`;
  });
  return `{\n${result.join('\n')}\n  ${setIndent(num)}}`;
};

const stylish = (obj) => {
  const iter = (node, num = 1) => {
    const {
      type, key, value, meta, children,
    } = node;
    switch (type) {
      case 'removed':
      case 'added':
      case 'unchanged':
        return `${setIndent(num)}${symbols[type]} ${key}: ${makeString(value, num)}`;
      case 'updated':
        return `${setIndent(num)}${symbols.removed} ${key}: ${makeString(meta.oldValue, num)}\n${setIndent(num)}${symbols.added} ${key}: ${makeString(value, num)}`;
      case 'nested': {
        const objectResult = children.flatMap((child) => iter(child, num + 1));
        return `${setIndent(num)}  ${key}: {\n${objectResult.join('\n')}\n${setIndent(num)}  }`;
      }
      default: throw new Error(`Unknown type: ${type}`);
    }
  };
  const result = obj.map((item) => iter(item));
  return `{\n${result.join('\n')}\n}`;
};

export default stylish;
