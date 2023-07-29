import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Bloodbanks.css";
import { getAllblood } from '../Redux/ProductReducer/Action';
import { Link } from "react-router-dom";
import Footerpage from '../Footer/Footer';
function Bloodbanks() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch()
    const bloodData = useSelector(state => state.blood.bloodData)
    console.log(bloodData)
    useEffect(() => {
        dispatch(getAllblood())
    }, [])
    return (
        <div>
            <div>
                <div>    
                <nav className='inputflex'>            
                        <div><Link  to ="/home" className="link"><img className = "drops" src = "/photos/drops.png" alt = "" /></Link></div>
                        <div className = "whyDonate"><Link to ="/why" className="link"> Why Donate Blood</Link></div>
                        <div className = "Aboutus"><Link to ="/about" className="link"> About Us </Link></div>
                        <div className = "DonateNow"><Link to ="/Bloodbanks" className="link"> Bloodbanks</Link> </div>
                        <div className = "ContactUs"><Link to ="/Contact" className="link"> Contact Us</Link></div>
                        <div className = "login"> <Link to ="/SignupPage" className="link"> Signup </Link></div>
                        <div className='inputmain'>
                        <input className = 'input' type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder='🔍 Search...' />
                        </div>
                </nav>
            </div>
                <div className='flex'>
                    <select className='select'>
                        <option>Find Blood Banks By Districts</option>
                        <option> Alluri Sitharama Raju  </option>
                        <option>Anakapalli </option>
                        <option>Chittoor </option>
                        <option>East Godavari</option>
                        <option>Eluru </option>
                        <option>Guntur </option>
                        <option>Kakinada </option>
                        <option>Konaseema</option>
                        <option>Krishna </option>
                        <option>Kurnool</option>
                        <option>Nandhyal</option>
                        <option>NTR</option>
                        <option>Palnadu </option>
                        <option>Parvathipuram Manyam </option>
                        <option>Prakasam</option>       
                        <option>Srikakulam </option>
                        <option>Sri Potti Sriramulu Nellor</option>
                        <option>Tirupati </option>
                        <option>Visakhapatnam </option>
                        <option>Vizianagaram</option>
                        <option>West Godavari</option>
                        <option>Kadapa </option>
                        <option> Y.S.R </option>
                </select>
                
            {
                bloodData?.filter((item) => 
                {
                    if (item.district.toLowerCase().includes(search.toLowerCase())) 
                    {
                        return item;
                    }
                })?.map(({ hospital_Or_BloodBankName, current_City, district, contact_No, state }) =>
                    <div className='bloodbox'>
                        <div className='time'>
                            <div className='Bloodbank'><b className='black'>Bloodbank : </b> {hospital_Or_BloodBankName}</div>
                            <div className='City'><b>City : </b> {current_City} </div>
                            <div className='District' ><b>District : </b> {district} </div>
                            <div className='Contact'><b> 📞: </b> {contact_No} </div>
                            <div className='state'><b>🏢 State : </b> {state},India </div>  
                            <button className='moreInformation' >
                            <Link to ="/read" className='colorwhite'>Read More Information </Link></button>
                        </div>
                    </div>
                )
            }
                <Footerpage></Footerpage>
        </div>
        </div>
        </div>
    )
}
export default Bloodbanks;
