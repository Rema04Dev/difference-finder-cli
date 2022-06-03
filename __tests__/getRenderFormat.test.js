import genDiff from '../src/index.js';
import { getFixturePath, readFile } from '../__fixtures__/getFixturePath.js';

const stylishResult = readFile('stylish.expect.txt');

const file1json = getFixturePath('file1.json');
const file2json = getFixturePath('file2.json');
const file1yaml = getFixturePath('file1.yml');
const file2yml = getFixturePath('file2.yml');

test('result is string', () => {
  expect(typeof genDiff(file1json, file2json, 'stylish')).toEqual('string');
});
test('stylish json-json', () => {
  expect(genDiff(file1json, file2json, 'stylish')).toEqual(stylishResult);
});
test('stylish yaml-yml', () => {
  expect(genDiff(file1yaml, file2yml)).toEqual(stylishResult);
});
test('stylish yaml-json', () => {
  expect(genDiff(file1yaml, file2json)).toEqual(stylishResult);
});
