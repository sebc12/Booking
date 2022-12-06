import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./img/logo.png";

function Signin() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)


    const handleEmail = (event) => {
      setEmail(event.target.value);
  }
  const handlePassword = (event) => {
      setPassword(event.target.value);
  }

  const navigate = useNavigate();


    const handleSignin = async (event) => {
      event.preventDefault();
      // call firebase
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDz21OlUywuTLX_B3kB_Re7FITqBjx6W-E",
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

      if(result.error) {
        return setError(true)
      } else {
        navigate("/BookingPage");
      }
    };
      
      

return (
  <>
  <img src={logo} className="App-logo" alt="logo" />
    <div className="logincontainer">
      <h1>Log ind</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder='Email' onChange={handleEmail} required></input>
        <label>Kode</label>
        <input type="password" placeholder='Kode' onChange={handlePassword} required></input>
        
          <button className="loginbtn" onClick={handleSignin}>Log ind</button>
          { error && <p className="errortext">Forkert email eller kode</p>}
        
        <Link to="/Signup" onClick={handleSignin}>
          <button className="signup">Sign up</button>
        </Link>
             
      </form>
    </div>
    </>
  );
}

export default Signin;
