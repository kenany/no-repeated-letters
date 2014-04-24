var contains = require('lodash.contains');

function noRepeatedLetters(word) {
  for (var i = 0, length = word.length; i < length; i++) {
    if (contains(word.slice(0, i), word.charAt(i))) {
      return false;
    }
  }
  return true;
}

module.exports = noRepeatedLetters;