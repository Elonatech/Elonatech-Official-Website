import React from 'react';
import { Navigate , useLocation} from 'react-router-dom'

const PrivateRoute = ({ children }) => {
     const { pathname } = useLocation();
    const auth = JSON.parse(localStorage.getItem('token'));
    
    if (auth) {
      return children;
    }
    
    return <Navigate to='/login' state={{ path: pathname }}/>;
  };

export default PrivateRoute;
