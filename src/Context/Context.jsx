import React, { createContext } from 'react';
import app from '../Firebase/Firebase';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const Context = ({ children }) => {

    const [user, setUser] = React.useState(null);

    const [show, setShow] = React.useState(false);
    
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const sign_out = () => {
        return signOut(auth);
    }

    const auth_info = { user, show, setShow, login, sign_out }

    React.useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={auth_info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;