import React from "react";
import logo from '../images/logo.png'
import './nav.css'
const NavBar=()=>{
    return(
        <div  className="container-fluid" id="nav"> 
        <ul className="row list-unstyled">
            <li className="col-lg-3 col-md-3 "><img  className="img-fluid"  src={logo} /></li>
            <li className="col-lg-2 col-md-2"><a href="/">Home</a></li>
            <li className="col-lg-2 col-md-2 text-secondary"><a href="/stickers">Stickers</a></li>
            <li className="col-lg-2 col-md-2 text-secondary"><a href="/design" >Design</a></li>
            <li className="col-lg-3 col-md-3  mr-0"><a href="/login"> <button  type="button">Owner Login</button>  </a></li>

        </ul>
        </div>
    )
}

export default NavBar