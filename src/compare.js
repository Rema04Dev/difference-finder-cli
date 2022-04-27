import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import colors from 'colors';

colors.enable();

const buildAbsolutePath = (filename) => path.resolve(process.cwd(), '__fixtures__', filename);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const getFormat = (filename) => path.extname();
const compareObjects = (objects) => {
  const [obj1, obj2] = objects;
  const keys = _.union(_.keys(obj1), _.keys(obj2))
  const diff = keys.reduce((acc, key) => {
    if (!_.has(obj2, key)) {
      acc += `- ${key}: ${obj1[key]}\n`.red
    } else if (!_.has(obj1, key)) {
      acc += `+ ${key}: ${obj2[key]}\n`.green
    } else if (obj1[key] !== obj2[key]) {
      acc += `- ${key}: ${obj1[key]}\n`.red;
      acc += `+ ${key}: ${obj2[key]}\n`.green;
    } else {
      acc += `  ${key}: ${obj1[key]}\n`.yellow;
    }
    return acc;
  }, '');
  return diff;
}

export default (...filenames) => {
  const objects = filenames
  .map((filename) => buildAbsolutePath(filename))
  .map((filepath) => readFile(filepath))
  .map((data) => JSON.parse(data));

  const diff = compareObjects(objects);
  console.log(diff);
}