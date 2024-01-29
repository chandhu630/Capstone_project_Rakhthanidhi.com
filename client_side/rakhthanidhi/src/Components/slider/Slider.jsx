
import { useEffect, useState } from 'react';
import './Slider.css';
import { Link } from 'react-router-dom';

const imageUrls = [
  '/photos/gruop.jpeg',
  '/photos/image6.jpeg',
  '/photos/image9.jpeg',
];

const delay = 3500;

const SliderPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearInterval(intervalId);
  }, [index]);

  const handleDotClick = (dotIndex) => {
    setIndex(dotIndex);
  };

  return (
    <div className="slideshow_page">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
          transition: 'ease 1000ms',
        }}
      >
        {imageUrls.map((imageUrl, slideIndex) => (
          <div
            className="slide_home"
            key={slideIndex}
            style={{
              backgroundImage: `url(${imageUrl})`,
              height: '100vh',
              width : "100vh",
              position: 'relative',
            }}
          >
            <div className="slideContent">
              <div className='Banner_text'>
              <h4 className='banner_text_first'>Donate to blood Contribute</h4>
                <h2 className='Your_blood'>Your Blood Can Bring Smile<br></br> In Any Once Person Face</h2>
                <button className="readmoreinfirstblood Explore_now"><Link to ="/why"className='link'>Explore Now</Link></button>
                <button className="readmoreinfirstblood contact_now_home"><Link to="/Contact" className='link'>Contact Now</Link></button>
                </div>
            </div>

          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {imageUrls.map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`slideshowDot ${dotIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(dotIndex)}
          > </div>
        ))}
      </div>
    </div>
  );
};

export default SliderPage;
