'use strict';


// var store = {
//   nextId: 0,
//   cache: {},
//   add: function (fn) {
//     if (!fn.id) {
//       fn.id = store.nextId += 1;
//       return !!(store.cache[fn.id] = fn);
//     }
//   }
// };
//
// function ninja() {
//   // body...
// }
// function samurai() {
//   // body...
// }
//
// store.add(ninja);
// store.add(samurai);
// console.log(ninja.id);
// console.log(samurai.id);
// console.log(store.cache);

function isPrime(value) {
  if (!isPrime.answers) isPrime.answers = {};
  if (isPrime.answers[value] != null) {
    return isPrime.answers[value];
  }
  var prime = value !== 1;  // 1 can never be prime
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return isPrime.answers[value] = prime;
}


console.log( isPrime(15) );
console.log( isPrime(5) );
console.log( isPrime.answers );

function getElements (name) {
  if (!getElements.cache) getElements.cache = {};
  return getElements.cache[name] = getElements.cache[name] || document.querySelector('p');
}

var elems = {
  length: 0,
  add: function (elem) {
    Array.prototype.push.call(this, elem);
  },
  gather: function (id) {
    this.add(document.getElementById(id));
  }
};

elems.gather('first');
elems.gather('second');
console.log(elems.length);
console.log(elems[0].nodeType);
console.log(elems);

function smallest (array) {
  return Math.min.apply(Math, array);
}
function largest (array) {
  return Math.max.apply(Math, array);
}
console.log(smallest([111, 34, 7, 81]));
console.log(largest([111, 34, 7, 81]));

function merge (root) {
  for (var i = 1; i < arguments.length; i += 1) {
    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        root[key] = arguments[i][key];
      }
    }
  }
  return root;
}
var merged = merge(
  {name: "Batou"},
  {city: "Niihama"},
  {
    firstName: "Luis",
    lastName: "Martins"
  }
);

console.log(merged);

function multiMax (multi) {
  return multi * Math.max.apply(Math, Array.prototype.slice.call( arguments, 1));
}

console.log( multiMax(3, 1, 2, 3) );

function makeNinja(name) {}
function makeSamurai(name, rank) {}
console.log( makeNinja.length );
console.log( makeSamurai.length );

function addMethod(object, name, fn) {
  var old  = object[name];
  object[name] = function () {
    if (fn.length == arguments.length) {
      return fn.apply(this, arguments);
    } else if (typeof old == 'function') {
      return old.apply(this, arguments);
    }
  };
}

var ninja = {
  values: ["Dean Edwards", "Sam Stephenson", "Alex Russel"]
};
addMethod(ninja, 'find', function () {
  return this.values;
});

addMethod(ninja, 'find', function (name) {
  var ret = [];
  for (var i = 0; i < this.values.length; i++) {
    if (this.values[i].indexOf(name) == 0) {
      ret.push(this.values[i]);
    }
  }
  return ret;
});

addMethod(ninja, 'find', function (first, last) {
  var ret = [];
  for (var i = 0; i < this.values.length; i++) {
    if (this.values[i] == (first + " " +  last)) {
      ret.push(this.values[i]);
    }
  }
  return ret;
});

console.log( ninja.find() );
console.log( ninja.find('Sam') );
console.log( ninja.find('Alex', 'Russel') );

function isFunction(fn) {
  return Object.prototype.toString.call(fn) === "[object Function]";
}

function ninja2(){}
console.log( Object.prototype.toString.call(ninja2) );
console.log( isFunction("ninja2") );
