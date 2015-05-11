var words = function(input) {
  var inputArr = input.replace(/[\t\n]/g, ' ').split(' ')
  var result = {}
  for (var i = 0, len = inputArr.length; i < len; i++) {
    if (inputArr[i] in result) {
      result[inputArr[i]] += 1
    } else {
      result[inputArr[i]] = 1
    }
  }
  return result
};

module.exports = words;
