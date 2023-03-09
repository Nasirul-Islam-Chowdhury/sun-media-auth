import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-image.png'
import { AuthContext } from '../../Contexts/UseContexts';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='md:px-[80px] px-[20px] bg-background  pb-[125px] md:flex justify-between items-center'>
            <div className='flex flex-col'>
                <div className='md:text-3xl mb-4 text-xl mt-2 font-sans bg-gradient-to-r from-first to-second fw-[700] font-bold inline-block text-transparent bg-clip-text leading-tight'>{user?.uid? <p>Welcome back {user.displayName}</p> : ''}</div>
                <h1 className='md:text-7xl text-5xl font-sans bg-gradient-to-r from-first to-second fw-[700] font-bold inline-block text-transparent bg-clip-text leading-tight'>Skyrocket Your</h1>
                <h1 className='md:text-7xl text-5xl font-sans bg-gradient-to-r from-first to-second fw-[700] font-bold inline-block text-transparent bg-clip-text'>Potential!</h1>
                <div  className='py-[40px] text-white font-sans'>
                <p>We Help E-commerce & Info Product Businesses Produce</p>
                <p >Spine-Chilling ROI Via Paid Advertising</p>
                </div>
            <Link to='/register'>
            <button className='btn w-[287px] rounded-xl p-3 text-white text-center bg-gradient-to-r from-first to-second font-bold'>Register Now!</button>
            </Link>
            </div>
            <div>
                <img className='w-[433px] h-[433px]' src={heroImage} alt="ghjkhjk" />
            </div>
        </div>
    );
};

export default Home;