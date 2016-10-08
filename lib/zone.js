function Zone() {
  this._table = {};
}

Zone.prototype.get = function(name, rrtype) {
  var h = this._table[name];
  if (!h) { return; }
  return h[rrtype];
}

Zone.prototype.add = function(name, rrtype, rrdata) {
  var h = this._table[name] = (this._table[name] || {});
  var rs = h[rrtype] = (h[rrtype] || []);
  rs.push(rrdata);
}


module.exports = Zone;
