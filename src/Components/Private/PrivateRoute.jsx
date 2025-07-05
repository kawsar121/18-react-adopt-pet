import React, { useContext } from 'react';
import { CreatContext } from '../ContextApiSet/Context';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(CreatContext)
    if(user){
        return children
    }
    else{
        alert('Please Login')
    }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;