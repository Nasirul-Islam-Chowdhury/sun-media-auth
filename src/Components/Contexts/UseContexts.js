import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const UseContexts = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignup = () => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unSuscribed = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>unSuscribed;
    },[])
    const authInfo = { signUp, googleSignup, signin, logOut, user, loading };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContexts;