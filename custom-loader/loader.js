'use strict';

module.exports = function(source) {
  console.log(source);
  return source
    .replace('bar', 'boo')
    .replace('foo', 'foo, modified by ./loader');
};
