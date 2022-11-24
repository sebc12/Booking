import { useEffect, useState } from "react";
import { transformToArray } from "../firebase-utils";
import OversigtIndhold from "./OversigtIndhold";



const url =
  "https://roombookings-f0b23-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function RoomContent() {
    const [bookings, setBookings] = useState([]);
  

  useEffect(() => {
    // Håndtere async logik/kode
    async function getData() {
      // Vi laver vores fetch kald, og får et http response fra vores firebase
      const response = await fetch(url);
      // Vi får body ud af det http response
      const body = await response.json();
      // Vi laver det mærkelige firebase object om til et array.
      const asArray = transformToArray(body);
      console.log(asArray);
      setBookings(asArray);
      
    }

    getData();
  }, []);

  return (
    <main>
        <div className="oversigtTitle">
            <h2>Lokale</h2>
            <h2>Navn</h2>
            <h2>Dato</h2>
        </div>
   {bookings.map((booking) => {
        return <OversigtIndhold date={booking.date} room={booking.room} name={booking.name} id={booking.id} setBookings={setBookings} />;
      })}
    </main>
  );
}