import React from "react";
// import {Link} from "react-router-dom";
import  './Nav.css';
function nav()
{
    return(
        <div>
           <div className="nav">
           <div ><img className="drops"src="/photos/drops.png" alt=""></img></div>
            <div className="whyDonate">Why Donate Blood</div>
            <div className="Aboutus"> About Us</div>
            <div className="DonateNow">Bloodbanks</div>
            <div className="ContactUs">Contact Us</div>
            <div className="login">Signup</div>
            
        </div>
        </div>
    )
}

export default nav;






