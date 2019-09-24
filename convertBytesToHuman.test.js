/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */
import convertBytesToHuman from "./convertBytesToHuman.js"

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-5)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe(5)
  // ...
});

// другая группа проверок
