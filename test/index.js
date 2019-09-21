'use strict';

var test = require('tape');
var isFunction = require('lodash.isfunction');

var noRepeatedLetters = require('../dist/');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(noRepeatedLetters));
});

test('works', function(t) {
  var TEST_ARRAY = [
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

  TEST_ARRAY.forEach(function(value) {
    t.doesNotThrow(function() {
      noRepeatedLetters(value[0]);
    });
    t.equal(noRepeatedLetters(value[0]), value[1]);
  });
});
