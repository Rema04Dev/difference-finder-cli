import compareFiles from '../src/compare.js'
import path from 'path';
import sum from '../src/draft.js';
const createPath = (filename) => path.join('./', '__fixtures__', filename);
test('Compare', () => {
    expect(compareFiles(createPath('file1.json'), createPath('file2.json'))).toEqual({
        "+age": 32,
        "+children": "children",
        "+married": true,
        "+name": "Ivan",
        "-age": 30,
        "-married": false,
        "-name": "ALexandr",
        "city": "Moscow"
    })
})

test('Sum', () => {
    expect(sum(4, 5)).toBe(9)
})