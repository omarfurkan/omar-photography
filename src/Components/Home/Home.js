import React from 'react';
import Banner from '../../Images/banner.png'
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <div className='relative block'>
                <img className='block' src={Banner} alt="" />
            </div>
            <div className='absolute lg:top-96 xl:top-[450px] lg:left-48 xl:left-96'>
                <h1 className='text-4xl text-white'>Creating Moments by Click </h1>
                <p className='text-white lg:w-3/6 xl:w-4/6 mt-4'>Omar Photogray is an individual photographer, provide service in any kind of occations with personal interaction with care and support</p>
                <button className='border text-white mt-8 py-1 px-4'>Button</button>
            </div>
            <Services />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;