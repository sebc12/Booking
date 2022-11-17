import { useState } from "react";
import Undervisningslokaler from './Undervisningslokaler';
import Mødelokaler from './Mødelokaler'

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

        {showRoom === "Alle" && <Mødelokaler />}
        {showRoom === "Mødelokaler" && <Mødelokaler />}
        {showRoom === "Undervisningslokaler" && <Undervisningslokaler />}
        </div>
        
        </>
    )
}