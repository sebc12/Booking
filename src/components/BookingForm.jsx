import { useState } from "react";

export default function BookingForm({ closeModal }) {

    const [room, setRoom] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    

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
      const handleTime = (event) => {
        // date
        setTime(event.target.value);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        if (name === "" || room == "" || date == "" || time == "") {
            
      } else {
        let booking = { room: room, name: name, date: date, time: time };
          const response = await fetch('https://roombookings-f0b23-default-rtdb.europe-west1.firebasedatabase.app/.json',
          { 
            method: 'POST', 
            body: JSON.stringify(booking)
          })
          closeModal();
      }}
    return (
        <>
        <div className="bookingOverskrift">
        <h1>BOOK ET LOKALE</h1>
        </div>
        <form className="BookingForm">    
           <div><label>Navn og efternavn</label>
           <input type="text" name="name" placeholder="Navn" required onChange={handleName}/></div>

           <div><label>Lokale</label>
           <select required name="room" id="cars" onChange={handleRoom}>
            <option value=""disabled selected hidden>Vælg lokale</option>
            <option value="Lokale 1">Lokale 1</option>
            <option value="Lokale 2">Lokale 2</option>
            <option value="Lokale 3">Lokale 3</option>
            <option value="Lokale 4">Lokale 4</option>
            <option value="Lokale 5">Lokale 5</option>
            <option value="Lokale 6">Lokale 6</option>
            <option value="Lokale 7">Lokale 7</option>
            <option value="Møde lokale 1">Møde lokale 1</option>
            <option value="Møde lokale 2">Møde lokale 2</option>
            <option value="Møde lokale 3">Møde lokale 3</option>
            <option value="Møde lokale 4">Møde lokale 4</option>
            <option value="Møde lokale 5">Møde lokale 5</option>
            <option value="Møde lokale 6">Møde lokale 6</option>

            </select> </div>

           <div> <label>Vælg en dato</label>
            <input name="date" type="date" placeholder="Dato - f.eks 10-01-2022" required onChange={handleDate}/></div>

           <div> <label>Vælg et tidspunkt</label>
           <select name="time" required onChange={handleTime}>
            <option value="" disabled selected hidden>Vælg en tid</option>
            <option value="08:30-12:00">08:30-12:00</option>
            <option value="12:30-16:00">12:30-16:00</option>
            </select> </div>

           <div> <button type="submit" onClick={handleSubmit}>Gem booking</button></div>
        </form>

        </>
    )
}