import detailedDiff from '../src/detailed';
import detailToChangelog from '../src/detailToChangelog.js';

describe('.differenceToChangelog', () => {
  describe('base case', () => {
    test('return crud changelog', () => {
      const lhs = { a: { b: [[1, 2, 3, 4]] }, c: [], e: 'e' };
      const rhs = { a: { b: [[1, 2, 9999, 4]] }, c: 10, d: 'd' };
      const detailResult = detailedDiff(lhs, rhs);

      const got = detailToChangelog(detailResult, lhs);
      const want = [
        { type: 'create', path: ['d'], from: undefined, to: 'd' },
        { type: 'delete', path: ['e'], from: 'e', to: undefined },
        { type: 'update', path: ['a', 'b', '0', '2'], from: 3, to: 9999 },
        { type: 'update', path: ['c'], from: [], to: 10 },
      ];
      expect(got).toEqual(want);
    });
  });
});
