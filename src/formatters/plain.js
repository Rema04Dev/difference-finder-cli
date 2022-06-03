import _ from 'lodash';

const stringify = (node) => {
  if (_.isObject(node)) {
    return '[complex value]';
  }
  return `${node}`;
};

const buildAst = (nodes) => {
  const tree = nodes.map((node) => {
    const {
      key, value, type, meta,
    } = node;
    switch (type) {
      case 'added':
        return `Property ${key} was ${type} with value: ${value}`;
      case 'removed':
        return `Property ${key} was ${type}`;
      case 'updated':
        return `Property ${key} was ${type}. From '${meta.oldValue}' to '${value}'`;
      case 'unchanged':
        return null;
    }
  });
  return tree;
};
export default (tree) => `${buildAst(tree).join('\n')}`;
