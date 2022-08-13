import React from 'react';

const Blog = ({ blog }) => {
    const { ques, ans, img } = blog;
    return (
        <div className='md:flex xl:flex items-center justify-center gap-8 md:gap-4 mt-4'>
            <div className='h-60  border-2 mt-8 xl:mt-0'>
                <img className='w-full md:w-[900px] xl:w-[1000px] h-60 p-4' src={img} alt="" />
            </div>
            <div className='text-white mt-4 xl:mt-0'>
                <h2 className='text-xl font-semibold mb-2'>{ques}</h2>
                <p>{ans}</p>
            </div>

        </div>
    );
};

export default Blog;