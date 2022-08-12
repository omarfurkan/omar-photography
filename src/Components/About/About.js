import React from 'react';

const About = () => {

    return (
        <div className='my-background h-screen pb-12'>
            <div className='w-5/6 mx-auto'>
                <h1 className='text-center text-white text-4xl pt-8 pb-6 font-semibold'>About</h1>
                <hr className='w-1/12 mx-auto' />
                <div className='grid grid-cols-2 gap-8 items-center justify-center text-white mt-16'>
                    <div className=''>
                        <img className='w-[550px] border-2 p-5' src='https://img.freepik.com/free-photo/elegant-businessman-office_155003-9641.jpg?w=996&t=st=1660297507~exp=1660298107~hmac=e7d1c601907b7f3a53505a17ca5010142e38005f5e3f74232d1db588d05294c0' alt="" />
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Hi! This is Omar Furkan</p>
                        <p className='text-lg  pt-2'>A junior Front-end web developer with targeted gols and amibitions.The main objective when working as a developer is to be productive and deliver value to the company. As a developer, the aim is to build practica applicaions that will be 100% successsful. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;