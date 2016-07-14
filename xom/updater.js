exports = module.exports = function(db) {
  var Updater = require('../lib/updater');
  
  return new Updater(db);
}

exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/ns/Updater';
exports['@require'] = [ './db' ];
