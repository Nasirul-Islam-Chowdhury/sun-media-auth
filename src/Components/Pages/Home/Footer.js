import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
       <div className='bg-custom-blue py-[80px]'>
         <div className=' text-white text-center font-sans'>
            <h2 className='text-center font-bold text-3xl'>Have A General Inquiry?</h2>
            
            <p className='mt-4'>If you have a general inquiry and would like to speak to our expert team, you can contact us </p>
        <p className=''>via email at: dean.adams@sun-media.com</p>
        <button className='btn bg-red-500 rounded-xl p-3 mt-[20px] text-white text-center bg-gradient-to-r from-first to-second md:mb-0 mb-8 font-bold'>Signin Now</button>
        </div>
        <hr className='my-[30px] mx-[80px]'/>
        <div className='md:flex md:flex-row flex-col justify-between items-center md:px-[80px] px-8 text-white'>
        <h1 className='font-bold font-sans text-4xl'>Sun Media</h1>
        <p className='font-sans mt-4'>© 2023 Sun Media. All Rights Reserved. </p>
        <div className='flex md:justify-center gap-4 text-2xl mt-4'>
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
        </div>
        </div>
       </div>
    );
};

export default Footer;