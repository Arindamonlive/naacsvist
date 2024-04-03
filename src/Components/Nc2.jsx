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
                <h2 className="text-[16px] lg:px-10 py:5 ">Swami Vivekananda Institute of Science and Technology (SVIST) is one of the leading engineering colleges in West Bengal. It is now a NAAC Accredited institution. This feat has been achieved due to the initiatives taken to ensure the best quality of education through advanced curriculum, infrastructure, learning evaluation, governance, management, innovations and industry best practices. SVIST is a futuristic engineering institute, and is committed to maintain NAAC quality parameters for continuously improving and contributing towards augmenting the dimensions of technological higher learning. <p className="font-bold py-5">Below is the index of NAAC Cycle 2.</p>
                  <ul className="">
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/ep">Extended Profile</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/ca">Curricular Aspects</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/tle">Teaching-learning and Evaluation</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/rie">Research, Innovations and Extension</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/ilr">Infrastructure and Learning Resources</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/ssp">Student Support and Progression</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/glm">Governance, Leadership and Management</Link>
                    </li>
                    <li className="text-[14px] lg:px-5 py-1 font-semibold text-blue-800"><Link to="/ivbp">Institutional Values and Best Practices</Link>
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