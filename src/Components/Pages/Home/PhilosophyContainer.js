import React from 'react';

const PhilosophyContainer = () => {
    return (
        <div className='bg-background text-white md:flex justify-center gap-[120px] p-[10px] md:p-[80px]'>
           <div>
            <h1 className='text-5xl font-bold font-sans bg-gradient-to-r from-first to-second fw-[700] inline-block text-transparent bg-clip-text'>Our Philosophy</h1>
            <h1 className='font-sans text-start mt-[20px]'>Here at DKN Media, we've worked with the best in the industry to produce thousands of dollars in return on ad spend. We do away with the the inefficiencies & formalities that plague most agencies.</h1>
          <h1 className='font-sans text-start mt-[30px]'>Our client case studies have become myth, our waiting list is longer than your complaints with your current agency and we look for a very specific kind of client.</h1>
           </div>
           <div className='p-[60px] bg-gradient-to-r from-first to-second md:m-0 mt-[100px]'>
            <h1 className='text-3xl font-bold font-sans'>Maybe that’s you: it would be our honour to find out. Schedule your FREE discovery call below.</h1>
           <div className='bg-white md:w-3/5 text-center m-0 rounded-lg p-2 mt-[20px]'>
          <button className='text-xl bg-gradient-to-r from-first to-second fw-[700] font-bold inline-block text-transparent bg-clip-text'>Speak To Our Team Today</button>

           </div>
           </div>
        </div>
    );
};

export default PhilosophyContainer;