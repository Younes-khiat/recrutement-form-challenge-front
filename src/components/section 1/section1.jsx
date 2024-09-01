import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../LandingPage/Pictures/logo2.png';
import './section1.css';

function SectionOne() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [isReady, setIsReady] = useState(false);
  
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  }
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => { 
  e.preventDefault();
  for(const field in formData) {
    if (!formData[field]) {
      return ({message: `missing required field ${field}`})
    }
    
  };
  const stringData = JSON.stringify(formData);
  console.log('section1' + (stringData));
  localStorage.setItem('section1', stringData);
  setIsReady(true);
}
useEffect(() => {
  if (isReady) {
    navigate('/section2');
  }
}, [isReady]);

    return (
    <div className=' position-absolute h-100 w-100 d-flex'>
      <div style={{width:'40%', backgroundColor: '#202068'}} className='d-none d-md-flex px-5 h-100 d-flex flex-column justify-content-center'>
        <img className='img-fluid w-50 mb-5 mx-auto ' src={logo} alt="cscc logo" />
        <h4 className='text-light text-center mt-5 mb-5'>Registration Form for joining cscc club 2024 / 2025</h4>
        <p style={{color: '#F6F5FC'}} className=' text-center '>are you ready to join us? fill the next form and start your new journey with us ! we are waiting for you !!</p>
        <button onClick={goBack} className='btn btn-outline-light fw-bold mx-auto my-2'>go back</button>
      </div>
      <div style={{width:'60%', backgroundColor: '#f6f5fc',paddingLeft:'5%', paddingRight:'10%'}} className='h-100 d-flex flex-column justify-content-center '>
        <h2 className='mx-5 px-5 py-4 fw-bold text-dark'>Personel Info</h2>
          <form onSubmit={handleSubmit} className='row g-3 needs-validation px-5 mx-5'>
            <div className="col-md-6">
              <label htmlFor="firstName" className='form-label fw-semibold fs-5 pt-3'>First Name :</label>
              <input type="text" name='firstName' onChange={handleChange} className='p-2 form-control form-control-custom' placeholder='enter your first name' required></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className='form-label fw-semibold fs-5 pt-3'>Last Name :</label>
              <input type="text" name='lastName' onChange={handleChange} className='p-2 form-control form-control-custom' placeholder='enter your last name' required></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className='form-label fw-semibold fs-5 pt-3'>Email :</label>
              <input type="email" name='email' onChange={handleChange} className='p-2 form-control form-control-custom' placeholder='enter your email' required></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneNumber" className='form-label fw-semibold fs-5 pt-3'>Phone Number :</label>
              <input type="tel" name='phoneNumber' onChange={handleChange} className='p-2 form-control form-control-custom' placeholder='enter your phone number' required></input>
            </div>
            <button type="submit" className=' my-4 py-2 btn btn-outline-custom fw-bold fs-5'>Next</button>
            
          </form>
      </div>
    </div>
   );
  
  
  };

  
  


export default SectionOne;