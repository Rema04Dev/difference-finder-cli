import fs from 'fs';
import path from 'path';
import { compareObjects } from '../src/compare.js'

const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturesPath(filename), 'utf-8')

describe('genDiff', () => {
  it('test 1', () => {
    const actual = compareObjects({}, {});
    expect(actual).toEqual({});
  });

  it('test 2', () => {
    const actual = compareObjects({ one: 'eon' }, { two: 'own' });
    const expected = {
      '-one': 'eon',
      '+two': 'own',
    };
    expect(actual).toEqual(expected);
  });

  it('test 3', () => {
    const actual = compareObjects({ one: 'eon', two: 'two' }, { two: 'own', one: 'one' });
    const expected = {
      '-one': 'eon',
      '+one': 'one',
      '-two': 'two',
      '+two': 'own',
    };
    expect(actual).toEqual(expected);
  });

  it('test 4', () => {
    const actual = compareObjects({}, { two: 'own' });
    const expected = {
      '+two': 'own',
    };
    expect(actual).toEqual(expected);
  });

  it('test 5', () => {
    const actual = compareObjects({ one: 'eon' }, {});
    const expected = {
      '-one': 'eon',
    };
    expect(actual).toEqual(expected);
  });

  it('test 6', () => {
    const actual = compareObjects({ unchanged: 'item' }, { unchanged: 'item' });
    expect(actual).toEqual({ '=unchanged': 'item' });
  });
});
