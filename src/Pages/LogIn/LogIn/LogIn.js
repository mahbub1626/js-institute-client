import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {
const {userLogIn} = useContext(AuthContext);


const handleSUbmit = event =>{
    event.preventDefault();
    console.log(event.target)
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogIn(email, password)
    .then(result=>{
        const user = result.user;
        console.log(user);
    })
    .catch(e => console.error(e))
}

    return (
        <div className='w-80 mt-10 p-4 bg-yellow-300 mx-auto rounded-md'>
        <h2 className='text-2xl text-center my-2'>Please Login</h2>
        <form onSubmit={handleSUbmit}>
          <div className=''>
            <label className='block text-lg mb-2' htmlFor="email">Enter Email</label>
            <input className='w-full py-3 px-4 rounded-md mb-3' type="email" name="email" id="email" />
          </div>
          <div className=''>
            <label className='block text-lg mb-2' htmlFor="password">Enter password</label>
            <input className='w-full py-3 px-4 rounded-md mb-3' type="password" name="password" id="password" />
          </div>
  
          {/* <button type="submit"></button> */}
  
          <div className='ml-24'>
            <input className='btn mt-4 px-6' type="submit" value="login" />
          </div>
  
        </form>
  
        <div>
          <small className='text-center '>Are new here? <Link to='/register'>register</Link></small>
        </div>
      </div>
    );
  };

export default LogIn;