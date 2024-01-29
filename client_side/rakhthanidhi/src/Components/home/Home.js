import React from 'react';
import './Home.css';
import Navbar from '../navBar/Nav';
import Footerpage from "../footer/Footer"
import { Link } from 'react-router-dom';
import { homeInsidetext,DivtextText } from '../constant/Footerconst';
import { useState } from 'react';
import SliderPage from '../slider/Slider';
import DialFunction from '../dial/Dial';
import Image_Slider from '../donars/Eperience';
import First_Nav from '../FirstNav/FirstNav';

const imageUrls = [
  '/photos/gruop.jpeg',
  '/photos/imag1.jpeg',
];

const delay = 6500;

function Homecreate()
{
    const [first,setFirst] = useState(false);
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) =>
          prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        );
      }, delay);
      return () => clearInterval(intervalId);
    }, [index]);
  const handleDotClick = (dotIndex) => {
    setIndex(dotIndex);
  };

  // sliding gallery
    const [sliderValue, setSliderValue] = useState(50);
    const handleSliderChange = (event) => {
      setSliderValue(event.target.value);
    };
    const textList = [
    ];
    const textIndex = Math.floor((sliderValue / 100) * textList.length);
    return(
        <div>
         <div ><Navbar className="homeNav"/></div>
         <div><SliderPage /></div>

          <div className='one_short'>
                  <div className='wewere'><b>WE ARE NOT DOCTORS OR SUPERHERO BUT WE CAN SAVE SOMEONE's LIFE </b></div> 
                     
          </div>
          <div className="Side">
            <div className="Sideheading">
                <div className=' width'>
                <div className="Color"><b>Why some times blood shortage Happens:</b></div>
                <div className='content'> <b className='secondary_text'>Emergencies and unexpected events:</b> 
                Blood shortages primarily arise due to limited eligible donors,
                low donation rates,and seasonal variations impacting supply.
                <div className = {`long-text ${ first ? "expand" : ""}`} > 
                <span className='word_Spacing'>Emergencies,</span> natural disasters, and increased medical demands
                amplify shortages. Pandemics disrupt regular donation patterns, 
                reducing supply further. Advanced medical treatments, surgeries,
                and conditions like cancer necessitate higher blood supplies. 
                Enhanced public awareness and consistent donation campaigns are
                crucial to bridge the gap between demand and available blood units.
                </div>
              </div>
                <button className=' readmoreinfirstblood readmore' onClick = {() => setFirst (pre => !pre)}>{first ? "Readless" : "Readmore"}</button>
              </div>
                <div className='bloodshortage'></div>
            </div>
          </div>
          <div className='whatwedo'>
              <div className='whatwedo_text'> WHAT WE DO</div>
              <h2 className='ourbest'>Our Best Services</h2>
                <div className='first_blood_Donation_flex'>
                    <div className='fisrt_third_container'><img src="photos/image3.jpeg" alt ="" className='first_third' /> </div>
                    <div className='one_blood_donation'>
                        <h1 className='h1_size'>01</h1>
                        <h1 className='blooddonation_heading'>Blood Donation</h1>
                        <div className='wholeblood'>During whole blood donation, approximately a pint of blood is collected and later separated into its components: red cells, plasma, and sometimes platelets.</div>
                        <button className='readmoreinfirstblood'> <Link to ="/process" className='link'>Read more</Link></button>
                    </div>
                </div>
                <div className='healthCheck_flex'>
                    <div className='healthchech_box'>
                        <h1 className='h1_size twolast'>02</h1>
                        <h1 className='health_checkheading'>Health Check</h1>
                        <div className='helthcheck_info'>Your temperature, pulse, and blood pressure will all be measured during this assessment. You can also take a tiny blood sample to measure your haemoglobin level</div>
                        <button className='readmoreinfirstblood'><Link className='link' to="/connect">Read more </Link></button>
                    </div>
                  <div className='health_checkup_container'><img  className ="djsirimage" src="photos/image6.jpeg" alt = "" /></div>
                </div>
                <div className='first_blood_Donation_bank_flex'>
                    <div className='fisrt_third_container'><img src="photos/testing.png" alt ="" className='first_third' /> </div>
                    <div className='bloodbanksinfomation'>
                        <h1 className='h1_size'>03</h1>
                        <h1 className='bloodbanksstart_heading'>Blood Bank</h1>
                        <div className='wholebloodbank'>A blood bank collects, separates, tests and stores blood until a patient needs it. If you’ve donated blood before, you’ve been part of the blood banking process.</div>
                        <button className='readmoreinfirstblood'><Link  className ="link" to="/bloodbanks">Read more </Link></button>
                    </div>
                </div>
            </div>
            <DialFunction />
            <div className="slideshow">
              <div
                className="slideshowSlider"
                style={{
                  transform: `translate3d(${-index * 100}%, 0, 0)`,
                  transition: 'ease 1000ms',
                }}
              >
                {imageUrls.map((imageUrl, slideIndex) => (
                  <div
                    className="slide"
                    key={slideIndex}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  ></div>
                ))}
              </div>

              <div className="slideshowDots">
                {imageUrls.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`slideshowDot ${dotIndex === index ? 'active' : ''}`}
                    onClick={() => handleDotClick(dotIndex)}
                  ></div>
                ))}
                </div>
              </div>
              <h2 className='Heading_donars'> <Link to="/gallery" className='gallery_images'>View Our Gallery</Link></h2>
              <Image_Slider />
              <h2 className="Heading_donars">Our Donars</h2>

            <div className='lets_change'>
              <div className='let_change_world_box'>
                <h2 className='padding_bottom_call'> Let's change the world, Join us now!</h2>
                <div className='chageofworld' >"Join our movement to change the world for the better! Explore opportunities, take action, and be a part of a community making a meaningful impact together."</div>
              </div>
              <div className="contactus_home">
                <button className='readmoreinfirstblood changeofbluetext'> <Link  className = "link" to ="/contact" >Contact Us </Link></button>
              </div>
            </div>
            
              <Footerpage></Footerpage>
        </div>
    )
}
export default Homecreate;


