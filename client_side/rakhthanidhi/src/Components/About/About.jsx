import Footerpage from "../Footer/Footer";
import Navbar from "../Navbar/Nav";
import "./About.css";
function About()
{
    return(
        <div>
            <Navbar />
            <div className="entire_center">
                <img  className ="imagewidth" src ="/photos/donate.jpeg" alt = "madhu" />
            </div>

            <div className="Aboutusbox">
                    <div className="AboutUsHeading"><b className="orangeColor">About </b><b className="color_black">us</b></div>
                    <div className="introduction-theme"> <b> "Rakhthanidhi.com, we are committed to making a 
                    meaningful difference in the lives of individuals by promoting and facilitating blood donation."</b>
                    </div>
            </div>
            <div className="DisplayFlexOftwo">
                <div className="whoarewebox">
                    <div className="insidewho">
                        <img  className = "groupPic" src ="/photos/gruop.jpeg" alt ="who" />
                        <div className="whoheading"> who are we</div>
                        <div className="whoInformation">As a human being we should understand to save the lives .
                        follow the some guidelines, and appreciation messages to donors. inspiring continued engagement.</div>
                    </div>
                </div>

                <div className="whoarewebox">
                    <div className="insidewho"> 
                        <img className = "groupPic" src ="/photos/mission.png" alt ="mission" />
                        <div className="whoheading"> Mission</div>
                        <div className="whoInformation">By fulfilling these objectives, a blood 
                        donation website aims to save lives, support healthcare systems, and create 
                        a community of committed blood donors .</div>
                    </div>
                </div>
            </div>

            <div className="DisplayFlexOftwo">
                    <div className="whoarewebox">
                        <div className="insidewho">
                            <img  className = "groupPic" src ="/photos/goal.png" alt ="who" />
                            <div className="whoheading"> Goal</div>
                            <div className="whoInformation">As a blood donation website strives to make a tangible 
                            impact in saving lives, supporting healthcare systems, and fostering a culture of regular
                            blood donation.</div>
                        </div>
                    </div>
            </div>
            <hr className="horigental_Line"></hr>
            <div className="DisplayFlexFLEX">
               <div className="insideInfoOfFour">
               <div className="divcontainer"><img  className="fourpicsImage" src = "/photos/accident.png" alt ="accident" /></div>
               <div className="importinfo">1,50,000 Road Accidents death in india</div>
                </div>
            </div>

             <div className="DisplayFlexFLEX marign-left">
               <div className="insideInfoOfFour margin-left">
               <div className="divcontainer"><img  className="fourpicsImage" src = "/photos/child.png" alt ="accident" /></div>
               <div className="importinfo">1,38,000 Approximately pregnancy death india</div>
                </div>
            </div>

            <div className="DisplayFlexFLEX">
               <div className="insideInfoOfFour">
               <div className="divcontainer"><img  className="fourpicsImage" src = "/photos/Cancer.png" alt ="accident" /></div>
               <div className="importinfo">7,70,000 cancer people death in india</div>
                </div>
            </div>

            <div className="DisplayFlexFLEX marign-left">
               <div className="insideInfoOfFour">
               <div className="divcontainer"><img  className="fourpicsImage" src = "/photos/cancerpic.png" alt ="accident" /></div>
               <div className="importinfo">1,70,000 dead with anemia in india</div>
                </div>
            </div> 
            <hr className="horigental_Line -top"></hr>
            <div className ="About_Main"><b>Addressing Critical Health Challenges in India:</b> To contribute to reducing road accidents in India, consider advocating for road safety policies, 
                promoting awareness of safe driving practices, and supporting emergency services. Additionally,
                encourage regular blood donation to ensure a readily available supply for accident victims who may
                require transfusions. Engaging with your community through workshops and campaigns, promoting responsible
                alcohol consumption, and acquiring basic first aid skills are practical steps to enhance overall road safety.
                While blood donation directly aids accident victims, a holistic approach involving education, policy advocacy, 
                and community involvement is essential to address the complex issue of road accidents in the country.</div>

            <Footerpage />

        </div>
    )
}
export default About;