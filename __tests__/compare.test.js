import { compareObjects } from '../src/compare.js'
describe('genDiff', () => {
  it('test 1', () => {
    const actual = compareObjects({}, {});
    expect(actual).toEqual({});
  });

  it('test 2', () => {
    const actual = genDiff({ one: 'eon' }, { two: 'own' });
    const expected = {
      '-one': 'eon',
      '+two': 'own',
    };
    expect(actual).toEqual(expected);
  });

//   it('test 3', () => {
//     const actual = genDiff({ one: 'eon', two: 'two' }, { two: 'own', one: 'one' });
//     const expected = {
//       one: 'changed',
//       two: 'changed',
//     };
//     expect(actual).toEqual(expected);
//   });

//   it('test 4', () => {
//     const actual = genDiff({}, { two: 'own' });
//     const expected = {
//       two: 'added',
//     };
//     expect(actual).toEqual(expected);
//   });

//   it('test 5', () => {
//     const actual = genDiff({ one: 'eon' }, {});
//     const expected = {
//       one: 'deleted',
//     };
//     expect(actual).toEqual(expected);
//   });

//   it('test 6', () => {
//     const actual = genDiff({ unchanged: 'item' }, { unchanged: 'item' });
//     expect(actual).toEqual({ unchanged: 'unchanged' });
//   });
// });
