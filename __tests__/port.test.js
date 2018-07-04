const Port = require('../src/port.js')

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Port('Dover')).toBeInstanceOf(Object);
    });

  it('returns name of port', () => {
    const port = new Port('Dover');

    expect(port.name).toEqual('Dover');
    });

  it('can add a ship', () => {
    const port = new Port('Dover');
    const ship = {}

    port.addShip(ship)
  
    expect(port.ships).toContain(ship);
    }); 

  it('can add a ship', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    
    expect(port.ships).toEqual([titanic]);
    }); 

});

