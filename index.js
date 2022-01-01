import includes from 'lodash.includes';

/**
 * @param {string} word
 * @returns {boolean}
 */
function noRepeatedLetters(word) {
  for (let i = 0, length = word.length; i < length; i++) {
    if (includes(word.slice(0, i), word.charAt(i))) {
      return false;
    }
  }
  return true;
}

export default noRepeatedLetters;
