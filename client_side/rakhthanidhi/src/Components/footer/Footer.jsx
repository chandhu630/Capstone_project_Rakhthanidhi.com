import { FooterConstant, FooterFive, FooterFourth, FooterSecond, FooterThird } from "../constant/Footerconst";
import "./Footer.css";
import { Link } from 'react-router-dom';
import React from "react";

function Footerpage() {
    return (
        <div className="Footerpage">
            <div className="footerpage">
                <div className="box">
                    {FooterConstant.map((item, i) => (
                        <div key={i} className="increaseBlood">
                            {item.to ? (
                                <Link className = "linkname" to  = {item.to} >{item.name}</Link>
                            ) : (

                            item.name
                            )}</div>
                    ))}
                </div>
                <div className="Secondbox">
                    {FooterSecond.map((item, i) => (
                        <div key={i} className="Process">
                            {item.to ? (
                                <Link  className = "linkname" to={item.to}>{item.name}</Link>
                            ) : (
                                item.name
                            )}
                        </div>
                    ))}
                </div>

                <div className="thirdbox">
                    {FooterThird.divThird.map((item, i) => (
                        <div key={i} className="register_footer">{item}</div>
                    ))}
                </div>
                <div className="fourthbox">
                    {FooterFourth.divFour.map((item, i) => (
                        <div key={i} className="Email">{item}</div>
                    ))}
                    <div className="display">
                        {FooterFive.map((item, i) => (
                            <a key={i} href={item.link} rel="noopener">
                                <img src={item.image} className="whatsapp" alt={`Social icon ${i}`} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="horigentalLine"></hr>
            <div className="lastline">
                Terms & condition | Privacy policy | www.Rakhthanidhi.com
            </div>
        </div>
    );
}

export default Footerpage;
