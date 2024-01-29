import "./FirstNav.css";
import { FooterFive } from "../constant/Footerconst";
function First_Nav()
{
    return(
        <div>
            <div className="nav_first_flex">
                <a className="Space_between_items_left" href="rel:9347449511">📞 | +91 9347449511</a>
                <a className="Space_between_items" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=example@email.com"><span> ✉ | Rakhthanidhi@help.com </span></a>
                <a className="Space_between_items" href="">
                    <img  className="locatiion_symbol" src="https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-header-icon02.png" />
                    |<span>India ,Andrapradesh </span></a>
                    <a href="" className="Space_between_items">Follow Now</a>
                <div className="display_top">
                        {FooterFive.map((item, i) => (
                            <a key={i} href={item.link} rel="noopener">
                                <img src={item.image} className="whatsapp_gap" alt={`Social icon ${i}`} />
                        
                            </a>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default First_Nav;