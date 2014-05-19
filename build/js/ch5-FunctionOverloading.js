'use strict';

/**
 * Adds or replaces a method in an object
 * @param {Object}   object [The object that will receive the new method]
 * @param {String}   name   [The name for the new method]
 * @param {Function} fn     [The function that will be passed as a new method of Object]
 */
var addMethod, ninjas;

addMethod = function(object, name, fn) {
  var old;
  old = object[name];
  return object[name] = function() {
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments);
    } else if (typeof old === 'function') {
      return old.apply(this, arguments);
    }
  };
};

ninjas = {
  values: ["Dean Edwards", "Sam Stephenson", "Alex Russell", "Dean Russell"]
};

addMethod(ninjas, 'find', function() {
  return this.values;
});

addMethod(ninjas, 'find', function(name) {
  var ninja, _i, _len, _ref, _results;
  _ref = this.values;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    ninja = _ref[_i];
    if (ninja.indexOf(name) !== -1) {
      _results.push(ninja);
    }
  }
  return _results;
});

addMethod(ninjas, 'find', function(first, last) {
  var ninja, _i, _len, _ref, _results;
  _ref = this.values;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    ninja = _ref[_i];
    if (ninja === ("" + first + " " + last)) {
      _results.push(ninja);
    }
  }
  return _results;
});

console.log(ninjas.find);

console.log(ninjas.find());

console.log(ninjas.find('Dean'));

console.log(ninjas.find('Dean', 'Edwards'));

/*
//# sourceMappingURL=ch5-FunctionOverloading.js.map
*/
