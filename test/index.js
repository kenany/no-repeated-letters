'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');

const noRepeatedLetters = require('../dist/');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(noRepeatedLetters));
});

test('works', function(t) {
  /** @type {[string, boolean][]} */
  const TEST_ARRAY = [
    ['a', true],
    ['ab', true],
    ['abc', true],
    ['abcd', true],
    ['abcde', true],
    ['aa', false],
    ['aba', false],
    ['hello', false]
  ];

  t.plan(TEST_ARRAY.length * 2);

  for (const value of TEST_ARRAY) {
    t.doesNotThrow(function() {
      noRepeatedLetters(value[0]);
    });
    t.equal(noRepeatedLetters(value[0]), value[1]);
  }
});
