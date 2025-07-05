import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

export const CreatContext = createContext()
const Context = ({children}) => {

    const [user, setUser] = useState(null)



    //Storage Set
     const [adoptions, setAdoptions] = useState([]);

  const addAdoption = (pet) => {
    setAdoptions((prev) => [...prev, pet]);
  };

  const deleteAdoption = (index) => {
    setAdoptions((prev) => prev.filter((_, i) => i !== index));
  };


    //Create User
    const signIn = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    //Login user
    const logins = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //AuthChanged
    useEffect(()=>{
        const notChanged = onAuthStateChanged(auth, (currentUSer)=>{
            setUser(currentUSer)
        })
        return()=>{
            notChanged()
        }
    },[])


    //Log Out
    const logOuts = ()=>{
        return signOut(auth)
    }


    const info = {
        signIn,
        logins,
        user,
        logOuts,
        deleteAdoption,
        addAdoption,
        adoptions
    }





    return (
        <CreatContext.Provider value={info}>
            {children}
        </CreatContext.Provider>
    );
};

export default Context;