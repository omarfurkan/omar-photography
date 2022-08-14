import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PageLayout = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Header />
            <Outlet />

        </div>
    );
};

export default PageLayout;