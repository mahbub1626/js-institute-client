import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    // console.log(course)
    const {_id, title, course_fee, img, total_student } = course;

    return (

        <div>
            
            <Link to={`/courses/${_id}`} className="card lg:w-80 lg:h-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>It's high time to learn {title}.</p>
                    <div className="card-actions justify-between">
                        <div>
                        <p className="">{course_fee}</p>
                        <p className="">Enroll: {total_student}</p>

                        </div>
                        <Link to={`/courses/${_id}`} className='btn'>Details</Link>
                    </div>
                </div>
            </Link>
            
        </div>

    );
};

export default CourseCard;