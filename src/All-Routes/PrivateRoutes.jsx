import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

export default function PrivateRoutes({children}) {

    const {user, loading, setLoading, } = useContext(AuthContext)
    const location = useLocation();

    console.log(location);
    


    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children;
    }

  return <Navigate to='/login' state={location?.pathname}></Navigate>
}
