import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SectionTwo() {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    university: '',
    fieldOfStudy: '',
    gradeLevel: '',
    languagesYouKnow: {},
  });

  const [isReady, setIsReady] = useState(false);

 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for(const field in formData) {
      if (!formData[field]) {
        return ({message: `mmissing required field ${field}`})
      }
    }
    
    const stringData = JSON.stringify(formData);
    localStorage.setItem('section2', stringData);
    console.log('section2' + (stringData));


  setIsReady(true);

  }
  useEffect(() => {
    if (isReady) {
      navigate('/section3');
    }
  }, [isReady]);
  
  return (
  <>
     <h2>Academic Info</h2>
     <form onSubmit={handleSubmit}>
       <input type="text" name='university' onChange={handleChange} placeholder='enter your university'></input>
       <input type="text" name='fieldOfStudy' onChange={handleChange} placeholder='enter your field of study'></input>

       <input type="radio" name='gradeLevel' onChange={handleChange} placeholder='L1 / ING first year'></input>
       <input type="radio" name='gradeLevel' onChange={handleChange} placeholder='L2 / ING second year'></input>
       <input type="radio" name='gradeLevel' onChange={handleChange} placeholder='L3 / ING third year'></input>
       <input type="radio" name='gradeLevel' onChange={handleChange} placeholder='M1 / ING fourth year'></input>
       <input type="radio" name='gradeLevel' onChange={handleChange} placeholder='M2 / ING fifth year'></input>

       <input type="radio" name='languagesyouKnow' onChange={handleChange} placeholder='enter your phone number'></input>
       <button type="submit">Next</button>
     </form>
     
    </>
  );
}


export default SectionTwo;