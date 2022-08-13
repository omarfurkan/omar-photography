import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, FbUser, FbLoading, FbError] = useSignInWithFacebook(auth);
    const [signInWithGithub, GitUser, GitLoading, GitError] = useSignInWithGithub(auth);
    const googleLogin = () => {
        signInWithGoogle()
    }
    const facebookLogin = () => {
        signInWithFacebook()
    }
    const gitLogin = () => {
        signInWithGithub()
    }

    return (
        <div className=' p-2 md:p-8 lg:p-8'>
            <button onClick={facebookLogin} className=' w-full bg-white mt-4  py-4 font-bold flex items-center justify-center'> <FaFacebookF className='mr-6 text-4xl' />Continue With FACEBOOK</button>
            <button onClick={gitLogin} className=' w-full bg-white mt-4  py-4 font-bold flex items-center justify-center'><AiFillGithub className='mr-6 text-4xl' /> Continue With GITHUB</button>
            <button onClick={googleLogin} className=' w-full bg-white mt-4 py-4 font-bold flex items-center justify-center'><BsGoogle className='mr-6 text-4xl' /> Continue With GOOGLE</button>
            {/* {error ? <p className='text-red-400 mt-2'>{error.message}</p> : ''} */}
        </div>
    );
};

export default SocialLogin;