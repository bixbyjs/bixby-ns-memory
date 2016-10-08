function Resolver(zones) {
  this._zones;
}

Resolver.prototype.resolve = function(name, rrtype, cb) {
  console.log('MemoryResolver#resolve');
  console.log(name);
  console.log(rrtype);
  return;
  
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
