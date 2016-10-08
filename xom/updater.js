// https://en.wikipedia.org/wiki/Dynamic_DNS
// https://tools.ietf.org/html/rfc2136
// https://en.wikipedia.org/wiki/Nsupdate

exports = module.exports = function(zones) {
  var Updater = require('../lib/updater');
  
  return new Updater(zones);
}

exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/ns/Updater';
exports['@require'] = [ './zones' ];
