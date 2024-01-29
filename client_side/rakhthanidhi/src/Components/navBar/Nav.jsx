import React, { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import 'firebase/auth';
import './Nav.css';
import { Link } from "react-router-dom";
import {FooterFive} from "../constant/Footerconst";

const firebaseConfig = {
  apiKey: "AIzaSyCJ5oCRLHZ_HHQOQxh7SyKi1c_9dhcW1ik",
  authDomain: "my-first-signup-16a9d.firebaseapp.com",
  projectId: "my-first-signup-16a9d",
  storageBucket: "my-first-signup-16a9d.appspot.com",
  messagingSenderId: "8136298345",
  appId: "1:8136298345:web:91ed6bae60cb3c22e077f8"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (person) => {
      if (person) {
        setUser(person);
        // alert("Your signup successfully completed");
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 100; // You can adjust the value based on your needs
        setIsSticky(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        // Remove the event listener on component unmount
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider().setCustomParameters({
        prompt: 'select_account'
      }));
      const userCredential = result.user;
      setUser(userCredential);
    } catch (err) {
      console.error('Error during Google Sign-In:', err.message);
    }
  };

  const [isActive, setisActive] = useState(false);
  const [isActiveone, setisActiveone] = useState(false);
  const [isActivetwo, setisActivetwo] = useState(false);

  return(
    <div> 
      
      {/* <div className="nav_first_flex">
          <a className="Space_between_items_left" href="rel:9347449511">📞 | +91 9347449511</a>
          <a className="Space_between_items" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=example@email.com"><span> ✉ | Rakhthanidhi@help.com </span></a>
          <a className="Space_between_items" href="">
              <img  className="locatiion_symbol" src="https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-header-icon02.png" />
              |<span>India ,Andrapradesh </span></a>
              <a href="" className="Space_between_items">Follow Now</a>
          <div className="display_top">
                  {FooterFive.map((item, i) => (
                      <a key={i} href={item.link} rel="noopener">
                          <img src={item.image} className="whatsapp_gap" alt={`Social icon ${i}`} />
                  
                      </a>
                  ))}
          </div>
        </div> */}
       <div className={isSticky ? 'navbar sticky' : 'navbar'}>
          <div className='navbarmiddle'>
            <div className='main_logo_div'><Link to ="/home" className='linklogo'><img className="drops_circle" src="/photos/drops.png" alt="" /><b>Rakhthanidhi</b></Link></div>
            <div className="dropdown">
              <div className="dropdown-btn pagesheading-innava" onClick={ (e)=>setisActive(!isActive)}>Why Donate<span></span></div>
                    {isActive && (
                      <div className="dropdown-content">
                        <div className='items_box'>
                          <div className="dropdown-items"> <Link to="/why" className="link linkcolor">Why Donate Blood</Link> </div>
                          <div className="dropdown-items"> <Link to = "/benefits" className="link linkcolor" >Benefits of Blood Donation</Link></div>
                          <div className='dropdown-items'> <Link to="/increase" className="link linkcolor">How to increase Blood cells</Link></div>
                          </div>
                      </div>
                    )}
            </div>
            <div className="dropdown">
              <div className="dropdown-btn pagesheading-innava" onClick={ (e)=>setisActiveone(!isActiveone)}>About us<span></span></div>
                    {isActiveone && (
                      <div className="dropdown-content">
                        <div className='items_box'>
                            <div className="dropdown-items"><Link to="/about" className="link linkcolor">About Us</Link></div>
                            <div className="dropdown-items"> <Link to="/gallery" className="link linkcolor">Gallery</Link> </div>
                            <div className="dropdown-items"><Link to="/notifications" className="link linkcolor">Notifications</Link></div>
                            <div className='dropdown-items'> <Link to="/videos" className="link linkcolor">Videos</Link></div>
                          </div>
                      </div>
                    )}
            </div>
           
            <div className="dropdown">
              <div className="dropdown-btn pagesheading-innava" onClick={ (e)=>setisActivetwo(!isActivetwo)}>Bloodbanks<span></span></div>
                    {isActivetwo && (
                      <div className="dropdown-content">
                        <div className='items_box'>
                            <div className="dropdown-items"><Link to="/bloodbanks" className="link linkcolor">Bloodbanks</Link></div>
                            <div className="dropdown-items"> <Link to="/gallery" className="link linkcolor">Gallery</Link> </div>
                            <div className="dropdown-items"> <Link to="/bloodGroup" className="link linkcolor">BloodGroups</Link></div>
                            <div className='dropdown-items'> <Link to="/process" className="link linkcolor">Blood Donation Process</Link></div>
                          </div>
                      </div>
                    )}
            </div>
            <div className="ContactUs"><Link to="/contact " className="link pagesheading-innava">Contact Us</Link></div>
            {user ? (
            <div>
              <button className="Signout" id="Signout" onClick={() => { auth.signOut(); setUser(null); }}>Sign out</button>
            </div>
          ) : (
              <button className="Signout Signup" onClick={signInWithGoogle}>
                Sign Up 
              </button>
          )}
        </div>
      </div> 
      <img src="" alt =" " />
    </div>
  );
}

export default Navbar;
