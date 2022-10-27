import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const user = { displayName: 'Anan' }
    const [user, setUser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("light")

    const providerLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(user, profile);
    }
    const sendEmailVerify = ()=>{
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    }

    const handleTheme = () => {
        setLoading(true);
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user changed:', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        providerLogIn,
        createUser,
        userLogIn,
        logOut,
        updateUserProfile,
        sendEmailVerify,
        loading,
        setLoading,
        handleTheme,
        theme
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;