/**
 * Checks whether every character in a word is unique.
 *
 * @param word The word to check for repeated characters.
 * @returns `true` if all characters are unique, `false` otherwise.
 */
export function noRepeatedLetters(word: string): boolean {
  const seen = new Set<string>();
  for (const char of word) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }
  return true;
}
