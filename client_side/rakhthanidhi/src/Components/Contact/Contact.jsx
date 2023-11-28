

// // export default ContactCreate;
// import React, { useState } from 'react';
// import './Contact.css';
// import { Link } from 'react-router-dom';
// import ConnectDoctorspage from '../Connect/ConnectDoctors';

// function ContactCreate() {
//     const [contact, setContact] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });
//     const [showThankYou, setShowThankYou] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setContact((prevContact) => ({
//             ...prevContact,
//             [name]: value
//         }));
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (contact.name && contact.email) {
//             // Store in local storage
//             localStorage.setItem('contactInfo', JSON.stringify(contact));
//             setShowThankYou(true);
//             // Reset form after 3 seconds
//             setTimeout(() => {
//                 setShowThankYou(false);
//                 setContact({
//                     name: '',
//                     email: '',
//                     message: ''
//                 });
//             }, 3000);
//         }
//     };
//     return (
//         <div  >
//             <div className="contactBox">
//                 <div className="storepage">
//                     <div className="contactOne"></div>
//                     <div className="contactTwo"></div>
//                     <div className="redbar">Contact Us
//                     <div className='linkofDoctors'>
//                         <div className='doctors_text' ><Link className ="connectnone" to ="/connect">If you have any doubts consider this this doctors 📞 </Link></div></div>
//                     </div>

//                     <div className="contactpage">
//                         {!showThankYou ? (
//                             <form className="insideContage" onSubmit={handleFormSubmit}>
//                                 <input
//                                     className="contactName fontsize"
//                                     type="text"
//                                     name="name"
//                                     placeholder="Name"
//                                     value={contact.name}
//                                     onChange={handleChange}
//                                 />
//                                 <input
//                                     className="EmailAddress fontsize"
//                                     type="text"
//                                     name="email"
//                                     placeholder="Enter a valid E-mail address"
//                                     value={contact.email}
//                                     onChange={handleChange}
//                                 />
//                                 <textarea
//                                     className="areamessage fontsize"
//                                     name="message"
//                                     placeholder="Share your experience on blood donation ....."
//                                     value={contact.message}
//                                     onChange={handleChange}
//                                 />
//                                 <button type="submit" className="submitbutton">Send it</button>
//                             </form>
//                         ) : (
//                             <div className='wishesInmiddle'><i>🌼Thanks for sharing your comments! 💐</i></div>
//                         )}
//                     </div>
//                 </div>
//             </div>


            
//         </div>
//     );
// }

// export default ContactCreate;



import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import ConnectDoctorspage from '../Connect/ConnectDoctors';

function ContactCreate() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showThankYou, setShowThankYou] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if name, email, and message are provided
        if (!contact.name || !contact.email || !contact.message) {
            alert("Please enter your name, email, and message.");
            return;
        }

        // Store in local storage
        localStorage.setItem('contactInfo', JSON.stringify(contact));

        // Check if there is a message before showing the thank you message
        setShowThankYou(!!contact.message);

        // Reset form after 3 seconds
        setTimeout(() => {
            setShowThankYou(false);
            setContact({
                name: '',
                email: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div>
            <div className="contactBox">
                <div className="storepage">
                    <div className="contactOne"></div>
                    <div className="contactTwo"></div>
                    <div className="redbar">
                        Contact Us
                        <div className='linkofDoctors'>
                            <div className='doctors_text' >
                                <Link className="connectnone" to="/connect">If you have any doubts consider this this doctors 📞 </Link>
                            </div>
                        </div>
                    </div>
                    <div className="contactpage">
                        {!showThankYou ? (
                            <form className="insideContage" onSubmit={handleFormSubmit}>
                                <input
                                    className="contactName fontsize"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={contact.name}
                                    onChange={handleChange}
                                />
                                <input
                                    className="EmailAddress fontsize"
                                    type="text"
                                    name="email"
                                    placeholder="Enter a valid E-mail address"
                                    value={contact.email}
                                    onChange={handleChange}
                                />
                                <textarea
                                    className="areamessage fontsize"
                                    name="message"
                                    placeholder="Share your experience on blood donation ....."
                                    value={contact.message}
                                    onChange={handleChange}
                                />
                                <button type="submit" className="submitbutton">
                                    Send it
                                </button>
                            </form>
                        ) : (
                            <div className='wishesInmiddle'>
                                <i>🌼Thanks for sharing your comments! 💐</i>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCreate;

