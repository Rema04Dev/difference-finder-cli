import stylish from './stylish.js';
import plain from './plain.js';

const getRenderFormat = (tree, format) => {
  let render;
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree);
  }
};

export default getRenderFormat;
