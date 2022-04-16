import fs from 'fs';
import _ from 'lodash';

const parseData = (data) => JSON.parse(data);
const getKeys = (obj) => Object.keys(obj);

const getObjectWithMatualKeys = (object1, object2) => {
  const keys1 = getKeys(object1);
  const keys2 = getKeys(object2);
  const commonKeys = _.intersection(keys1, keys2);
  const result = {};
  for (const key of commonKeys) {
    if (object1[key] !== object2[key]) {
      result[`-${key}`] = object1[key];
      result[`+${key}`] = object2[key];
    } else {
      result[key] = object1[key];
    }
  }
  return result;
};

const getDifferentKeys = (object1, object2) => {
  const keys1 = getKeys(object1);
  const keys2 = getKeys(object2);
  const uniqueKeysFromObject1 = _.difference(keys1, keys2);
  const uniqueKeysFromObject2 = _.difference(keys2, keys1);
  const result = {};
  for (const key of uniqueKeysFromObject1) {
    result[`-${key}`] = key;
  }
  for (const key of uniqueKeysFromObject2) {
    result[`+${key}`] = key;
  }
  return result;
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
  return result;
};

export default compareFiles;
