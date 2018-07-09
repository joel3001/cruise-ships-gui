const Itinerary = require('../src/itinerary.js')
const Port = require('../src/port.js')

describe('constructor', () => {
    describe('with ports and itinerary', () => {
        let dover;
        let calais;
        let itinerary
    
        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
    
            itinerary = new Itinerary([dover,calais]);
        });
    
    it('returns an object', () => {
        expect(new Itinerary('Dover')).toBeInstanceOf(Object);
        });

    it('can have ports', () => {
        
        expect(itinerary.ports).toEqual([dover,calais]);
             });
        });
    });