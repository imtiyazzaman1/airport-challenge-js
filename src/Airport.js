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

Airport.prototype.takeoff = function (plane) {
  var index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1);
};
