import React from "react";
import { Link } from "react-router-dom";
import spiral from './icons/spiral.png'


export default function Footer() {

  return (

    <div id="navbar">
      
       <Link href ="https://www.ok.community/"><img src={spiral} alt="spiral" id="navspiral"/></Link>
      
    </div>
  );
}
