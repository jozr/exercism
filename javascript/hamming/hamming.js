exports.compute = function(strand1, strand2) {
  if (strand1.length != strand2.length) throw new Error('DNA strands must be of equal length.')
  
  var arr1 = strand1.split('')
  var arr2 = strand2.split('')
  var count = 0

  for (var i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] != arr2[i]) count += 1
  };
  return count
};
