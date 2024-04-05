import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ep from '../assets/Ep.jsx'
import { Link } from 'react-router-dom';

const Nc2 = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-quad',
      delay: 0,
      duration: 1200
    });
  }, []);
  return (
    <div data-aos='fade-down' id="Committee" className='font-arial'>
      <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>NAAC Cycle 2</ul></h1>
      <div className="">

        <div data-aos='fade-down' className="container ">
          {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2> */}
          <div className="flex items-start mb-6">
            <div className="ml-5">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">We are NAAC accredited Institute.<p className='text-[14px]'> <p></p></p></h2>
            </div>
            <div className="items-end">
              <ul className="lg: py-6">
                <p className="text-[18px] lg:px-10 py-2 text-justify">
                </p>
                <h2 className="text-[16px] lg:px-10 py:5 "> 
                  <p className=""><a href="https://onedrive.live.com/download?resid=8D7E2F495E237F23%21121&authkey=!AJt6aKyt2mAsUWA&em=2" className="py-4 font-semibold text-blue-800">NAAC SSR 2024</a></p>
                  <ul className="">
                    <li className="text-[14px] lg:px-5 py-4 font-semibold text-blue-800"><Link to="/ep">Extended Profile</Link>
                    </li>
                    <p className="text-[16px] font-bold py-1">Quality Indicator Frameworks</p>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/ca">Criteria 1 - Curricular Aspects</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/tle">Criteria 2 - Teaching-learning and Evaluation</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/rie">Criteria 3 - Research, Innovations and Extension</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/ilr">Criteria 4 - Infrastructure and Learning Resources</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/ssp">Criteria 5 - Student Support and Progression</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/glm">Criteria 6 - Governance, Leadership and Management</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/ivbp">Criteria 7 - Institutional Values and Best Practices</Link>
                    </li>


                  </ul>
                </h2>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Nc2;