import path from 'path';
import compareFiles from '../src/compare.js';

const createPath = (filename) => path.join('./', '__fixtures__', filename);
test('Compare', () => {
  expect(compareFiles(createPath('file5.json'), createPath('file6.json'))).toEqual({
    '+age': 32,
    '-children': 'children',
    '+married': true,
    '+name': 'Ivan',
    '-age': 30,
    '-married': false,
    '-name': 'ALexandr',
    city: 'Moscow',
  });
});
