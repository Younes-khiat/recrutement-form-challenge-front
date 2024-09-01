import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './components/LandingPage/landingOage'
import SectionOne from './components/section 1/section1';
import SectionTwo from './components/section 2/section2';
import SectionThree from './components/section 3/section3';
import SectionFor from './components/section 4/section4';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/section1" element={<SectionOne />} />
          <Route path='/section2' element={<SectionTwo />} />
          <Route path='/section3' element={<SectionThree />} />
          <Route path='/section4' element={<SectionFor />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  
}

export default App;
