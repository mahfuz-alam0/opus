import React, { createContext } from 'react';

export const AuthContext = createContext();

const Context = ({ children }) => {

    const [show, setShow] = React.useState(false);
    
    const auth_info ={show, setShow}
    return (
        <AuthContext.Provider value={auth_info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;