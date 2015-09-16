exports.verse = function(input) {
  result = "I know an old lady who swallowed a "
  if (input === 5) result += "dog.\nWhat a hog, to swallow a dog!\nShe swallowed the dog to catch the cat.\n"
  if (input === 4) result += "cat.\nImagine that, to swallow a cat!\n"
  if (input > 3)   result += "She swallowed the cat to catch the bird."
  if (input === 3) result += "bird.\nHow absurd to swallow a bird!"
  if (input > 2)   result += "\nShe swallowed the bird to catch the spider that "
  if (input === 2) result += "spider.\nIt "
  if (input > 1)   result += "wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n"
  if (input === 1) result += "fly.\n"
  result += "I don't know why she swallowed the fly. Perhaps she'll die.\n"
  
  return result
};
