const add = require('../src/kata');

test('should return 0 if empty string provided', () => {
  expect(add('')).toBe(0);
});

test('should return single provided element', () => {
  expect(add('1')).toBe(1);
});

test('should return expected sum', () => {
  expect(add('1, 2, 3')).toBe(6);
});

test('should accept \n as separator', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('should accept a custom separator', () => {
  expect(add('//;\n1,2;3')).toBe(6);
});

test('should throw negative provided int', () => {
  expect(() => add('-5,2,-10,9')).toThrow();
});

test('should ignore above 1000 provided int', () => {
  expect(add('2, 1001')).toBe(2);
});

test('should accept any length separator', () => {
  expect(add('//[***]\n2***3***4')).toBe(9);
});

// test('should accept mutiple separators', () => {
//   expect(add('//[*][%]\n1*2%3')).toBe(6);
// });
