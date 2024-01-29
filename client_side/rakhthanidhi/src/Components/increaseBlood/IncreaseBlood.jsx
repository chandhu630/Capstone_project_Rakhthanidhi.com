import "./IncreaseBlood.css"
import Footerpage from "../footer/Footer";
import Navbar from "../navBar/Nav"
function IncreaseBloodpage()
{
    return(
        <div>
            <div className="navbarPagelink">< Navbar/></div> 
            <div className="IncreaseOfBloodDonation">
            <div className="IncreasebloodDonation_flex">
                <div className="Increase_Introduction">
                <h2 className="IncreaseHeading">How to increase bloodcells</h2>
                 If you're looking to increase your blood cell counts, particularly red blood cells,
                 white blood cells, and platelets, there are several lifestyle choices and dietary changes you can consider.
                 However, it's crucial to consult with a healthcare professional before making significant changes to your
                 diet or lifestyle. Here are some general tips:</div>
                 <div className="video">
                    <iframe
                        width="400"
                        height="250"
                        src="https://www.youtube.com/embed/4rSJYxUWj5M?autoplay=1&mute=1"
                        frameBorder="0"
                        allowFullScreen
                        title="YouTube Video"
                    ></iframe>
                    </div>
            </div>
            <div className="IncreasebloodDonation_flex_one" >
                <div className="Increase_Introduction_one" >
                    <h1 className="Increasecolor">1. Nutritious Diet:</h1>
                    <ul>
                        <li>Iron-Rich Foods: Iron is essential for red blood cell production. Include iron-rich foods such as lean meats, poultry, fish, beans, lentils, tofu, and fortified cereals in your diet.</li>
                        <li>Vitamin B12: This vitamin is crucial for the production of red blood cells. Sources include meat, fish, eggs, and dairy products.</li>
                        <li>Folate (Vitamin B9): Foods rich in folate, such as leafy green vegetables, beans, and fortified grains, support red blood cell production.</li>
                        <li>Vitamin C: Enhances the absorption of nonheme iron (found in plant-based foods). Citrus fruits, strawberries, and bell peppers are good sources.</li>
                    </ul>
                    <h1 className="Increasecolor">2.Adequate Hydration: </h1>
                    <ul>
                        <li>Staying well-hydrated is essential for overall health and can support the proper functioning of blood cells.</li>
                    </ul>
                </div>
                <div className="cina">
                    <img className="cina" src= "https://www.imu.edu.my/wp-content/uploads/2022/03/superfoods-1536x1204.jpg" alt = " " />
                </div>
            </div>
            <div className="IncreasebloodDonation_flex_two">
                <div className="Allpoints">
                    <h1 className="Increasecolor">3. Adequate Protein Intake</h1>
                    <ul><li>Protein is crucial for the production of both red and white blood cells. Include sources of lean protein in your diet, such as poultry, fish, beans, and tofu.</li> </ul>
                    <h1 className="Increasecolor">4. Regular Exercise:</h1>
                    <ul> <li> Regular physical activity can stimulate the production of red blood cells. However, excessive exercise may have the opposite effect, so it's essential to maintain a balanced approach.</li></ul>
                    <h1 className="Increasecolor"> 5. Adequate Sleep:</h1>
                    <ul><li>Quality sleep is crucial for overall health, including the production of blood cells. Aim for 7-9 hours of sleep per night.</li> </ul>
                </div>
                <div className="image_All">
                     <img className="image_All" src= "photos/excercise.jpeg" alt ="" />
                </div>
            </div>
            <div className="IncreasebloodDonation_flex_three">
                <div className="Allpoints_one">
                        <h1 className="Increasecolor">6. Manage Stress:</h1>
                        <ul> <li>Chronic stress can negatively impact blood cell production. Incorporate stress management techniques such as meditation, deep breathing exercises, or yoga.</li> </ul>
                        <h1 className="Increasecolor">7. Avoid Smoking and Excessive Alcohol:</h1>
                        <ul><li>Smoking and excessive alcohol consumption can have adverse effects on blood cell production. Quitting smoking and moderating alcohol intake can positively impact overall health.</li> </ul>
                        <h1 className="Increasecolor">8. Regular Health Check-Ups:</h1>
                        <ul><li>Regular check-ups with your healthcare provider can help identify any underlying health issues that may affect blood cell production.</li></ul>    
                </div>
                  <div className="image_All"><img className="image_All_one" src ="https://assets.thehansindia.com/hansindia-bucket/Avoiding_7185.jpg" alt ="" /></div>
            </div>
            <Footerpage /> 
        </div>   
                
        </div>
    )
}
export default IncreaseBloodpage;