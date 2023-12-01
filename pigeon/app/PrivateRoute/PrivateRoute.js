'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../Contexts/AuthContext';

const PrivateRoute = ({children}) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/sign-in'); // Redirect to sign-in if not authenticated
      }
    }, [isAuthenticated, router]);

    

    return children;
  
};

export default PrivateRoute;
