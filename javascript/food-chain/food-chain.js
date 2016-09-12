exports.verse = function(verse) {
  return upto_verse(verse);
};

exports.verses = function(verse, interval) {
  var result = '';

  for (var i = verse; i < interval + 1; i++) {
    result += upto_verse(i) + '\n';
  };

  return result;
};

var upto_verse = function(verse) {
  var result = list()[7][1];
  var verse = parseInt(verse) - 1;

  for (var i = verse; i >= 0; i--) {
    if (verse === i) result += list()[i][0];
    if (verse === 7) break;
    if (verse >= i) result += list()[i][1];
  };

  return result;
};

var list = function() {
  return [
    ['fly.\n', 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'],
    ['spider.\nIt ', 'wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n'],
    ['bird.\nHow absurd to swallow a bird!\n', 'She swallowed the bird to catch the spider that '],
    ['cat.\nImagine that, to swallow a cat!\n', 'She swallowed the cat to catch the bird.\n'],
    ['dog.\nWhat a hog, to swallow a dog!\n', 'She swallowed the dog to catch the cat.\n'],
    ['goat.\nJust opened her throat and swallowed a goat!\n', 'She swallowed the goat to catch the dog.\n'],
    ['cow.\nI don\'t know how she swallowed a cow!\n', 'She swallowed the cow to catch the goat.\n'],
    ['horse.\nShe\'s dead, of course!\n', 'I know an old lady who swallowed a ']
  ]
};
