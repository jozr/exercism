var anagram = function(word) { return new Anagram(word); }

function Anagram(word) { this.word = word.toLowerCase(); };

Anagram.prototype.matches = function(list) {
  var orderedWord = this.word.toLowerCase().split('').sort();
  var results = [];
  for (var i = 0; i < list.length; i++) {
    var orderedCurrent = list[i].toLowerCase().split('').sort();
    if (orderedWord.join() === orderedCurrent.join()) {
      results.push(list[i]);
    }
  }
  return results;
};

module.exports = anagram;
