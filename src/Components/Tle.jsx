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
        <div className="grid grid-rows-2 gap-1">
          <div className=" grid grid-cols-1 gap-1 ">
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">2.1 Student Enrollment and Profile</h2>
              <p className="text-[16px]"> 2.1.1 Enrolment percentage</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">37.38 %</p>
              <div className="px-4 py-4">
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
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.1_1708071976_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.1.1 Institutional data </a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.1_1708071994_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.1.1 Final admission list as published by the HEI and endorsed by the competent authority</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.1_1708072056_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.1.1 Document related to sanction of intake from affiliating University/ Government/statutory body for first year’s students only.</a></p>
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
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.2_1708072189_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.1.2 Institutional data </a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.2_1708157550_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.1.2 Final admission list indicating the category as published by the HEI and endorsed by the competent authority.</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.2_1708076186_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.1.2 Copy of communication issued by state govt. or Central Government indicating the reserved categories(SC,ST,OBC,Divyangjan,etc.) to be considered as per the state rule ( Translated copy in English to be provided as applicable)</a></p>
              </div>
              </div>
            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">2.2 Student Teacher Ratio</h2>
              <p className="text-[16px]"> 2.2.1 Student – Full time Teacher Ratio (Data for the latest completed academic year)</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">14.96 %</p>
            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">2.3 Teaching- Learning Process</h2>
              <p className="text-[16px]"> 2.3.1
                Student centric methods, such as experiential learning, participative learning and problem solving
                methodologies are used for enhancing learning experiences and teachers use ICT- enabled tools
                including online resources for effective teaching and learning process 2.3.1 Student centric methods, such as experiential learning, participative learning and problem solving
                methodologies are used for enhancing learning experiences and teachers use ICT- enabled tools
                including online resources for effective teaching and learning process</p>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://onedrive.live.com/download?resid=8D7E2F495E237F23%21122&authkey=!AAy7ZAbKKzPxCio&em=2" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.3.1_1708179957_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.3.1 Index of Supporting Document</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/2.3.1Supporting_Document.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.3.1 Supporting Document</a></p>
              </div>

            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">2.4 Teacher Profile and Quality</h2>
              <p className="text-[16px]"> 2.4.1 Percentage of full-time teachers against sanctioned posts during the last five years</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 2.4.1.1 Number of sanctioned posts year wise during the last five years</p>
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
              
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.4.1_1708072339_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">2.4.1.1 Sanction letters</a></p>
              </div>


              </div>
              <p className="text-[16px]"> 2.4.2 Percentage of full time teachers with NET/SET/SLET/ Ph. D./D.Sc. / D.Litt./L.L.D. during the last five years (consider only highest degree for count)</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">15.43 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 2.4.2.1 Number of full time teachers with NET/SET/SLET/Ph. D./ D.Sc. / D.Litt./L.L.D year wise during the last five years</p>
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
                      <td className="px-4 py-2">13</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">15</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">13</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">18</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">20</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.4.2_1708351944_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">2.4.2.1 List of faculties having Ph. D. / D.Sc. / D.Litt./L.L.D</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.4.2_1708511207_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">2.4.2.1 Institution data</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.4.2_1708072460_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">2.4.2.1 Copies of Ph.D./D.Sc / D.Litt./ L.L.D awareded by UGC recognized universities</a></p>
              </div>
              </div>
            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">2.5 Evaluation Process and Reforms</h2>
              <p className="text-[16px]"> 2.5.1 Mechanism of internal/ external assessment is transparent and the grievance redressal system is time- bound and efficient</p>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://onedrive.live.com/download?resid=8D7E2F495E237F23%21123&authkey=!AE9OI0T3j_aC13k&em=2" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.5.1_1708179906_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.5.1 Index of Supporting Document</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/2.5.1Supporting_Documents.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.5.1 Supporting Document</a></p>
              </div>
            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">2.6 Student Performance and Learning Outcomes</h2>
              <p className="text-[16px]"> 2.6.1 Programme Outcomes (POs) and Course Outcomes (COs) for all Programmes offered by the institution are stated and displayed on website</p>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://onedrive.live.com/download?resid=8D7E2F495E237F23%21124&authkey=!ALhD20XdWHiE2nA&em=2" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.6.1_1708257432_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.6.1 Index of Supporting Document</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/2.6.1Supporting_Documents.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.6.1 Supporting Document</a></p>
              </div>
              <p className="text-[16px]"> 2.6.2 Attainment of POs and COs are evaluated.</p>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://onedrive.live.com/download?resid=8D7E2F495E237F23%21125&authkey=!AAyj1JRBPBJCHXM&em=2" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.6.2_1708257633_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.6.2 Index of Supporting Document</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/2.6.2Supporting_document.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.6.2 Supporting Document</a></p>
              </div>
              <p className="text-[16px]"> 2.6.3 Pass percentage of Students during last five years (excluding backlog students)</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">95.48 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 2.6.3.1 Number of final year students who passed the university examination year wise during the last five years</p>
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
                      <td className="px-4 py-2">392</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">380</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">356</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">346</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">404</td>
                    </tr>
                  </tbody>
                </table>

              </div>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 2.6.3.2 Number of final year students who appeared for the university examination year-wise during the last five years</p>
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
                      <td className="px-4 py-2">415</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">400</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">364</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">350</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">438</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.6.3_1708072677_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.6.3 Institutional data</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.6.3_1708072670_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.6.3 Certified report from Controller Examination</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.6.3_1708072665_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.6.3 Annual report of controller of Examinations(COE)</a></p>
              </div>
              </div>
            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">2.7 Student Satisfaction Survey</h2>
              <p className="text-[16px]"> 2.7.1 Online student satisfaction survey regarding teaching learning process</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.7.1_1708072887_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">2.7.1 Institutional data</a></p>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}
export default Tle;