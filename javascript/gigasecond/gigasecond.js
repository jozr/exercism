var Gigasecond = function(input_date) {
  this.input_date = input_date;
};

Gigasecond.prototype.date = function() {
  var million_seconds = Math.pow(10, 9);
  var gigasecond_moment = this.input_date.getTime() + million_seconds;
  var null_date = new Date(null);
  null_date.setSeconds(gigasecond_moment);
  return null_date;
};

module.exports = Gigasecond
