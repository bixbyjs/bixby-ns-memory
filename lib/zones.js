function Zones() {
  this._table = {};
}

Zones.prototype.get = function(origin) {
  return this._table[origin];
}

Zones.prototype.add = function(origin, zone) {
  this._table[origin] = zone;
}


module.exports = Zones;
