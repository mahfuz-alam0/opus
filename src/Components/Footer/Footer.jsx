import React from 'react';
import { toast } from 'react-hot-toast';
import image from '../../Assets/logo.png';
import './Footer.css';

const Footer = () => {
    const handleEmail = (event) => {
        event.preventDefault();
        console.log(event.target.email.value);

        fetch('https://opus-server-hasibul240.vercel.app/email', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: event.target.email.value })
        }).then(res => res.json())
            .then(data => {
                if (data.message === 'Email already exists') { 
                    toast.error(data.message)
                } else {
                    event.target.reset()
                    toast.success('Email added successfully')
                }
            })

    }
    return (
        <div>
            <div className='max-w-[1120px] mx-auto'>
                <div className='logo pl-3 md:px-0'>
                    <img src={image} alt="" />
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 px-4 md:px-0 my-10'>
                    <div className=' grid md:grid-cols-3 gap-5 grid-cols-1 justify-between'>
                        <div className=''>
                            <p className='uppercase cursor-pointer py-2'>overview</p>
                            <p className='cursor-pointer py-2'>Overview</p>
                            <p className='cursor-pointer py-2'>Landings</p>
                            <p className='cursor-pointer py-2'>Company</p>
                            <p className='cursor-pointer py-2'>Pricing</p>
                            <p className='cursor-pointer py-2'>CMS Pages</p>
                            <p className='cursor-pointer py-2'>Accounts</p>
                            <p className='cursor-pointer py-2'>Buy for Figma</p>
                        </div>
                        <div className=''>
                            <p className='uppercase cursor-pointer py-2'>pages</p>
                            <p className='cursor-pointer py-2'>Landing </p>
                            <p className='cursor-pointer py-2'>Landing 2</p>
                            <p className='cursor-pointer py-2'>Landing 3</p>
                            <p className='cursor-pointer py-2'>Company 1</p>
                            <p className='cursor-pointer py-2'>Company 2</p>
                            <p className='cursor-pointer py-2'>Company 3</p>
                            <p className='cursor-pointer py-2'>Blog 1</p>
                            <p className='cursor-pointer py-2'>Blog 2</p>
                            <p className='cursor-pointer py-2'>Contect 1</p>
                            <p className='cursor-pointer py-2'>Contect 2</p>
                            <p className='cursor-pointer py-2'>Contect 3</p>
                        </div>
                        <div className=''>
                            <p className='uppercase'>Pages</p>
                            <p className='cursor-pointer py-2'>Case Studies</p>
                            <p className='cursor-pointer py-2'>Careers</p>
                            <p className='cursor-pointer py-2'>Pricing 1</p>
                            <p className='cursor-pointer py-2'>Pricing 2</p>
                            <p className='cursor-pointer py-2'>Pricing 3</p>
                            <p className='cursor-pointer py-2'>Login</p>
                            <p className='cursor-pointer py-2'>Register</p>
                            <p className='cursor-pointer py-2'>Forgot Password</p>
                            <p className='cursor-pointer py-2'>Blog Post</p>
                            <p className='cursor-pointer py-2'>Team Member</p>
                            <p className='cursor-pointer py-2'>Case Stady</p>
                            <p className='cursor-pointer py-2'>Job Post</p>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <div className=''>
                                <form onSubmit={handleEmail} className='flex flex-col sm:flex-row'>
                                    <input className='input sm:w-3/5' type="email" placeholder='Email Address' name='email'/>
                                    <input className='submit button' type="submit" value='Get Started' />
                                </form>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 my-10'>
                                <div>
                                    <p className='text-slate-300 text-sm'>OPUS FOR WEBFLOW</p>
                                    <p className='text-blue-600 text-2xl font-semibold'>Lorem Ipsum</p>
                                </div>
                                <div>
                                    <p className='text-slate-400 text-sm'>OPUS FOR FIGMA</p>
                                    <p className='text-blue-600 text-2xl font-semibold'>Lorem Ipsum</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-slate-400'>© Template by <span className='text-blue-600'>Lorem</span> - Powered by <span className='text-blue-600'>Ipsum</span></p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>

            </div>
            <div className='flex items-center justify-center sm:gap-10 gap-5 py-10 last'>
                <p>Style Guide</p>
                <p>Licence</p>
                <p>Changelog</p>
            </div>
        </div>
    );
};

export default Footer;