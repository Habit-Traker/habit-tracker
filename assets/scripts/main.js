// Here will be all general (global) scripts

function generateID(initial) {
  var count = initial;
  return function () {
    return ++count;
  };
}

var urlParams = window.location.search;
console.log(window.location.search);

// console.log("window.location.search", window.location.search);
// if (urlParams.get('id')) {
//     console.log("urlParams", urlParams.get('id'));
// }else console.log('404');
// var a = window.location.search;
