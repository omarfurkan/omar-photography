import React from 'react';

const SlideDiv = ({ img }) => {
    return (
        <div className='my-4  bg-[#595959] h-60 mr-6 mb-40'>
            <div className='p-4 text-center my-4'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse tempora allat odit doloremque provident perspiciatis, ipsum ex?</p>
                <div className='flex items-center text-white'>
                    <div className='my-2 mr-4'>
                        <img className='w-24 rounded-full' src={img} alt="" />
                    </div>
                    <div>
                        <h3 className='text-lg font-bold'> Johne Due</h3>
                        <p>Co-founder of Miston Co.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideDiv;