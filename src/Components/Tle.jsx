import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Tle = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-quad',
      delay: 0,
      duration: 1200
    });
  }, []);
  return (
    <div data-aos='fade-down' id="Committee" className='font-arial'>
      <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[40px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>NAAC Cycle 2( Teaching-learning and Evaluation)</ul></h1>
      <div data-aos='fade-down' className="container flex items-start ">
      <div className="grid grid-cols-2 gap-1">
          <div className=" grid grid-cols-1 gap-1 ">
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">2.1 Student Enrollment and Profile</h2>
              <p className="text-[16px]"> 2.1.1 Enrolment percentage</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">37.38 %</p>
              <p className="text-[16px]"> 2.1.1.1 Number of seats filled year wise during last five years (Only first year admissions to be considered)</p>
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
                    <td className="px-4 py-2">157</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">168</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">118</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">189</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">209</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[16px]"> 2.1.1.2 Number of sanctioned seats year wise during last five years</p>
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
                    <td className="px-4 py-2">450</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">450</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">450</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">450</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">450</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.1_1708071976_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">a. Institutional data in the prescribed format</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.1_1708071994_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">b. Final admission list as published by the HEI and endorsed by the competent authority</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.1_1708072056_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">c. Document related to sanction of intake from affiliating University/ Government/statutory body for first year’s students only.</a></p>
              </div>
            </div>
            <div className="px-8 py-16">
              <p className="text-[16px]"> 2.1.2 Percentage of seats filled against reserved categories (SC, ST, OBC etc.) as per applicable reservation policy for the first year admission during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">20.62 %</p>
              <p className="text-[16px]"> 2.1.2.1 Number of actual students admitted from the reserved categories year wise during last five years (Exclusive of supernumerary seats)</p>
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
                    <td className="px-4 py-2">23</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">42</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">31</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">42</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">63</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[16px]"> 2.1.2.2 Number of seats earmarked for reserved category as per GOI/ State Govt rule year wise during the last five years</p>
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
                    <td className="px-4 py-2">195</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">195</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">195</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">195</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">195</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.2_1708072189_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">a. Institutional data in the prescribed format</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.2_1708157550_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">b. Final admission list indicating the category as published by the HEI and endorsed by the competent authority.</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.2_1708076186_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">c. Copy of communication issued by state govt. or Central Government indicating the reserved categories(SC,ST,OBC,Divyangjan,etc.) to be considered as per the state rule ( Translated copy in English to be provided as applicable)</a></p>
              </div>
            </div>
          </div>
          <div className="px-8 ">
            <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">2.2 Student Teacher Ratio</h2>
              <p className="text-[16px]"> 2.2.1 Student – Full time Teacher Ratio (Data for the latest completed academic year)</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">14.96 %</p>

             
            </div>
          </div>
        
      </div>
    </div>
  )
}
export default Tle;