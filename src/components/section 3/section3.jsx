import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../LandingPage/Pictures/logo2.png';
import './section3.css';

function SectionThree() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  }

  const [formData, setFormData] = useState({
    scientificInterest: []
  });

  const [isReady, setIsReady] = useState(false);
  // State to store values for each range input
  const [rangeValue1, setRangeValue1] = useState(1);
  const [rangeValue2, setRangeValue2] = useState(1);
  const [rangeValue3, setRangeValue3] = useState(1);
  const getRangeLabel = (value) => {
    if (value == 0) return "I don't want to";
    if (value == 1) return "not really";
    if (value == 2) return "I don't know";
    return "I really want to";
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    for(const field in formData) {
      if (!formData[field]) {
        return ({message: `mmissing required field ${field}`})
      }
    }

    const stringData = JSON.stringify(formData );
    localStorage.setItem('section3', stringData);
    console.log('section3' + (stringData));

    setIsReady(true);   
}
useEffect(() => {
  if (isReady) {
    navigate('/section4');
  }
}, [isReady]);

  return (
  <div className=' position-absolute custom-height w-100 d-flex'>
    <div className='widthColor1 d-none d-md-flex px-5 h-100 flex-column justify-content-center'>
        <img className='img-fluid w-50 mb-5 mx-auto ' src={logo} alt="cscc logo" />
        <h4 className='text-light text-center mt-5 mb-5'>Registration Form for joining cscc club 2024 / 2025</h4>
        <p style={{color: '#F6F5FC'}} className=' text-center '>are you ready to join us? fill the next form and start your new journey with us ! we are waiting for you !!</p>
        <button onClick={goBack} className='btn btn-outline-light fw-bold mx-auto my-2'>go back</button>
    </div>
    <div className="custom-width widthColor2  d-flex flex-column justify-content-center">
      <h2 className='mx-5 px-4 py-4 fw-bold text-dark'>Preferences</h2>
       <form onSubmit={handleSubmit} className='row g-3 needs-validation '>
        <div className=" col-md-12 row">
          <h6 className='col-4'>Development Dep :
          </h6>
          <div className="col-5">
            <input className='form-range' type="range" onChange={(event)=>{handleChange(event); setRangeValue1(event.target.value);}} min="0" max="3"></input>
          </div>
          <h6 className='col-3'>{getRangeLabel(rangeValue1)}</h6>
        </div>
        <div className=" col-md-12 row">
          <h6 className='col-4'>Communication Dep :

          </h6>
          <div className="col-5">
            <input className='form-range' type="range" onChange={(event)=>{handleChange(event); setRangeValue2(event.target.value);}} min="0" max="3"></input>
          </div>
          <h6 className='col-3'>{getRangeLabel(rangeValue2)}</h6>
        </div>
        <div className=" col-md-12 row">
          <h6 className='col-4'>Robotics Dep :
          </h6>
          <div className="col-5">
            <input className='form-range' type="range" onChange={(event)=>{handleChange(event); setRangeValue3(event.target.value);}} min="0" max="3"></input>
          </div>
          <h6 className='col-3'>{getRangeLabel(rangeValue3)}</h6>
        </div>
         <button type="submit" className='form-control my-4 py-2 btn btn-custom fw-bold fs-5'>Next</button>
         </form>
    </div>
    
    </div>
  );
}


export default SectionThree;