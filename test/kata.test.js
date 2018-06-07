const add = require('../src/kata');

test('return 0 if empty string provided', () => {
  expect(add('')).toBe(0);
});

test('return single provided element', () => {
  expect(add('1')).toBe(1);
});

test('return expected sum', () => {
  expect(add('1, 2, 3')).toBe(6);
});

test('return expected sum with negative int provided', () => {
  expect(add('1, 2, -4')).toBe(-1);
});
