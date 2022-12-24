import React from 'react';
import team1 from '../../Assets/team1.png';
import team2 from '../../Assets/team2.png';
import team3 from '../../Assets/team3.png';

const WorkWithUs = () => {

    const info = [
        {
            img: team1,
            title: 'Project Management',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.'
        },
        {
            img: team2,
            title: 'Project Management',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.'
        },
        {
            img: team3,
            title: 'Project Management',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.'
        }
    ]

    return (
        <div className='dark-blue'>
            <div className='max-w-[1120px] mx-auto '>
                <div className='py-16'>
                    <div className='md:flex items-center text-white justify-between md:px-10 text-center px-5'>
                        <h1 className="text-3xl font-bold my-5">Ways to work with us</h1>
                        <div>
                            <a href="learn" className='button'>Get Started</a>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 text-white'>
                        {
                            info.map((item, index) => <div key={index}>
                                <img className='w-full' src={item.img} alt="" />
                                <div className='px-8'>
                                    <h1 className='text-2xl font-bold'>Project Management</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkWithUs;