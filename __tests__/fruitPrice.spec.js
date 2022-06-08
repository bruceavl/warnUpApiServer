const formula = require('../services/fruitFormula');

/* eslint-disable no-undef */
test('Test price on Friday', () => {
  const date = new Date();
  if (date.getDay() === 5) {
    expect(formula.getPrice(5)).toBe(10);
  } else {
    expect(formula.getPrice(5)).toBe(5);
  }
});
