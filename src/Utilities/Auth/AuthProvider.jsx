import React, { Children, createContext } from 'react';
  export const AuthContext = createContext();
const AuthProvider = ({children}) => {
 
    const userInfo ={
 "akash": "goat"
    }
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;