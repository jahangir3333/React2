import React from 'react'
import "./header.css"
import imag from "./images/ads.jpg"

function Header() {
 const setting={
    color:"white",
    padding:"5px",
    height:"70px",
    contentAlign:"center"
  
 }

  return (
    <>
    <div className="header" style={setting}>
    <img src={imag} alt="logo" style=
    {{height:"50px", width:"50px",borderRadius:"50%", marginTop:"5px"}}/>
      

    <div className="menu">
      <ul>
      <li><a href="#">HOME</a></li>
      <li><a href="Login">Login</a></li>
      <li><a href="Registration">Registration</a></li>
      <li><a href="Content">Content Available</a></li>
      </ul>

      
    </div>
    <h1>The My Site</h1>
    </div>
    </>
  )
}

export default Header