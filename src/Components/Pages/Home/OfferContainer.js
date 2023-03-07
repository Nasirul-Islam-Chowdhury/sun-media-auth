import React from 'react';
import img from '../../assets/paid-advertising-image.png'

const OfferContainer = () => {
    return (
        <div className='md:flex md:px-[80px] md:pt-[80px] px-[20px] pt-[80px] justify-center gap-[120px] bg-background text-white'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='md:m-0 mt-4'>
                <h1 className='font-bold text-3xl font-sans'>What we offer</h1>
                <h1 className='py-[20px] text-5xl font-bold font-sans bg-gradient-to-r from-first to-second fw-[700] inline-block text-transparent bg-clip-text'>PAID ADVERTISING</h1>
                <h1 className='py-[20px] font-bold font-sans text-2xl'>Ads, Just Ads.</h1>
                <p className=''>We specialise in one area and excel at it. If you're looking for an agency that provides a wide range of services but may not deliver significant results, we are not be the right fit.</p>
                <p className='mt-8'>However, if you want an agency that provides transparent, easy-to-access information on how much was spent, how much was made & what your net profit was - we’re for you.</p>
                <button className='btn bg-red-500 w-[287px] rounded-xl p-3 mt-[20px] text-white text-center bg-gradient-to-r from-first to-second font-bold'>Speak To Our Team Today</button>
               
                </div>    
        </div>
    );
};

export default OfferContainer;