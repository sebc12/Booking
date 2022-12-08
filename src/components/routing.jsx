import * as React from "react";
import Booking from "./Booking";
import { Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Signin from "./Signin";



export default function Routing() {

    return (
      <div>

        
        
        <Routes>
          <Route path="/" >
          <Route index element={<Signin />} />
          <Route path="Signin" element={<Signin />} />
            <Route path="Signup" element={<Signup />} />

            <Route path="Booking" 
            element={
            
            <Booking />
            
            } 
            />
          
          </Route>
        </Routes>
      </div>
    );
  }