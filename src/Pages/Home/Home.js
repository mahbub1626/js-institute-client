import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    // const allCategory = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className=''>
                <h2>Course List</h2>
                <div>
                    {/* {
                        allCategory.map(category => <p key={category.id}>
                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                        </p>)
                    } */}
                </div>

            </div>
            <div className='col-span-2 '>
                <h2>right side</h2>
            </div>
        </div>
    );
};

export default Home;