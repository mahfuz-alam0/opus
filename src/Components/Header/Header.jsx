import React from 'react';
import './Header.css';
import { FaMouse, FaArrowRight } from "react-icons/fa";
import persone from '../../Assets/Header_img.png';
import ceo from '../../Assets/ceo_info.png';

const Header = () => {

    const [info, setInfo] = React.useState(null);

    React.useEffect(() => {
        fetch('http://localhost:5000/heading')
            .then(res => res.json())
            .then(data => setInfo(data[0]))
    }, []);

    console.log(info?.heading)


    return (
        <div className='header-containre'>
            <div className='max-w-[1120px] z-10 mx-auto up_header'>
                <div className='w-16 h-16 blue'></div>
                <div className='w-[32px] h-[32px] blue ml-16'></div>
            </div>
            <div className='z-0 w-full h-[700px] md:h-[500px] mx-auto flex header'>
                <div className='w-full md:w-4/6 black-blue'></div>
                <div className='w-2/6 h-[500px] hidden md:block right-box blue'></div>
            </div>
            <div className=' text-white pt-5 max-w-[980px] mx-auto header-content'>
                <div className='grid md:grid-cols-2 gap-10 grid-cols-1'>
                    <div>
                        <div className='text-center md:text-left'>
                            <div className='max-w-[400px] flex'>
                                <h1 className='text-3xl md:text-5xl font-bold'>{info?.heading}</h1>
                                <div className='flex items-center icon'>
                                    <img className='max-w-[50px] hidden md:block' src='https://i.ibb.co/0f1VzBD/icon4.png' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 text-center md:text-left px-2 md:px-0'>
                            <p className='w-full md:w-[380px]'>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</p>
                        </div>
                        <div className='mt-10 flex-none sm:flex text-center gap-5'>
                            <a href='#lern' className='button w-[150px] flex justify-center mx-auto md:mx-0 items-center gap-2'>Learn more <FaArrowRight /></a>
                            <a href='explore' className='items-center w-[150px] mx-auto md:mx-0 justify-center py-2 sm:mt-0 mt-[10px] flex hover:bg-blue-900 px-4'>Explore Pages</a>
                        </div>
                    </div>
                    <div className='md:h-[28rem]'>
                        <div className='w-full'>
                            <img className='w-full md:pl-20 flex justify-end' src="https://i.ibb.co/qRGWBHp/Header-img.png" alt="" />
                        </div>
                        <div className='w-[300px] hidden md:block ceo_info'>
                            <img src={ceo} alt="" />
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='text-slate-300 flex'>
                        <div className='my-auto h-[115px] w-2/5'>
                            <p className='flex w-[180px]  mt-12 gap-2 items-center mx-auto'><FaMouse />SCROLL FOR MORE</p>
                        </div>
                        <div className='h-[115px] w-3/5 blue'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;