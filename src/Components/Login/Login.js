import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../firebase.init'
import { useState } from 'react';
import Loading from '../Loading/Loading';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);



    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (!user) {
            signInWithEmailAndPassword(email, password)
        }
        navigate(from, { replace: true })

    }



    if (loading) {
        return <Loading />
    }



    return (
        <div className='my-background h-full' >
            <div className='w-3/6 mx-auto pt-20 pb-20'>
                <div className='border-2'>
                    <p className='text-white text-center'>logo</p>
                    <form onSubmit={handleSubmit} className='p-8'>


                        <input onBlur={handleEmail} className='w-full mb-4 py-3 pl-4 text-lg' type="email" name="email" id="" placeholder='Email' required />
                        <br />
                        <input onBlur={handlePassword} className='w-full mb-4 py-3 pl-4 text-lg' type="password" name="" id="" placeholder='Password' required />
                        <br />



                        {error ? <p className='text-red-400 mb-2'>{error.message}</p> : ''}

                        <input className='w-full bg-white text-black font-bold py-3 font bold text-xl' type="submit" value="Log In" />
                    </form>
                    <div className='flex items-center gap-4 w-11/12 mx-auto mb-2'>
                        <hr className='h-2 w-5/6' />
                        <p className='text-center text-white'>Or</p>
                        <hr className='h-2 w-5/6' />
                    </div>
                    <SocialLogin />
                </div>
                <hr className='w-full h-1 my-8' />

                <p className='text-white text-xl text-center'>Don't have an account?</p>
                <button onClick={() => navigate('/signup')} className='mx-auto block border-2 py-4 w-full text-white font-bold mt-4'>Sign Up for OmarPhotography</button>

            </div>
        </div >
    );
};

export default Login;





