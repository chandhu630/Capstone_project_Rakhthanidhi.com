import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Nav';
import Footerpage from "../Footer/Footer"
import { Link } from 'react-router-dom';
import { homeInsidetext,DivtextText } from '../Constant/Footerconst';
import { useState } from 'react';
function Homecreate()
{
        const [first,setFirst] = useState(false);
    return(
        <div>
         <Navbar></Navbar>
        <div className="body">
                <div className="Body">
                        <div className="insidetext">
                        {
                                homeInsidetext.map((item)=>(
                                <div key = {item} className = "textquote"><b><i>{item}</i></b></div>
                                ))
                        }
                        </div>
                </div>
        <div className="Explore">
        <div className="More"> <Link className="More" to="/why">Explore More</Link></div>
        </div>    
        </div>
        <div className='one_short'>
                {/* <div className='handshowdiv'>
                        <img className='handspic' src ="photos/handshow.png" alt ="chandhu" />
                        <div className='bloodtext'> Blood <i className='bluecolor'>Donation ?</i></div>
                </div>
                <div className='spider1'><img className='spider' src = "photos/spider.1png" alt = "chandhu" /></div>
                <div className='spider2'><img className='spider' src = "photos/spider2.png" alt = "chandhu" /></div>
                 */}

                        <div className='wewere'><b>WE ARE NOT DOCTORS OR SUPERHERO BUT WE CAN SAVE SOMEONE's LIFE </b></div> 
                        <div className='storing_flex'>
                                <div className='Donaring'><img className = "donaringimg" src = "photos/Donating.png" alt= "" /></div>
                                <div className='tenthousand'>10,000 CHIlDREN BORN IN INDIA EVERY YEAR WHO SUFFERED WITH <quotes className ="text_deco">THALASSEMIA </quotes>
                                <br></br><b className='blacktext'>BUT</b> <br></br>99% OF THEM  DEAD BEFORE TEENAGE BECAUSE OF<quotes className ="text_deco"> DIFICIENCY OF BLOOD</quotes></div>
                        </div>
                       
                        <div className='threeseconds'>
                                <div className='everythree'>IN EVERY 3 SECONDS SOME ONE NEEDS BLOOD</div> <div className='meansTop'>MEANS</div>
                                <div className='Torighttext'>SOME ONE NEEDS OF IN EVERY 3 SECONDS
                                <br></br>
                                 <i className='colorredtext'>YOU WILL RECOVER WITHIN 56 DAYS AFTER BLOOD DONATION</i></div>
                        </div>
                        <div className='display_twoimages'>
                                <div className='firstImage'><img src ="photos/savelife.png" alt ="chandhu" /> </div>
                                <div className='secondImage_heart'><img  className="giveblood" src ="photos/Giveblood.png" alt = "chandhu " /></div> 
                        </div>         
        </div>

        <div className="Side">
        <div className="Sideheading">
                <div className='bloodshortage'></div>
                {/* <div className="info">
                {
                        DivtextText.map((item) => (
                        <div key ={item}>{item}</div>   
                        ))      
                }      
                </div> */}
                <div className=' width'>
                <div className="Color">Why some times blood shortage Happens:</div>
                <div className='content'> <b>Emergencies and unexpected events:</b> 
                Blood shortages primarily arise due to limited eligible donors,
                low donation rates,and seasonal variations impacting supply.
                <span className = {`long-text ${ first ? "expand" : ""}`} > 
                Emergencies, natural disasters, and increased medical demands
                amplify shortages. Pandemics disrupt regular donation patterns, 
                reducing supply further. Advanced medical treatments, surgeries,
                and conditions like cancer necessitate higher blood supplies. 
                Enhanced public awareness and consistent donation campaigns are
                crucial to bridge the gap between demand and available blood units.
                </span>
              </div>
              <div className='readmore' onClick = {() => setFirst (pre => !pre)}>{first ? "Readless" : "Readmore"}</div>
              </div>
             
        </div>
        </div>
        <div className='handsImagediv'>
               <div className='hands'>
                <div className='redline'>
                <div className='text'> <b><i>" 🥰 We cannot give God in return of this precious life, but we can Thank Him by helping others through blood donation."🥰</i></b></div>
                <div className='singledrop'></div> <div className='singledrop'></div><div className='singledrop'></div>
               </div>
               </div>
        </div>
        <Footerpage></Footerpage>
        </div>
    )
}
export default Homecreate;






