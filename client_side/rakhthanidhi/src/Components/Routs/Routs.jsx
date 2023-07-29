import React from 'react';
import { Route,Routes } from 'react-router';
import Homecreate from "../Home/Home";
import ContactCreate from '../Contact/Contact';
import Bloodbanks from "../Bloodbanks/Bloodbanks"
import About from '../About/About';
import ReadmoreInfo from '../ReadMore/ReadMore';
import Navbar from "../Navbar/Nav"
function Routing()
{ 
    return(
        <div>
        <Routes>
                <Route path = "/home" Component = {Homecreate}/>
                <Route path = "/Navbar" Component = {Navbar}/>
                {/* <Route path = "/why"  Component = {}/> */}
                <Route path = "/about"  Component = {About}/>
                <Route path = "/read" Component = {ReadmoreInfo} />
                {/* <Route path = "/read" Component={ReadMore}/> */}
                <Route path = "/Contact" Component = {ContactCreate}/>
                {/* <Route path = "/SignupPage" Component = {SignupPage}/> */}
                <Route path = "/Bloodbanks" Component = {Bloodbanks}/>
        </Routes>
        </div>
    )
}
export default Routing;