import _ from 'lodash';

const makeString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const plain = (nodes) => {
  const iter = (node, parent = '') => {
    const {
      type, key, value, meta, children,
    } = node;
    switch (type) {
      case 'nested':
        return children.flatMap((child) => iter(child, `${parent}${key}.`)).join('\n');
      case 'removed':
        return `Property '${parent}${key}' was removed`;
      case 'added':
        return `Property '${parent}${key}' was added with value: ${makeString(value)}`;
      case 'updated':
        return `Property '${parent}${key}' was updated. From ${makeString(meta.oldValue)} to ${makeString(value)}`;
      case 'unchanged':
        return [];
      default: console.log('Error!');
    }
    return node;
  };
  const result = nodes.map((node) => iter(node));
  return `${result.join('\n')}`;
};

export default plain;
