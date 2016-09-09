var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var transcriptions = { "C":"G", "G":"C", "A":"U", "T":"A" }
  var dna_chars = dna.split("");
  var rna = "";

  for (nucleotide in dna_chars) {
    rna += transcriptions[dna_chars[nucleotide]];
  };

  return rna;
};

module.exports = DnaTranscriber;
