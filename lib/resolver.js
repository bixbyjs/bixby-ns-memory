function Resolver(zones) {
  this._zones = zones;
}

Resolver.prototype.resolve = function(name, rrtype, cb) {
  // Infer zone
  var comps = name.split('.')
    , zname, rname;
  
  zname = comps.slice(-2).join('.');
  rname = comps.slice(0, -2).join('.')
  
  // TODO: Make errors match dns module
  
  zone = this._zones.get(zname);
  if (!zone) {
    return cb(new Error('Zone not found: ' + zname));
  }
  
  var recs = zone.get(rname, rrtype);
  if (!recs) { return cb(new Error('No records of type: ' + rrtype)); }
  
  return cb(null, recs);
}


module.exports = Resolver;
