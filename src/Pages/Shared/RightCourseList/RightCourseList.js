import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightCourseList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://js-institute-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className=''>
            <h2 className='text-2xl text-center'>Get a course of your choice.</h2>
            <div>
                {
                    categories.map(category => <Link
                        to={`/courses/${category.id}`}
                        className='my-4'
                        key={category.id}>
                        <p className=' border-2 border-indigo-600 text-center rounded-md lg:w-96 my-4 mx-auto lg:py-4 lg:px-2'>
                            {category.name}
                        </p>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default RightCourseList;