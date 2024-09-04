import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SectionFor() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    relevantExperiences: '',
    whyJoin:''
  });

  const [isReady, setIsReady] = useState(false);

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
    const section1Data = JSON.parse(localStorage.getItem('section1')) || {};
    const section2Data = JSON.parse(localStorage.getItem('section2')) || {};
    const section3Data = JSON.parse(localStorage.getItem('section3')) || {};

    const stringData = JSON.stringify(formData);
    console.log('section4' + (stringData));

    const data = ({ ...section1Data, ...section2Data, ...section3Data, ...stringData });
    console.log
    setIsReady(true);    

    try {
       const response = await fetch(`https://recrutement-form-challenge-back.onrender.com/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      console.log('fdfd');
      if (response.ok) {
        // navigate('/LandingPage'); 
        console.log('ok');
      } else {
        console.error('rror:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }


   }
  useEffect(() => {
    if (isReady) {
      navigate('/');
    }
  }, [isReady, navigate]);
  return (<>
     <h2>Preferences</h2>
     <form onSubmit={handleSubmit}>
       <input type="text" name='relevantExperiences' onChange={handleChange} placeholder='Describe any relevant experience you have'></input>
       <input type="text" name='whyJoin' onChange={handleChange} placeholder='Explain why you want to join the scientific club'></input>

       <button type="submit">Next</button>
     </form>
    </>
  );
  
}

export default SectionFor;