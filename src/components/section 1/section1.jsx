import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SectionOne() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [isReady, setIsReady] = useState(false);
  
  const navigate = useNavigate();
  
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
    <>
      <h2>Personel Info</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='firstName' onChange={handleChange} placeholder='enter your first name'></input>
        <input type="text" name='lastName' onChange={handleChange} placeholder='enter your last name'></input>
        <input type="email" name='email' onChange={handleChange} placeholder='enter your email'></input>
        <input type="tel" name='phoneNumber' onChange={handleChange} placeholder='enter your phone number'></input>
        <button type="submit">Next</button>
      </form>
    </>
   );
  
  
  };

  
  


export default SectionOne;