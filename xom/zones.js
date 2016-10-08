exports = module.exports = function() {
  var Zones = require('../lib/zones');
  
  return new Zones();
}

exports['@singleton'] = true;
