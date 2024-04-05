import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Ssp = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-quad',
      delay: 0,
      duration: 1200
    });
  }, []);
  return (
    <div data-aos='fade-down' id="Committee" className='font-arial'>
      <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>NAAC Cycle 2(Student Support and Progression)</ul></h1>
      <div data-aos='fade-down' className="container flex items-start ">
        <div className="grid grid-rows-2 gap-1">
          <div className=" grid grid-cols-1 gap-1 ">
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">5.1 Student Support</h2>
              <p className="text-[16px]"> 5.1.1 Percentage of students benefited by scholarships and freeships provided by the institution, government and non-government bodies, industries, individuals, philanthropists during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">91.15 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 5.1.1.1 Number of students benefited by scholarships and freeships provided by the institution, Government and non-government bodies, industries, individuals, philanthropists during the last five years</p>
                <table className="text-center">
                  <thead className="">
                    <tr className="">
                      <th className="px-4 py-2">Academic Year</th>
                      <th className="px-4 py-2">Total Numbers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="px-4 py-2">2018-19</td>
                      <td className="px-4 py-2">1099</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">967</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">1088</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">1249</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">1314</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-4">
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.1_1708265753_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.1 Year-wise list of beneficiary students</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.1_1708266682_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.1 Sanction letter of scholarship and free ships</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.1_1708265791_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.1 Policy document of the HEI</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.1_1708264282_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.1 Institutional data</a></p>
                </div>
              </div>
              <p className="text-[16px]">5.1.2 Following capacity development and skills enhancement activities are organised for improving students’ capability:
                <p className='px-4'>1.Soft skills</p>
                <p className="px-4">2.Language and communication skills</p>
                <p className="px-4">3.Life skills (Yoga, physical fitness, health and hygiene)</p>
                <p className="px-4">4.ICT/computing skills</p></p>
              <p className="text-[16px] font-semibold"> Response:</p><p className=""> All of the above</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.2_1708263305_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.2 Report with photographs on Programmes /activities</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.2_1708263277_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.2 Report with photographs on ICT/computing skills enhancement programs</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.2_1708264597_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.2 Institutional data</a></p>
              </div>
              <p className="text-[16px]"> 5.1.3 Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">46.05 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 5.1.3.1 Number of students benefitted by guidance for competitive examinations and career counselling offered by the institution year wise during last five years</p>
                <table className="text-center">
                  <thead className="">
                    <tr className="">
                      <th className="px-4 py-2">Academic Year</th>
                      <th className="px-4 py-2">Total Numbers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="px-4 py-2">2018-19</td>
                      <td className="px-4 py-2">507</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">481</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">630</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">625</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">645</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-4">
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.3_1708263837_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.3 Supporting document</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.3_1708511821_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.3 Institutional data</a></p>
                </div>
              </div>
              <p className="text-[16px]">5.1.4 The institution adopts the following for redressal of student grievances including sexual harassment and ragging cases
                <p className='px-4'>1.Implementation of guidelines of statutory/regulatory bodies</p>
                <p className="px-4">2.Organisation wide awareness and undertakings on policies with zero tolerance</p>
                <p className="px-4">3.Mechanisms for submission of online/offline students’ grievances</p>
                <p className="px-4">4.Timely redressal of the grievances through appropriate committees</p></p>
              <p className="text-[16px] font-semibold"> Response:</p><p className=""> All of the above</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.4_1708263434_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.4 Proof w.r.t Organisation wide awareness and undertakings on policies with zero tolerance</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.4_1708263413_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.4 Proof related to Mechanisms for submission of online/offline students’ grievances</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.4_1708263380_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.4 Proof for Implementation of guidelines of statutory/regulatory bodies</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.4_1708263738_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.4 Details of statutory/regulatory Committee</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.4_1708350968_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.1.4 Annual report of the committee motioning the activities</a></p>
              </div>
            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">5.2 Student Progression</h2>
              <p className="text-[16px]"> 5.2.1 Percentage of placement of outgoing students and students progressing to higher education during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">62.89 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 5.2.1.1 Number of outgoing students placed and / or progressed to higher education year wise during the last five years</p>
                <table className="text-center">
                  <thead className="">
                    <tr className="">
                      <th className="px-4 py-2">Academic Year</th>
                      <th className="px-4 py-2">Total Numbers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="px-4 py-2">2018-19</td>
                      <td className="px-4 py-2">252</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">278</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">202</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">228</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">277</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[16px]"> 5.2.1.2 Number of outgoing students year wise during the last five years</p>
                <table className="text-center">
                  <thead className="">
                    <tr className="">
                      <th className="px-4 py-2">Academic Year</th>
                      <th className="px-4 py-2">Total Numbers</th>
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
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.2.1_1708441164_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.2.1 Number and List of students placed</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.2.1_1708441168_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.2.1 List of students progressing for Higher Education</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.2.1_1708512012_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.2.1 Institutional data</a></p>
                </div>
              </div>
              <p className="text-[16px]"> 5.2.2 Percentage of students qualifying in state/national/ international level examinations during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">4.52 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 5.2.2.1 Number of students qualifying in state/ national/ international level examinations year wise during last five years (eg: IIT/JAM/NET/SLET/GATE/GMAT/GPAT/CLAT/CAT/ GRE/TOEFL/IELTS/Civil Services/State government examinations etc.)</p>
                <table className="text-center">
                  <thead className="">
                    <tr className="">
                      <th className="px-4 py-2">Academic Year</th>
                      <th className="px-4 py-2">Total Numbers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="px-4 py-2">2018-19</td>
                      <td className="px-4 py-2">4</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">1</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">7</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">11</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">10</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-4">
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.2.2_1708438555_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.2.2 List of students qualified</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.2.2_1708435410_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.2.2 Institutional data</a></p>
                </div>
              </div>
            </div>


            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">5.3 Student Participation and Activities</h2>
              <p className="text-[16px]"> 5.3.1 Number of awards/medals for outstanding performance in sports/ cultural activities at University / state/ national / international level (award for a team event should be counted as one) during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">4</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 5.3.1.1 Number of awards/medals for outstanding performance in sports/cultural activities at national/international level (award for a team event should be counted as one) year wise during the last five years</p>
                <table className="text-center">
                  <thead className="">
                    <tr className="">
                      <th className="px-4 py-2">Academic Year</th>
                      <th className="px-4 py-2">Total Numbers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="px-4 py-2">2018-19</td>
                      <td className="px-4 py-2">1</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">0</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">2</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">0</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">1</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-4">
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.3.1_1708437244_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.3.1 list and links to e-copies of award letters and certificates</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.3.1_1708433571_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.3.1 Institutional data</a></p>
                </div>
              </div>
              <p className="text-[16px]"> 5.3.2 Average number of sports and cultural programs in which students of the Institution participated during last five years (organised by the institution/other institutions)</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">7.4</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 5.3.2.1 Number of sports and cultural programs in which students of the Institution participated year wise during last five years</p>
                <table className="text-center">
                  <thead className="">
                    <tr className="">
                      <th className="px-4 py-2">Academic Year</th>
                      <th className="px-4 py-2">Total Numbers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="px-4 py-2">2018-19</td>
                      <td className="px-4 py-2">8</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">8</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">5</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">8</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">8</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-4">
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.3.2_1708263907_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.3.2 Supporting document</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.3.2_1708265490_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.3.2 Institutional data</a></p>
                </div>
              </div>
            </div>



            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">5.4 Alumni Engagement</h2>
              <p className="text-[16px]"> 5.4.1 There is a registered Alumni Association that contributes significantly to the development of the institution through financial and/or other support services</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup13.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.4.1_1708263548_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.4.1 Index of Additional information</a></p>
                  <p className="mb-4"><a href="https://svist.org/naacnew/5.4.1Supporting_Documents.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">5.4.1 Additional information</a></p>

                </div>

            </div>



          </div>


        </div>

      </div>
    </div>
  )
}
export default Ssp;