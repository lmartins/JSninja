'use strict';
var bind, button, elem, later, outerFunction, outerValue, tooLate;

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

bind = function(context, name) {
  return function() {
    return context[name].apply(context, arguments);
  };
};

button = {
  clicked: false,
  counter: 0,
  click: function() {
    this.clicked = true;
    this.counter++;
    return console.log("The button has been clicked " + this.counter + " times");
  }
};

elem = document.querySelector('#button');

elem.addEventListener('click', bind(button, 'click'), false);

/*
//# sourceMappingURL=ch5-closures.js.map
*/
