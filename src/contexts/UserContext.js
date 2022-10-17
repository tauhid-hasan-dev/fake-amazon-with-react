import React, { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const user = {email: 'abc'}
    const authInfo = {user}
    return (
        <div>              
            <AuthContext.Provider  value={authInfo}>
               {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default UserContext;