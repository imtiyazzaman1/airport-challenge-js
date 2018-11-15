describe('Airport', function () {
  var airport;
  let plane = jasmine.createSpyObj('plane', ['fly', 'land']);

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
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it('stores a plane in the hangar', function () {
      airport.land(plane);
      expect(airport.hangar[0]).toEqual(plane);
    });
  });

  describe('#fly', function () {
    it('removes the plane from the hangar', function () {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.hangar[0]).toEqual(undefined);
    })
  })

});
