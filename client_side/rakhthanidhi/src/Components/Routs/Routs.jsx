import React from 'react';
import { Route,Routes } from "react-router";
import  "./Routs.css"
function Routing()
{
    return(
        <div>
            {/* <h2>chandrakala</h2> */}
            <Routes>
                <Route path ="/home" Component={Home}/>
                <Route path ="/why"  Component={WhyDonateBlood}/>
                <Route path ="/about"  Component={AboutUs}/>
                <Route path ="/Contact" Component={Contact}/>
                <Route path ="/SignupPage" Component={SignupPage}/>
                <Route path ="/Bloodbanks" Component={Bloodbanks}/>
            </Routes>
        </div>
    )
}
export default Routing;