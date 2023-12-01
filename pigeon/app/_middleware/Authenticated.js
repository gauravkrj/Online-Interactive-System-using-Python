'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/Contexts/AuthContext';

export default function Authenticated({ children }) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && router.pathname !== '/sign-in') {
      router.push('/sign-in'); // Redirect to the sign-in page if not authenticated and not on the sign-in page
    }
  }, [isAuthenticated, router]);

  return children;
}