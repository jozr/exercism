exports.verse = function(verse) {
  var result = "I know an old lady who swallowed a ";
  if (verse === 8) {
    result += "horse.\nShe's dead, of course!\n";
    return result;
  };
  if (verse === 7) result += "cow.\nI don't know how she swallowed a cow!\n";
  if (verse > 6)   result += "She swallowed the cow to catch the goat.\n";
  if (verse === 6) result += "goat.\nJust opened her throat and swallowed a goat!\n";
  if (verse > 5)   result += "She swallowed the goat to catch the dog.\n";
  if (verse === 5) result += "dog.\nWhat a hog, to swallow a dog!\n";
  if (verse > 4)   result += "She swallowed the dog to catch the cat.\n";
  if (verse === 4) result += "cat.\nImagine that, to swallow a cat!\n";
  if (verse > 3)   result += "She swallowed the cat to catch the bird.\n";
  if (verse === 3) result += "bird.\nHow absurd to swallow a bird!\n";
  if (verse > 2)   result += "She swallowed the bird to catch the spider that ";
  if (verse === 2) result += "spider.\nIt ";
  if (verse > 1)   result += "wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n";
  if (verse === 1) result += "fly.\n";
  result += "I don't know why she swallowed the fly. Perhaps she'll die.\n";

  return result;
};
