function Plane() {
   this.isFlying = false;
}

Plane.prototype.fly = function () {
  this.isFlying = true;
};

Plane.prototype.land = function () {
  this.isFlying = false;
};

module.exports = Plane;
