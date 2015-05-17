exports.compute = function(strand1, strand2) {
  if (strand1.length !== strand2.length) throw new Error('DNA strands must be of equal length.');
  
  var count = 0;
  for (var i = 0, len = strand1.length; i < len; i++) {
    if (strand1[i] !== strand2[i]) count ++;
  };
  return count;
};
