import React from 'react';
import heroImage from '../../assets/hero-image.png'

const Home = () => {
    return (
        <div className='px-[80px] bg-background  pb-[125px] md:flex justify-between items-center'>
            <div className='flex flex-col pt-[30px]'>
                <h1 className='text-7xl font-sans bg-gradient-to-r from-first to-second fw-[700] font-bold inline-block text-transparent bg-clip-text'>Skyrock et Your</h1>
                <h1 className='text-7xl font-sans bg-gradient-to-r from-first to-second fw-[700] font-bold inline-block text-transparent bg-clip-text'>Potential!</h1>
                <div  className='py-[40px] text-white font-sans'>
                <p>We Help E-commerce & Info Product Businesses Produce</p>
                <p >Spine-Chilling ROI Via Paid Advertising</p>
                </div>
                <button className='btn bg-red-500 w-[287px] rounded-xl p-3 text-white text-center bg-gradient-to-r from-first to-second font-bold'>Speak To Our Team Today</button>
            </div>
            <div>
                <img className='w-[433px] h-[433px]' src={heroImage} alt="ghjkhjk" />
            </div>
        </div>
    );
};

export default Home;