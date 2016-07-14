function Updater(db) {
  this._db = db || {};
}

Updater.prototype.update = function(name, rrtype, rrid, rrdata, cb) {
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
}


module.exports = Updater;
