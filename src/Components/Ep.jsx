import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Ep = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-quad',
      delay: 0,
      duration: 1200
    });
  }, []);
  return (
    <div data-aos='fade-down' id="Committee" className='font-arial'>
      <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[40px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>NAAC Cycle 2(Extended Profile)</ul></h1>
      <div data-aos='fade-down' className="container flex items-start ">
        <div className=" grid grid-cols-3 gap-1 ">
          <div className="px-8">
            <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">1. Students</h2>
            <p className="text-[15px] fontt-semibold"> 1.1 Number of students year wise during the last five years</p>
            <div className="px-4 py-4">
              <a href="https://svist.org/naacnew/11SupportingDocuments-1.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">Approved Program List & Intake Capacity</a>
              <p className=""><a href="https://svist.org/naacnew/11SupportingDocuments-2.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">Approval Letter of affiliating University MAKAUT</a></p>
              <table className="text-center">
                <thead className="">
                  <tr className="">
                    <th className="px-4 py-2">Academic Year</th>
                    <th className="px-4 py-2">Intake</th>
                    <th className="px-4 py-2">Document</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="px-4 py-2">2018-19</td>
                    <td className="px-4 py-2">1110</td>
                    <td className="px-4 py-2 text-blue-800"><a href="https://svist.org/naacnew/11SupportingDocuments-3.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold">Click Here</a></td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">1044</td>
                    <td className="px-4 py-2 text-blue-800"><a href="https://svist.org/naacnew/11SupportingDocuments-4.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold">Click Here</a></td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">1365</td>
                    <td className="px-4 py-2 text-blue-800"><a href="https://svist.org/naacnew/11SupportingDocuments-5.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold">Click Here</a></td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">1347</td>
                    <td className="px-4 py-2 text-blue-800"><a href="https://svist.org/naacnew/11SupportingDocuments-6.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold">Click Here</a></td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">1406</td>
                    <td className="px-4 py-2 text-blue-800"><a href="https://svist.org/naacnew/11SupportingDocuments-7.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold">Click Here</a></td>
                  </tr>
                </tbody>
              </table>
              <p className="py-4 text-blue-800"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/dynamic_1708423736_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold">Institutional data in prescribed format</a></p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">2. Teachers</h2>
            <p className="text-[15px] fontt-semibold"> 2.1 Number of teaching staff / full time teachers during the last five years (Without repeat count):</p>
            <p className="font-semibold py-4">Response: 186</p>
            <p className="text-blue-800"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/dynamic_1708341276_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold">Supporting Document</a></p>
            <p className="text-blue-800"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/dynamic_1708510605_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold">Institutional Data</a></p>
            <p className="text-[15px] fontt-semibold py-4"> 2.2 Number of teaching staff / full time teachers year wise during the last five years</p>
            <table className="text-center">
                <thead className="">
                  <tr className="">
                    <th className="px-4 py-2">Academic Year</th>
                    <th className="px-4 py-2">Total Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="px-4 py-2">2018-19</td>
                    <td className="px-4 py-2">103</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">109</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">106</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">100</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">94</td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div className="">
            <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">3. Institution</h2>
            <p className="text-[15px] fontt-semibold"> 3.1 Expenditure excluding salary component year wise during the last five years (INR in lakhs)</p>
            <p className="py-4 text-blue-800"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/dynamic_1708172191_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold">Supporting Document</a></p>

            <table className="text-center">
                <thead className="">
                  <tr className="">
                    <th className="px-4 py-2">Academic Year</th>
                    <th className="px-4 py-2">Total(INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="px-4 py-2">2018-19</td>
                    <td className="px-4 py-2">637.98</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">546.77</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">326.47</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">367.38 </td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">492.41 </td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Ep;