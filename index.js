const head   = require('./head1');
const tail   = require('./tail1');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');
const assertObjectEqual = require('./assertObjectEqual')
const eqArrays = require('./eqArrays');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey1');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten1')
const letterPositions = require('./letterPositions');
const map = require('./map1');
const takeUntil  = require('./takeUntil');
const without = require('./without1');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectEqual,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  eqObjects: eqObjects,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};