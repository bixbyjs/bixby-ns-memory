exports = module.exports = function(zones) {
  var Resolver = require('../lib/resolver');
  
  return new Resolver(zones);
}

exports['@implements'] = 'http://i.bixbyjs.org/ns/Resolver';
exports['@singleton'] = true;
exports['@require'] = [ './zones' ];
