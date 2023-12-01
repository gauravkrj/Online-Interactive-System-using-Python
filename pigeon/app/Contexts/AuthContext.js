'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'; 
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  const login = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);

   // Cookies.set('jwtToken',  { expires: 7 });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole('');
    //Cookies.remove('jwtToken');
  };


  useEffect(() => {
    const storedToken = Cookies.get('jwtToken');
    if (storedToken) {
      try {
        const decodedToken = jwt_decode(storedToken);
        setIsAuthenticated(true);
        setUserRole(decodedToken.role);
      } catch (error) {
        console.error('Error decoding token:', error);
        // Handle the error, e.g., log out the user or show an error message
      }
  }},[]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);