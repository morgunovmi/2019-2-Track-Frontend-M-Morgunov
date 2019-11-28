/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */
import convertBytesToHuman from './convertBytesToHuman.js';

test('Возвращает false для неправильного типа данных', () => {
	expect(convertBytesToHuman(-5)).toBe(false);
	expect(convertBytesToHuman('string')).toBe(false);
	expect(convertBytesToHuman(NaN)).toBe(false);
	expect(convertBytesToHuman(Infinity)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
	expect(convertBytesToHuman(1024)).toBe('1 KB');
	expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
	expect(convertBytesToHuman(125125125125)).toBe('116.53 GB');
});

// другая группа проверок
