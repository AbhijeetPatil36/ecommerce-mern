import React from 'react'
import {BrowserRouter , Routes ,Route} from "react-router-dom";
import Login from      "./page/Login";
import Register from   "./page/Register";
import Mainpage from   "./page/Mainpage";
import "react-toastify/dist/ReactToastify.css"



export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<Mainpage />}/>            
            <Route exact path="/register" element={<Register />}/>
            <Route exact path="/login" element={<Login />}/>
            
            
            
      </Routes>
    </BrowserRouter>
    
  );
}
