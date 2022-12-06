import { useState } from "react";
import { Link } from "react-router-dom";
import BookingPage from "./BookingPage";



function Signup() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
      
      // call firebase
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDz21OlUywuTLX_B3kB_Re7FITqBjx6W-E",
      { 
          method: 'POST',
          body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
          })
      }); 
      const result = await response.json();
      console.log(result);
      
  }
  const handleEmail = (event) => {
      setEmail(event.target.value);
  }
  const handlePassword = (event) => {
      setPassword(event.target.value);
  }


return (
    <div>
      <h1>Sign up</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder='Email' onChange={handleEmail} required></input>
        <label>Kode</label>
        <input type="password" placeholder='Kode' onChange={handlePassword} required></input>
        <Link to="/Signin" onClick={handleSignup}>
          <button>Opret bruger</button>
        </Link>
        
      </form>

    </div>
  );
}

export default Signup;
