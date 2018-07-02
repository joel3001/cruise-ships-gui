const Ship = require('../src/cruise.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

describe('constructor', () => {
  it('returns an object', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port])
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
    });


  it('has a starting port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port])
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });
  
});

describe('setSail', () => {
  it('can set sail', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    });

    it('can\'t sail further than itinerary', () => {
      const dover = new Port('Dover');
      const calais = new Port('Calais');
      const itinerary = new Itinerary([dover, calais]);
      const ship = new Ship(itinerary);
  
      ship.setSail()
      ship.dock();
  
      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

});

describe('dock', () => {
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail()
    ship.dock();

    expect(ship.currentPort).toBe(calais);
    });

});

