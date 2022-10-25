import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);


  const handleSUbmit = event => {
    event.preventDefault();
    // console.log(event.target)
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(e => console.error(e))
  }

  return (
    <div className='w-80 mt-10 p-4 bg-yellow-300 mx-auto rounded-md'>
      <h2 className='text-2xl text-center my-2'>Please Register</h2>
      <form onSubmit={handleSUbmit}>
        <div className=''>
          <label className='block text-lg mb-2' htmlFor="name">Name</label>
          <input className='w-full py-3 px-4 rounded-md mb-3' type="text" name="name" id="name" />
        </div>
        <div className=''>
          <label className='block text-lg mb-2' htmlFor="photo">Photo</label>
          <input className='w-full py-3 px-4 rounded-md mb-3' type="photo" name="photoURL" id="photo" />
        </div>
        <div className=''>
          <label className='block text-lg mb-2' htmlFor="email">Enter Email</label>
          <input className='w-full py-3 px-4 rounded-md mb-3' type="email" name="email" id="email" />
        </div>
        <div className=''>
          <label className='block text-lg mb-2' htmlFor="password">Enter password</label>
          <input className='w-full py-3 px-4 rounded-md mb-3' type="password" name="password" id="password" />
        </div>

        {/* <button type="submit"></button> */}

        <div className='ml-20'>
          <input className='btn mt-4 px-6' type="submit" value="Register" />
        </div>

      </form>

      <div>
        <small className='text-center '>Already have an account? <Link to='/login'>Login</Link></small>
      </div>
    </div>
  );
};

export default Register;