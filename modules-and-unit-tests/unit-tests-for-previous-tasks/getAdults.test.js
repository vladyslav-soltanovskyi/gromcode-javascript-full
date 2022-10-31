import { getAdults } from './getAdults';

it('empty object return empty object', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('should return an only object with values are number more than 18 or equal', () => {
  const result = getAdults({ vasya: 4, vlad: 95, gena: 34 });
  expect(result).toEqual({ vlad: 95, gena: 34 });
});

it('check function getAdults: { anna: 19, marychka: 14 } => { anna: 19 }', () => {
  const result = getAdults({ anna: 19, marychka: 14 });
  expect(result).toEqual({ anna: 19 });
});
