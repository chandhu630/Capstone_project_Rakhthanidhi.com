import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllblood } from '../redux/productReducer/Action';
import Navbar from '../navBar/Nav';
import { useParams } from 'react-router-dom';
import './ReadMore.css'
import Footerpage from '../footer/Footer';

function ReadmoreInfo() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const bloodData = useSelector(state => state.blood.bloodData);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllblood());
    }, [dispatch]);

    const selectedBloodBank = bloodData.find((blood, index) => String(index) === id);

    return (
        <div>
           <div className='read_top'> <Navbar /></div>
            <div className='wholediv'>
                <img id="image" src="/photos/blooddonate.png" alt="img" />
            
              <div>
                    {selectedBloodBank && (
                        <div className='bloodbox_div'> <b className='hospital_details'>Hospital Deatails</b>
                            <div className='inside_table_box'>
                                <div className='Bloodbank'><b className='black'>Bloodbank : </b>{selectedBloodBank.hospital_or_blood_bank_name}</div>
                                <div className='City_color'><b>City : </b>{selectedBloodBank.current_city}</div>
                                <div className='District'><b>District : </b>{selectedBloodBank.district}</div>
                                <div className='Contact'><b>📞 : </b>{selectedBloodBank.contact_no}</div>
                                <div className='state'><b>🏢 State : </b>{selectedBloodBank.state}, India</div>
                            </div>
                        </div>
                    )}
                </div>
                
              </div>
            <div className="contact-left">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1093537634642!2d77.53039017562196!3d12.964853815025114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd8ade7d69f%3A0x2cd2c94cf96ba5e9!2sJTD%20Foundation!5e0!3m2!1sen!2sin!4v1699280110891!5m2!1sen!2sin"
                width ="900"
                height="350"
                className='google'
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Google Map"
                />
                <hr className='horigental'></hr>
             </div>
             <Footerpage />
        </div>
    );
}

export default ReadmoreInfo;
