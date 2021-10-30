import initializeAuthentication from '../fireshop/firebase.initialize'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInusingGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)

        .catch(error => {
            setError(error.message)
        })
    }

    const logout = () =>{
        setIsLoading(true);
        signOut(auth)
          .then(() => {
            setUser({});
          })
          .finally(() => setIsLoading(false));
    };

    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
             setIsLoading(false);
        })
        return () => onAuthStateChanged;
    }, [auth]);

    return {
      user,
      isLoading,
      error,
      logout,
      setIsLoading,
      signInusingGoogle,
    };
}

export default useFirebase;