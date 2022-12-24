import React from 'react';
import resource1 from '../../Assets/resource1.png';
import resource2 from '../../Assets/resource2.png';
import resource3 from '../../Assets/resource3.png';

const Resource = () => {

    const info = [
        {
            img: resource1,
            title: 'Project Management',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.'
        },
        {
            img: resource2,
            title: 'Project Management',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.'
        },
        {
            img: resource3,
            title: 'Project Management',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.'
        }
    ]

    return (
        <div className=''>
            <div className='max-w-[1120px] mx-auto px-4 md:px-0'>
                <div className='py-16'>
                    <div className='md:flex items-center justify-between md:px-10 text-center px-5'>
                        <h1 className="text-3xl font-bold my-5">Resources</h1>
                        <div>
                            <a href="learn" className='button'>Get Started</a>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                        {
                            info.map((item, index) => <div key={index}>
                                <img className='w-full' src={item.img} alt="" />
                                <div className=''>
                                    <h1 className='text-2xl font-bold py-3'>Project Management</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
                                    <button href="article" className='p-3 px-6 bg-slate-100 my-5 block'>Read Article</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resource;