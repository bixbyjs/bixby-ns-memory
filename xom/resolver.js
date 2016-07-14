exports = module.exports = function(db) {
  var Resolver = require('../lib/resolver');
  
  return new Resolver(db);
}

exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/ns/Resolver';
exports['@require'] = [ './db' ];
