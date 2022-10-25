import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const user = { displayName: 'Sinan' }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const authInfo = { user, createUser, userLogIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;