import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleName = e => {
        setName(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (password == confirmPassword) {
            createUserWithEmailAndPassword(email, password)
        }

    }
    if (loading) {
        return <Loading />
    }


    console.log(name, email, password, confirmPassword)



    return (
        <div className='my-background h-full' >
            <div className='w-3/6 mx-auto pt-20 pb-20'>
                <div className='border-2'>
                    <p className='text-white text-center'>logo</p>
                    <form onSubmit={handleSubmit} className='p-8'>
                        <input onBlur={handleName} className='w-full mb-4 py-3 pl-4 text-lg' type="text" name="name" id="" placeholder='Name' />
                        <br />
                        <input onBlur={handleEmail} className='w-full mb-4 py-3 pl-4 text-lg' type="email" name="email" id="" placeholder='Email' required />
                        <br />
                        <input onBlur={handlePassword} className='w-full mb-4 py-3 pl-4 text-lg' type="password" name="" id="" placeholder='Password' required />
                        <br />
                        <input onBlur={handleConfirmPassword} className='w-full mb-4 py-3 pl-4 text-lg' type="password" name="" id="" placeholder='Confirm Password' required />
                        <br />

                        {password != confirmPassword ? <p className='text-red-400 mb-2'>Password did not match </p> : ''}
                        {error ? <p className='text-red-400 mb-2'>{error.message}</p> : ''}

                        <input className='w-full bg-white text-black font-bold py-3 font bold text-xl' type="submit" value="Sign up" />
                    </form>
                    <div className='flex items-center gap-4 w-11/12 mx-auto mb-2'>
                        <hr className='h-2 w-5/6' />
                        <p className='text-center text-white'>Or</p>
                        <hr className='h-2 w-5/6' />
                    </div>
                    <SocialLogin />
                </div>
                <hr className='w-full h-1 my-8' />

                <p className='text-white text-xl text-center'>Have an account?</p>
                <button onClick={() => navigate('/login')} className='mx-auto block border-2 py-4 w-full text-white font-bold mt-4'>Login for OmarPhotography</button>

            </div>
        </div >
    );
};

export default Signup;