import React from 'react';
import Home from './Home';
import * as Icons from "react-icons/fa";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function Navbar(){
     return (
     <>
     <nav className="navbar">
         <Link to="/" className="navbar-logo">
           NATURE
           <Icons.FaTree/>
         </Link>

     </nav>
      </>

    );
}
export default Navbar;