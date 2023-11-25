import Footerpage from "../Footer/Footer";
import Navbar from "../Navbar/Nav";
import "./Benefits.css"
function BenefitsOfDonation()
{
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    return(
        <div>
            <Navbar/>
            <div className="BenefitsOFPage">
                <div className="BenefitsBloodDonation_flex">
                    <div className="beneIntroduction_start">
                            <h2>Benefits Of Blood Donation</h2>
                            Blood donation is a crucial and selfless act that can have several benefits for both the donors and the recipients. 
                            Here are some of the key benefits:
                    </div>
                        <div className="video">
                            <iframe
                            width="400"
                            height="250"
                            src="https://www.youtube.com/embed/Uop5DMni-RA?autoplay=1&mute=1"
                            frameBorder="0"
                            allowFullScreen
                            title="YouTube Video"
                            ></iframe>
                        </div>
                    </div>
                <div className="Benefits_Flex">
                    <div className="Benefits_points">
                            <h2>Saving Lives:</h2>
                            <ul><li> Perhaps the most significant benefit of blood donation is the potential to save lives.
                            Blood transfusions are essential for treating various medical conditions, including surgeries,
                            trauma, cancer treatment, and certain diseases.</li></ul>
                            <h2>Treating Medical Conditions:</h2>
                            <ul><li> Donated blood is used in the treatment of a wide range of medical conditions such as anemia, 
                            blood disorders, and certain types of cancer. Patients undergoing major surgeries or medical treatments
                            may also require blood transfusions.</li></ul>
                            <h2>Emergency Situations:</h2>
                            <ul><li>In emergencies, such as accidents, natural disasters, or sudden illnesses, a ready and available
                            blood supply is crucial. Donated blood can be quickly mobilized to respond to these situations and provide
                            the necessary support to those in need.</li></ul>
                    </div>
                    <div className="surgery_Point">
                        <img className="surgery_Point" src ="photos/surgery.png" alt = "" />
                    </div>
                </div>
                <div className="Benefits_Flex_one">
                    <div className="bene_image_image">
                        <img className="bene_image_image" src ="photos/image4.jpeg" alt = "" />
                    </div>
                    <div className="bene_points_side">
                        <h2>Cancer Treatment:</h2>
                        <ul><li> Many cancer patients require blood transfusions as a part of their treatment, particularly those undergoing chemotherapy. Donated blood helps replenish the blood cells that are affected by cancer treatments.</li><li>Improving Cardiovascular Health: Some studies suggest that regular blood donation may have cardiovascular benefits. Donating blood can help reduce the levels of iron in the body, and lower iron levels are associated with a lower risk of cardiovascular diseases.</li></ul>
                        <h2>Health Check-Up:</h2>
                        <ul><li> Before donating blood, donors typically undergo a basic health check-up, including blood pressure, hemoglobin levels, and other health indicators. This can provide donors with valuable information about their health.
                        Community Contribution: Blood donation is a way for individuals to contribute to the well-being of their community. It fosters a sense of social responsibility and community involvement.</li></ul>
                        <h2>Regeneration of Blood Cells</h2>
                        <ul><li>After donating blood, the body works to replenish the lost blood, stimulating the production of new blood cells. This process can have positive effects on the overall health of the donor.</li></ul>
                        <h2>Reducing the Risk of Certain Diseases: </h2>
                        <ul><li>Some studies suggest that regular blood donation may be associated with a reduced risk of certain diseases, such as liver and heart diseases, due to the controlled reduction of iron levels in the body.</li></ul>
                    </div>
                    
                </div>
                <div className="LastBenepoints">It's important to note that while blood donation has many benefits, individuals should meet specific health and eligibility criteria to donate blood. 
                    Always consult with healthcare professionals or blood donation centers for guidance on eligibility and donation frequency.</div>
            </div>
            <div className="uparrow" onClick={scrollToTop}>⤴</div>
        <Footerpage/>
        </div>
    )
}
export default BenefitsOfDonation;