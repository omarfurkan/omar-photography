import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../../Loading/Loading';


const Header = () => {
    const [user, loading, error] = useAuthState(auth,);

    // const logOut = () => {
    //     signOut(auth)
    // }


    if (loading) {
        return <Loading />
    }
    return (
        <div className='bg-black text-white py-4'>
            <div className='xl: w-5/6 mx-auto bg-black text-white'>
                <nav className='flex justify-between'>
                    <div ><h4>img</h4></div>
                    <div className='flex gap-4'>
                        <Link to='/'>Home</Link>
                        {user ?
                            <button onClick={() => signOut(auth)}>SignOut</button> :
                            <Link to='/login'>Login</Link>
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;