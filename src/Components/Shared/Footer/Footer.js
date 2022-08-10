import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-black text-white pt-8 '>
            <div className='w-5/6 mx-auto mt-12 mb-20'>
                <div className='grid grid-cols-4'>

                    <div>
                        <p>logo</p>
                        <p>124 20th Street NW. Sute 400
                            <br />
                            Chittagong, Bangladesh
                        </p>
                        <p>info@gmail.com</p>
                        <p>012345789</p>
                    </div>

                    <div>
                        <p>Company</p>
                        <p> <Link to='/about'>About Us</Link></p>
                        <p> <Link to='/about'>Careers</Link></p>
                        <p> <Link to='/about'>Contact</Link></p>
                    </div>

                    <div>
                        <p>Our Service</p>
                        <p><Link to='/'>Commercial Photography</Link></p>
                        <p> <Link to='/'>Event Photography</Link></p>
                        <p> <Link to='/'>Lifestyle Photography</Link></p>
                    </div>
                    <div>
                        <p>Follow Us</p>
                        <div className='mt-4'>
                            <div className='flex gap-4 items-center '>
                                <button><BsFacebook className='text-4xl' /></button>
                                <button><BsFacebook className='text-4xl' /></button>
                                <button><BsFacebook className='text-4xl' /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <p className='text-center'>&#8364;copyright@2022 | All right reserved | OmarPhotography</p>
        </div>
    );
};

export default Footer;