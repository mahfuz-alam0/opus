import React from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import { FaBars } from "react-icons/fa";
import { AuthContext } from '../../Context/Context';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { show, setShow, user, sign_out } = React.useContext(AuthContext);

    const sign_out_user = () => {
        sign_out();
        setShow(false);
    }

    const handle_click = () => {
        setShow(!show);
    }

    const component = <React.Fragment>
        {
            !user?.email ? <li className='text-sky-900 py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='login'>login</Link></li> :
                <>
                    <li className='text-sky-900 py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='admin'>Admin Panel</Link></li>
                    <li className='text-sky-900 py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='emails'>Emails</Link></li>
                    <li onClick={sign_out_user} className='text-sky-900 py-2 px-4 cursor-pointer hover:bg-slate-200'>Logout</li>
                </>

        }
    </React.Fragment>

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
                        {component}
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
                        {component}
                        <li className='text-sky-900 button'>Contect Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;