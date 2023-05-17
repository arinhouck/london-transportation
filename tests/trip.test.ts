import Card from "../src/models/card";
import Station from "../src/models/station";
import Trip from "../src/models/trip";
import { TripType } from "../src/models/trip-type";

describe('Trip', () => {
    describe('checkIn()', () => {
        test('as bus', () => {
            const card = new Card(1.8);
            const trip = new Trip(card, TripType.BUS, Station.chelsea);

            trip.checkIn();

            expect(card.getBalance()).toBe(0)
        });
        test('as rail', () => {
            const card = new Card(3.20);
            const trip = new Trip(card, TripType.RAIL, Station.chelsea);

            trip.checkIn();

            expect(card.getBalance()).toBe(0)
        });
    })
    describe('checkOut()', () => {
        test('as rail partial amount', () => {
            const card = new Card(5);
            const trip = new Trip(card, TripType.RAIL, Station.chelsea);

            trip.checkIn();
            trip.checkOut(Station.holburn);

            expect(card.getBalance()).toBe(2.5)
        });

        test('as rail full amount', () => {
            const card = new Card(3.2);
            const trip = new Trip(card, TripType.RAIL, Station.chelsea);

            trip.checkIn();
            trip.checkOut(Station.wimbledon);

            expect(card.getBalance()).toBe(0)
        });
    })
});
