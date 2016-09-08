var self = module.exports = {
  verse: function(verse, multi) {
    var list = {
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

    var result = "";
    if (multi == undefined) multi = 1;

    for (var i = multi; i > 0; i--) {
      result += list[8]["default"];

      if (verse === 8) {
        result += list[8]["unique"];
        if (multi !== 1) result += "\n";
        return result;
      };

      for (var j = verse; j > 0; j--) {
        if (verse === j) result += list[j]["unique"];
        if (verse >= j)  result += list[j]["default"];
      };

      if (multi !== 1) result += "\n";

      verse++;
    };

    return result;
  },

  verses: function(verse, multi) {
    return self.verse(verse, multi);
  }
};
