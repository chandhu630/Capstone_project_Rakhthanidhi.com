
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Bloodbanks.css";
import { getAllblood } from '../redux/productReducer/Action';
import { Link } from "react-router-dom";
import Navbar from '../navBar/Nav';
import Footerpage from '../footer/Footer';

function Bloodbanks() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const bloodData = useSelector(state => state.blood.bloodData);
    const [currentPage, setCurrentPage] = useState(1);
    const bloodsPerPage = 10;

    useEffect(() => {
        dispatch(getAllblood());
    }, [dispatch]);

    const indexOfLastBlood = currentPage * bloodsPerPage;
    const indexOfFirstBlood = indexOfLastBlood - bloodsPerPage;
    const currentBloods = bloodData
        ?.filter((item) => item.district.toLowerCase().includes(search.toLowerCase()))
        ?.slice(indexOfFirstBlood, indexOfLastBlood);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(bloodData?.length / bloodsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div>
            
           <div className='divnav'> <Navbar  className='navbar'/></div>
        
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='inputmain'>
                        <span>Search for your district bloodbanks here</span><input className='input' type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder='🔍 Search...' />
                    </div>
            {currentBloods?.map(({ hospital_or_blood_bank_name, current_city, district, contact_no, state }, index) => (
                <div className='bloodbox' key={index}>
                    <div className='time'>
                        <div className='Bloodbank'><b className='black'>Bloodbank : </b> <b className='Hospital_Name'> {hospital_or_blood_bank_name}</b></div>
                        <div className='City'><b>City : </b> {current_city} </div>
                        <div className='District' ><b>District : </b> {district} </div>
                        <div className='Contact'><b> 📞: </b> {contact_no} </div>
                        <div className='state'><b>🏢 State : </b> {state}, India </div>
                        <Link to={`/read/${index}`}>
                            <button className='moreInformation'>Read More Information</button>
                        </Link>

                    </div>
                </div>
            ))}
            <hr className='horigental'></hr> 
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                {pageNumbers.map((number) => (
                    <button key={number} onClick={() => handlePageClick(number)}>
                        {number}
                    </button>
                ))}

               <button onClick={handleNextPage} disabled={currentPage === pageNumbers.length}>
                    Next
                </button>
            </div>

            <div></div>
            <hr className='horigental'></hr> 
           
            <div className="contact-left">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1093537634642!2d77.53039017562196!3d12.964853815025114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd8ade7d69f%3A0x2cd2c94cf96ba5e9!2sJTD%20Foundation!5e0!3m2!1sen!2sin!4v1699280110891!5m2!1sen!2sin"
                width ="1250"
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
            <Footerpage/>
        </div>
    );
}

export default Bloodbanks;
