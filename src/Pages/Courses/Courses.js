import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const allCategory = useLoaderData();
    // console.log(allCategory)
    return (
        <div className='grid lg:grid-cols-3 gap-4'>
                    {
                        allCategory.map(course => <CourseCard
                            key={course._id}
                            course={course}
                        ></CourseCard>
                        )
                    }
                </div>
    );
};

export default Courses;