import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.resolve(process.cwd(), '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const stylishResult = readFile('stylish.expect.txt');
const plainResult = readFile('plain.expect.txt');
const jsonResult = readFile('json.expect.txt');

const file1json = getFixturePath('file1.json');
const file2json = getFixturePath('file2.json');
const file1yaml = getFixturePath('file1.yml');
const file2yml = getFixturePath('file2.yml');

test.each([
  [file1json, file2json, stylishResult],
  [file1yaml, file2yml, stylishResult],
  [file1json, file2yml, stylishResult],
])('Stylish', (file1, file2, expected) => {
  expect(genDiff(file1, file2, 'stylish')).toBe(expected);
});

test.each([
  [file1json, file2json, plainResult],
  [file1yaml, file2yml, plainResult],
  [file1json, file2yml, plainResult],
])('Plain', (file1, file2, expected) => {
  expect(genDiff(file1, file2, 'plain')).toBe(expected);
});

test.each([
  [file1json, file2json, jsonResult],
  [file1yaml, file2yml, jsonResult],
  [file1json, file2yml, jsonResult],
])('Plain', (file1, file2, expected) => {
  expect(genDiff(file1, file2, 'json')).toBe(expected);
});
