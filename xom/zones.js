// https://en.wikipedia.org/wiki/Zone_file

exports = module.exports = function() {
  var Zones = require('../lib/zones');
  
  return new Zones();
}

exports['@singleton'] = true;
