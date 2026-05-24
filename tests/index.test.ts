import { noRepeatedLetters } from 'no-repeated-letters';
import { describe, expect, it } from 'vitest';

describe('noRepeatedLetters', () => {
  it('returns true for single character', () => {
    expect(noRepeatedLetters('a')).toBe(true);
  });

  it('returns true for unique characters', () => {
    expect(noRepeatedLetters('ab')).toBe(true);
    expect(noRepeatedLetters('abc')).toBe(true);
    expect(noRepeatedLetters('abcd')).toBe(true);
    expect(noRepeatedLetters('abcde')).toBe(true);
  });

  it('returns false for repeated characters', () => {
    expect(noRepeatedLetters('aa')).toBe(false);
    expect(noRepeatedLetters('aba')).toBe(false);
    expect(noRepeatedLetters('hello')).toBe(false);
  });
});
