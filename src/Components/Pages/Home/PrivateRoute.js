import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import { AuthContext } from '../../Contexts/UseContexts';


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div className='text-3xl text-white text-center'>....Loading</div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;