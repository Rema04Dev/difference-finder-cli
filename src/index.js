import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import getRenderFormat from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const parseData = (filepath) => {
  const ext = path.extname(filepath);
  const data = fs.readFileSync(getFullPath(filepath), 'utf-8');
  return parse(data, ext);
};
const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const paths = [filepath1, filepath2];
  const data = paths.map(parseData);
  const tree = buildTree(data);
  return getRenderFormat(tree, formatName);
};

export default gendiff;
