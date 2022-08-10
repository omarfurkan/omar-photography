import React from 'react';
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { id, name, price, img, description } = service
    const navigate = useNavigate();
    return (
        <div className='border-2 my-4 h-96 relative'>
            <div className='my-8  '>
                <img className='w-16 mx-auto border-2 p-2' src={img} alt="" />
            </div>
            <div className='text-center'>
                <h3 className='text-2xl my-2'>{name}</h3>
                <p className='mb-2 text-lg'>Price Starts at  <span className='font-bold'> ${price}</span></p>
                <p className='mb-4 px-2'>{description}</p>
                <button onClick={() => navigate('/checkout')} className='absolute bottom-3
                 left-32 border-2 py-1 px-4'> button</button>
            </div>
        </div>
    );
};

export default Service;