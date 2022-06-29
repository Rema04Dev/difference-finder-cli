import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import compare from './compare.js';
import getRenderFormat from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath)
const parseData = (filepath) => {
  const ext = path.extname(filepath);
  const data = fs.readFileSync(getFullPath(filepath), 'utf-8');
  return parse(data, ext);
};
const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const paths = [filepath1, filepath2];
  const data = paths.map(parseData);
  const diff = compare(data);
  const formatAst = getRenderFormat(diff, formatName);
  return formatAst;
};

export default gendiff;
