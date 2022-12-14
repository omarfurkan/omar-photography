import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../Images/banner.png'
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='relative block'>
                <img className='block' src={Banner} alt="" />
            </div>
            <div className='absolute top-32 md:top-60 lg:top-72 xl:top-[550px] left-10 md:left-32 lg:left-48 xl:left-96'>
                <h1 className='text-xl xl:text-4xl text-white'>Creating Moments by Click </h1>
                <p className=' text-white text-sm xl:text-xl w-11/12 md:w-4/6 lg:w-3/6 xl:w-3/6 mt-4'>Omar Photogray is an individual photographer, provide service in any kind of occations with personal interaction with care and support</p>
                <button onClick={() => navigate('/blog')} className='border text-white mt-3 md:mt-6 xl:mt-8 py-1 px-4'>Blog</button>
            </div>
            <Services />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;