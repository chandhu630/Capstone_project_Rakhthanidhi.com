import './VideoGallery.css';
import React, { useState } from 'react';
function VideoGallery()
{
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
        const video = document.getElementById('myVideo');
    
        if (video.paused) {
          video.play();
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      };
    return(
        <div>
            <h2 className=' video_heading'>Blood Donation process video</h2>
            <div className="video_container">
            <video 
                id="myVideo"
                width ="1250px" 
                height="500px" 
                src ="/photos/bloodDonation.mp4" 
                controls>
            </video>
            {!isPlaying && (
            <div className="overlay_text_video">Watch Our Video</div>
            )}
            {!isPlaying && (
            <button onClick={togglePlay} className="video_btn">
                <img className="videobtn" src="/photos/btn.svg" alt ="txt" />
            </button>
            )}
        </div>
        </div>
    )
}
export default VideoGallery;