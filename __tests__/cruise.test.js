const Ship = require('../src/cruise.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let ship;
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {

      dover = new Port('Dover');
      calais = new Port('Calais')
      itinerary = new Itinerary([dover, calais])
      ship = new Ship(itinerary);

    });

    it('returns an object', () => {

      expect(ship).toBeInstanceOf(Object);

      });

    it('has a starting port', () => {

      expect(ship.currentPort).toBe(dover);

    });

    it('gets added to port on instination', () => {

      expect(dover.ships).toContain(ship);
    });
  
    it('can set sail', () => {
  
      ship.setSail();
  
      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
      });
  
    it('can\'t sail further than itinerary', () => {
    
      ship.setSail()
      ship.dock();
    
      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });

    it('can dock at a different port', () => {
    
      ship.setSail()
      ship.dock();
    
      expect(ship.currentPort).toBe(calais);
      expect(calais.ships).toContain(ship);
      });
  });
});

