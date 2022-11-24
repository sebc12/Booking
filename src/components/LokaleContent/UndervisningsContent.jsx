import { useEffect, useState } from "react";
import { transformToArray } from "../../firebase-utils";
import Undervisningslokaler from "./Undervisningslokaler";


const url =
  "https://mul-bookings-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function UndervisningsContent() {
    const [rooms, setRooms] = useState([]);
  

  useEffect(() => {
    // Håndtere async logik/kode
    async function getData() {
      // Vi laver vores fetch kald, og får et http response fra vores firebase
      const response = await fetch(url);
      // Vi får body ud af det http response
      const body = await response.json();
      // Vi laver det mærkelige firebase object om til et array.
      const asArray = transformToArray(body);


      setRooms(asArray);
      
    }

    getData();
  }, []);

  return (
    <main>
         <div className="grid-container">
       {rooms.map((room)=> {
            return <Undervisningslokaler 
            room={room.room} 
            description={room.description} 
            plug={room.plug} 
            sun={room.sun}
            people={room.people}
            projector={room.projector}
            id={room.id}
            />
        })}
        </div>
    </main>
  );
}