import { getGCD } from '../games/gcd';

test('getGCD', () => {
  expect(getGCD(3, 5)).toBe(1);
  expect(getGCD(3, 0)).toBe(3);
  expect(getGCD(1, 1)).toBe(1);
  expect(getGCD(5, 5)).toBe(5);
  expect(getGCD(15, 5)).toBe(5);
});
