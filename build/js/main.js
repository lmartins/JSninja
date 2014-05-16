'use strict';
var elems, getElements, isPalindrome, isPrime, largest, merge, multiMax, myArray, obj1, obj2, smallest, store;

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

getElements('li');

elems = {
  length: 0,
  add: function(elem) {
    return Array.prototype.push.call(this, elem);
  },
  gather: function(id) {
    return this.add(document.querySelector(id));
  }
};

elems.gather('#main');

elems.gather('#list');

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

/*
//# sourceMappingURL=main.js.map
*/
