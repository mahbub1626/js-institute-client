import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    console.log(course)
    const {id, name} = course;

    return (

        <div>
            
            <Link to={`/courses/${id}`} className="card lg:w-80 lg:h-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between">
                        <button className="">$123</button>
                        <Link to={`/courses/${id}`} className='btn'>Buy now</Link>
                    </div>
                </div>
            </Link>
            
        </div>

    );
};

export default CourseCard;