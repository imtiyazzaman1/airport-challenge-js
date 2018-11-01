var Airport = require('../src/Airport.js');

describe('Airport', function () {
  var airport;

  beforeEach(function () {
    airport = new Airport();
  });

  it('should have a default capacity of 20', function () {
    expect(airport.capacity).toEqual(20)
  });

  it('capacity can be changed when instantiated', function () {
    airport = new Airport(10);
    expect(airport.capacity).toEqual(10);
  });

  describe('#land', function () {

    it('instructs a plane to land', function () {
      var plane = jasmine.createSpyObj('plane', ['fly', 'land']);
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it('stores a plane in the hangar', function () {
      var plane = jasmine.createSpyObj('plane', ['fly', 'land']);
      airport.land(plane);
      expect(airport.hangar[0]).toEqual(plane);

    });

  });
});
