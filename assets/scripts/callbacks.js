var each = function (coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
};

var filter = function (array, predicate) {
  var acc = [];
  each(array, function (e, i) {
    if (predicate(e, i)) {
      acc.push(e);
    }
  });
  return acc;
};
