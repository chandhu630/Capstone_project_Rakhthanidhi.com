import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
function Signup ()
{
    return(
        <div className="display_image_signup">
                <div className="signup">
                    <div className="signuphead">Signup Page</div>
                    <input type ="text" className="firstname"  placeholder="Enter Your First Name"/>
                    <input type ="text" className="lastname"  placeholder="Enter Your last Name"/>
                    <input type ="text" className="password" placeholder="Password"/>
                    <input type ="text" className="Phone"  placeholder = "Phone Number"/>
                    <input type ="text" className ="Email_Sign" placeholder ="Email Address"/>
                    <br></br>
                    <button className="register">Register</button>
                    <div className="member">Already have Account <b className="login"><Link  to = "/login" className ="">Login</Link></b></div>
                </div>
                <div className ="sidebox">
                    
                </div>
        </div>
    )
}
export default Signup;
