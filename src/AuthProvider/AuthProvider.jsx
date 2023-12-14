import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import auth from "../firebase/firebase.config";




export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
         return createUserWithEmailAndPassword (auth, email, password);
        
         
    }
    const update2DateUserProfile = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName:name
        })
        .then(()=> {
            console.log('User profile updated')
            
        })
        .catch((error) => console.log(error.message))
    }
   
    const loginUser = ( email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,  email, password);
    }

    useEffect(()=>{
        
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{

            setUser(currentUser)
            setLoading(false);
        } )
        return () => {
            unSubscribe();
        }

    },[])

    const logOut = () => {
        return signOut(auth);
    }

  
    const authInfo = {
        user,
        loading,
        createUser, 
        loginUser, 
        logOut, 
        update2DateUserProfile
    }
    return (
      <AuthContext.Provider value={authInfo}>
        { children}
      </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;