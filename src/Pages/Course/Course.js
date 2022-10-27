import React from 'react';
import { FaDownload, FaDownloadAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const courses = useLoaderData();
    // console.log(courses)
    const { _id, title, details, img, rating } = courses;

    return (

        <div className='mt-4'>

            <div className='bg-lime-50 p-4'>
                <p>Dowload: <FaDownload className='' /></p>
            </div>
            <div className="card bg-base-100 shadow-xl mt-4">
                <figure><img className='w-full' src={img} alt="img" /></figure>
                <div className="card-body">
                    <div className='block'>
                        <div className='d-block'>
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                        </div>
                        {/* <div>
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
                        </div> */}
                    </div>
                    <div className="card-actions justify-between">
                        <div>
                            <p className='d-block'>Rating: </p>
                            <progress className="progress progress-primary lg:w-48" value={rating.number} max="5"></progress>
                            <p>{rating.badge}</p>
                        </div>
                        <div>
                            <Link to='/premium' className="btn btn-primary">Get premium access.</Link>

                        </div>
                    </div>

                </div>
            </div>



        </div>

    );
};

export default Course;