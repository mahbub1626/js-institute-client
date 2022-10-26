import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftCourseList from '../Pages/Shared/LeftCourseList/LeftCourseList';

const Main = () => {
    return (
        <div className='container mx-auto px-8'>
            <Header></Header>
            <div className='grid grid-cols-3 gap-4'>
                <div className='bg-pink-50 p-5'>
                    <LeftCourseList></LeftCourseList>
                </div>
                <div className='col-span-2'>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Main;