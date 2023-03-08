import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const UseContexts = ({ children }) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignup = () => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
    },[])
    const authInfo = { signUp, googleSignup, signin, logOut, user };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContexts;