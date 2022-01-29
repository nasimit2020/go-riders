import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();

    return loggedInUser.email ? <Outlet /> : <Navigate to="/signup" replace state={{ from: location }}/>
};
export default PrivateRoute;