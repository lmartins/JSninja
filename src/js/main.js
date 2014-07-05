'use strict';

var assert = require('assert');

var values = [213, 16, 2058, 54, 10, 1965, 57, 9];
values.sort( function (value1, value2) {
  return value1 - value2;
});
console.log(values);


var samurai = function () {
  // body...
}
samurai();

function Ninja () {
  this.skulk = function () {
    return this;
  };
}

var ninja1 = new Ninja();
var ninja2 = new Ninja();

function juggle() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  this.result = result;
}

var ninja3 = {};
var ninja4 = {};

juggle.apply(ninja3, [1,2,3,4]);
console.log(ninja3.result);
juggle.apply(ninja4, [2,5,32,14]);
console.log(ninja4.result);

function forEach (list, callback) {
  for (var i = 0; i < list.length; i++) {
    callback.call(list[i],i);
  }
}
var weapons = ['shuriken','katana','nunchunks'];

forEach( weapons, function (index) {
  console.log(this);
})
