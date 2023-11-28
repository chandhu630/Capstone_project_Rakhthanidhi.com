import React from "react";
import  './Nav.css';
import { Link } from "react-router-dom";
function Navbar()
{
    return(
        <div>
              <div className = "navbar"> 
                {/* <div><img  className="logo" src ="/photoconst [search, setSearch] = useState("");s/drops.png" alt =""/></div> */}
                    <div><Link to ="/home" ><img className = "drops_circle" src =  "/photos/drops.png" alt = "" /></Link></div>
                    {/* <input className = 'input' type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder='name' />      */}
                    {/* <input className="inputtype" type ="text" placeholder ="🔍 Search..."/> */}
                    <div className = "whyDonate"><Link to ="/why" className="link"> Why Donate Blood</Link></div>
                    <div className = "Aboutus"><Link to ="/about" className="link"> About Us </Link></div>
                    <div className = "DonateNow"><Link to ="/Bloodbanks" className="link"> Bloodbanks</Link>  </div>
                    <div className = "ContactUs"><Link to ="/Contact" className="link"> Contact Us</Link></div>
                    <div className = "login"> <Link to ="/SignupPage" className="link"> Signup </Link></div>
          </div>
        </div>
    )
}
export default Navbar;






