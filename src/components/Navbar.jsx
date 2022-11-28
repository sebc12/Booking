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
                    <a className="btn" onClick={() => setShowRoom("Alle")}>Alle</a>
                </li>
                <li>
                    <a className="btn" onClick={() => setShowRoom("Undervisningslokaler")}>Undervisningslokaler</a>
                    
                </li>
                <li>
                    <a className="btn" onClick={() => setShowRoom("Mødelokaler")}>Mødelokaler</a>
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