import sum, { getOddNumbers, getSquaredArray } from './calculator';

it('function sum(2,2) returned 4', () => {
  const result = sum(2, 2);
  expect(result).toEqual(4);
});

it('should get only odd numbers from array', () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 3]);
})

it('should get only square numbers from the array', () => {
  const result = getSquaredArray([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
})