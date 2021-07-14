const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius } = require('../src/math')

test('Should calculate total with tip', () => {
  const total = calculateTip(10, .3)

  expect(total).toBe(13)
  // if (total !== 13) {
  //   throw new Error('Total tip should be 13. Got ' + total)
  // }
})

test('Should calculate total with default tip', () => {
  const total = calculateTip(10)
  expect(total).toBe(12.5)
})

test('Calculate temperature from celsius to fahrenheit', () => {
  expect(celsiusToFahrenheit(0)).toBe(32)
})
test('Calculate temperature from fahrenheit to celsius', () => {
  expect(fahrenheitToCelsius(32)).toBe(0)
})