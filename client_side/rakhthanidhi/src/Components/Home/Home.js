import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Nav';
import Footerpage from "../Footer/Footer"
import { homeInsidetext,DivtextText } from '../Constant/Footerconst';
function Homecreate()
{
    return(
        <div>
         <Navbar></Navbar>
        <div className="body">
                <div className="Body">
                        <div className="insidetext">
                        {
                                homeInsidetext.map((item)=>(
                                <div key = {item} className="textquote">{item}</div>
                                ))
                        }
                        </div>
                </div>
        <div className="Explore">
        <div className="More">Explore More</div>
        </div>    
        </div>
        <div className="Side">
        <div className="Sideheading">
        <div className="Color">Why some times blood shortage Happens:</div>
                <div className="info">
                {
                        DivtextText.map((item) => (
                        <div key ={item}>{item}</div>   
                        ))      
                }      
                </div>
        </div>
        </div>
        <Footerpage></Footerpage>
        </div>
    )
}
export default Homecreate;






