import React from 'react';

const LogIn = () => {
const handleSUbmit = event =>{
    event.preventDefault();
    console.log(event.target)
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
}

    return (
        <div className='w-80 mt-10 p-4 bg-yellow-100 mx-auto'>
            <h2 className='text-2xl text-center'>Please Login</h2>
            <form onSubmit={handleSUbmit}>
                <div className=''>
                    <label className='block' htmlFor="email">Enter Email</label>
                    <input className='w-full py-3 px-4' type="email" name="email" id="" />
                </div>
                <div className=''>
                    <label className='block' htmlFor="password">Enter password</label>
                    <input className='w-full py-3 px-4' type="password" name="password" id="" />
                </div>

                {/* <button type="submit"></button> */}

                <input className='btn mt-4 px-6' type="submit" value="Login" />


            </form>
        </div>
    );
};

export default LogIn;