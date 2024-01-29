import { Link } from "react-router-dom";
import "./Login.css"
function Loginpage()
{
    return(
        <div>
            <div className="login_image">
                <div className="logincenter">
                    <div className="loginpage">
                        <div className="loginpageHeading"> Login Page</div>
                        <div className="insideInput">
                            <input className="loginname" type = "text" placeholder="Enter Your Name" />
                            <input className = "loginpassword" type = "password" placeholder = " Enter Your Password" />
                            <button className="loginsubmit">Submit</button>
                            <div className="forgotpassword"> <Link to = "/forgot">Forgot Password ? </Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loginpage;