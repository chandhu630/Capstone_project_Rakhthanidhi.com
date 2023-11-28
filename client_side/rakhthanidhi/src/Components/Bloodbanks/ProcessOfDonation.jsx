import Navbar from "../Navbar/Nav";
import Footerage from "../Footer/Footer"
import "./ProcessOfDonation.css"
function ProcessOfBloodDonation()
{
    return(
        <div>
            <div className="nav_process"><Navbar/></div>
            <div className="ProcessOfDonation">
                
                <div className="Process_Display">
                    <div className="process_Introduction">
                        <h1 className="process_heading">What is the  blood donation process</h1>
                        The blood donation process typically involves several steps to ensure the safety of both the donor and the recipient. Here is a general overview of the blood donation process:
                    </div>
                    <div className="video">
                        <iframe
                            width="400"
                            height="250"
                            src="https://www.youtube.com/embed/4wF_6SfWmzk?autoplay=1&mute=1"
                            frameBorder="0"
                            allowFullScreen
                            title="YouTube Video"
                        ></iframe>
                    </div>
                </div>
                
                <div className="Process_Display_one">
                    <div className="ProcessPoint_one">
                        <h2 className="pHeading">1. Registration:</h2>
                        <ul><li>When you arrive at a blood donation center or mobile blood drive, you will be asked to provide identification and complete a brief questionnaire about your health history. This helps assess your eligibility to donate blood.</li></ul>
                        <h2 className="pHeading">2. Health Screening:</h2>
                        <ul><li>A healthcare professional will conduct a brief health screening, checking your vital signs such as blood pressure, pulse, and temperature. They will also review your completed questionnaire to ensure that it is safe for you to donate blood.</li></ul>
                        <h2 className="pHeading">3. Donor Consent:</h2>
                        <ul><li>You will be asked to review and sign a consent form, indicating that you understand the donation process and that you meet the eligibility criteria.</li></ul>
                    </div>
                    <div className="Process_Image">
                        <img className="Process_Image" src ="photos/imag2.jpeg" alt ="" />
                    </div>
                </div>

                <div className="Process_Display_side_one">
                    <div className="Process_Image_side">
                        <img className = "Process_Image_side" src ="photos/siri.jpeg" alt = "" />
                    </div>
                    <div className="ProcessPoint_side">
                        <h2 className="pHeading">4. Hemoglobin Test:</h2>
                        <ul><li>A small drop of blood may be taken from your fingertip to check your hemoglobin levels. This test helps ensure that you have enough iron in your blood for a safe donation.</li></ul>
                        <h2 className="pHeading">5. Blood Donation:</h2>
                        <ul><li>Once you are cleared to donate, you will be taken to a donation area. A sterile needle is inserted into a vein in your arm. The actual blood donation typically takes around 8-10 minutes. The amount of blood collected depends on the type of donation (whole blood, platelets, plasma, etc.).</li></ul>
                        <h2 className="pHeading">6. Rest and Refreshment:</h2>
                        <ul><li>After donating, you will be encouraged to rest for a short period and have a snack or drink to help replenish your energy.</li></ul>
                    </div>
                </div>

                <div className="Process_Display_two">
                    <div className="ProcessPoint_two">
                        <h2 className="pHeading">7. Observation:</h2>
                        <ul><li>You will be observed for a short time to ensure that you are feeling well and not experiencing any adverse reactions</li></ul>
                        <h2 className="pHeading">8. Post-Donation Care:</h2>
                        <ul><li>Donors are advised to avoid heavy lifting or vigorous exercise for the rest of the day. It's also recommended to stay well-hydrated and avoid alcohol.</li></ul>
                        <h2 className="pHeading">9. Donation Types:</h2>
                        <ul><li>There are different types of blood donations, including whole blood donation, platelet donation, plasma donation, and double red cell donation. The specific process may vary depending on the type of donation.</li></ul>                 
                    </div>
                    <div className="Process_Image_three">
                        <img className="Process_Image_three" src ="/photos/image9.jpeg" alt ="" />
                    </div>
                </div>

                <div className="Process_Display_side_two">
                    <div className="ProcessPoint_sidetwo">
                        <h2 className="pHeading">10. Record Keeping:</h2>
                        <ul><li>nformation about your donation, including blood type and any relevant health information, is recorded. This information is kept confidential and is used to ensure the safety of the blood supply.</li></ul>
                        <h2 className="pHeading">11. Follow-Up Communication:</h2>
                        <ul><li>Some blood donation organizations may follow up with donors to provide information about their blood and how it is used to help patients.</li></ul>
                        <p className="lastp_text">It's important to note that the eligibility criteria for blood donation vary by location and organization. Factors such as age, weight, health history, and recent travel may impact eligibility. 
                            If you have specific questions about the blood donation process or your eligibility to donate, it's recommended to contact your local blood donation center or organization.</p>
                    </div>
                </div>

                <Footerage />
                 
            </div>
        </div>
    )
}
export default ProcessOfBloodDonation;