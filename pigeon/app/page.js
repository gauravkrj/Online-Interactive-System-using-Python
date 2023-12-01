'use client'
import React, { useEffect, useState } from 'react';
import SignIn from './sign-in/page';

import CoordinatorDashboard from '@/Dashboard/CoordinatorDashboard/CoordinatorDashboard';
import TeacherDashboard from '@/Dashboard/TeacherDashboard/TeacherDashboard';
import StudentDashboard from '@/Dashboard/StudentDashboard/StudentDashboard';
import ParentsDashboard from '@/Dashboard/ParentsDashboard/ParentsDashboard';
import { useAuth } from './Contexts/AuthContext';
import { useRouter } from 'next/navigation';
import PrivateRoute from './PrivateRoute/PrivateRoute';





const Home = () => {
  const [isClient, setIsClient] = useState(false); 
  const { isAuthenticated, userRole } = useAuth();
  const router = useRouter();


  useEffect(() => {
    setIsClient(true);
  }, []);



  const renderDashboardBasedOnRole = (role) => {
    switch (role) {
      case 'adminstaff':
        return <CoordinatorDashboard />;
      case 'teacher':
        return <TeacherDashboard />;
      case 'student':
        return <StudentDashboard />;
      case 'parent':
        return <ParentsDashboard />;
      default:
        return null; // Render nothing if role is not recognized
    }
  };

  
  useEffect(() => {
    if (isClient && !isAuthenticated) {
      router.push('/sign-in'); // Redirect to sign-in if not authenticated
    }
  }, [isClient, isAuthenticated, router]);

  if (!isClient) {
    return null; // Return null if not on the client-side to prevent initial render
  }



  return (
    <>
      {isClient && isAuthenticated ? (renderDashboardBasedOnRole(userRole)) : (<SignIn />) }
    </>
  );
};







export default Home;
