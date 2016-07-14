exports = module.exports = function ns_memory(id) {
  var map = {
    'db': './xom/db',
    'resolver': './xom/resolver',
    'updater': './xom/updater',
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add('resolver');
  container.add('updater');
};
