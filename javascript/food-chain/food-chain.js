exports.verse = function(input) {
  firstSentence = "I know an old lady who swallowed a "

  switch (input) {
    case 1:
      animal = "fly"
      sentence = "I don't know why she swallowed the fly."
    case 2:
      animal = "spider"
      sentence = "It wriggled and jiggled and tickled inside her."
  }
  
  lastSentence = " Perhaps she'll die.\n";


  // result = "I know an old lady who swallowed a "
  // if (input === 7) result += "cow.\nI don't know how she swallowed a cow!\n"
  // if (input > 6)   result += "She swallowed the cow to catch the goat.\n"
  // if (input === 6) result += "goat.\nJust opened her throat and swallowed a goat!\n"
  // if (input > 5)   result += "She swallowed the goat to catch the dog.\n"
  // if (input === 5) result += "dog.\nWhat a hog, to swallow a dog!\n"
  // if (input > 4)   result += "She swallowed the dog to catch the cat.\n"
  // if (input === 4) result += "cat.\nImagine that, to swallow a cat!\n"
  // if (input > 3)   result += "She swallowed the cat to catch the bird.\n"
  // if (input === 3) result += "bird.\nHow absurd to swallow a bird!\n"
  // if (input > 2)   result += "She swallowed the bird to catch the spider that "
  // if (input === 2) result += "spider.\nIt "
  // if (input > 1)   result += "wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n"
  // if (input === 1) result += "fly.\n"
  // result += "I don't know why she swallowed the fly. Perhaps she'll die.\n"
  
  // return result
};
