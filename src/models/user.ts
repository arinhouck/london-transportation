import Card from "./card"
import Trip from "./trip"

export default class User {
    card: Card
    journey: Array<Trip>

    constructor(card: Card) {
        this.card = card
        this.journey = []
    }

    addTrip(trip: Trip) {
        this.journey.push(trip)
    }

    getJourney(): ReadonlyArray<Trip> {
        return this.journey
    }
}
