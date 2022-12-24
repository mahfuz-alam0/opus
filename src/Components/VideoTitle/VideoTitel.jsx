import React from 'react';
import video from '../../Assets/Video.png'
const VideoTitel = () => {
    return (
        <div className='max-w-[1120px] mx-auto md:py-20'>
            <p className='p-5 text-slate-400 '>Video Title</p>
            <h1 className='text-3xl my-3 font-bold mb-10 px-5 md:px-0'>Inform users with video sections</h1>
            <div className='w-full px-5 md:px-0'>
                <img className='w-full' src={video} alt="" />
            </div>
            <div className='flex my-5 px-5 md:px-0'>
                <div className='md:w-1/2'>
                
                </div>
                <div className='md:w-1/2'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</p>
                </div>
            </div>
        </div>
    );
};

export default VideoTitel;