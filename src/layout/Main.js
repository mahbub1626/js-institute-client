import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import RightCourseList from '../Pages/Shared/RightCourseList/RightCourseList';

const Main = () => {
    return (
        <div className='container mx-auto lg:px-8'>
            <Header></Header>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                
                <div className='col-span-2'>
                    <Outlet></Outlet>
                </div>
                <div className='bg-lime-50 lg:p-4 rounded-md'>
                    <RightCourseList></RightCourseList>
                </div>
            </div>

        </div>
    );
};

export default Main;