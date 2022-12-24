import React from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import { FaBars } from "react-icons/fa";
import { AuthContext } from '../../Context/Context';

const Navbar = () => {

    const { show, setShow } = React.useContext(AuthContext);

    const handle_click = () => {
        setShow(!show);
    }

    return (
        <div className='max-w-[1120px] mx-auto'>
            <div className='md:flex md:justify-between py-8 items-center'>
                <div className='flex items-center justify-between'>
                    <img className='logo pl-4 md:p-0' src={logo} alt="" />
                    <div className='md:hidden p-2 border mr-2'>
                        <span className='text-blue-700' onClick={handle_click}><FaBars /></span>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex'>
                        <li className='text-sky-900 py-2 px-4 cursor-pointer hover:bg-slate-200'>Overview</li>
                        <li className='text-sky-900 py-2 px-4 cursor-pointer hover:bg-slate-200'>Peges</li>
                        <li className='text-sky-900 py-2 px-4 cursor-pointer hover:bg-slate-200'>Template</li>
                    </ul>
                </div>
                <div className='hidden md:block'>
                    <button className='button'>Contect Us</button>
                </div>
                <div className={`${show ? 'active' : undefined} absolute z-10 bg-white navbar md:hidden w-[130px] border rounded-sm mt-8`}>
                    <ul className='z-0'>
                        <li className='text-sky-900 py-2 px-4 cursor-pointer hover:bg-slate-200'>Overview</li>
                        <li className='text-sky-900 py-2 px-4 cursor-pointer hover:bg-slate-200'>Peges</li>
                        <li className='text-sky-900 py-2 px-4 cursor-pointer hover:bg-slate-200'>Template</li>
                        <li className='text-sky-900 button'>Contect Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;