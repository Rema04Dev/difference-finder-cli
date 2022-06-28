import stylish from './stylish.js';
import plain from './plain.js';

const getRenderFormat = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`format ${format} is not supported`);
  }
};

export default getRenderFormat;
