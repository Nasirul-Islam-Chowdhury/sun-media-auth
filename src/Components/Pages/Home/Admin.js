import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/IMG-20230210-WA0107.jpg'
const Admin = () => {
    return (
        <div className='bg-background min-h-screen text-white '>
            <h2 className='font-sans bg-gradient-to-r from-first to-second fw-[700] font-bold text-transparent bg-clip-text text-center text-2xl md:text-4xl py-8'>Hey there! Welcome to admin</h2>
            <div className='md:flex items-center justify-center gap-28 mt-14 md:px-52'>
                <div>
                    <img src={img} className="h-[300px] md:w-[800px] rounded-xl mx-auto" alt="" />
                </div>
                <div className='md:m-0 mt-4 px-4 pb-4'>
                    <h1 className='text-2xl font-bold font-sans mb-4'>Build Climber and Train Stopper</h1>
                    <p>You might saw me jumping, climbing buildings, and stopping trains. But nobody pays me a dime for that work. That's why I am learning and mastering web development. I will not stop until I become the Web Development Hero.</p>
                    <Link to="https://www.facebook.com/nic.nasirchy.3"><button className='btn mt-4 bg-gradient-to-r from-first to-second px-6 rounded-md py-2 text-white'>Hire Me</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Admin;