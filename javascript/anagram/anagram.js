var anagram = function(word) { return new Anagram(word); }

function Anagram(word) { this.word = word.toLowerCase(); };

Anagram.prototype.matches = function(list) {
  var orderedWord = this.word.split('').sort()
  var anagram = null
  var results = []
  for (var i = 0; i < list.length; i++) {
    var orderedCurrent = list[i].split('').sort()
    for (var j = 0; j < orderedWord.length; j++) {
      if (orderedWord[j] === orderedCurrent[j]) {
        anagram = true
        orderedCurrent.shift(); orderedWord.shift()
      } else {
        anagram = false
      }
    }
    if (anagram === true) results.push(list[i])
  }
  return results
};

module.exports = anagram;
