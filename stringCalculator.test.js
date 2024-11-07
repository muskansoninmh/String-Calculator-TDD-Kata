const stringCalculator = require("./main");

test(`For Input ""`, () => {
  expect(stringCalculator("")).toBe(0);
});

test(`For Input "1"`, () => {
  expect(stringCalculator("1")).toBe(1);
});

test(`For Input "1,5"`, () => {
  expect(stringCalculator("1,5")).toBe(6);
});

test(`For Input "1/n2,3"`, () => {
  expect(stringCalculator("1/n2,3")).toBe(6);
});

test(`For Input "//;\n1;2"`, () => {
  expect(stringCalculator("//;\n1;2")).toBe(3);
});

test(`For Input "-2,2"`, () => {
  expect(stringCalculator("-2,2")).toBe("Negative numbers not allowed");
});

test(`For Input "-2"`, () => {
  expect(stringCalculator("-2")).toBe("Negative numbers not allowed");
});

test(`For Input "-2,-2"`, () => {
  expect(stringCalculator("-2,-2")).toBe("Negative numbers not allowed");
});
