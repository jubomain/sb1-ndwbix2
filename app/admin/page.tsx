'use client';

import { useState, useEffect } from 'react';
import { AdminDashboard } from '@/components/admin/dashboard';
import { AdminLogin } from '@/components/admin/login';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check for existing admin session
  useEffect(() => {
    const adminSession = localStorage.getItem('adminSession');
    if (adminSession) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('adminSession', 'true');
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard />;
}