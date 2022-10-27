import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log('profile section',user);
   
    return (
        <div>
            <h2>This is user profile</h2>
            <img src={user?.photoURL} alt="" />
            <h2>{user?.displayName}</h2>


        </div>
    );
};

export default Profile;