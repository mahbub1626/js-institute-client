import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const allCategory = useLoaderData();
    // console.log(allCategory)
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className=''>
                <h2>Choice favourite course from top category: {allCategory.length}</h2>
                <ul>
                    {
                        allCategory.map(category => <li
                            className='my-4 bg-lime-600 px-2 py-4'
                            key={category.id}>
                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                        </li>)
                    }
                </ul>

            </div>
            <div className='col-span-2 '>
                <div className='grid grid-cols-3 gap-3'>
                {
                    allCategory.map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default Courses;