import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SectionThree() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    scientificInterest: []
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

  return (<>
     <h2>Preferences</h2>
     <form onSubmit={handleSubmit}>
       <input type="range" name='scientificInterests' onChange={handleChange} placeholder='Development Dep'></input>
       <input type="range" name='scientificInterests' onChange={handleChange} placeholder='Communication Dep'></input>
       <input type="range" name='scientificInterests' onChange={handleChange} placeholder='Robotics Dep '></input>

       <button type="submit">Next</button>
     </form>
    </>
  );
}


export default SectionThree;