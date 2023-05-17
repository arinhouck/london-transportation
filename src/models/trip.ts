import Card from "./card"
import Fare from "./fare"
import Station from "./station"
import { TripType } from "./trip-type"

export default class Trip {
    private startStation: Station
    private endStation?: Station
    private tripType: TripType
    private card: Card
    private fareAmount: number

    constructor(card: Card, tripType: TripType, startStation: Station) {
        this.card = card
        this.fareAmount = 0
        this.tripType = tripType
        this.startStation = startStation
    }

    checkIn() {
        this.fareAmount = Fare.checkInAmount(this.tripType)

        this.card.charge(this.fareAmount)
    }

    checkOut(endStation: Station) {
        this.endStation = endStation

        if (this.tripType != TripType.RAIL) {
            return
        }

        const checkInAmount = this.fareAmount
        this.fareAmount = Fare.checkOutAmount(
            this.startStation,
            endStation
        )
        this.card.credit(checkInAmount - this.fareAmount)
    }

}
