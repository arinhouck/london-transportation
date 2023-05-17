import Card from "./models/card";
import Station from "./models/station";
import Trip from "./models/trip";
import { TripType } from "./models/trip-type";
import User from "./models/user";

// Future improvements
// - Big decimal library will be necessary for currency math for production-use
// - magswipe card scanner reader providing keyboard input to program
// - a local storage option to encrypt and store transactions from a trip during offline mode
// - a protocol such as HTTP to send data from local storage to web server

const card = new Card(30);
const user = new User(card)

const trip1 = new Trip(user.card, TripType.RAIL, Station.holburn)
user.addTrip(trip1)
trip1.checkIn()
trip1.checkOut(Station.earlsCourt)

console.log('Card balance trip 1 complete', card.getBalance())

const trip2 = new Trip(user.card, TripType.BUS, Station.earlsCourt)
trip2.checkIn()

console.log('Card balance trip 2 complete', card.getBalance())

const trip3 = new Trip(user.card, TripType.RAIL, Station.chelsea)
trip3.checkIn()
trip3.checkOut(Station.wimbledon)

console.log('Card balance trip 3 complete', card.getBalance())

