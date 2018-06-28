const Departure = require('../src/cruise.js')

describe('constructor', () => {
  it('returns an object', () => {
      expect(new Departure('Bristol')).toBeInstanceOf(Object);
    });
});