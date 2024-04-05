import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Ilr = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-quad',
      delay: 0,
      duration: 1200
    });
  }, []);
  return (
    <div data-aos='fade-down' id="Committee" className='font-arial'>
      <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>NAAC Cycle 2(Infrastructure and Learning Resources)</ul></h1>
      <div data-aos='fade-down' className="container flex items-start ">
        <div className="grid grid-rows-2 gap-1">
          <div className=" grid grid-cols-1 gap-1 ">
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">4.1 Physical Facilities</h2>
              <p className="text-[16px]"> 4.1.1 The Institution has adequate infrastructure and other facilities for, teaching – learning, viz., classrooms, laboratories, computing equipment etc ICT – enabled facilities such as smart class, LMS etc.</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup10.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up </a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.1.1_1708182381_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">4.1.1 Index of Additional Information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/411Additionalinformation.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">4.1.1  Additional Information</a></p>
              </div>
              <p className="text-[16px]">4.1.2 Percentage of expenditure for infrastructure development and augmentation excluding salary during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">35.66 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 4.1.2.1 Expenditure for infrastructure development and augmentation, excluding salary year wise during last five years (INR in lakhs)</p>
                <table className="text-center">
                  <thead className="">
                    <tr className="">
                      <th className="px-4 py-2">Academic Year</th>
                      <th className="px-4 py-2">INR in lakhs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="px-4 py-2">2018-19</td>
                      <td className="px-4 py-2">305.19</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">217.17</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">94.98</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">93.22</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">134.83</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.1.2_1708175640_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">4.1.2.1 Institutional data</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.1.2_1708519457_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">4.1.2.1 Audited income and expenditure statement</a></p>
              </div>
              </div>
            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">4.2 Library as a Learning Resource</h2>
              <p className="text-[16px]"> 4.2.1 Library is automated with digital facilities using Integrated Library Management System (ILMS), adequate subscriptions to e-resources and journals are made. The library is optimally used by the faculty and students</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup11.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up </a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.2.1_1708182415_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">4.2.1 Index of Additional Information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/421Additionalinformation.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">4.2.1  Additional Information</a></p>
              </div>
            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">4.3 IT Infrastructure</h2>
              <p className="text-[16px]"> 4.3.1 Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection</p>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup12.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.3.1_1708182432_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">4.3.1 Index of Additional Information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/431Additionalinformation.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">4.3.1 Additional Information</a></p>
              </div>
              <p className="text-[16px]"> 4.3.2 Student – Computer ratio (Data for the latest completed academic year)</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">4.39 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 4.3.2.1 Number of computers available for students usage during the latest completed academic year:</p>
                <p className="text-[16px] font-semibold"> Response:</p><p className="">320</p>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.3.2_1708182472_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">4.3.2 Purchased Bills/Copies</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.3.2_1708182494_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">4.3.2 Extracts stock register/ highlighting the computers</a></p>
              </div>
              </div>
            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">4.4 Maintenance of Campus Infrastructure</h2>
              <p className="text-[16px]"> 4.4.1 Percentage expenditure incurred on maintenance of physical facilities and academic support facilities excluding salary component, during the last five years (INR in Lakhs)</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">57.25 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 4.4.1.1 Expenditure incurred on maintenance of infrastructure (physical facilities and academic support facilities) excluding salary component year wise during the last five years (INR in lakhs)</p>
                <table className="text-center">
                  <thead className="">
                    <tr className="">
                      <th className="px-4 py-2">Academic Year</th>
                      <th className="px-4 py-2">INR in lakhs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="px-4 py-2">2018-19</td>
                      <td className="px-4 py-2">290.51</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">295.09</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">204.63</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">240.23</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">326.98</td>
                    </tr>
                  </tbody>
                </table>
              
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.4.1_1708176122_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">4.4.1 Institutional data</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.4.1_1708519318_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">4.4.1 Audited income and expenditure statement</a></p>
              
              </div>
              </div>

            </div>



          </div>


        </div>

      </div>
    </div>
  )
}
export default Ilr;