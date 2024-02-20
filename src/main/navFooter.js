import React from "react";
import './navFooter.css'
import logo from '../images/logo.png'
import FACEBOOK from '../images/FACEBOOK.png'
import instagram from '../images/INSTAGRAM.png'
import twitter from '../images/TWITER.png'

const NavFooter=()=>{
    return(
        <div className="container-fluid" id="navFooter">

        <div className="container">
            <div className="row ul ">
                <li className="col-lg-2 col-md-3 col-sm-3"><a>Products</a></li>
                <li className="col-lg-1 col-md-3 col-sm-3"><a>Partners</a></li>
                <li className="col-lg-1 col-md-3 col-sm-3"><a>Resources </a></li>
                <li className="col-lg-4 col-md-3 lg col-sm-3 img-fluid"><img src={logo} /></li>
                <li className="col-lg-1 col-md-3 col-sm-3"><a>About</a></li>
                <li className="col-lg-1 col-md-3 col-sm-3"><a>Blog</a></li>
                <li className="col-lg-2 col-md-3 col-sm-3"><a>Suport</a></li>
            </div>
            <div className="socialmedia">
                <a><img  className="img-fluid" src={FACEBOOK} alt="facebook" /></a>
                <a><img  className="img-fluid" src={instagram} alt="instagram" /></a>
                <a><img className="img-fluid" src={twitter} alt="twiter" /></a>
            </div>
            <h4 className="text-center copyrigth"><span>©2020 ___2023 </span> <span>Privacy___Team </span> </h4>
        </div>

        </div>
    )
}
export default NavFooter