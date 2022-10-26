import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftCourseList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h2>All categories : {categories.length}</h2>
            <div>
                {
                    categories.map(category => <p
                        className='my-4 bg-lime-600 px-2 py-4'
                        key={category.id}>
                        <Link to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftCourseList;