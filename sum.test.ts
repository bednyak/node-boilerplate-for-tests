import {describe, expect, test} from '@jest/globals';
import {multiplication, sum} from './sum';

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('multiply 2 * 2 to equal 4', () => {
        expect(multiplication(2, 3)).toBe(6);
    });
});