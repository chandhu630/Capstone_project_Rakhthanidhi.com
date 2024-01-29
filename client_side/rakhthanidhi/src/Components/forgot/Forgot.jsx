import "./Forgot.css"
function ForgotPage()
{
    return(
        <div>
            <div className="forgot_Image">
            <div className="forgotpage">
                <div className="forgotbox">
                    <div className="entire">Enter new password for your Account</div>
                    <input className = "newpassword" type = "text" placeholder = "Enter new password" />
                    <input className = "confirmpassword" type = "password" placeholder="Confirm your password" />
                    <button className="resetpassword" >Reset your password</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default ForgotPage;