import genDiff from '../src/index.js';
import { getFixturePath, readFile } from '../__fixtures__/getFixturePath.js';

const stylishResult = readFile('stylish.expect.txt');
const plainResult = readFile('plain.expect.txt');
const jsonResult = readFile('json.expect.txt');

const file1json = getFixturePath('file1.json');
const file2json = getFixturePath('file2.json');
const file1yaml = getFixturePath('file1.yml');
const file2yml = getFixturePath('file2.yml');

test('stylish json-json', () => {
  expect(genDiff(file1json, file2json, 'stylish')).toEqual(stylishResult);
});
test('stylish yaml-yml', () => {
  expect(genDiff(file1yaml, file2yml, 'stylish')).toEqual(stylishResult);
});
test('stylish yaml-json', () => {
  expect(genDiff(file1yaml, file2json, 'stylish')).toEqual(stylishResult);
});

test('plain json-json', () => {
  expect(genDiff(file1json, file2json, 'plain')).toEqual(plainResult);
});
test('plain yaml-yml', () => {
  expect(genDiff(file1yaml, file2yml, 'plain')).toEqual(plainResult);
});
test('plain yaml-josn', () => {
  expect(genDiff(file1yaml, file2json, 'plain')).toEqual(plainResult);
});

test('json json-json', () => {
  expect(genDiff(file1json, file2json, 'json')).toEqual(jsonResult);
});
test('json yaml-yml', () => {
  expect(genDiff(file1yaml, file2yml, 'json')).toEqual(jsonResult);
});
test('json yaml-json', () => {
  expect(genDiff(file1yaml, file2json, 'json')).toEqual(jsonResult);
});
