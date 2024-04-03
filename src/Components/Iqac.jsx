import img from '../assets/Papers.jpg';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

const Iqac=()=>{
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-quad',
            delay: 0,
            duration: 1200
        });
    }, []);
    return(
        <div data-aos="fade-down" id="Papers" className='font-arial'>
            <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>Internal Quality Assurance Cell (IQAC)</ul></h1>
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                        
   
                        <div data-aos='fade-down' className="container">
                            {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2>
                            <a href="https://drive.google.com/uc?export=download&id=12UOL_OB5jiTighaQr82zeOHmGaAiIyUr"  className='text-[18px] lg:px-10 text-justify items-center font-bold text-blue-800'download>Template Download</a> */}
                            <div className="flex items-start mb-6">
                                <div className="ml-5">
                                    <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:py-4">Topics</h2>
                                </div>
                                <div className="items-end">
                                    <ul className="lg: py-6">
                                        <p className="text-[18px] lg:px-10 py-2 text-justify">
                                        In pursuance of its Action Plan for performance evaluation, assessment & accreditation & quality up-gradation of institutions of higher education, NAAC proposes that every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. Since quality enhancement is a continuous process, the IQAC will become a part of the institution’s system & work towards the realisation of the goals of quality enhancement & sustenance. The prime task of the IQAC is to develop a system for conscious, consistent & catalytic improvement in the overall performance of institutions. For this, during the post-accreditation period, it will channel all efforts & measures of the institution towards promoting its holistic academic excellence.
                                        
                                        </p>
                                        <p className="font-bold">Strategies:</p>
                                        <p className="">IQAC shall evolve mechanisms and procedures for:</p>
                                        <li className="flex items-center py-1 px-8">&#x2713; Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; The relevance and quality of academic and research programmes</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Equitable access to and affordability of academic programmes for various sections of society</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Optimization and integration of modern methods of teaching and learning</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; The credibility of evaluation procedures</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Ensuring the adequacy, maintenance and functioning of the support structure and services</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Research sharing and networking with other institutions in India and abroad</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>

                        

                    </div>

                
                        
        </div>
    )
}
export default Iqac;