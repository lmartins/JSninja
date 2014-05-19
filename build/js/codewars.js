var array1, array2, array_diff, equalValue;

array1 = [3, 5, 12, 45, 56, 23, 18];

array2 = [12, 87, 23, 71, 24, 13, 68, 56];

equalValue = function(a, b) {
  return a === b;
};

array_diff = function(a, b) {
  var item, results, _i, _len;
  results = [];
  for (_i = 0, _len = b.length; _i < _len; _i++) {
    item = b[_i];
    a.filter(function(i) {
      if (i === item) {
        return a.splice(i);
      }
    });
  }
  return a;
};

console.log(array_diff(array1, array2));

/*
//# sourceMappingURL=codewars.js.map
*/
