var words = function(input) {
  var singleSpace = input.replace(/ +/g, ' ')
  var array = singleSpace.replace(/[\t\n]/g, ' ').split(' ')
  var result = {}
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] in result && !isNaN(result[array[i]])) {
      result[array[i]] += 1
    } else {
      result[array[i]] = 1
    }
  }
  return result
};

module.exports = words;
