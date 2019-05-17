# no-repeated-letters

[![Build Status](https://travis-ci.org/KenanY/no-repeated-letters.svg?branch=master)](https://travis-ci.org/KenanY/no-repeated-letters)
[![Dependency Status](https://gemnasium.com/KenanY/no-repeated-letters.svg)](https://gemnasium.com/KenanY/no-repeated-letters) [![Greenkeeper badge](https://badges.greenkeeper.io/KenanY/no-repeated-letters.svg)](https://greenkeeper.io/)

Detect repeated letters in a word.

## Example

``` javascript
var noRepeatedLetters = require('no-repeated-letters');

noRepeatedLetters('human');
// => true
```

## Installation

``` bash
$ npm install no-repeated-letters
```

## API

``` javascript
var noRepeatedLetters = require('no-repeated-letters');
```

### noRepeatedLetters(word)

Returns `true` if every character in _String_ `word` occurs only once in `word`.
Returns `false` otherwise.