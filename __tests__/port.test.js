const Port = require('../src/port.js')

describe('constructor', () => {
  describe('with ports and ships', () => {
    let port;
    let titanic;
    let queenMary

    beforeEach(() => {

      port = new Port('Dover');
      titanic = {};
      queenMary = {};
    });

  
  it('returns an object', () => {
    expect(new Port('Dover')).toBeInstanceOf(Object);
    });

  it('returns name of port', () => {
    expect(port.name).toEqual('Dover');
  
  });

  it('can add a ship', () => {

    port.addShip(titanic)
  
    expect(port.ships).toContain(titanic);
    }); 

  it('can add a ship', () => {

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    
    expect(port.ships).toEqual([titanic]);
    }); 
  });
});

