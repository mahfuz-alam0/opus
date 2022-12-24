import React from 'react';
import icon from '../../Assets/icon2.png'
import icon2 from '../../Assets/icon3.png'

const CreatePage = () => {
    return (
        <div className='max-w-[1120px] mx-auto'>
            <div className='md:flex gap-5 my-10 md:flex-row-reverse'>
                <div className='md:w-1/2 '>
                    <h1 className='text-3xl font-bold'>Create pages using beautiful components.</h1>
                    <p className='pl-10 my-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                    <div className='my-5 pt-5'>
                        <a href="learn" className='px-5 py-3 bg-slate-200 ml-10'>Learn More</a>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <div className='flex gap-5 my-10 pt-20 md:pt-0'>
                        <div>
                            <img className='w-[84px]' src={icon} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Chose <br /> your section</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div>
                            <img className='w-[84px]' src={icon2} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Add the images <br />and text you need
                            </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreatePage;