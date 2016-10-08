var Zone = require('./zone');


function Updater(zones) {
  this._zones = zones;
}

Updater.prototype.add = function(name, rrtype, rrdata, cb) {
  // Infer zone
  var comps = name.split('.')
    , zname, rname, zone;
  
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
  
  
  zone = this._zones.get(zname);
  if (!zone) {
    zone = new Zone();
    this._zones.add(zname, zone);
  }
  
  zone.add(rname, rrtype, rrdata);
  return cb();
}

Updater.prototype.remove = function(name, rrtype, rrdata, cb) {
  // TODO: Implement this
}


module.exports = Updater;
