import React from "react";
import { Link } from "react-router-dom";
import blackflower from './icons/black-flower.png'
import blackglobe from './icons/black-globe.png'
import spiral from './icons/spiral.png'


export default function Nav() {

  return (
    
    <div id="navbar">
      
       
          <Link to={"/PastFlowers"}><img src={spiral} alt="spiral, nav to past flowers" id="navspiral"/></Link>
          <Link to={"/Create"}><img src={blackflower} alt="flower, nav to create" id="navflower"/></Link>
          <Link to={"/Global"}><img src={blackglobe} alt="globe, nav to global" id="navglobe"/></Link>
      
    
      {/* <Link to={"/Signup"}>Signup</Link> */}
      {/* <Link to={"/Login"}>Login</Link>
     <Link to={"/Connect"}>Connect</Link>
      <Link to={"/Profile"}>Profile</Link>
      <Link to={"Settings"}>Settings</Link> */}
    </div>
  );
}
//if props.match.path === login ? nav display none : nav

//we will need some sort of function because the options and positions in the top corners will change:
// ----- on CREATE (create is center) page: past flowers on left /// global on right
//------ on GLOBAL (globe is center) page: past flowers on left // create on right

//---- PAST FLOWERS will just be on create

