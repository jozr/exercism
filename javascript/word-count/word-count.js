var Words = function() {};

Words.prototype.hey = function(input) {
  if (input.toLowerCase() != input && input.toUpperCase() === input) {
    return 'Whoa, chill out!'
  } else if (input.slice(-1) === '?') {
    return 'Sure.'
  } else if (!input.trim()) {
    return 'Fine. Be that way!'
  } else {
    return 'Whatever.'
  }
};

module.exports = Words;