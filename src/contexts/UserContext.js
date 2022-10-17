import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
   
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {user, createUser, signIn}
    return (
        <div>              
            <AuthContext.Provider  value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;