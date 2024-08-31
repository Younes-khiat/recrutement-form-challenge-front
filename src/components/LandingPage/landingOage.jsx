import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import images from './images';
import logo from './Pictures/logo2.png';

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
    <div className=' w-100 h-100 d-flex'>
      <div style={{width:'85%'}} className='h-100 position-absolute'>
          <img className='h-100 img-fluid w-100' src={images[currentSlide]} alt="Slide" />
      </div>
      <div className='position-absolute end-0 h-100 d-flex justify-content-center align-items-center flex-column  my-auto  mx-auto px-5' style={{background: 'linear-gradient(to right, transparent 0%, #202068 35%, #202068 100%)', width: '40%'}} >
          <img className='img-fluid w-50 p-3' src={logo} alt="cscc logo" />
          <h2 className='text-primary text-center pt-4 pb-1'>Hello there!</h2>
          <h5 style={{color: '#F6F5FC'}} className='text-center pt-1 pb-4 '>We are happy to see you here</h5>
          <button className='btn btn-outline-light fw-bold' onClick={handleJoinUsClick}>Join Us</button>
      </div>
    </div>
  );
};


export default LandingPage;