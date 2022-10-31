import { reverseArray } from './reverseArray'

it('check function reverseArray: [1, 4, 3] => [3, 4, 1]', () => {
  const result = reverseArray([1, 4, 3]);
  expect(result).toEqual([3, 4, 1]);
});

it('check function reverseArray: 234 => null', () => {
  const result = reverseArray(234);
  expect(result).toEqual(null);
});

it('check function reverseArray: [1, 3, 4, 6, 8, 3] => [3, 8, 6, 4, 3, 1]', () => {
  const result = reverseArray([1, 3, 4, 6, 8, 3]);
  expect(result).toEqual([3, 8, 6, 4, 3, 1]);
});