# no-repeated-letters

Detect repeated letters in a word.

## Example

```javascript
import { noRepeatedLetters } from 'no-repeated-letters';

noRepeatedLetters('human');
// => true
```

## Installation

```bash
$ npm install no-repeated-letters
```

## API

```javascript
import { noRepeatedLetters } from 'no-repeated-letters';
```

### noRepeatedLetters(word)

Returns `true` if every character in _String_ `word` occurs only once in `word`.
Returns `false` otherwise.
