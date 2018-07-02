const Port = require('../src/port.js')

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Port('Dover')).toBeInstanceOf(Object);
    });

  it('returns name of port', () => {
    const port = new Port('Dover');

    expect(port.name).toEqual('Dover');
    });
});

