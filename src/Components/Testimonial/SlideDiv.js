import React from 'react';

const SlideDiv = ({ img }) => {
    return (
        <div className='my-4  bg-[#595959] h-68 xl:h-60 md:mr-5 xl:mx-12 mb-20'>
            <div className='p-2 xl:p-4 text-center mx-auto'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse tempora allat odit doloremque provident perspiciatis, ipsum ex?</p>
                <div className='flex flex-col  xl:flex-row items-center justify-around text-white'>
                    <div className='my-2 mr-4 border-2  p-2 '>
                        <img className='w-20 h-20  ' src={img} alt="" />
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