import Card from "./models/card";
import Station from "./models/station";
import Trip from "./models/trip";
import { TripType } from "./models/trip-type";
import User from "./models/user";

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

