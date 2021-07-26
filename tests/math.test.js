const mongoose = require('mongoose')

const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius, add } = require('../src/math')


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

// test('Async test demo', (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// })

test('Should add two numbers', (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  })
})

test('Should add two numbers async/await', async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
})

afterAll(async () => { await mongoose.connection.close() })