import './VideoGallery.css';
import React from 'react';
function VideoGallery()
{
    return(
        <div>
            <div className='centerAlign'>
                <h2 className=' video_heading'>Blood Donation process video</h2>
            <video className = "video_GALLERY" width ="700" height = "500" controls>
                 <source  src ="/photos/bloodDonation.mp4" type ="video/mp4" />
             </video>
            </div>
        </div>
    )
}
export default VideoGallery;