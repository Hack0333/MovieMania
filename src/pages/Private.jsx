import React from 'react'
import { useAuth } from '../context';
import { Navigate } from 'react-router';

const AuthPage = ({children}) => {

  const {user} = useAuth();
  
  if(user) return children;

  return <Navigate to={"/login" }/>
}

export default AuthPage;