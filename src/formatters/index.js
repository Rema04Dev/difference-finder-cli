import stylish from './stylish.js';
import plain from './plain.js';

const getRenderFormat = (tree, format = 'stylish') => {
  let render;
  if (format === 'stylish') {
    render = stylish;
  } else if (format === 'plain') {
    render = plain;
  }
  return render(tree);
}

export default getRenderFormat;
