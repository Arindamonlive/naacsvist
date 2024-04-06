import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Glm = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-quad',
      delay: 0,
      duration: 1200
    });
  }, []);
  return (
    <div data-aos='fade-down' id="Committee" className='font-arial'>
      <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>NAAC Cycle 2(Governance, Leadership and Management)</ul></h1>
      <div data-aos='fade-down' className="container flex items-start ">
        <div className="grid grid-rows-2 gap-1">
          <div className=" grid grid-cols-1 gap-1 ">
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">6.1 Institutional Vision and Leadership</h2>
              <p className="text-[16px]"> 6.1.1 The institutional governance and leadership are in accordance with the vision and mission of the Institution and it is visible in various institutional practices such as NEP implementation, sustained institutional growth, decentralization, participation in the institutional governance and in their short term and long term Institutional Perspective Plan.</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup14.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.1.1_1708172652_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.1.1 Index of Additional information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/6.1.1Additonal_Information.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.1.1 Additional information</a></p>
              </div>
            </div>
            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">6.2 Strategy Development and Deployment</h2>
              <p className="text-[16px]"> 6.2.1 The institutional perspective plan is effectively deployed and functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment, service rules, and procedures, etc</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.2.1_1708172682_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.2.1 Index of Additional information</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.2.1_1708172686_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.2.1 Institutional perspective Plan and deployment documents on the website</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/6.2.1additional_information.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.2.1 Additional information</a></p>
              </div>
              <p className="text-[16px]"> 6.2.2 Institution implements e-governance in its operations
                <p className='px-4'>1.Administration</p>
                <p className="px-4">2.Finance and Accounts</p>
                <p className="px-4">3.Student Admission and Support</p>
                <p className="px-4">4.Examination</p></p>
                <p className="text-[16px] font-semibold"> Response:</p><p className="">A. All of the above</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.2.2_1708356398_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.2.2 Screen shots of user interfaces</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.2.2_1708356355_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.2.2 Institutional expenditure statements </a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.2.2_1708356327_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.2.2 Annual e-governance report</a></p>
              </div>
            </div>


            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">6.3 Faculty Empowerment Strategies</h2>
              <p className="text-[16px]"> 6.3.1 The institution has performance appraisal system, effective welfare measures for teaching and nonteaching staff and avenues for career development/progression</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup16.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.1_1708172725_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.3.1 Index of Additional information </a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/6.3.1additional_information.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.3.1 Additional information</a></p>
              </div>
              <p className="text-[16px]"> 6.3.2 Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">13.09 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 6.3.2.1 Number of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies year wise during the last five years</p>
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
                      <td className="px-4 py-2">7</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">7</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">4</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">15</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">34</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-4">
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.2_1708173053_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.3.2 Policy document on providing financial support</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.2_1708175028_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.3.2 Institutional data</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.2_1708432176_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.3.2 Copy of letter/s indicating financial assistance</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.2_1708175319_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.3.2 Audited statement of account highlighting the financial support </a></p>
                </div>
              </div>
              <p className="text-[16px]"> 6.3.3 Percentage of teaching and non-teaching staff participating in Faculty development Programmes (FDP), Management Development Programmes (MDPs) professional development /administrative training programs during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">81.9 %</p>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 6.3.3.1 Total number of teaching and non-teaching staff participating in Faculty development Programmes (FDP), Management Development Programmes (MDPs) professional development/administrative training programs during the last five years</p>
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
                      <td className="px-4 py-2">99</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">110</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">117</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">94</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">105</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-4">
                <p className="text-[16px]"> 6.3.3.2 Number of non-teaching staff year wise during the last five years</p>
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
                      <td className="px-4 py-2">22</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2019-20</td>
                      <td className="px-4 py-2">25</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2020-21</td>
                      <td className="px-4 py-2">25</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2021-22</td>
                      <td className="px-4 py-2">26</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">2022-23</td>
                      <td className="px-4 py-2">31</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-4">
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.3_1708173269_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.3.3 Policy document on providing financial support</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.3_1708176708_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.3.3 Institutional data</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.3_1708173232_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.3.3 Copy of the certificates of the program attended</a></p>
                  <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.3_1708173207_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.3.3 Annual reports highlighting the programmes undertaken </a></p>
                </div>
              </div>
            </div>



            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">6.4 Financial Management and Resource Mobilization</h2>
              <p className="text-[16px]"> 6.4.1 Institution has strategies for mobilization and optimal utilization of resources and funds from various sources (government/ nongovernment organizations) and it conducts financial audits regularly (internal and external)</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup17.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.4.1_1708175121_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.4.1 Index of Additional information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/6.4.1supporting_document.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.4.1 Additional information</a></p>

              </div>

            </div>


            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">6.5 Internal Quality Assurance System</h2>
              <p className="text-[16px]">6.5.1 Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing the quality assurance strategies and processes. It reviews teaching learning process, structures & methodologies of operations and learning outcomes at periodic intervals and records the incremental improvement in various activities</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup18.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.5.1_1708257779_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.5.1 Index of Additional information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/6.5.1additional_information.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.5.1 Additional information</a></p>

              </div>
              <p className="text-[16px]"> 6.5.2 Quality assurance initiatives of the institution include:
                <p className='px-4'>1.Regular meeting of Internal Quality Assurance Cell (IQAC); quality improvement initiatives identified and implemented</p>
                <p className="px-4">2.Academic and Administrative Audit (AAA) and follow-up action taken</p>
                <p className="px-4">3.Collaborative quality initiatives with other institution(s)</p>
                <p className="px-4">4.Participation in NIRF and other recognized rankings</p>
                <p className="px-4">5.Any other quality audit/accreditation recognized by state, national or international agencies such as NAAC, NBA etc.</p></p>
                <p className="text-[16px] font-semibold"> Response:</p><p className="">A. Any 4 or more of the above</p>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.5.2_1708431933_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.5.2 Quality audit reports/certificate</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.5.2_1708173622_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.5.2 NIRF report, AAA report and details on follow up actions</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.5.2_1708248008_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.5.2 List of Collaborative quality initiatives</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/IQAC-Meeting-from-2018-2019-to-2022-2023.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">6.5.2 Link to Minute of IQAC meetings</a></p>
              </div>

            </div>



          </div>


        </div>

      </div>
    </div>
  )
}
export default Glm;