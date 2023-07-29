import { FooterConstant, FooterFive, FooterFourth, FooterSecond, FooterThird } from "../Constant/Footerconst";
import "./Footer.css";
function Footerpage() {
    return (
        <div>
            <div className="Footerpage">
                <div className="footerpage">
                    <div className="box">
                        {
                            FooterConstant.divContent.map((item,i)=>(
                                <div key = {i} className="increaseBlood">{item}</div>
                            ))
                        }
                    </div>
                    <div className="Secondbox">
                        {
                            FooterSecond.divSecond.map((item,i) =>(
                                <div key  = {i} className="Process">{item}</div>
                            ))
                        }
                    </div>
                    <div className="thirdbox">
                        {
                            FooterThird.divThird.map((item,i) =>(
                                <div key = {i} className="register" >{item}</div>
                            ))
                        }
                    </div>
                    <div className="fourthbox">
                        {
                            FooterFourth.divFour.map ((item,i) => (
                                <div key = {i}  className="Email"> {item}</div>
                            ))
                        }     
                        <div className="display">
                            {
                                FooterFive.map ((item,i) => (
                                    <img key ={i} src={item.image} className="whatsapp"/>
                                ))
                            }
                        </div>
                    </div>
                </div>
             <div className="lastline">Terms & condition |privacy policy |www.Rakhthanidhi.com</div>
            </div>
        </div>
    )
}
export default Footerpage;
