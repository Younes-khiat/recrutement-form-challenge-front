import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import images from './images';
const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  const handleJoinUsClick = () => {
    navigate('/section1');
  };

  return (
    <div className='d-flex justify-content-center w-100'>
      <div className='w75'>
          <img src={images[currentSlide]} alt="Slide" />
      </div>
      <div className='w-25 d-flex justify-content-center'>
        <img src="https://drive.google.com/file/d/1B24TIhySAN7lLfZO21x2_5PInkakjiwo/view?usp=sharing" alt="cscc logo" />
          <h1 className='text-primary'>Hello there!</h1>
          <h5>We are happy to see you here</h5>
          <button onClick={handleJoinUsClick}>Join Us</button>
      </div>
    </div>
  );
};


export default LandingPage;