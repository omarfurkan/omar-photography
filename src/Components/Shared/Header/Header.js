import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='xl: w-5/6 mx-auto'>
            <nav className='flex justify-between'>
                <div ><h4>img</h4></div>
                <div>
                    <Link to='/'>Home</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;