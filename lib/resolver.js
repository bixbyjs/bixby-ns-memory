function Resolver(zones) {
  this._zones = zones;
}

Resolver.prototype.resolve = function(name, rrtype, cb) {
  console.log('MemoryResolver#resolve');
  console.log(name);
  console.log(rrtype);
  
  // Infer zone
  var comps = name.split('.')
    , zname, rname;
  
  console.log(comps)
  zname = comps.slice(-2).join('.');
  rname = comps.slice(0, -2).join('.')
  console.log('ZONE IS: ' + zname);
  console.log('RNAME IS: ' + rname);
  
  zone = this._zones.get(zname);
  console.log(zone)
  if (!zone) {
    return cb(new Error('Zone not found: ' + zname));
  }
  
  var recs = zone.get(rname, rrtype);
  console.log(recs)
  
  if (!recs) { return cb(new Error('No records of type: ' + rrtype)); }
  
  return cb(null, recs);
  
  console.log('DB IS:');
  console.log(require('util').inspect(this._db, 2, null));
  
  var entity = this._db[name];
  if (!entity) {
    // TODO: Error that matches dns
    return cb();
  }
  
  var table = entity[rrtype];
  if (!table) {
    // TODO: Error that matches dns
    return cb();
  }
  
  console.log('HAVE TABLE');
  console.log(table);
  
  var records = [];
  for (key in table) {
    records.push(table[key]);
    
    /*
    if (exec(fn, obj, key, thisObj) === false) {
      break;
    }
    */
  }
  
  console.log('RECORDS');
  console.log(records);
  
  return cb(null, records);
}


module.exports = Resolver;
