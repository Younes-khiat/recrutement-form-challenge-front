import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import logo from '../LandingPage/Pictures/logo2.png';
import './section4.css';
// l3ib machi mlih

function SectionFor() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  }

  const [formData, setFormData] = useState({
    rrelevantExperiences: '',
    wwhyJoin: ''
  });

  const [isReady, setIsReady] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("aww "+ formData.rrelevantExperiences +" gg "+ formData.wwhyJoin);
    for(const field in formData) {
      if (!formData[field]) {
        console.log(field +" saha");
        return ({message: `mmissing required field ${field}`})
      }
    }
    console.log("wch kyn");
    const section1Data = JSON.parse(localStorage.getItem('section1')) || {};
    const section2Data = JSON.parse(localStorage.getItem('section2')) || {};
    const section3Data = JSON.parse(localStorage.getItem('section3')) || {};

    const relevantExperiences = (formData.rrelevantExperiences);
    const whyJoin = (formData.wwhyJoin);
    console.log('section4' );

    const data = ({ ...section1Data, ...section2Data, ...section3Data, relevantExperiences, whyJoin });
    console.log(JSON.stringify(data));
    setIsReady(true);    

    try {
       const response = await fetch(`https://recrutement-form-challenge-back.onrender.com/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
      });
      console.log(data);
      console.log('fdfd');
      if (response.ok) {
        console.log('ok');
      } else {
        console.error('rror:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }


   }
  useEffect(() => {
    if (isReady) {
      navigate('/thankYou');
    }
  }, [isReady, navigate]);
  return (
  <div className='position-absolute custom-height w-100 d-flex'>
    <div className='widthColor1 d-none d-md-flex px-5 h-100 flex-column justify-content-center'>
      <img className='img-fluid w-50 mb-5 mx-auto ' src={logo} alt="cscc logo" />
      <h4 className='text-light text-center mt-5 mb-5'>Registration Form for joining cscc club 2024 / 2025</h4>
        <p style={{color: '#F6F5FC'}} className=' text-center '>are you ready to join us? fill the next form and start your new journey with us ! we are waiting for you !!</p>
        <button onClick={goBack} className='btn btn-outline-light fw-bold mx-auto my-2'>go back</button>
    </div>
    <div className="custom-width widthColor2 d-flex flex-column justify-content-center vh-100 pb-5">
      <h2 className='mx-5 mb-2 mb-sm-3 px-4 pb-4 fw-bold text-dark'>Preferences:</h2>
      <form onSubmit={handleSubmit} className='row g-3 needs-validation mb-5 mb-sm-0'>
        <div className="col-md-6 mb-4">
          <label htmlFor="rrelevantExperiences:" className='form-label'>Relevant Experiences:</label>
          <div className="form-floating d-flex flex-column h-100">
            <textarea className='form-control h-100' id='rrelevantExperiences' type="text" name='rrelevantExperiences' onChange={handleChange} placeholder='Describe any relevant experience you have:' required></textarea>
            <label htmlFor="rrelevantExperiences">Share with us your Experiences</label>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <label htmlFor="wwhyJoin:" className='form-label'>Why Join:</label>
          <div className="form-floating d-flex flex-column h-100">
            <textarea className='form-control h-100' id='wwhyJoin' type="text" name='wwhyJoin' onChange={handleChange} placeholder='Explain why you want to join the scientific club:' required></textarea>
            <label htmlFor="wwhyJoin">Why joining us</label>
          </div>
        </div>

        <button type="submit" className='form-control pt-2 btn mt-4 btn-custom fw-bold fs-5'>Submit</button>
      </form>
    </div>
  </div>
  );
  
}

export default SectionFor;