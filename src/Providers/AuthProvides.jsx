/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)

const AuthProvides = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            const userEmail= currentUser?.email || user?.email;
            const loggeedUser={email:userEmail}
            console.log(currentUser);
            setLoading(false)
            // if user exists
            if(currentUser){
                axios.post('http://localhost:5000/jwt',loggeedUser, {withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
            }else{
                axios.post('http://localhost:5000/logout', loggeedUser, {withCredentials:true} )
                .then(res=>{
                    console.log('logOut',res.data);
                })
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        signup,
        createLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvides;