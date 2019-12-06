import { clone } from './deepCopy';

describe('clone', () => {
  describe('Arrays', () => {
    it('should deep copy an array', () => {
      let arr: any[] = [0, 1, 2, 3];
      let copyArr = clone(arr);
      copyArr[2] = 42;
      expect(arr[2]).toBe(2);

      arr = [{ prop: 'Hello' }, { prop: 'World!' }];
      copyArr = clone(arr);
      copyArr[1] = { prop: 'Override' };
      expect(arr[1]).toEqual({ prop: 'World!' });

      arr = [[0, 1, 2], [1, 2, 3], [2, 3, 4]];
      copyArr = clone(arr);
      copyArr[1] = [7, 8, 9];
      expect(arr[1]).toEqual([1, 2, 3]);
    });
  });
});
