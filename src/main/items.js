import React from "react";
import './items.css'
//import one from "../images/gloom.jpg"

const Items=()=>{
    return(
        <>
            <div className="container">
            <h2 className="text-center">TITLE</h2>
            <p className="text-center">litel description</p>
            <ul className="row">

                <li className="col-lg-3 col-md-6">item one</li>
                <li className="col-lg-3 col-md-6">item one</li>
                <li className="col-lg-3 col-md-6">item one</li>
            </ul>

        </div>
        
        </>
    )
}
export default Items