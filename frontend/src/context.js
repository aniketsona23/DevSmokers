// AuthProvider.js - where you manage authentication state
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebase'; // Assuming you have Firebase authentication set up

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userRole, setUserRole] = useState(null); // New state to store user role

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            if (user) {
                // Fetch user role from your database or Firebase Firestore
                // and set it in the application state
                // For example, you can query a 'users' collection based on the user's UID
                // and retrieve the role field
                // setUserRole(role);
            }
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userRole,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
