'use strict';
var Ninja, animateIt, later, ninja, outerFunction, outerValue, tooLate;

outerValue = 'ninja';

later = void 0;

outerFunction = function() {
  var innerFunction, innerValue;
  innerValue = 'samurai';
  innerFunction = function(paramValue) {
    console.log(outerValue);
    console.log(innerValue);
    console.log(paramValue);
    return console.log(tooLate);
  };
  return later = innerFunction;
};

tooLate = 'ronin';

outerFunction();

later('wakizashi');

Ninja = function() {
  var feints;
  feints = 0;
  this.getFeints = function() {
    return feints;
  };
  this.feint = function() {
    feints++;
  };
  return this;
};

ninja = new Ninja();

console.log(ninja.feint());

console.log(ninja.feints);

animateIt = function(elementId) {
  var elem, tick, timer;
  elem = document.querySelector(elementId);
  tick = 0;
  return timer = setInterval(function() {
    if (tick < 100) {
      elem.style.left = elem.style.top = tick + "px";
      return tick++;
    } else {
      clearInterval(timer);
      console.log(tick);
      console.log(elem);
      return console.log(timer);
    }
  }, 10);
};

animateIt('#box');

/*
//# sourceMappingURL=ch5-closures.js.map
*/
