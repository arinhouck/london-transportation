// enum StationTypes {
//     Holburn = "1",
//     Chelsea = "1",
//     EarlsCourt = "1,2",
//     Wimbledon = "3",
//     Hammersmith = "2"
// }

export default class Station {
    public static readonly holburn = new Station('HolBurn', [1]);
    public static readonly chelsea = new Station('Chelsea', [1]);
    public static readonly earlsCourt = new Station("Earl's Court", [1, 2]);
    public static readonly wimbledon = new Station('Wimbledon', [3]);
    public static readonly hammersmith = new Station('Hammersmith', [2]);
    public static readonly maxZones: number = 6

    private constructor(public readonly name: string, public readonly zones: Array<number>) {
    }

    getDistanceTo(station: Station): number {
        let minDistance = Station.maxZones - 1;
        this.zones.forEach((zoneFrom) => {
            station.zones.forEach((zoneTo) => {
                const abs = Math.abs(zoneFrom - zoneTo)
                if (abs < minDistance) {
                    minDistance = abs
                }
            })
        })
        return minDistance + 1;
    }
}
