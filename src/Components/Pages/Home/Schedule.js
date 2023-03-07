import React from 'react';
import { FaCheck } from "react-icons/fa";

const Schedule = () => {
    return (
        <div className='md:px-[80px] p-10  md:pb-[80px] bg-background text-white md:flex justify-between items-center gap-[50px]'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold font-sans bg-gradient-to-r from-first to-second fw-[700]  text-transparent bg-clip-text'>Schedule a call with Dean</h2>
                <h1 className='text-3xl font-bold font-sans mt-8'>Free 15-Minute Demo Call</h1>
                <p className='my-[20px]'>By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.</p>
                <p className='mb-[20px]'>Find a time on Dean’s calendar to schedule your call today and we look forward to speaking to you soon!</p>
                <button className='btn bg-red-500 w-[287px] rounded-xl p-3 mt-[20px] text-white text-center bg-gradient-to-r from-first to-second md:mb-0 mb-8 font-bold'>Schedule a Call</button>
            </div>

            <div className='p-[60px] bg-custom-blue md:w-1/2'>

                <h1 className='text-3xl font-bold font-sans mt-8'>This Audit Call is perfect for:</h1>

                <div className='flex justify-center gap-2 items-center mt-6'>
                    <FaCheck className='h-8 w-8' />
                    <p>Businesses looking to convert their current website into a high quality & streamlined funnel format.</p>
                </div>
                <div className='flex justify-center gap-2 items-center mt-4'>
                    <FaCheck className='h-8 w-8' />
                    <p>Businesses looking to convert their current website into a high quality & streamlined funnel format.</p>
                </div>
                <div className='flex justify-center gap-2 items-center mt-4'>
                    <FaCheck className='h-8 w-8' />
                    <p>Businesses looking to understand their increased revenue potential with funnels & conversion rate optimization.</p>
                </div>
                <div className='flex justify-center gap-2 items-center mt-4'>
                    <FaCheck className='h-8 w-8' />
                    <p>Businesses looking to maximize their conversion rates & average order value.</p>
                </div>
                <div className='flex justify-center gap-2 items-center mt-4'>
                    <FaCheck className='h-8 w-8' />
                    <p>Businesses looking for a reliable agency that can make their company a priority.</p>
                </div>

            </div>

        </div>
    );
};

export default Schedule;