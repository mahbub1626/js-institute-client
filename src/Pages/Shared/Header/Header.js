import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className='container lg:mx-auto'>
            <div className="navbar bg-lime-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">JS Institute</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>

                {/* dark/light */}
                <div className="form-control">
                    <label className="label cursor-pointer">
                        {/* <span className="label-text">Remember me</span> */}
                        <input type="checkbox" className="toggle toggle-primary"  />
                    </label>
                </div>
                <div className="navbar-end">
                    {/* {user?.email} */}
                    {user?.uid ?
                        <>
                            {/* {user?.displayName} */}
                            <Link onClick={handleLogOut} className="btn btn-xs mr-3">LogOut</Link>
                        </>
                        :
                        <>
                            <Link to='/login' className="btn btn-xs ">Login</Link>
                            <Link to='/register' className="btn btn-xs mx-3">Register</Link>
                        </>
                    }
                </div>
                {/* avater */}
                <div className=" dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-circle avatar">
                        <div className="rounded-full">
                            {user?.photoURL ?
                                // <img src="https://placeimg.com/80/80/people" />
                                <img src={user.photoURL} alt="" />
                                :
                                <FaUserAlt className='w-100%'></FaUserAlt>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <div className="navbar-end">
                            {/* {user?.email} */}
                            {user?.uid ?
                                <>
                                    {/* {user?.displayName} */}
                                    <li><Link onClick={handleLogOut} className="">LogOut</Link></li>
                                </>
                                :
                                <>
                                    <li> <Link to='/login' className=" ">Login</Link></li>
                                    <li> <Link to='/register' className="">Register</Link></li>
                                </>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;