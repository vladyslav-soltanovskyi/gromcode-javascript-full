import getMinSquaredNumber from './getMinSquaredNumber';

it('function getMinSquaredNumber does not return nothing from empty array', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('function getMinSquaredNumber does not return nothing from string', () => {
  const result = getMinSquaredNumber('some string');
  expect(result).toEqual(null);
})

it('should get only min number in square from the array', () => {
  const result = getMinSquaredNumber([12, -2, 6, 243]);
  expect(result).toEqual(4);
})