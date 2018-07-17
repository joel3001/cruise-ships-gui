const Port = require('../src/port.js')

describe('constructor', () => {
  describe('with ports and ships', () => {
    let port;
    let titanic;
    let queenMary

    beforeEach(() => {

      port = new Port('Dover');
      titanic = jest.fn();
      queenMary = jest.fn();
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

  it('can remove a ship', () => {

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(titanic);
    
    expect(port.ships).toEqual([queenMary]);
    }); 
  });
});

