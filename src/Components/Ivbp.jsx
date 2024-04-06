import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Ivbp = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-quad',
      delay: 0,
      duration: 1200
    });
  }, []);
  return (
    <div data-aos='fade-down' id="Committee" className='font-arial'>
      <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>NAAC Cycle 2(Institutional Values and Best Practices)</ul></h1>
      <div data-aos='fade-down' className="container flex items-start ">
        <div className="grid grid-rows-2 gap-1">
          <div className=" grid grid-cols-1 gap-1 ">
            <div className="px-8">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">7.1 Institutional Values and Social Responsibilities</h2>
              <p className="text-[16px]"> 7.1.1 Institution has initiated the Gender Audit and measures for the promotion of gender equity during the last five years.</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup19.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.1_1708005021_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.1 Index of Additional information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/7.1.1Additional_information.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.1 Additional information</a></p>
              </div>
              <p className="text-[16px]"> 7.1.2 The Institution has facilities and initiatives for
                <p className='px-4'>1.Alternate sources of energy and energy conservation measures</p>
                <p className="px-4">2.Management of the various types of degradable and nondegradable waste</p>
                <p className="px-4">3.Water conservation</p>
                <p className="px-4">4.Green campus initiatives</p>
                <p className="px-4">5.Disabled-friendly, barrier free environment</p></p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">A. All of the above</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.2_1708005076_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.2 Policy document on the green campus/plastic free campus.</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.2_1708081670_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.2 Geo-tagged photographs/videos</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.2_1708005099_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.2 Circulars and report of activities</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.2_1707986032_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.2 Bills for the purchase of equipment’s </a></p>
              </div>
              <p className="text-[16px]"> 7.1.3 Quality audits on environment and energy regularly undertaken by the Institution. The institutional environment and energy initiatives are confirmed through the following 
                <p className='px-4'>1. Green audit / Environment audit</p>
                <p className="px-4">2.Energy audit</p>
                <p className="px-4">3.Clean and green campus initiatives</p>
                <p className="px-4">4.Beyond the campus environmental promotion activities</p></p>
              <p className="text-[16px] font-semibold"> Response:</p><p className="">A. All of the above</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.3_1708005175_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.3 Report on Environmental Promotional activities</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.3_1708068202_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.3 Policy document on environment and energy usage</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.3_1708081786_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.3 Green audit/environmental audit report</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.3_1708081793_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.3 Certificates of the awards received </a></p>
              </div>
              <p className="text-[16px]"> 7.1.4 Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socioeconomic and Sensitization of students and employees to the constitutional obligations: values, rights, duties and responsibilities of citizens </p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup20.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.4_1708005329_13845.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.4 Index of Additional information</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/7.1.4Additionalinformation.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.1.4 Additional information</a></p>
              </div>
            </div>




            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">7.2 Best Practices</h2>
              <p className="text-[16px]"> 7.2.1 Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup21.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up.</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/7.2.1 Best Practices Qualititative.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.2.1 Best practices as hosted on the Institutional we site</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/7.2.1 best practices - any other relevant information.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.2.1 Relevant information</a></p>
              </div>

            </div>


            <div className="px-8 ">
              <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">7.3 Institutional Distinctiveness</h2>
              <p className="text-[16px]"> 7.3.1 Portray the performance of the Institution in one area distinctive to its priority and thrust within 1000 words</p>
              <div className="px-4 py-4">
                <p className="mb-4"><a href="https://svist.org/naacnew/Writeup22.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800">Write up</a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/Indian_Red_Cross_Society_Certificate.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.3.1 Relevant information </a></p>
                <p className="mb-4"><a href="https://svist.org/naacnew/7.3.1 portray the performance of the institution in one area distinctive to its priority and thrust supporting document.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">7.3.1 Appropriate web in the Institutional website</a></p>
              </div>
              
            </div>









          </div>


        </div>

      </div>
    </div>
  )
}
export default Ivbp;