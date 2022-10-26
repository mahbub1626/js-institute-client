import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftCourseList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://js-institute-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch( error => console.error(error))
    }, [])

    return (
        <div className=''>
            <h2>All categories : {categories.length}</h2>
            <div>
                {
                    categories.map(category => <p
                        className='my-4'
                        key={category.id}>
                        <Link to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftCourseList;