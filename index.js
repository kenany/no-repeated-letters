var includes = require('lodash.includes');

function noRepeatedLetters(word) {
  for (var i = 0, length = word.length; i < length; i++) {
    if (includes(word.slice(0, i), word.charAt(i))) {
      return false;
    }
  }
  return true;
}

module.exports = noRepeatedLetters;
