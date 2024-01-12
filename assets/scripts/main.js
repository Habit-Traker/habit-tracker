// Here will be all general (global) scripts

function generateID(initial) {
  var count = initial;
  return function () {
    return ++count;
  };
}

var findObject = function (array, key, value) {
  console.log(key, value);
  return filter(array, function (object) {
    return object[key] == value;
  });
};

var urlParams = new URLSearchParams(window.location.search);

// if (urlParams.get("id")) {
//   console.log("urlParams", urlParams.get("id"));
// } else {
//   console.log("404");
// }
function getURLHabit() {
  if (urlParams.get("habit")) {
    return urlParams.get("habit");
  } else {
    console.log("404");
  }
}

// var id = urlParams.get("id");

// console.log(window.location.search);
// console.log(!window.location.search);
// console.log("window.location.search", window.location.search);
// var a = window.location.search;
