
function Airport(capacity) {
  this.CAPACITY = 20;
  this.hangar = [];

  if (capacity === undefined) {
    this.capacity = this.CAPACITY;
  } else {
    this.capacity = capacity;
  }
}

Airport.prototype.land = function (plane) {
  plane.land();
  this.hangar.push(plane);
};

module.exports = Airport;
