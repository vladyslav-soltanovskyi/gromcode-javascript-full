import { withdraw } from './withdraw';

it("check function withdraw: (['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50) => 37", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it("check function withdraw: (['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10) => -1", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it("check function withdraw: (['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 965) => 435", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 965);
  expect(result).toEqual(435);
});