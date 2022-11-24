import { useState } from "react";

export default function BookingForm() {

    const [room, setRoom] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    

    const handleRoom = (event) => {
        const input = event.target.value;
        setRoom(input);
      };
      const handleDate = (event) => {
        // date
        setDate(event.target.value);
      };
      const handleName = (event) => {
        // date
        setName(event.target.value);
      };
    
      const handleSubmit = async () => {
        console.log("You clicked");
        let booking = { room: room, name: name, date: date };
        const response = await fetch('https://roombookings-f0b23-default-rtdb.europe-west1.firebasedatabase.app/.json',
        { 
          method: 'POST', 
          body: JSON.stringify(booking)
        })}
    return (
        <>
        <div>
        
        </div>
        <form className="BookingForm">    
           <div><label>Lokale</label>
           <input type="text" placeholder="Lokale" required onChange={handleRoom} /></div>

           <div><label>Navn og Efternavn</label>
           <input type="text" placeholder="Navn" required onChange={handleName}/></div>

           <div> <label>Dato</label>
            <input type="text" placeholder="Dato - f.eks 10-01-2022" required onChange={handleDate}/></div>
           <div> <button type="submit" onClick={handleSubmit}>Gem booking</button></div>
        </form>

        </>
    )
}