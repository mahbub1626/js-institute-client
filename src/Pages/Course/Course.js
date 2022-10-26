import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courses = useLoaderData();
    console.log(courses)
    const { id, title, details } = courses;

    return (

        <div>


            <div className="card bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='block'>
                        <div className='d-block'>
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Course;