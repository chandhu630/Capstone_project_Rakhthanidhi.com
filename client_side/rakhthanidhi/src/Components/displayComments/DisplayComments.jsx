import Footerpage from "../footer/Footer";
import Navbar from "../navBar/Nav";
import "./DisplayComments.css"

function DisplayComments()
{
    const storedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));

    return(
        <div>
            <div className="DisplayNavbar"><Navbar/></div>
        <h2>Stored Comments:</h2>
            {storedContactInfo && (
                <ul>
                    <div className="messageoFDisplay">{storedContactInfo.message}</div>
                </ul>
            )}
            <Footerpage/>
        </div>
       
    )
}
export default DisplayComments;