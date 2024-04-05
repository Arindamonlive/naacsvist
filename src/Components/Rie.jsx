import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Rie = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-quad',
      delay: 0,
      duration: 1200
    });
  }, []);
  return (
    <div data-aos='fade-down' id="Committee" className='font-arial'>
      <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>NAAC Cycle 2(Research, Innovations and Extension)</ul></h1>
      <div data-aos='fade-down' className="container flex items-start ">
        <div className="grid grid-rows-2 gap-1">
          <div className=" grid grid-cols-1 gap-1 ">
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">3.1 Resource Mobilization for Research</h2>
              <p className="text-[16px]"> 3.1.1 Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">78 %</p>
              <div className="px-4 py-4">
              <p className="text-[16px]">3.1.1.1 Total Grants from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.1.1_1708152422_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.1.1 Supporting document</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.1.1_1708152353_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.1.1 Institutional data</a></p>
              </div>
              </div>
            </div>
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">3.2 Innovation Ecosystem</h2>
              <p className="text-[16px]"> 3.2.1 Institution has created an ecosystem for innovations, Indian Knowledge System (IKS),including awareness about IPR, establishment of IPR cell, Incubation centre and other initiatives for the creation and transfer of knowledge/technology and the outcomes of the same are evident</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">78 %</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup7.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write Up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.2.1_1708247435_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.2.1 Index of Additional Information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/3.2.1additional_information.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.2.1 Additional Information</a></p>
              </div>
              <p className="text-[16px]"> 3.2.2 Number of workshops/seminars/conferences including on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship conducted during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">43 %</p>
              <div className="px-4 py-4">
              <p className="text-[16px]">3.2.2.1 Total number of workshops/seminars/conferences including programs conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship year wise during last five years</p>
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
                    <td className="px-4 py-2">3</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">3</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">2</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">22</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">13</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.2.2_1708526033_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.2.2 Supporting document</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.2.2_1708161861_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.2.2 Institutional data</a></p>
              </div>
              </div>
            </div>
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">3.3 Research Publications and Awards</h2>
              <p className="text-[16px]"> 3.3.1 Number of research papers published per teacher in the Journals notified on UGC care list during the last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className=""> 0.56 %</p>
              <div className="px-4 py-4">
              <p className="text-[16px]">3.3.1.1 Number of research papers in the Journals notified on UGC CARE list year wise during the last five years</p>
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
                    <td className="px-4 py-2">18</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">17</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">15</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">15</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">39</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.1_1708161504_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.3.1 Link of Uploaded Papers</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.1_1708153853_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.3.1 Link of the source-cite of Uploaded Papers</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.1_1708153840_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.3.1 UGC Care published paper</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.1_1708153373_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.3.1 Institutional data</a></p>
              </div>
              </div>
              <p className="text-[16px]"> 3.3.2 Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className=""> 0.18 %</p>
              <div className="px-4 py-4">
              <p className="text-[16px]">3.3.2.1 Total number of books and chapters in edited volumes/books published and papers in national/ international conference proceedings year wise during last five years</p>
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
                    <td className="px-4 py-2">1</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">2</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">9</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">4</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">18</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.2_1708154283_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.3.2 List of chapter/book </a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.2_1708154256_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.3.2 Institutional data</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.2_1708154289_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.3.2 Cover page, content page and first page of the publication</a></p>
              </div>
              </div>
            </div>
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">3.4 Extension Activities</h2>
              <p className="text-[16px]"> 3.4.1 Outcomes of Extension activities in the neighborhood community in terms of impact and sensitizing the students to social issues for their holistic development during the last five years.</p>
              <div className="px-4 py-4">
              <p className="mb-4"><a href="https://svist.org/naacnew/Writeup8.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.4.1_1708177584_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.4.1 Index of Additional information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/3.4.1Additional_information.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.4.1 Additional information</a></p>
              </div>
              <p className="text-[16px]"> 3.4.2 Awards and recognitions received for extension activities from government / government recognised bodies</p>
              <div className="px-4 py-4">
              <p className="mb-4"><a href="https://svist.org/naacnew/Writeup9.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.4.2_1708352084_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.4.2 Index of Additional information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/3.4.2Supporting_documents.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.4.2 Additional information</a></p>
              </div>
              <p className="text-[16px]"> 3.4.3 Number of extension and outreach programs conducted by the institution through organized forums including NSS/NCC with involvement of community during the last five years.</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className=""> 41 %</p>
              <div className="px-4 py-4">
              <p className="text-[16px]">3.4.3.1 Number of extension and outreach Programs conducted in collaboration with industry, community, and Non- Government Organizations through NSS/ NCC etc., year wise during the last five years</p>
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
                    <td className="px-4 py-2">2</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2019-20</td>
                    <td className="px-4 py-2">5</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2020-21</td>
                    <td className="px-4 py-2">2</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2021-22</td>
                    <td className="px-4 py-2">6</td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">2022-23</td>
                    <td className="px-4 py-2">26</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.4.3_1708155054_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.4.3 Photographs and any other supporting document </a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.4.3_1708154929_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.4.3 Institutional data</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.4.3_1708158559_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.4.3 Detailed report</a></p>
              </div>
              </div>
            </div>
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">3.5 Collaboration</h2>
              <p className="text-[16px]"> 3.5.1 Number of functional MoUs/linkages with institutions/ industries in India and abroad for internship, on-the-job training, project work, student / faculty exchange and collaborative research during the last five years.</p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">28 %</p>
                <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.5.1_1708155301_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.5.1 Summary of the functional MoUs/linkage/collaboration</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.5.1_1708155324_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.5.1 List of year wise activities and exchange</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.5.1_1708157864_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.5.1 List and Copies of documents indicating the functional MoUs/linkage/collaborations</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.5.1_1708161945_13845.xlsx" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">3.5.1 Institutional data </a></p>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}
export default Rie;