import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    console.log(course)
    const {_id, title, course_fee, img } = course;

    return (

        <div>
            
            <Link to={`/courses/${_id}`} className="card lg:w-80 lg:h-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>It's high time to learn {title}.</p>
                    <div className="card-actions justify-between">
                        <button className="">{course_fee}</button>
                        <Link to={`/courses/${_id}`} className='btn'>Details</Link>
                    </div>
                </div>
            </Link>
            
        </div>

    );
};

export default CourseCard;