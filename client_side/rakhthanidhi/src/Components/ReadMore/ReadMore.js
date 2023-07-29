import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllblood } from '../Redux/ProductReducer/Action';
import Navbar from '../Navbar/Nav';
            

// import { Link } from "react-router-dom";
function ReadmoreInfo() {
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
                <Navbar></Navbar>
               <div className='img'><img id="image" src = "/photos/blooddonate.png" alt ="img"/></div>
               <div>
                    <div className='BORDER'></div>
                    <div className='red'></div>
               </div>
            {
                bloodData?.filter((item) => {
                    if (item.district.toLowerCase().includes(search.toLowerCase())) {
                        return item;
                    }
                })?.map(({ hospital_Or_BloodBankName, current_City, district, contact_No, state }) =>
                    <div className='bloodbox'>
                        <div className='time'>
                            <div className='Bloodbank'><b className='black'>Bloodbank : </b> {hospital_Or_BloodBankName}</div>
                            <div className='City'><b>City : </b> {current_City} </div>
                            <div className='District'><b>District : </b> {district} </div>
                            <div className='Contact'><b>📞 : </b> {contact_No} </div>
                            <div className='state'><b>🏢 State : </b> {state},India </div>  
                        </div>
                    </div>
                )
            }
        </div>
        </div> 
    )
}
export default ReadmoreInfo;
