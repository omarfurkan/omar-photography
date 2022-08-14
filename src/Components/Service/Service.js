import React from 'react';
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { id, name, price, img, description } = service
    const navigate = useNavigate();
    return (
        <div className='border-2 my-4 h-[430px] md:h-96 relative'>
            <div className='mt-8 mb-4 '>
                <img className='w-52 h-32 mx-auto border-2 p-2 text-white' src={img} alt="" />
            </div>
            <div className='text-center'>
                <h3 className='text-2xl'>{name}</h3>
                <p className='mb-2 text-lg'>Price Starts at  <span className='font-bold'> ${price}</span></p>
                <p className='mb-4 px-2'>{description}</p>
                <button
                    onClick={() => navigate(`/checkout/${id}`)}
                    className='absolute  bottom-3 
                 left-32 md:left-28 lg:left-44 xl:left-52 border-2 py-1 px-4'
                > Checkout</button>
            </div>
        </div>
    );
};

export default Service;