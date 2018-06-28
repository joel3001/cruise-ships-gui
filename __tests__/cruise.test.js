const Depart = require('../src/cruise.js')

describe('constructor', () => {
  it('returns an object', () => {
      expect(new Depart('Bristol')).toBeInstanceOf(Object);
    });
});