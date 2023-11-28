import React from 'react';
import { Route,Routes } from 'react-router';
import Homecreate from "../Home/Home";
import ContactCreate from '../Contact/Contact';
import Bloodbanks from "../Bloodbanks/Bloodbanks"
import About from '../About/About';
import ReadMore from "../ReadMore/ReadMore"
import Navbar from "../Navbar/Nav"
import GalleryStore from '../Gallery/Gallery';
import WhyDonateBlood from '../WhyDonate/WhyDonate';
import ConnectDoctorspage from '../Connect/ConnectDoctors';
import Footerpage from '../Footer/Footer';
import VideoGallery from '../VideoGallary/VideoGallery';
import Nextpage from '../WhyDonate/Nextpage';
import IncreaseBloodpage from '../Bloodbanks/IncreaseBlood';
import ProcessOfBloodDonation from '../Bloodbanks/ProcessOfDonation';
import BenefitsOfDonation from '../Bloodbanks/Benefits';
import BloodGroupspage from "../Bloodbanks/BloodGroups"
import Loginpage from '../Login/Login';
import Signup from '../SignUp/SignUp';
import ForgotPage from '../Forgot/Forgot';
function Routing()
{ 
    return(
        <div>
        <Routes className ="textAlign">
                <Route path = "/home" Component = {Homecreate}/>
                <Route path = "/Navbar" Component = {Navbar}/>
                <Route path = "/footer" Component={Footerpage}/>
                <Route path = "/why" Component = {WhyDonateBlood} />
                <Route path = "/about"  Component = {About}/>
                <Route path="/read/:id" Component={ReadMore} />
                <Route path ="/next" Component={Nextpage}/>
                <Route path = "/Contact" Component = {ContactCreate}/>
                <Route path ="/connect" Component={ConnectDoctorspage}/>
                <Route path = "/SignupPage" Component = {Signup}/>
                <Route path = "/Bloodbanks" Component = {Bloodbanks}/>
                <Route path = "/gallery" Component = {GalleryStore} />
                <Route path = "/videos" Component={VideoGallery}/>
                <Route path = "/increase" Component={IncreaseBloodpage}/>
                <Route path = "/process" Component={ProcessOfBloodDonation}/>
                <Route path = "/benefits" Component={BenefitsOfDonation}/>
                <Route path = "/bloodGroup" Component={BloodGroupspage}/>
                <Route path = "/login" Component={Loginpage}/>
                <Route path = "/forgot" Component={ForgotPage}/>

        </Routes>
        </div>
    )
}
export default Routing;













