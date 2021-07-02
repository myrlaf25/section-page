import React from "react";

import Navbar from "./Components/Navbar";
import { Button } from 'reactstrap';
import AllLogos from './Components/AllLogos'


function App() {
  return (
    <div>
      <div className="Nytelock">
      
        <Navbar />
      </div>
      <div className="section">
    <div> 
    <li style={{ color:'goldenrod',fontWeight: 'bold'}}>
      HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?
    </li>
    <h1 style={{ color:'white', fontWeight: 'bold'}}>Different Types of Logo Styles</h1>

    <Button id='contactBtn' color='goldenrod' >Contact Us</Button>
    <div id='allLogos'>
    <AllLogos/>
    </div>
    </div>
     
    </div>
    </div>
   
    
    
  );
}

export default App;
