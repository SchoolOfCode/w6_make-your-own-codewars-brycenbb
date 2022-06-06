//👉 Write your tests below here:
const objectArraySum = require('./main.js');

test('Tests for valid input', () => {
  //not giving an array
  expect(objectArraySum(1)).toBe(0);
  //not giving an array of objects
  expect(objectArraySum([1, 2, 3])).toBe(0);
  //not giving an array of objects with arrays
  expect(
    objectArraySum([
      { boolean: true, numbers: 2 },
      { boolean: true, numbers: 5 },
    ])
  ).toBe(0);
  //not giving an array of objects with arrays of numbers
  expect(
    objectArraySum([
      { boolean: true, numbers: ['a', 'b'] },
      { boolean: true, numbers: [true, false] },
    ])
  ).toBe(0);
  //not giving any true booleans
  expect(
    objectArraySum([
      { boolean: false, numbers: [2] },
      { boolean: false, numbers: [1, 2] },
    ])
  ).toBe(0);
});

test('Tests for correct sums 1', () => {
  //Expect a non zero sum for correct input
  expect(
    objectArraySum([
      { boolean: true, numbers: [2] },
      { boolean: true, numbers: [1, 2] },
    ])
  ).toBe(3);
  expect(
    objectArraySum([
      { boolean: true, numbers: [2] },
      { boolean: false, numbers: [1, 2] },
    ])
  ).toBe(2);
});

test('Tests for correct sums 2', () => {
  //Expect a non zero sum for correct input
  expect(
    objectArraySum([
      { boolean: true, numbers: [2, 4, 5, 6, 7, 8, 9, 10] },
      { boolean: true, numbers: [1, 2, 997] },
    ])
  ).toBe(1000);
  expect(
    objectArraySum([
      { boolean: true, numbers: [0, 0, 0, 0, 1] },
      { boolean: true, numbers: [0, 0, 2, 0, 0, 100] },
    ])
  ).toBe(102);
});
