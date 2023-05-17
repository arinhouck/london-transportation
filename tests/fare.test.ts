import Fare from "../src/models/fare";
import Station from "../src/models/station";

describe('Fare', () => {
    describe('checkOutAmount()', () => {
        test('anywhere in zone 1', () => {
            const amount = Fare.checkOutAmount(
                Station.holburn,
                Station.chelsea
            )
            expect(amount).toBe(Fare.anywhereZone1)
        });
        test('any one zone outside zone 1', () => {
            const amount = Fare.checkOutAmount(
                Station.hammersmith,
                Station.earlsCourt
            )
            expect(amount).toBe(Fare.anyOneZoneOutsideZone1)
        });
        test('any two zones including zone 1', () => {
            const amount = Fare.checkOutAmount(
                Station.chelsea,
                Station.hammersmith
            )
            expect(amount).toBe(Fare.anyTwoZonesIncludingZone1)

        });
        test('any two zones excluding zone 1', () => {
            const amount = Fare.checkOutAmount(
                Station.wimbledon,
                Station.hammersmith
            )
            expect(amount).toBe(Fare.anyTwoZonesExcludingZone1)
        });
        test('any three zones', () => {
            const amount = Fare.checkOutAmount(
                Station.chelsea,
                Station.wimbledon
            )
            expect(amount).toBe(Fare.anyThreeZones)
        });
    })
});
