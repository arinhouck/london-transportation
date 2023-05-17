import Station from "./station"
import { TripType } from "./trip-type"

export default class Fare {
    static readonly anywhereZone1: number = 2.50
    static readonly anyOneZoneOutsideZone1: number = 2.00
    static readonly anyTwoZonesIncludingZone1: number = 3.00
    static readonly anyTwoZonesExcludingZone1: number = 2.25
    static readonly anyThreeZones: number = 3.20
    static readonly busAmount: number = 1.80

    static checkInAmount(tripType: TripType): number {
        if (tripType == TripType.BUS) {
            return Fare.busAmount;
        }

        // max amount
        return Fare.anyThreeZones;
    }

    static checkOutAmount(startStation: Station, endStation: Station): number {
        const travelDistance = startStation.getDistanceTo(endStation);
        const includingZone1 = startStation.zones.includes(1) || endStation.zones.includes(1);

        const matchingZones = startStation.zones.filter(Set.prototype.has, new Set(endStation.zones));
        if (travelDistance == 1 && !matchingZones.includes(1)) {
            return this.anyOneZoneOutsideZone1;
        }
        if (travelDistance == 1 && includingZone1) {
            return this.anywhereZone1;
        }
        if (travelDistance == 2 && includingZone1) {
            return this.anyTwoZonesIncludingZone1;
        }
        if (travelDistance == 2 && !includingZone1) {
            return this.anyTwoZonesExcludingZone1;
        }
        if (travelDistance == 3) {
            return this.anyThreeZones;
        }

        return 0;
    }
}
