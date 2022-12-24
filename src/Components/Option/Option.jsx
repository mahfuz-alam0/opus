import React from 'react';
import { FaCheck, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import sec1 from '../../Assets/sec1.png';
import sec2 from '../../Assets/sec2.png';
import sec3 from '../../Assets/sec3.png';
import client2 from '../../Assets/client2.png';

const Option = () => {
    return (
        <div className='max-w-[1120px] mx-auto my-40 px-4 md:px-0'>
            <div className='md:flex gap-10 my-20 flex-row-reverse'>
                <div className='md:w-1/2'>
                    <img src={sec1} alt="" />
                </div>
                <div className='md:w-1/2'>
                    <div className='max-w-[400px]'>
                        <p className='py-4 px-6 bg-slate-200 w-16 mb-4'>FEATURE</p>
                        <h1 className='text-4xl font-bold'>You’re not just doing business. You’re doing life.</h1>
                        <div>
                            <div className='mt-20'>
                                <p className='flex items-center gap-2 my-2'><span className='text-blue-500 p-3 bg-blue-100 rounded-full'><FaCheck /></span>Responsive Components</p>
                                <p className='flex items-center gap-2 my-2'><span className='text-blue-500 p-3 bg-blue-100 rounded-full'><FaCheck /></span>Over 50 Sections</p>
                                <p className='flex items-center gap-2 my-2'><span className='text-blue-500 p-3 bg-blue-100 rounded-full'><FaCheck /></span>Handcrafted Pages</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='md:flex gap-10 my-20'>
                <div className='md:w-1/2'>
                    <img src={sec2} alt="" />
                </div>
                <div className='md:w-1/2'>
                    <div className='max-w-[400px] py-10'>
                        <div className='mb-4 flex'>
                            <p className='py-4 px-6 bg-slate-200 w-16  uppercase'>Our</p>
                            <p className='py-4 pl-0 px-6 uppercase'>knowledge</p>
                        </div>
                        <h1 className='text-4xl font-bold'>A UI Kit that's Modern & Elegant
                        </h1>
                        <p className='mt-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
            <div className='md:flex gap-10 my-20 flex-row-reverse'>
                <div className='md:w-1/2'>
                    <img src={sec3} alt="" />
                </div>
                <div className='md:w-1/2'>
                    <div className='max-w-[400px]'>
                        <img className='max-w-[200px] mx-auto my-10' src={client2} alt="" />
                        <p className='text-center max-w-[220px] text-lg font-bold mx-auto mb-10'>The Opus UI Kit lets you showcase your work in style. It's helped take our business online</p>
                        <p className='uppercase font-bold text-center'>Alexa F.</p>
                        <p className='uppercase font-bold text-slate-400 text-center my-3'>Designer <span className='text-blue-600'>@Stamps</span></p>
                        <div className='flex max-w-[130px] justify-between mx-auto'>
                            <div className='p-4 bg-slate-200'><FaArrowLeft /></div>
                            <div className='p-4 bg-slate-200'><FaArrowRight /></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Option;