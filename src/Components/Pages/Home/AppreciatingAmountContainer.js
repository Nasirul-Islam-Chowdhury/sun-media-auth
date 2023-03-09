import React from 'react';

const AppreciatingAmountContainer = () => {
    return (
        <div className='bg-background text-white'>
            <h1 className='text-4xl font-sans font-bold  text-center'> It's time to stop wasting resources on</h1>
            <h1 className='text-4xl font-sans font-bold  text-center'> ineffective and flawed advertising campaigns.</h1>
            <p className='font-sans text-center mt-10'>Instead, focus on making your advertising budget work for you, </p>
            <p className='font-sans text-center'>growing your business, and increasing your sales.</p>
        <div className='md:px-[80px] px-4 pt-[50px] pb-[80px] md:flex md:flex-row  flex-col justify-center gap-[25px]'>
            <div className='border md:w-[302px]  h-[164px] rounded py-[30px] px-[40px] md:m-0 mt-4'>
                <h1 className='text-2xl font-sans'>Clients helped</h1>
                <h1 className='text-5xl font-bold'>13</h1>
            </div>
            <div className='border md:w-[302px] h-[164px] rounded py-[30px] px-[40px] md:m-0 mt-4'>
                <h1 className='text-2xl font-sans'>Total ad spend</h1>
                <h1 className='text-5xl font-bold'>$750,000</h1>
            </div>
            <div className='border md:w-[302px] h-[164px] rounded py-[30px] px-[40px] md:m-0 mt-4'>
                <h1 className='text-2xl font-sans'>Service offer</h1>
                <h1 className='text-5xl font-bold'>1</h1>
            </div>
            <div className='border md:w-[302px] h-[164px] rounded py-[30px] px-[40px] md:m-0 mt-4'>
                <h1 className='text-2xl font-sans'>Satisfaction</h1>
                <h1 className='text-5xl font-bold'>100%</h1>
            </div>
        
        </div>
        </div>
    );
};

export default AppreciatingAmountContainer;