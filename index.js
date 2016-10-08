exports = module.exports = {
  'resolver': require('./xom/resolver'),
  'updater': require('./xom/updater'),
};

exports.load = function(id) {
  try {
    return require('./xom/' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
