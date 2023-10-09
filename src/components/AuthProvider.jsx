// AuthProvider.js
/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                return updateProfile(userCredential.user, { photoURL }).then(
                    () => {
                        setUser(userCredential.user);
                    }
                );
            }
        );
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log("observing current user", currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut,
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
