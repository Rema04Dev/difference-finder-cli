import stylish from './stylish.js';
import plain from './plain.js';

const getRenderFormat = (tree, format) => {
  let parse;
  switch (format) {
    case 'stylish':
      parse = stylish;
      break;
    case 'plain':
      parse = plain;
      break;
    case 'json':
      parse =  JSON.stringify;
      break;
  }
  return parse(tree);
};

export default getRenderFormat;
