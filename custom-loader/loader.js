'use strict';

module.exports = function(source) {
  return source.replace('foo', 'foo, modified by ./loader');
};
