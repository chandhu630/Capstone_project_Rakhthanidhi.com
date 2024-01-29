import Footerpage from "../footer/Footer";
import Navbar from "../navBar/Nav";
import "./About.css";
import DialFunction from "../dial/Dial";
import Image_Slider from "../donars/Eperience";
function About()
{
    return(
        <div>
            <Navbar />
            <div className="entire_center_about">
                <div className="About_us_middle">
                    <div className="About_heading">About <span className="About_us_us">us</span></div>
                    <div className="introduction_rakhthanidhi"> "Rakhthanidhi.com, we are committed to making a 
                    meaningful difference in the lives of individuals by promoting and facilitating blood donation."</div>
                </div>
            </div>
        <div className="threepics_body">
            <div className="container_pic">
                <div className="class_card">
                    <div className="imgbox">
                        <img className ="image_group_about" src="/photos/whowe.png"  alt =""/>
                        <div className="headingof_about">who we are</div>
                    </div>
                    <div className="content_ofgoal">
                        <div className="headingof_about_info">As a human being we should understand to save the lives .
                        follow the some guidelines, and appreciation messages to donors. inspiring continued engagement.</div>
                    </div>
                </div>
                <div className="class_card">
                    <div className="imgbox">
                        <img className ="image_group_about" src="/photos/mission.png" alt =""/>
                        <div  className="headingof_about">Mission</div>
                    </div>
                    <div className="content_ofgoal">
                        <div className="headingof_about_info">By fulfilling these objectives, a blood 
                        donation website aims to save lives, support healthcare systems, and create 
                        a community of committed blood donors .</div>
                    </div>
                </div>
                <div className="class_card">
                    <div className="imgbox">
                        <img className ="image_group_about" src="photos/goal.png" alt ="" />
                        <div className="headingof_about">Goal</div>
                    </div>
                    <div className="content_ofgoal">
                        <div className="headingof_about_info">As a blood donation website strives to make a tangible 
                            impact in saving lives, supporting healthcare systems, and fostering a culture of regular
                            blood donation.
                          </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="core_values_flex">
        <div className="core_values">
            <div className="values_info_box">
                <h1 className="letter_Spacing_heading">Innovation</h1>
                <div className="letter_belowtext">For us, this means creating opportunities and creative solutions: we will continue to identify and explore unchartered opportunities for growth and sustainability, mitigate risks, and provide the best social services that we can.</div>
                <h1 className="letter_Spacing_heading">Respect</h1>
                <div className="letter_belowtext">We will serve with respect, honouring the people we serve, our communities, partners and one another. We will highly value the relationships we build with our communities, partners, stakeholders and each other.</div>
                <h1 className="letter_Spacing_heading">Integrity</h1>
                <div className="letter_belowtext">We will be consistent, honest, accountable and transparent in what we say and do. We will safeguard the integrity and dignity of those we serve.</div>
                <h1 className="letter_Spacing_heading">Service to Humanity</h1>
                <div className="letter_belowtext">Embodying responsibility, accountability and commitment – we will faithfully execute the duties and responsibilities entrusted to us and maintain the highest ethical standards.</div>
            </div>
            <div className="letters_box">
                <div className="our_core_values"><img className ="ourcore" src= "photos/our_core.png" alt ="" /></div>
            </div>
        </div>
        </div>
        <div className="About_body">
        <div className="flow_Container">
            <div className="card_of_dealth">
                <img className ="img_card_death"src ="/photos/accident.png" alt ="" />
                <div className="card_intro_death">
                <h1 className="heading">Road Accidents</h1>
                <div className="death_info">In<span>2022,</span>there were 461,000 road accidents across India. That is slightly more than the number in 2019—the last 'normal' year before the Covid pandemic—when India saw around 456,000 road crashes. </div>
                </div>
            </div>
            <div className="card_of_dealth">
                <img className ="img_card_death"src ="/photos/child.png" alt ="" />
                <div className="card_intro_death">
                <h1 className="heading">Maternal mortality</h1>
                <div className="death_info">Regular<span>blood</span>donations can help address the approximately 1,38,000 pregnancy-related deaths in India, specifically contributing to saving lives during emergencies for expectant mothers. </div>
                </div>
            </div>
            <div className="card_of_dealth">
                <img className ="img_card_death "src ="/photos/cancerpic.png" alt ="" />
                <div className="card_intro_death static_info" >
                <h1 className="heading">Anemia,cancer patients</h1>
                <div className="death_info ">In<span>India,</span>about 1,70,000 anemia-related deaths and 14,61,427 cancer patients underscore the need for heightened awareness, improved healthcare, and sustained blood donations to support affected individuals.</div>
                </div>
            </div>
        </div>
        </div>
        <div className="DialFunction">
            <DialFunction />
        </div>
        <h2 className="Heading_donars">Our Donars</h2>
        <Image_Slider />
        <Footerpage />

         </div>
    )
}
export default About;