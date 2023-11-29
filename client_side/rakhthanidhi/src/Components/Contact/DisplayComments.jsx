
import  "./Contact/Contact.css"
function DisplayComments()
{

    const storedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));

    return(
        <div>

        <h2>Stored Comments:</h2>
            {storedContactInfo && (
                <ul>
                    <li><strong>Name:</strong> {storedContactInfo.name}</li>
                    <li><strong>Email:</strong> {storedContactInfo.email}</li>
                    <li><strong>Message:</strong> {storedContactInfo.message}</li>
                </ul>
            )}
        </div>
       
    )
}
export default DisplayComments;