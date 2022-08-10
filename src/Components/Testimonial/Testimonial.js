import React from 'react';
import Slider from './Slider';

const Testimonial = () => {
    return (
        <div className='my-background text-white'>
            <div className='w-5/6 mx-auto'>
                <h2 className='text-center text-2xl font-semibold pt-24 pb-2'>Customar Says</h2>
                <hr className='w-1/12 mx-auto mb-6' />
                <Slider />
            </div>
        </div>
    );
};

export default Testimonial;