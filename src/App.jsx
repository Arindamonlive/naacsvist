// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Nc1 from './Components/Nc1';
import Nc2 from './Components/Nc2';
import Iqac from './Components/Iqac';
import Ep from './Components/Ep';
import Ca from './Components/Ca';
import Ilr from './Components/Ilr';
import Tle from './Components/Tle';
import Rie from  './Components/Rie';
import Ssp from './Components/Ssp';
import Glm from  './Components/Glm';
import Ivbp from './Components/Ivbp';
import '../src/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading with a delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Change the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="spinner-container">
          
        </div>
      ) : (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Iqac />} />
            <Route path="/nc1" element={<Nc1 />} />
            <Route path="/nc2" element={<Nc2 />} />
            <Route path="/ep" element={<Ep />} />
            <Route path="/ca" element={<Ca />} />
            <Route path="/tle" element={<Tle />} />
            <Route path="/rie" element={<Rie />} />
            <Route path="/ilr" element={<Ilr />} />
            <Route path="/ssp" element={<Ssp />} />
            <Route path="/glm" element={<Glm />} />
            <Route path="/ivbp" element={<Ivbp />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
