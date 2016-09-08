exports.verse = function(verse) {
  return add_verses_to_result(verse);
};

exports.verses = function(verse, multi) {
  var result = "";

  for (var i = 1; i < multi + 1; i++) {
    result += add_verses_to_result(i, "") + "\n";
  };

  return result;
};

var add_verses_to_result = function(verse, result) {
  var result = list()[8]["default"];

  for (var i = verse; i > 0; i--) {
    if (verse === i) result += list()[i]["unique"];
    if (verse === 8) break;
    if (verse >= i) result += list()[i]["default"];
  };

  return result;
};

var list = function() {
 return {
    "8": {
      "unique": "horse.\nShe's dead, of course!\n",
      "default": "I know an old lady who swallowed a "
    },
    "7": {
      "unique": "cow.\nI don't know how she swallowed a cow!\n",
      "default": "She swallowed the cow to catch the goat.\n"
    },
    "6": {
      "unique": "goat.\nJust opened her throat and swallowed a goat!\n",
      "default": "She swallowed the goat to catch the dog.\n"
    },
    "5": {
      "unique": "dog.\nWhat a hog, to swallow a dog!\n",
      "default": "She swallowed the dog to catch the cat.\n"
    },
    "4": {
      "unique": "cat.\nImagine that, to swallow a cat!\n",
      "default": "She swallowed the cat to catch the bird.\n"
    },
    "3": {
      "unique": "bird.\nHow absurd to swallow a bird!\n",
      "default": "She swallowed the bird to catch the spider that "
    },
    "2": {
      "unique": "spider.\nIt ",
      "default": "wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n"
    },
    "1": {
      "unique": "fly.\n",
      "default": "I don't know why she swallowed the fly. Perhaps she'll die.\n"
    }
  };
};
