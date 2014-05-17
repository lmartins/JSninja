'use strict';
var addMethod, getElements, isFunction, isPalindrome, isPrime, largest, merge, multiMax, myArray, ninjas, obj1, obj2, smallest, store;

myArray = [54, 10, 123, 873, 712, 7, 12];

isPalindrome = function(text) {
  if (typeof text !== "string") {
    throw new Error("Not a string");
  }
  if (text.length <= 1) {
    return true;
  }
  if (text.charAt(0) !== text.charAt(text.length - 1)) {
    return false;
  }
  return isPalindrome(text.substr(1, text.length - 2));
};

store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if (!fn.id) {
      fn.id = store.nextId++;
      return !!(store.cache[fn.id] = fn);
    }
  }
};

isPrime = function(value) {
  var iter, prime, _i;
  if (!isPrime.answers) {
    isPrime.answers = {};
  }
  if (isPrime.answers[value] != null) {
    return isPrime.answers[value];
  }
  prime = value !== 1;
  for (iter = _i = 2; _i < value; iter = _i += 1) {
    if (value % iter === 0) {
      prime = false;
      break;
    }
  }
  return isPrime.answers[value] = prime;
};

getElements = function(name) {
  if (!getElements.cache) {
    getElements.cache = {};
  }
  return getElements.cache[name] = getElements.cache[name] || document.querySelectorAll(name);
};

smallest = function(array) {
  return Math.min.apply(Math, array);
};

largest = function(array) {
  return Math.max.apply(Math, array);
};

merge = function(root) {
  var i, key;
  i = 1;
  while (i < arguments.length) {
    for (key in arguments[i]) {
      root[key] = arguments[i][key];
    }
    i++;
  }
  return root;
};

obj1 = {
  name: "Batou"
};

obj2 = {
  city: "Batou"
};

merge(obj1, obj2);

console.log(obj1);

console.log(obj2);

multiMax = function(multi) {
  return multi * Math.max.apply(Math, Array.prototype.slice.call(arguments, 1));
};

console.log(multiMax(728, 45, 32, 45, 76, 92));


/**
 * Adds or replaces a method in an object
 * @param {Object}   object [The object that will receive the new method]
 * @param {String}   name   [The name for the new method]
 * @param {Function} fn     [The function that will be passed as a new method of Object]
 */

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

console.log(ninjas.find());

console.log(ninjas.find('Dean'));

console.log(ninjas.find('Dean', 'Edwards'));

isFunction = function(fn) {
  return Object.prototype.toString.call(fn) === "[object Function]";
};

console.log(isFunction(ninjas.find));

/*
//# sourceMappingURL=main.js.map
*/
