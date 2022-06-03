import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(filename, 'utf-8');

const expectStylish = readFile(getFixturePath('stylish.expect.txt'));
// const expectPlain = readFile(getFixturePath('plain.expect.txt'));
const yamlFile1 = getFixturePath('file1.yaml');
const yamlFile2 = getFixturePath('file2.yaml');
const jsonFile1 = getFixturePath('file1.json');
const jsonFile2 = getFixturePath('file2.json');

test.each([
  [yamlFile1, yamlFile2, expectStylish],
  [jsonFile1, jsonFile2, expectStylish],
])('Test format stylish (%s, %s)', (file1, file2, expected) => {
  expect(gendiff(file1, file2, 'stylish')).toBe(expected);
});

// test.each([
//   [yamlFile1, yamlFile2, expectPlain],
//   [jsonFile1, jsonFile2, expectPlain],
// ])('Test format plain (%s, %s)', (file1, file2, expected) => {
//   expect(gendiff(file1, file2, 'plain')).toBe(expected);
// });
