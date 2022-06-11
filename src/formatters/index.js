import stylish from './stylish.js';
import plain from './plain.js';

const getRenderFormat = (tree, format) => {
  let render;
  if (format === 'stylish') {
    render = stylish;
  } else if (format === 'plain') {
    render = plain;
  } else if (format === 'json') {
    render = JSON.stringify;
  }
  return render(tree);
};

export default getRenderFormat;
