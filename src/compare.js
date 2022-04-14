import fs from 'fs';
import _ from 'lodash';

const areObjectsEqual = (obj1, obj2) => _.isEqual(obj1, obj2);
const getEqualKeys = (obj1, obj2) => {
  const entries = Object.entries(obj1);
  const equalKeys = {};
  for (const [key, value] of entries) {
    if (_.has(obj2, key) && obj1[key] === obj2[key]) {
      equalKeys[key] = value;
    }
  }
  return equalKeys;
};
const getDifferentKeys = (obj1, obj2) => {
  const entries = Object.entries(obj1);
  const result1 = {};
  const result2 = {};

  for (const [key, value] of entries) {
    if (_.has(obj2, key) && obj1[key] !== obj2[key]) {
      result1[`- ${key}`] = value;
      result2[`+ ${key}`] = obj2[key];
    }
  }
  return Object.assign(result1, result2);
};

const uniqFirstObject = (obj1, obj2) => {
  const keys = Object.keys(obj1);
  const result = {};
  for (const key of keys) {
    if (!_.has(obj2, key)) {
      result[`- ${key}`] = obj1[key];
    }
  }
  return result;
};
const uniqSecondObject = (obj1, obj2) => {
  const keys = Object.keys(obj2);
  const result = {};
  for (const key of keys) {
    if (!_.has(obj1, key)) {
      result[`+ ${key}`] = obj2[key];
    }
  }
  return result;
};

const compareFiles = (file1, file2) => {
  const obj1 = JSON.parse(fs.readFileSync(file1, 'utf8'));
  const obj2 = JSON.parse(fs.readFileSync(file2, 'utf8'));
  if (areObjectsEqual(obj1, obj2)) {
    return obj1;
  }
  const equalKeys = getEqualKeys(obj1, obj2);
  const differentKeys = getDifferentKeys(obj1, obj2);
  const uniqKeysOfFirstObj = uniqFirstObject(obj1, obj2);
  const uniqKeysOfSecondObj = uniqSecondObject(obj1, obj2);
  const diffObject = JSON.stringify(Object.assign(equalKeys, differentKeys, uniqKeysOfFirstObj, uniqKeysOfSecondObj), false, ' ');
  console.log(diffObject);
};

export default compareFiles;
