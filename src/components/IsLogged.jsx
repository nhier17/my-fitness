import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Navigate } from 'react-router-dom';

const IsLogged = ({ children }) => {
    const { userInfo } = useStateContext();
    if (!userInfo) {
        return <Navigate to="/login" />;
    }
  return children
}

export default IsLogged