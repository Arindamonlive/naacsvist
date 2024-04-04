import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
// import C1a from 'src\assets\Writeup.pdf';

const Ca = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-quad',
      delay: 0,
      duration: 1200
    });
  }, []);
  return (
    <div data-aos='fade-down' id="Committee" className='font-arial'>
      <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[40px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>NAAC Cycle 2( Curricular Aspects)</ul></h1>
      <div data-aos='fade-down' className="container flex items-start ">
        <div className="grid grid-rows-2 gap-1">
          <div className=" grid grid-row-3 gap-1 ">
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">1.1 Curricular Planning and Implementation</h2>
              <p className="text-[16px]"> 1.1.1 The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment</p>
              <a href="src\assets\Writeup.pdf" className="text-blue-800 font-bold py-2">Click Here</a>
              <div className="px-4 py-4">
                <a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.1.1_1708062291_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">Supporting Documents</a>
                <p className=""><a href="https://svist.org/naacnew/1.1.1Writeup_Supporting_Documents.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">Additional Information</a></p>
              </div>
            </div>
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">1.2 Academic Flexibility</h2>
              <p className="text-[16px]"> 1.2.1 Number of Certificate/Value added courses offered and online courses of MOOCs, SWAYAM, NPTEL etc. (where the students of the institution have enrolled and successfully completed during
                the last five years)</p>
              <p className="font-bold py-2">Response: 48</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.1_1708520642_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">a. List of students and the attendance sheet for the
                  above mentioned programs</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.1_1708519076_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">b. Institutional programme brochure/notice for
                  Certificate/Value added programs with course
                  modules and outcomes</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.1_1708067739_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">c. Institutional data in the prescribed format modules and outcomes</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.1_1708062603_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">d. Evidence of course completion, like course
                  completion certificate etc. Apart from the above:</a></p>
              </div>
            </div>


            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300"></h2>
              <p className="text-[16px]"> 1.2.2 Percentage of students enrolled in Certificate/ Value added courses and also completed online courses
                of MOOCs, SWAYAM, NPTEL etc. as against the total number of students during the last five years </p>
              <p className="font-bold py-2">Response: 57.84 %</p>
              <p className="">1.2.2.1 Number of students enrolled in Certificate/ Value added courses and also completed online
                courses of MOOCs, SWAYAM, NPTEL etc. as against the total number of students during the last five
                years</p>
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
                    <td className="px-4 py-2">642</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">753</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">657</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">863</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">713</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-4 py-4">
                <p className=""><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.2_1708071781_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">Supporting Documents</a></p>
                <p className=""><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.2_1708067754_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">Additional Information</a></p>
              </div>
            </div>




          </div>
          <div className="grid grid-row-3 gap-1">
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">1.3 Curriculum Enrichment</h2>
              <p className="text-[16px]"> 1.3.1 Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability in transacting the Curriculum
                the last five years</p>
              <a href="src\assets\Writeup2.pdf" className="text-blue-800 font-bold py-2">Click Here</a>
              <p className=""><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.3.1_1708063957_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">Supporting Documents</a></p>
              <p className=""><a href="https://svist.org/naacnew/1.3.1Supporting_Documents.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">Additional Information</a></p>
            </div>


            <div className="px-8 py -6">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300"></h2>
              <p className="text-[16px]">1.3.2 Percentage of students undertaking project work/field work/ internships (Data for the latest completed academic year)</p>
              <p className="font-bold py-2">Response: 82.36 %</p>
              <p className="text-[16px]">1.3.2.1 Number of students undertaking project work/field work / internships</p>
              <p className="font-bold py-2">Response: 1158</p>
              <p className=""><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.3.2_1708064171_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">Supporting Documents</a></p>
              <p className=""><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.3.2_1708073055_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">Additional Information</a></p>
            </div>
            <div className="px-8 py -6">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">1.4 Feedback System</h2>
              <p className="text-[16px]">1.4.1 Institution obtains feedback on the academic performance and ambience of the institution from
                various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on
                the feedback is made available on institutional website</p>
              <p className="font-bold py-2">Response:  A. Feedback collected, analysed, action taken& communicated to the relevant bodies and
                feedback hosted on the institutional website</p>
                <div className="">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.4.1_1708064308_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">a. Feedback analysis report submitted to appropriate bodies</a></p>
              <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.4.1_1708064473_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">b. At least 4 filled-in feedback form from different stake holders like Students, Teachers, Employers, Alumni etc</a></p>
              <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.4.1_1708064279_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">c. Action taken report on the feedback analysis</a></p>
              <p className="mb-4"><a href="https://svist.org/naacnew/1.4.1action_taken_report.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">d. Link of institution’s website where comprehensive feedback, its analytics and action taken report are hosted</a></p>
                </div>
              
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Ca;