import { useState } from "react";
import UndervisningsContent from "./LokaleContent/UndervisningsContent";
import MødeContent from "./LokaleContent/MødeContent";
import AlleContent from "./LokaleContent/AlleContent";


export default function Navbar () {

    const [showRoom, setShowRoom] = useState("Alle");

    


   
    return (

        <>
        <div>
            <ul className="navbar">
                <li>
                    <button className="btn" onClick={() => setShowRoom("Alle")}>Alle</button>
                </li>
                <li>
                    <button className="btn" onClick={() => setShowRoom("Undervisningslokaler")}>Undervisningslokaler</button>
                    
                </li>
                <li>
                    <button className="btn" onClick={() => setShowRoom("Mødelokaler")}>Mødelokaler</button>
                </li>
                
            </ul>
        </div>
        <div>

        

        {showRoom === "Alle" && <AlleContent />}
        {showRoom === "Mødelokaler" && <MødeContent />}
        {showRoom === "Undervisningslokaler" && <UndervisningsContent />}
        </div>
        
        </>
    )
}