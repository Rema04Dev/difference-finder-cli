import fs from 'fs';
import _ from 'lodash';

const parseData = (data) => JSON.parse(data);
const getKeys = (obj) => Object.keys(obj);

const getObjectWithMatualKeys = (object1, object2) => {
  const keys1 = getKeys(object1);
  const keys2 = getKeys(object2);
  const commonKeys = _.intersection(keys1, keys2);
  console.log(commonKeys);
  const result = commonKeys.reduce((acc, key) => {
    if (object1[key] !== object2[key]) {
      acc[`-${key}`] = object1[key];
      acc[`+${key}`] = object2[key];
    } else {
      acc[key] = object1[key];
    }
    return acc;
  }, {});
  return result;
};

const getDifferentKeys = (object1, object2) => {
  const keys1 = getKeys(object1);
  const keys2 = getKeys(object2);
  const uniqueKeysFromObject1 = _.difference(keys1, keys2);
  const uniqueKeysFromObject2 = _.difference(keys2, keys1);
  const keysOfObject1 = uniqueKeysFromObject1.reduce((acc, key) => {
    acc[`-${key}`] = key;
    return acc;
  }, {});
  const keysOfObject2 = uniqueKeysFromObject2.reduce((acc, key) => {
    acc[`-${key}`] = key;
    return acc;
  }, {});
  return Object.assign(keysOfObject1, keysOfObject2);
};

const compareFiles = (filepath1, filepath2) => {
  const data1 = fs.readFileSync(filepath1, 'utf-8');
  const data2 = fs.readFileSync(filepath2, 'utf-8');
  const object1 = parseData(data1);
  const object2 = parseData(data2);

  const result = Object.assign(
    getObjectWithMatualKeys(object1, object2),
    getDifferentKeys(object1, object2),
  );
  console.log(result);
  return result;
};
compareFiles('__fixtures__/file1.json', '__fixtures__/file2.json');
export default compareFiles;
