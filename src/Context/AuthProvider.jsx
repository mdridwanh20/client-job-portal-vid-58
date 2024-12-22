import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../Firebase/Firebase.config'


export default function AuthProvider({children}) {

    const [user, setUser] = useState(null)
    console.log(user);
    
    const [loading, setLoading] = useState(true)


    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () =>{
        return signOut(auth)
    }
    

    const authInfo ={
        user, 
        setUser, 
        loading, 
        setLoading, 
        createNewUser,
        loginUser,
        signOutUser
    }

    useEffect(() =>{
      const unsubscribe = onAuthStateChanged (auth, (currentUser) =>{
        setUser(currentUser)
        setLoading(false)
      })
      return  () =>{
          unsubscribe()
      }
    },[])

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
