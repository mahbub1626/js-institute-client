import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithubAlt, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const LogIn = () => {
  const { userLogIn, providerLogIn, setLoading } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();



  const [error, setError] = useState('')
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const navigate = useNavigate();


  const handleSUbmit = event => {
    event.preventDefault();
    console.log(event.target)
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset()
      if(user.emailVerified){
          navigate(from, {replace: true})
      }else{
          alert('Your mail is not varifyed, please verify.')
      }
      
  })
  .catch(e => {
      console.error(e)
      setError(e.message)
  })
  .finally(()=>{
      setLoading(false);
  })

}

  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
  }

  const handleGitHubSignIn = () => {
    providerLogIn(gitHubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
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

      <div className='mt-3'>
        <button onClick={handleGoogleSignIn} className="btn gap-2 mb-3 w-full">
          <FaGoogle /> SignIn with Google
        </button>
        <button className="btn gap-2 mb-3 w-full">
          <FaFacebook /> SignIn with Facebook
        </button>
        <button onClick={handleGitHubSignIn} className="btn gap-2 mb-3 w-full">
          <FaGithubAlt /> SignIn with GitHub
        </button>
      </div>
      <div>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default LogIn;