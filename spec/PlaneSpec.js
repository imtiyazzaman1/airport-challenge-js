var Plane = require('../src/Plane.js');

describe("Plane", function () {
  var plane;

  beforeEach(function () {
    plane = new Plane();
  });

  it("should know when its not flying", function () {
    expect(plane.isFlying).toEqual(false)
  });

  it("should know when its flying", function () {
    plane.fly();
    expect(plane.isFlying).toEqual(true);
  });

  it("should be able to land while flying", function () {
    plane.fly();
    plane.land();
    expect(plane.isFlying).toEqual(false);
  });
});
