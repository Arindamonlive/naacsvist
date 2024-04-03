import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SSR from '../assets/SVIST_NAAC_SSR_2018.pdf';
import GC from '../assets/NAAC_CYCLE_1_GRADE_CARD_2018.pdf';
const Nc1 = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-quad',
            delay: 0,
            duration: 1200
        });
    }, []);
    return (
        <div data-aos='fade-down' id="Committee" className='font-arial'>
            <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>NAAC Cycle 1</ul></h1>
            <div className="">

                <div data-aos='fade-down' className="container ">
                    {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2> */}
                    <div className="flex items-start mb-6">
                        <div className="ml-5">
                            <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">We are NAAC accredited Institute.<p className='text-[14px]'> <p></p></p></h2>
                        </div>
                        <div className="items-end">
                            <ul className="lg: py-6">
                                <p className="text-[18px] lg:px-10 py-2 text-justify">
                                </p>
                                <h2 className="text-[16px] lg:px-10 py:5 ">Swami Vivekananda Institute of Science and Technology (SVIST) is one of the leading engineering colleges in West Bengal. It is now a NAAC Accredited institution. This feat has been achieved due to the initiatives taken to ensure the best quality of education through advanced curriculum, infrastructure, learning evaluation, governance, management, innovations and industry best practices. SVIST is a futuristic engineering institute, and is committed to maintain NAAC quality parameters for continuously improving and contributing towards augmenting the dimensions of technological higher learning. <p className="font-bold py-5">Below is the index of NAAC Cycle 1.</p>
                                    <ul className="">
                                        <li className="text-[14px] lg:px-5 py-8 font-semibold text-blue-800">
                                            <a href={GC} target="_blank" className="">Grade Card</a>
                                        </li>
                                        <li className="text-[14px] lg:px-5 font-semibold text-blue-800">
                                            <a href={SSR} target="_blank" className="">SSR</a>
                                        </li>

                                    </ul>
                                </h2>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nc1;