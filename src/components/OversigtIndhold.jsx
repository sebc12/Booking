import DeleteBooking from "./DeleteBooking";

export default function OversigtDesign({ room, name, date, id, setBookings }) {
    
    return (
        <>
        
           <div className="Oversigt">
            <h2>{room}</h2>
 
            <h2>{name}</h2>
               
            <h2>{date}</h2>
            
            <DeleteBooking id={id} setBookings={setBookings}/>
            </div>
            
        
     </>   
    )
}