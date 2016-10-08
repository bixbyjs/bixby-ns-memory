var Zone = require('./zone');


function Updater(zones) {
  this._zones = zones;
}

Updater.prototype.add = function(name, rrtype, rrdata, cb) {
  console.log('ADD TO NS');
  console.log(name);
  console.log(rrtype);
  console.log(rrdata);
  
  // Infer zone
  var comps = name.split('.')
    , zname, rname, zone;
    
  console.log(comps)
  
  switch (rrtype) {
  case 'SRV':
    zname = comps.slice(2).join('.');
    rname = comps.slice(0, 2).join('.')
    break;
  default:
    zname = comps.slice(1).join('.');
    rname = comps.slice(0, 1).join('.');
    break;
  }
  
  console.log('ZONE IS: ' + zname);
  console.log('RECORD NAME: ' + rname);
  
  zone = this._zones.get(zname);
  console.log(zone)
  if (!zone) {
    zone = new Zone();
    this._zones.add(zname, zone);
  }
  
  zone.add(rname, rrtype, rrdata);
  
  
  
  
  /*
  console.log('Updater#update');
  
  if (typeof rrdata == 'function') {
    cb = rrdata;
    rrid = rrdata.target || '111-222' // TODO: Generate random id here
  }
  
  console.log(name);
  console.log(rrtype);
  console.log(rrid);
  console.log(rrdata);
  
  var entity = this._db[name] = (this._db[name] || {});
  var table = entity[rrtype] = (entity[rrtype] || {});
  table[rrid] = rrdata;
  
  console.log('DB IS NOW');
  console.log(require('util').inspect(this._db, 2, null));
  */
}


Updater.prototype.remove = function(name, rrtype, rrdata, cb) {
  console.log('DELETE FROM NS');
  console.log(name);
  console.log(rrtype);
  console.log(rrdata);
  
}


module.exports = Updater;
