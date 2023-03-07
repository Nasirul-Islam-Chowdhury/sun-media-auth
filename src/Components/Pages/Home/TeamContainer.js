import React from 'react';
import img from '../../assets/avatar-image.png'

const TeamContainer = () => {
    return (
        <div className='md:px-[80px] px-8 py-[218px] bg-background '>
            <h2 className='text-4xl font-bold font-sans text-center bg-gradient-to-r from-first to-second fw-[700]  text-transparent bg-clip-text'>Meet The Team</h2>
        <div className='flex justify-center mt-8'>
        <img src={img} alt="" />
        </div>
        <h1 className='text-center text-3xl mt-4 text-white font-bold font-sans'>Dean Adams</h1>
        <div className='text-center  text-white font-sans mt-8'>
            <h1>Founded by Dean Adams who has been in the Digital Marketing game for an extensive amount of </h1>
            <h1 className='mb-8'>time perfecting the perfect working methods.</h1>
            <h1>With our elusive company culture, calibre of clientele & connections DKN Media has our pick of the</h1>
            <h1>litter all across the world when it comes to who we’re able to hire. The team you see in front of you is</h1>
            <h1>a culmination of that.</h1>
        </div>
        </div>
    );
};

export default TeamContainer;