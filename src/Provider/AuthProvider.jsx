import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleSignIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
    const handleCreateUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleSignIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            // get and set token
            if(currentUser){
                axios.post('https://summer-camp-server-darkasfu.vercel.app/jwt', {email: currentUser.email})
                .then(data => {
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        })
        return () =>{
            return unsubscribe();
        }
    }, [])

    const updateInfo = (name, photo) =>{
        console.log(name, photo)
        return updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL:`${photo}`
        }).then(() => {
            console.log('meo')
        }).catch((error) => {
            console.error(error);
        });
    
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        googleSignIn,
        handleCreateUser,
        handleSignIn,
        updateInfo,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;