import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import yaml from 'js-yaml';

const getAbsolutePath = (fileName) => path.resolve(process.cwd(), '__fixtures__', fileName);
const getFormat = (filename) => path.extname(filename);
const parseData = (data, ext) => {
    let parse;
    if (ext === '.json') {
        parse = JSON.parse;
    } else if (ext === '.yaml' || ext === '.yml') {
        parse = yaml.load;
    }
    return parse(data)
}
export const compareObjects = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    const keys = _.union(keys1, keys2).sort();
    const result = {};
    for (const key of keys) {
        if (!Object.hasOwn(object1, key)) {
            result[`+${key}`] = object2[key];
        } else if (!Object.hasOwn(object2, key)) {
            result[`-${key}`] = object1[key]
        } else if (object1[key] !== object2[key]) {
            result[`-${key}`] = object1[key];
            result[`+${key}`] = object2[key];
        } else {
            result[`=${key}`] = object1[key];
        }
    }
    return result;
}

const compareFiles = (filename1, filename2) => {
    const data1 = fs.readFileSync(getAbsolutePath(filename1), 'utf-8');
    const data2 = fs.readFileSync(getAbsolutePath(filename2), 'utf-8');
    const object1 = parseData(data1, getFormat(filename1));
    const object2 = parseData(data2, getFormat(filename2));
    const diff = compareObjects(object1, object2);
    console.log(diff);
}
compareFiles('file1.yaml', 'file2.json')
export default compareFiles;