import { calc } from './calculator';

it('function calc does not return nothing from differend types from string', () => {
  const result = calc(3232);
  expect(result).toEqual(null);
});

it('check function calc: 4 + 2 = 6', () => {
  const result = calc('4 + 2');
  expect(result).toEqual('4 + 2 = 6');
});

it('check function calc: 3 - 1 = 2', () => {
  const result = calc('3 - 1');
  expect(result).toEqual('3 - 1 = 2');
});

it('check function calc: 5 * 8 = 40', () => {
  const result = calc('5 * 8');
  expect(result).toEqual('5 * 8 = 40');
});

it('check function calc: 9 / 3 = 3', () => {
  const result = calc('9 / 3');
  expect(result).toEqual('9 / 3 = 3');
});