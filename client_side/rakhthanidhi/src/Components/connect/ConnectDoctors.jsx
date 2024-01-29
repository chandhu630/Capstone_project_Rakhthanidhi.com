import "./ConnectDoctors.css"
import Footerpage from "../footer/Footer";
import Navbar from "../navBar/Nav";
function ConnectDoctorspage()
{
    return(
        <div> 
          <div className="connectNavabar"><Navbar/></div>
            <div className="connectPage">
              <h2 className="hemaheading">Top Hematologists In our surroundings</h2>
              <div className="connectDisplay">
                <div className="doctors_Store">
                  <div className="doctorsDiv_one doc_width"> <img  className="hydDoctor img_middle" src ="photos/tgana.png " alt ="telangana"/> 
                    <div className="Doctorsinfo">
                      <span><b>Dr.</b>Byreddy Poojitha</span>
                      <div>MBBS,MD,DM</div>
                      <a href="Tel: +91 - 4068106585"> 📞 +91 - 4068106585</a> 
                      <div><b>Experience: </b>+3 years</div>
                      <div><b>Languages : </b>English,telugu</div>
                      <div><b>Location:</b>CARE Hospitals,Banjarahills,Hyderabad</div>
                    </div>
                  </div>
                  <div className="doctorsDiv_two doc_width"> <img  className ="kaDoctor img_middle" src ="photos/karnataka.png" alt ="karnataka"/>
                    <div className="Doctorsinfo">
                      <span><b>Dr.</b>Mallikarjun Kalashetty</span>
                      <div>MBBS,MD,DM</div>
                      <a href="Tel: +91 - 8046684506"> 📞 +91 - 8046684506</a> 
                      <div><b>Experience: </b> +17 years</div>
                      <div><b>Languages : </b>English,kannada,Hindi</div>
                      <div><b>Location:</b>Manipal Hospitals,98,Benguluru</div>
                    </div>
                  </div>
                  <div className="doctorsDiv_three doc_width"> <img className ="apDoctor img_middle" src ="photos/ap.png" alt ="andhra"/> 
                    <div className="Doctorsinfo">
                    <span><b>Dr.</b>Lakshmi Mythili Mulam</span>
                      <div>MBBS,MD,DND</div>
                      <a href="Tel:18605001066"> 📞 18605001066</a> 
                      <div><b>Experience: </b> +5 years</div>
                      <div><b>Languages : </b>English,Telugu,Hindi</div>
                      <div><b>Location:</b> Apollo Hospital Health City arilova Vizag</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="middle_suggestion"><b className="primary_bold">Note : </b>If you have any inquiries about pre and post blood donation, consult the hematologists mentioned above.
                 Reach out through hospitals or online , presenting your questions and ensuring compliance with ethical guidelines.
                  Express gratitude for their expertise and seek necessary approvals.</div>

                  <Footerpage/>
            </div>
            
           
        </div>
    )
}
export default ConnectDoctorspage;