const add = require('../src/kata');

test('return 0 if empty string provided', () => {
  expect(add('')).toBe(0);
});

test('return single provided element', () => {
  expect(add('1')).toBe(1);
});
