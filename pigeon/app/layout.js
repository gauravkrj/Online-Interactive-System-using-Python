'use client'
import HorizontalNav from '@/components/Navbar/HorizontalNav';
import './globals.css';
import { Inter } from 'next/font/google';
import SideNav from '@/components/Navbar/SideNav';
import Authenticated from './_middleware/Authenticated'; // Import the Authenticated component
import { AuthProvider } from './Contexts/AuthContext';
import  PrivateRoute  from './PrivateRoute/PrivateRoute';
import { useRouter } from 'next/navigation'; // Import useRouter

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pigeon LMS',
  description: 'Makes Interaction Easy with Child Tutors',
};

export default function RootLayout({ children }) {
  const router = useRouter(); // Initialize the router

  return (

  <AuthProvider>
    <Authenticated>
    <html lang="en">
      <body className={`${inter.className} `}>
        {/* Main  Navbar*/}
        <div className="main-navbar">
          {/* Sidebar  Navbar*/}

          <div className=" side-navbar">
            <SideNav />
          </div>
          {/* Horizontal  Navbar*/}

          <div className="horizontal-navbar">
            <HorizontalNav />
          </div>
          </div>
        {/* Body Section*/}
        <PrivateRoute>
        <div className="body-child-pass">{children}</div>
        </PrivateRoute>
        {/* Body Section*/}
      </body>
    </html>
    </Authenticated>
  </AuthProvider>
  );
}
