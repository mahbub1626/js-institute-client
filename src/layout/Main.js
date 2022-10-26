import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div className='container mx-auto px-8'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;