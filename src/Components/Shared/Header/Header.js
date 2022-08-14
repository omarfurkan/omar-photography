import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../../Loading/Loading';
import { ImCamera } from 'react-icons/im';
import CustomLink from '../../CustomLink/CustomLink';


const Header = () => {
    const [user, loading, error] = useAuthState(auth,);

    // const logOut = () => {
    //     signOut(auth)
    // }


    if (loading) {
        return <Loading />
    }
    return (
        <div className='bg-black text-white py-6'>
            <div className='xl: w-5/6 mx-auto bg-black text-white'>
                <nav className='flex justify-between items-center'>
                    <div ><p className='text-center text-4xl'><ImCamera /></p></div>
                    <div className='flex gap-4'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/blog'>Blog</CustomLink>
                        <CustomLink to='/about'>About</CustomLink>
                        <CustomLink to='/contact'>Contact</CustomLink>
                        {user ?
                            <button onClick={() => signOut(auth)}>SignOut</button> :
                            <Link to='/login'>Login</Link>
                        }
                        {loading && <Loading />}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;