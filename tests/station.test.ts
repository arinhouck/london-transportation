import Station from "../src/models/station";

describe('Station', () => {
    describe('travelDistance()', () => {
        test('validate intersecting zones', () => {
            expect(Station.holburn.getDistanceTo(Station.earlsCourt)).toBe(1)
        });
        test('validate one zone', () => {
            expect(Station.holburn.getDistanceTo(Station.chelsea)).toBe(1)
        });
        test('validate two zone', () => {
            expect(Station.chelsea.getDistanceTo(Station.hammersmith)).toBe(2)
        });
        test('validate three zone', () => {
            expect(Station.holburn.getDistanceTo(Station.wimbledon)).toBe(3)
        });
    })
});
