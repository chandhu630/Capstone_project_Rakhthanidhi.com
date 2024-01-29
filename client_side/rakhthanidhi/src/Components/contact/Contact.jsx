
import { useState } from "react";
import Footerpage from "../footer/Footer";
import Navbar from "../navBar/Nav";
import "./Contact.css"
import { Link } from "react-router-dom";
function ContactCreate()
{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[message,setMessage]=useState("");
    const[sub,setSub] = useState(false);

    const handlenameChange =(event) =>
    {
        setName(event.target.value);
    }
    const handleEmailChange =(event) =>
    {
        setEmail(event.target.value);
    }
    const handleMessageChange =(event) =>
    {
        setMessage(event.target.value);
    }

    const handleSubmit =() =>
    {
        if(!name || !email || !message)
        {
            alert("please enter the all fields");
            return;
        }
        const submit =
        {
            name : name,
            email : email,
            message : message
        }
        const detailsString =JSON.stringify(submit);
        localStorage.setItem("submit",detailsString);
        setName('');
        setEmail('');
        setMessage('');
        setSub(true);
        setTimeout(()=>
        {
            setSub(false)
        },2000)
    }
    return(
        <div>
            <Navbar />
            <br></br><br></br>
            <div className='background_help_contact '>
              <div className='middle_conatct'>
                <div className='startDonating_contact'>Contact Us</div>
                <div className="home_option_contact"><Link  className ="link" to="/home" >Home </Link>/<span className="span_primary"> Contact Us </span></div>
              </div>
            </div>
            {sub && (
                <div className="thanks"> Thanks for commenting to us</div>
             )}
            <div className="Conatctus_box">
            <div className="Swapna_image"></div>
                <div className="Contact_flex">
                    <div className="Handshow_contact"></div>
                    <div className="contact_message_box">
                        <h2>Contact Us</h2>
                        <input className="Enter_name_conatct" type="text" placeholder="Enter your Name" value={name} onChange={handlenameChange} />
                        <input className = "Enter_emailAddress_conatact" type="text" placeholder="Enter a valid email address" value={email} onChange={handleEmailChange}/>
                        <textarea className ="Enter_your_msg_contact" type="text" placeholder="Enter your message" value={message} onChange={handleMessageChange} />
                        <button className="submit" onClick={handleSubmit}>Submit</button>
                    </div> 
                </div> 
            </div>
            

            <div className="contact-left">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1093537634642!2d77.53039017562196!3d12.964853815025114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd8ade7d69f%3A0x2cd2c94cf96ba5e9!2sJTD%20Foundation!5e0!3m2!1sen!2sin!4v1699280110891!5m2!1sen!2sin"
                width ="100%"
                height="450"
                className='google'
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Google Map"
                />
             </div>
            <div><Footerpage/></div>
        </div>
    )

}
export default ContactCreate;




