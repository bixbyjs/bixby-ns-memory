function Resolver(db) {
  this._db = db || {};
}

Resolver.prototype.resolve = function(name, rrtype, cb) {
  console.log('Resolver#resolve');
  console.log(name);
  console.log(rrtype);
}


module.exports = Resolver;
