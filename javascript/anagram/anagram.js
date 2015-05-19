var anagram = function(word) { return new Anagram(word); }

function Anagram(word) { this.word = word.toLowerCase(); };

Anagram.prototype.matches = function(context) {
  var results = [];
  var args = Array.prototype.slice.call(arguments, 0);

  if (args[0] instanceof Array) args = args[0];

  for (var i = 0; i < args.length; i++) {
    var orderedCurrent = args[i].toLowerCase().split('').sort();

    if (this.word.split('').sort().join() === orderedCurrent.join() 
      && this.word != args[i].toLowerCase()) {
        results.push(args[i]);
    }
  }
  return results;
};

module.exports = anagram;
