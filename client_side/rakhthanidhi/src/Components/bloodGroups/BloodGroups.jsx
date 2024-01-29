import "./BloodGroups.css";
import Navbar from '../navBar/Nav';
import Footerpage from "../footer/Footer"
import { useState } from "react";


function BloodGroupspage()
{
    const [showHistory,setShowHistory] = useState(false);
        const handleclick = () =>
        {
            setShowHistory(!showHistory);
        }
    return(
        <div>
        <div className="BloodNavbar"><Navbar /></div> 
           <div className="BloodGpage">
                    <div className="BloodGroup_Flex">
                            <div className="BloodGroup_Introduction">
                            <h2>Blood Groups</h2>
                            The term “blood group” refers to the entire blood group system comprising red blood
                            cell (RBC) antigens whose specificity is controlled by a series of genes which can be
                            allelic or linked very closely on the same chromosome. “Blood type” refers to a specific 
                            pattern of reaction to testing antisera within a given system. Over a period of time, our
                            understanding on blood groups has evolved to encompass not only transfusion-related problems
                            but also specific disease association with RBC surface antigens.
                            </div>
                            <div className="video_blood">
                                <iframe
                                    width="400"
                                    height="250"
                                    src="https://www.youtube.com/embed/3oUvqNuWzPg?autoplay=1&mute=1"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="YouTube Video"
                                ></iframe>
                            </div>
                        </div>

                        <div className="bloodGrops_Second_Flex">
                            <div className="BloodGroups_points">
                            <h2> What are blood types?</h2> 
                            A blood type is a classification system that allows healthcare providers to determine whether your blood is compatible or incompatible with someone else’s blood. 
                            There are four main blood types: 
                            A, B, AB and O. Blood bank specialists determine your blood type based on whether you have antigen A or B on your red blood cells. 
                            They also look for a protein called the Rh factor. They classify your blood type as positive (+)
                            if you have this protein and negative (-) if you don’t.
                            <h3>This makes for eight common blood types:</h3>
                            <ul className="color_list">
                                <li>A positive (A+).</li>
                                <li>A negative (A-).</li>
                                <li>B positive (B+).</li>
                                <li>B negative (B-).</li>
                                <li>AB positive (AB+).</li>
                                <li>AB negative (AB-).</li>
                                <li>O positive (O+).</li>
                                <li>O negative (O-).</li>
                            </ul>
                            </div>
                            <div className="BloodGroupspic"><img className="BloodGroupspic" src= "photos/bloodGroups.png" alt ="" /></div>
                        </div>
                        <div className="display_flex_ofTable">
                            <div className="bloodtypes"><img className="bloodtypes" src = "https://thewrightinitiative.com/800/600/http/i.pinimg.com/736x/59/d2/1b/59d21be4122baabf06e38cdd423a7e16--blood-types-conversation.jpg" alt = "" /></div>
                            <div className="spacetable"></div>
                        </div>
                        <div className="bloodgroupbelow_Flex">
                            <div className="below_Imagebloogroup"><img className="below_Imagebloogroup" src = "photos/Bloodtypes.png" alt = "" /></div>
                            <div className="belowblood_Group">
                                <h2>Which blood types are compatible?</h2>
                                An important part of blood donation is ensuring that someone receiving blood (recipient) has a compatible blood type with someone donating blood (donor). If you receive blood from a donor whose blood cells contain antigens
                                your body doesn’t recognize, your immune system may attack the donated red blood cells. The results could be life-threatening.<br></br>
                                Your blood type allows providers to determine which blood types are safe for you to receive. It helps them know which recipients can safely receive blood that you donate.
                                <ul className="custom-list">
                                    <li>A positive: you can receive blood that’s A positive, A negative, O positive or O negative.</li>
                                    <li>A negative: you can receive blood that’s A negative or O negative.</li>
                                    <li>B positive: you can receive blood that’s B positive, B negative, O positive or O negative.</li>
                                    <li>B negative: you can receive blood that’s B negative or O negative.</li>
                                    <li>AB positive: you can receive any blood type.</li>
                                    <li>AB negative: you can receive blood that’s AB negative, A negative, B negative or O negative.</li>
                                    <li>O positive: you can receive blood that’s O positive or O negative.</li>
                                    <li>O negative: you can only receive blood that’s O negative.</li>
                                </ul>

                            </div>
                        </div>
                        <button className="hidden_history readmoreinfirstblood" onClick={handleclick}>History</button>
                        {showHistory && (
                        <div>
                        <div className="HistoryAboutBlood_flex">
                            <div className="history_blood">
                                <h2>History of Blood Transfusion</h2>
                                <h2>Early Attempts (17th to 19th Century):</h2>
                                <div className="border_of_list"></div>
                                <ul className="custom_Line">
                                    <li>1665 -<b className="name_color">Dr. Richard Lower</b> successfully transfused blood from one <b className="name_color">dog to another</b>!</li>
                                    <li>1667 - Jean Denys, physican to Louis XIV of France transfused blood of a <b className="name_color">lamb into a human.</b></li>
                                    <li>1818 - The first <b className="name_color">human to human</b> blood transfusion took place in London.</li>
                                </ul>
                            </div>
                            <div className="history_bulb" ><img  className="history_bulb" src= "photos/bulb.png" alt = "" /></div>
                        </div>
                        <div className="HistoryAboutBlood_flex_one">
                            <div className="history_blood_one">
                                <h2>Discovery of Blood Types (Early 20th Century):</h2>
                                <ul className="custom-list">
                                        <li>The early 20th century saw significant progress in understanding blood compatibility. In 1901, Karl Landsteiner, an Austrian immunologist, discovered the ABO blood group system, which laid the foundation for safe blood transfusions. This breakthrough explained why some transfusions were successful while others were not.</li>
                                        <h2>Introduction of Blood Banks (1930s):</h2>
                                        <li>The establishment of blood banks revolutionized the field of blood transfusion. Dr. Bernard Fantus is credited with opening the first blood bank at Cook County Hospital in Chicago in 1936. This innovation allowed for the collection, storage, and distribution of blood, making transfusions more accessible and safer.</li>
                                        <h2>HIV/AIDS Crisis (1980s): </h2>
                                        <li>The discovery of the human immunodeficiency virus (HIV) in the 1980s had a profound impact on blood transfusion practices. The crisis prompted the implementation of rigorous screening processes and testing for infectious diseases to ensure the safety of donated blood.</li>
                                        <h2>Continuous Advancements (21st Century): </h2>
                                        <li>Ongoing research and technological advancements continue to improve blood transfusion practices. From the development of better storage methods to the exploration of alternatives like synthetic blood, the field is dynamic and focused on enhancing patient safety and outcomes.</li>
                                </ul>
                            </div>
                            <div  className="history_bulb_space"><img className="history_bulb_space" src= " photos/bloodpacks.png" alt = "" /></div>
                        </div>
                        </div>
                        )}      
             </div>
           <Footerpage />
        </div>
    )
}
export default BloodGroupspage;



