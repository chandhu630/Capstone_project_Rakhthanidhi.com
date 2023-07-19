import React from "react";
// import {Link} from "react-router-dom";
import  './Nav.css';
import { Link } from "react-router-dom";
function nav()
{
    return(
        <div>
           <div className = "nav">
           <div><img className = "drops"src = "/photos/drops.png" alt = ""></img></div>
            <div className = "whyDonate"><Link to = "why">Why Donate Blood</Link></div>
            <div className = "Aboutus"> <Link>About Us </Link></div>
            <div className = "DonateNow"><Link>Bloodbanks </Link></div>
            <div className = "ContactUs"><Link>Contact Us</Link></div>
            <div className = "login"><Link>Signup </Link></div>
          </div>
        </div>
    )
}

export default nav;






