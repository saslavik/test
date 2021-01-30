const isEven = require('./app');

it('проверяем если четное', () => {
  expect(isEven(6)).toBe(true);
})