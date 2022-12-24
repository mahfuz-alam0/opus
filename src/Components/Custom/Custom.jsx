import React from 'react';
import './Custome.css';
import cursor from '../../Assets/cursor.png';
import rocket from '../../Assets/rocket.png'

const Custom = () => {
    return (
        <div className='max-w-[1120px] mx-auto my-20 px-5 md:px-0'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div>
                    <div className='md:w-[250px] w-[230px]'>
                        <h1 className='text-3xl font-bold mb-5'>Make your site better with Opus</h1>
                    </div>
                    <div className='md:ml-10'>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.
                        </p>
                        <div className='my-10'>
                            <a href="learn-more" className='button'> Learn More</a>
                        </div>
                    </div>

                </div>
                <div className='h-[300px]'>
                    <div className='offer-box'>
                        <div className='max-w-[300px] p-5 mx-auto bg-white mb-10'>
                            <img className='w-5' src={cursor} alt="" />
                            <p className='font-bold'>Build or Customize a <br /> Website in Minutes</p>
                        </div>
                        <div className='max-w-[300px] p-5 mx-auto bg-white'>
                            <img className='w-5' src={rocket} alt="" />
                            <p className='font-bold'>Our UI Kit was made for <br /> creativity.</p>
                        </div>
                    </div>
                    <div className='w-full flex shadow-box relative'>
                        <div className='w-1/3'></div>
                        <div className='w-2/3 bg-slate-200 h-[300px]'></div>
                    </div>
                    {/* <div className='shadow-box relative ml-24'>
                        <div className='w-1/5 h-[80px] bg-slate-200'></div>
                        <div className='w-4/5'></div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Custom;