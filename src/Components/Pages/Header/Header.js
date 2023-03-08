import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify, FaSignOutAlt, FaSignInAlt, FaHome, FaExpandArrowsAlt, FaRegistered } from "react-icons/fa";
import { AuthContext } from '../../Contexts/UseContexts';
const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
    }
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-custom-blue flex items-center justify-between h-[70px] md:h-[113px] w-full md:px-28 px-14'>
            <div>
                <Link to={'/'} className='md:text-5xl text-3xl font-sans bg-gradient-to-r from-first to-second fw-[700] font-bold inline-block text-transparent bg-clip-text'>Sun Media</Link>
            </div>
            <ul className={`text-xl font-sans bg-gradient-to-r from-first to-second fw-[700] font-bold inline-block text-transparent bg-clip-text ml-[280px] md:flex gap-10 md:static absolute ${open ? 'top-16' : 'top-[-200px]'}`}>
                <li className='flex items-center gap-1'>
                    <FaHome className='text-white' />
                    <Link to={'/'}>Home</Link>
                </li>
                <li className='flex items-center gap-1'>
                    <FaRegistered className='text-white' />
                    <Link to={'/register'}>Register</Link>
                </li>
                {user?.uid ? <li className='flex items-center gap-1'>
                    <FaSignOutAlt className='text-white' />
                    <Link onClick={handleLogout}>Sign out</Link>
                </li> :
                 <li className='flex items-center gap-1'>
                    <FaSignInAlt className='text-white' />
                    <Link to={'/login'}>Login</Link>
                </li>
}
            </ul>

            <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer" >
                {
                    open ? <FaExpandArrowsAlt className="text-white h-6 w-6" /> : <FaAlignJustify className="text-white h-6 w-6 " />
                }
            </div>
        </div>
    );
};
export default Header;