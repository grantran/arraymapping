var words = ["ground", "control", "to", "major", "tom"];

var map = function (arr, cb) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    var word = arr[i];
    result.push(cb(word));
  }
  return result;
}

var cb = function (word) {
  var lgth = word.length;
  return lgth;
}

console.log(map(words, cb));