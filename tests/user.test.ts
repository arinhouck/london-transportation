import Card from "../src/models/card";
import Fare from "../src/models/fare";
import Station from "../src/models/station";
import Trip from "../src/models/trip";
import { TripType } from "../src/models/trip-type";
import User from "../src/models/user";

describe('User', () => {
    describe('Journey integration', () => {
        test('validate final card balance', () => {
            const card = new Card(30);
            const user = new User(card)

            const trip1 = new Trip(user.card, TripType.RAIL, Station.holburn)
            user.addTrip(trip1)
            trip1.checkIn()
            trip1.checkOut(Station.earlsCourt)

            const trip2 = new Trip(user.card, TripType.BUS, Station.earlsCourt)
            user.addTrip(trip2)
            trip2.checkIn()

            const trip3 = new Trip(user.card, TripType.RAIL, Station.chelsea)
            user.addTrip(trip3)
            trip3.checkIn()
            trip3.checkOut(Station.wimbledon)

            expect(user.card.getBalance()).toBe(22.5)
            expect(user.getJourney().length).toBe(3)
        });
    })
});
