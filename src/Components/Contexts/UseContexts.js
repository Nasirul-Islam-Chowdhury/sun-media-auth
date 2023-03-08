import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const UseContexts = ({ children }) => {
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
    const authInfo = { signUp, googleSignup, signin, logOut };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContexts;