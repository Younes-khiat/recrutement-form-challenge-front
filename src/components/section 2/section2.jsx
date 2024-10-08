import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../LandingPage/Pictures/logo2.png';
import './section2.css';

function SectionTwo() {
  
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  }

  const [formData, setFormData] = useState({
    university: '',
    fieldOfStudy: '',
    gradeLevel: '',
    languagesYouKnow: {
      C: 'expert',
      JAVA: 'expert',
      PYTHON: 'expert',
      JAVASCRIPT: 'expert',
      PHP: 'expert'
    },
  });

  const [isReady, setIsReady] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (['C', 'JAVA', 'PYTHON', 'JAVASCRIPT', 'PHP'].includes(name)) {
      setFormData({
        ...formData,
        languagesYouKnow: {
          ...formData.languagesYouKnow,
          [name]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
  <div className=' position-absolute custom-height w-100 d-flex'>
    <div className='widthColor1 d-none d-md-flex px-5 h-100 flex-column justify-content-center'>
        <img className='img-fluid w-50 mb-5 mx-auto ' src={logo} alt="cscc logo" />
        <h4 className='text-light text-center mt-5 mb-5'>Registration Form for joining cscc club 2024 / 2025</h4>
        <p style={{color: '#F6F5FC'}} className=' text-center '>are you ready to join us? fill the next form and start your new journey with us ! we are waiting for you !!</p>
        <button onClick={goBack} className='btn btn-outline-light fw-bold mx-auto my-2'>go back</button>
    </div>
    <div className='widthColor2 custom-width d-flex flex-column justify-content-center '>
      <h2 className='mx-5 px-4 py-4 fw-bold text-dark'>Academic Info</h2>
      <form onSubmit={handleSubmit} className='row g-3 needs-validation '>
        <div className="col-md-6">
          <label htmlFor='university' className='form-label fw-semibold fs-5 pt-3'>University:</label>
          <input type="text" name='university' onChange={handleChange} className='p-2 form-control form-control-custom' placeholder='enter your university' required></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="fieldOfStudy" className='form-label fw-semibold fs-5 pt-3'>Field Of Study:</label>
          <input type="text" name='fieldOfStudy' onChange={handleChange} className='p-2 form-control form-control-custom' placeholder='enter your field of study' required></input>
        </div>
        <div className="col-md-6">
        <label htmlFor="Grade Level" className='form-label fw-semibold fs-5 pt-3'>Grade Level:</label>
          <div className='form-control'>
            <div className="form-check mb-2">
              <input type="radio" name='gradeLevel' id='grade1' value='L1 / ING first year' onChange={handleChange} className='p-2 form-check-input' required />              
              <label className="form-check-label" htmlFor="grade1">L1 / ING first year</label>
            </div>
            <div className="form-check mb-2">
            <input type="radio" name='gradeLevel' id='grade2' value='L2 / ING second year' onChange={handleChange} className='p-2 form-check-input' required />              
            <label className="form-check-label" htmlFor="grade2">L2 / ING second year</label>
            </div>
            <div className="form-check mb-2">
            <input type="radio" name='gradeLevel' id='grade3' value='L3 / ING third year' onChange={handleChange} className='p-2 form-check-input' required />              
            <label className="form-check-label" htmlFor="grade3">L3 / ING third year</label>
            </div>
            <div className="form-check mb-2">
            <input type="radio" name='gradeLevel' id='grade4' value='M1 / ING forth year' onChange={handleChange} className='p-2 form-check-input' required />              
            <label className="form-check-label" htmlFor="grade4">M1 / ING fourth year</label>
            </div>
            <div className="form-check mb-2">
            <input type="radio" name='gradeLevel' id='grade5' value='M2 / ING fifth year' onChange={handleChange} className='p-2 form-check-input' required />              
            <label className="form-check-label" htmlFor="grade5">M2 / ING fifth year</label>
            </div>
          </div>
        </div>
      
        <div className="col-md-6">
          <label htmlFor="Languages" className='form-label fw-semibold fs-5 pt-3'>Languages You Know:</label>
          <div className="form-control" id='Languages'>
            <div className="row mb-1">
              <h6 className='col-5' >C</h6>
              <div className="col-7">
                <select className="form-select-sm" name="C" value={formData.C} onChange={handleChange}>
                  <option value="expert">expert</option>
                  <option value="amateur">amateur</option>
                  <option value="beginner">beginner</option>
                  <option value="not at all">not at all</option>
                </select>
              </div> 
            </div>
              
              <div className="row mb-2">
                <h6 className='col-7' >JAVA</h6>
                <div className="col-5">
                  <select className="form-select-sm" name="JAVA" value={formData.JAVA} onChange={handleChange}>
                    <option value="expert">expert</option>
                    <option value="amateur">amateur</option>
                    <option value="beginner">beginner</option>
                    <option value="not at all">not at all</option>
                  </select>
                </div>  
              </div> 
              <div className="row mb-2">
                <h6 className='col-5' >PYTHON</h6>
                <div className="col-7">
                  <select className="form-select-sm" name="PYTHON" value={formData.PYTHON} onChange={handleChange}>
                    <option value="expert">expert</option>
                    <option value="amateur">amateur</option>
                    <option value="beginner">beginner</option>
                    <option value="not at all">not at all</option>
                  </select>
                </div>  
              </div> 
              <div className="row mb-2">
                <h6 className='col-7' >JAVA SCRIPT</h6>
                <div className="col-5">
                  <select className="form-select-sm" name="JAVASCRIPT" value={formData.JAVASCRIPT} onChange={handleChange}>
                    <option value="expert">expert</option>
                    <option value="amateur">amateur</option>
                    <option value="beginner">beginner</option>
                    <option value="not at all">not at all</option>
                  </select>
                </div>  
              </div> 
              <div className="row mb-2">
                <h6 className='col-5' >PHP</h6>
                <div className="col-7">
                <select className="form-select-sm" name="PHP" value={formData.PHP} onChange={handleChange}>
                    <option value="expert">expert</option>
                    <option value="amateur">amateur</option>
                    <option value="beginner">beginner</option>
                    <option value="not at all">not at all</option>
                  </select>
                </div>  
              </div>  
            </div>
            
          </div>
          <button type="submit" className='form-control my-4 py-2 btn btn-custom fw-bold fs-5'>Next</button>
          </form>

    </div>
          
  </div>
  );
}


export default SectionTwo;