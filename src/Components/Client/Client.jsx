import React from 'react';
import client1 from '../../Assets/client1.png'
import client2 from '../../Assets/client2.png'
import client3 from '../../Assets/client3.png'
import client4 from '../../Assets/client4.png'

const Client = () => {
    return (
        <div className='max-w-[1120px] mx-auto'>
            <h1 className='text-3xl font-bold mt-20 text-center'>Trusted and loved by the world’s best teams</h1>
            <div className='w-full grid md:grid-cols-4 grid-cols-1 gap-10 my-20'>
                <div className='max-w-[150px] mx-auto'><img className='w-full' src={client1} alt="" /></div>
                <div className='max-w-[150px] mx-auto'><img className='w-full' src={client2} alt="" /></div>
                <div className='max-w-[150px] mx-auto'><img className='w-full' src={client3} alt="" /></div>
                <div className='max-w-[150px] mx-auto'><img className='w-full' src={client4} alt="" /></div>
            </div>
            <div className='my-20 grid md:grid-cols-4 grid-cols-1 gap-20 md:pt-20'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold mb-3'>99.95%</h1>
                    <p className='my-2'>Accuracy rate</p>
                    <p>in fulfilling orders</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold mb-3'>5000+</h1>
                    <p className='my-2'>Ecommerce businesses</p>
                    <p>partner with Opus</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold mb-3'>99.96%</h1>
                    <p className='my-2'>Of orders ship on time</p>
                    <p>within SLA</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold mb-3'><span className='text-slate-300'>#</span>1</h1>
                    <p className='my-2'>Best Fulfillment Technology</p>
                    <p>by AdWeek’s Retail Awards</p>
                </div>
            </div>
        </div>
    );
};

export default Client;