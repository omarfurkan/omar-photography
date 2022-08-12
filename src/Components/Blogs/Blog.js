import React from 'react';

const Blog = ({ blog }) => {
    const { ques, ans, img } = blog;
    return (
        <div className='flex items-center justify-center gap-8 mt-4'>
            <div className='h-60 border-2'>
                <img className='w-[1000px] h-60 p-4' src={img} alt="" />
            </div>
            <div className='text-white'>
                <h2 className='text-xl font-semibold mb-2'>{ques}</h2>
                <p>{ans}</p>
            </div>

        </div>
    );
};

export default Blog;