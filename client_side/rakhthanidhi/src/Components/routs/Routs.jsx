import React from 'react';
import { Route,Routes } from 'react-router';
import Homecreate from "../home/Home"
import Navbar from '../navBar/Nav';
import Footerpage from '../footer/Footer';
import WhyDonateBlood from "../whyDonate/WhyDonate";
import About from "../about/About";
import ReadMore from "../readMore/ReadMore"
import Nextpage from "../nextPage/Nextpage"
import ContactCreate from "../contact/Contact"
import ConnectDoctorspage from "../connect/ConnectDoctors"
import Signup from "../signUp/SignUp"
import Bloodbanks from "../bloodBanks/Bloodbanks"
import GalleryStore from "../gallery/Gallery"
import VideoGallery from "../videoGallary/VideoGallery"
import IncreaseBloodpage from "../increaseBlood/IncreaseBlood"
import ProcessOfBloodDonation from "../process/ProcessOfDonation"
import BenefitsOfDonation from "../benefits/Benefits"
import BloodGroupspage from "../bloodGroups/BloodGroups"
import DisplayComments from "../displayComments/DisplayComments"
import ForgotPage from "../forgot/Forgot"
import Loginpage from "../login/Login"


function Routing()
{ 
    return(
        <div>
        <Routes className ="textAlign">
                <Route path = "/home" Component = {Homecreate}/>
                <Route path = "/navbar" Component = {Navbar}/>
                <Route path = "/footer" Component={Footerpage}/>
                <Route path = "/why" Component = {WhyDonateBlood} />
                <Route path = "/about"  Component = {About}/>
                <Route path = "/read/:id" Component={ReadMore} />
                <Route path = "/next" Component={Nextpage}/>
                <Route path = "/Contact" Component = {ContactCreate}/>
                <Route path = "/connect" Component={ConnectDoctorspage}/>
                <Route path = "/signupPage" Component = {Signup}/>
                <Route path = "/bloodbanks" Component = {Bloodbanks}/>
                <Route path = "/gallery" Component = {GalleryStore} />
                <Route path = "/videos" Component={VideoGallery}/>
                <Route path = "/increase" Component={IncreaseBloodpage}/>
                <Route path = "/process" Component={ProcessOfBloodDonation}/>
                <Route path = "/benefits" Component={BenefitsOfDonation}/>
                <Route path = "/bloodGroup" Component={BloodGroupspage}/>
                <Route path = "/comments" Component={DisplayComments}/>
                <Route path = "/forgot" Component={ForgotPage}/>
                <Route path = "/login" Component={Loginpage}/>

        </Routes>
        </div>
    )
}
export default Routing;